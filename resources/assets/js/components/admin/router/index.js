
import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../login'
import main from '../main'
import index from '../dashboard/index'

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
      path: '/',
      component: main,
      beforeEnter: (to, from, next) => {
        document.body.className = 'skin-blue sidebar-mini'
        next()
      },
      children: [
        {
          path: '/dashboard',
          component: index
        },
        {
          path: '',
          redirect: '/dashboard'
        }
      ]
    },
    {
      path: '*',
      redirect: '/login'
    }
  ]
})

export default router