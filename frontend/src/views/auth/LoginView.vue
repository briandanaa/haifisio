<template>
  <div class="container">
    <h2>Login HaiFisio</h2>

    <form @submit.prevent="handleLogin">
      <input v-model="email" placeholder="Email" />
      <input v-model="password" type="password" placeholder="Password" />

      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useAuthStore } from '../../stores/auth'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')

const auth = useAuthStore()
const router = useRouter()

const handleLogin = async () => {
  try {
    await auth.login({
      email: email.value,
      password: password.value,
    })

    router.push('/dashboard')
  } catch (err) {
    alert('Login gagal')
  }
}
</script>

<style>
.container {
  width: 300px;
  margin: 100px auto;
}
input {
  display: block;
  margin: 10px 0;
  width: 100%;
}
button {
  width: 100%;
}
</style>