import {
 Injectable,
 CanActivate,
 ExecutionContext
} from '@nestjs/common'

import { Reflector } from '@nestjs/core'
import { Role } from '@prisma/client' // ✅ TAMBAHAN

@Injectable()
export class RolesGuard implements CanActivate {

 constructor(private reflector: Reflector) {}

 canActivate(context: ExecutionContext): boolean {

  // ✅ FIX: ambil dari handler + class
  const roles = this.reflector.getAllAndOverride<Role[]>('roles', [
   context.getHandler(),
   context.getClass(),
  ])

  // ✅ kalau tidak ada roles → bebas
  if (!roles) {
   return true
  }

  const request = context.switchToHttp().getRequest()
  const user = request.user

  // ✅ DEBUG (WAJIB saat ini)
  console.log('REQUIRED ROLES:', roles)
  console.log('USER:', user)

  // ✅ FIX: handle jika user kosong
  if (!user || !user.role) {
   return false
  }

  return roles.includes(user.role)
 }

}