import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import 'dotenv/config';
import { ValidationPipe } from '@nestjs/common'
import { ResponseInterceptor } from './common/interceptors/response.interceptor'
import { HttpExceptionFilter } from './common/filters/http-exception.filter'
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'

async function bootstrap() {

 const app = await NestFactory.create(AppModule)

 const config = new DocumentBuilder()
  .setTitle('HaiFisio API')
  .setDescription('API Platform Fisioterapi Homecare')
  .setVersion('1.0')
  .addBearerAuth()
  .build()

const document = SwaggerModule.createDocument(app, config)

SwaggerModule.setup('api', app, document)

 app.useGlobalPipes(new ValidationPipe())
 app.useGlobalInterceptors(new ResponseInterceptor())
 app.useGlobalFilters(new HttpExceptionFilter())
 app.enableCors({
    origin: 'http://localhost:5173',
    credentials: true,
  })
 await app.listen(3000)

 app.useGlobalPipes(
 new ValidationPipe({
  transform: true
 })
)
}
bootstrap();
