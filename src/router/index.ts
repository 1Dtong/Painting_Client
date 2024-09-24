import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/painting'
  },
  {
    path: '/painting',
    component: () => import('../views/painting/index.vue')
  },
  {
    path: '/login',
    component: () => import('../views/login/index.vue')
  },
  {
    path: '/register',
    component: () => import('../views/register/index.vue')
  },
  {
    path: '/home',
    component: () => import('../views/home/index.vue'),
    children: [
      {
        path: '/hom',
        redirect: '/home/draw'
      },
      {
        path: '/home/draw',
        component: () => import('../views/draw/index.vue')
      },
      {
        path: '/home/gallery',
        component: () => import('../views/gallery/index.vue')
      },
      {
        path: '/home/comment',
        component: () => import('@/views/comment/index.vue')
      },
    ]
  },
  {
    path: '/menu',
    component: () => import('@/views/menu/index.vue')
  }
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
