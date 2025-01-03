import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/Home.vue'
import BasePage from '../components/BasePage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/base',
      name: 'base',
      component: BasePage,
    },
  ],
})

export default router
