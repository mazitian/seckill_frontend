import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      component: () => import('../views/main/index.vue')
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
      path: '/:pathMatch(.*)',
      component: () => import('../views/not-found/index.vue')
    }
  ]
})

// 路由导航守卫
router.beforeEach((to) => {
  const token = localCache.getCache(LOGIN_TOKEN)
  if (to.path === '/main' && !token) {
    return '/login'
  }
})

export default router
