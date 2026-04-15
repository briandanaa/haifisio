import DashboardLayout from '@/layouts/DashboardLayout.vue'

<template>
  <div class="dashboard-layout">
    <Sidebar />

    <div class="main-content">
      <Navbar />

      <div class="content">
        <router-view />
      </div>

      <Footer />
    </div>
  </div>
</template>

<!-- <script setup>
import Navbar from '../components/Navbar.vue'
import Footer from '../components/Footer.vue'
import Sidebar from '../components/Sidebar.vue'
</script> -->