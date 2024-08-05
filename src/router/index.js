import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue')
  },
  {
    path: '/posts/:id',
    name: 'article',
    component: () => import(/* webpackChunkName: "about" */ '../views/ArticleView.vue')
  },
  {
    path: '/posts-store',
    name: 'posts-store',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostsStoreView.vue')
  },
  {
    path: '/posts-compositionapi',
    name: 'posts-compositionapi',
    component: () => import(/* webpackChunkName: "about" */ '../views/PostCompositionAPIView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
