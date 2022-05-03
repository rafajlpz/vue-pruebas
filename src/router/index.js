import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    
    component: function () {
      return import( '../views/AboutView.vue')
    }
  },
  {
    path: '/contacto',
    name: 'contacto',
    
    component: function () {
      return import( '../views/Contacto.vue')
    }
  },
  {
    path: '/galeria',
    name: 'galeria',
    
    component: function () {
      return import( '../views/GaleriaView.vue')
    }
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
