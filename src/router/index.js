import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/Customer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/user',
    name: 'userHome',
    component: Home,
    children: [
      {
        path: '/user',
        name: 'Customer',
        component: Customer
      },
      {
        path: '/editor',
        name: 'Editor'
      },
      {
        path: ''
      }
    ]
  },
  {
    path: '/a',
    name: 'a',
    component: () => import(/* webpackChunkName: "about" */ '../views/a.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
