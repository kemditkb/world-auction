
import Vue from 'vue'
import VueRouter from 'vue-router'

import login from '../login'
import main from '../main'
import dashboard from '../dashboard/index'
import category from '../category/index'
import product from '../product/index'
import productCreate from '../product/create'

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
      path: '/admin',
      component: main,
      beforeEnter: (to, from, next) => {
        document.body.className = 'skin-blue sidebar-mini'
        next()
      },
      children: [
        {
          path: '/dashboard',
          component: dashboard
        },
        {
          path: '/category',
          component: category
        },
        {
          path: '/product',
          component: product
        },
        {
          path: '/product_create',
          component: productCreate
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