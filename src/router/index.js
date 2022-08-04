import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import( '../views/BlogView.vue')
  },
  {
    path: '/about',
    name: 'about',
    component: () => import( '../views/AboutView.vue')
  },
  {
    path: '/contact',
    name: 'contact',
    component: () => import('../views/ContactView.vue')
  },
  {
    path: '/post1',
    name: 'post1',
    component: () => import('../views/post1.vue')
  },
  {
    path: '/post2',
    name: 'post2',
    component: () => import('../views/post2.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
