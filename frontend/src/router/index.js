import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '../views/auth/LoginView.vue'
import DashboardView from '../views/dashboard/DashboardView.vue'
import DashboardLayout from '../layouts/DashboardLayout.vue'

const routes = [
  {
    path: '/',
    component: LoginView,
  },
  {
    path: '/dashboard',
    component: DashboardLayout,
    children: [
      {
        path: '',
        component: DashboardView,
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router