import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Customer from '../views/Customer.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/customer',
        name: 'Customer',
        component: Customer
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
