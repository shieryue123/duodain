import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: () => import('../views/main/MainIndex.vue'),
    children: [
      {
        path: '/home',
        component: () => import('../views/Home/HomeIndex.vue')
      },
      {
        path: '/classify',
        component: () => import('../views/classify/ClassIndex.vue')
      },
      {
        path: '/over',
        component: () => import('../views/over/OverIndex.vue')
      },
      {
        path: '/shop',
        component: () => import('../views/shopping/ShopIndex.vue')
      }
    ]
  }
  // {
  //   path: '/about',
  //   name: 'about',
  //   // route level code-splitting
  //   // this generates a separate chunk (about.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  // }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
