import { defineStore } from 'pinia'
import api from '../api/axios'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
    token: localStorage.getItem('token') || null,
  }),

  actions: {
    async login(data) {
  try {
    console.log('LOGIN DATA:', data)

    const res = await api.post('/auth/login', data)

    console.log('RESPONSE:', res.data)

    this.token = res.data.data.access_token
    localStorage.setItem('token', this.token)

  } catch (err) {
    console.error('LOGIN ERROR:', err.response?.data || err)
  }
},

    logout() {
      this.token = null
      localStorage.removeItem('token')
    },
  },
})