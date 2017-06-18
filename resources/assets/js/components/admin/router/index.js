
import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../login'
import dashboard from '../dashboard'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/login',
      component: login,
      beforeEnter: (to, from, next) => {
        document.body.className = 'login-page'
        next()
      }
    },
    {
      path: '/dashboard',
      component: dashboard,
      beforeEnter: (to, from, next) => {
        document.body.className = 'skin-blue sidebar-mini'
        next()
      }
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

export default router