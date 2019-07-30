import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Menu from '@/views/Menu'
import Admin from '@/views/Admin'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/menu',
      name: 'Menu',
      component: Menu
    },
    {
      path: '/admin',
      name: 'Admin',
      component: Admin
    }
  ]
})
