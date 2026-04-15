<template>
  <div>
    <h1>Dashboard</h1>
    <button @click="logout">Logout</button>
  </div>
</template>

<script setup>
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'

const auth = useAuthStore()
const router = useRouter()

const logout = () => {
  auth.logout()
  router.push('/')
}
</script>