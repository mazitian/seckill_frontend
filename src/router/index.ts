import { LOGIN_TOKEN } from '@/global/constants'
import { localCache } from '@/utils/cache'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      redirect: '/main'
    },
    {
      path: '/main',
      name: 'main',
      component: () => import('../views/main/index.vue'),
      children: [
        {
          path: 'admin/all-activity',
          component: () => import('../views/main/admin/all-activity/index.vue')
        },
        {
          path: 'admin/all-good',
          component: () => import('../views/main/admin/all-good/index.vue')
        },
        {
          path: 'analysis/dashboard',
          component: () => import('../views/main/analysis/dashboard/index.vue')
        },
        {
          path: 'analysis/overview',
          component: () => import('../views/main/analysis/overview/index.vue')
        },
        {
          path: 'chat/email',
          component: () => import('../views/main/chat/email/index.vue')
        },
        {
          path: 'chat/story',
          component: () => import('../views/main/chat/story/index.vue')
        },
        {
          path: 'order/low-order',
          component: () => import('../views/main/order/low-order/index.vue')
        },
        {
          path: 'order/my-order',
          component: () => import('../views/main/order/my-order/index.vue')
        },
        {
          path: 'system/profile',
          component: () => import('../views/main/system/profile/index.vue')
        },
        {
          path: 'user/activity',
          component: () => import('../views/main/user/activity/index.vue')
        },
        {
          path: 'user/good',
          component: () => import('../views/main/user/good/index.vue')
        },
        {
          path: 'admin/good-list',
          component: () => import('../views/main/admin/good/index.vue')
        }
      ]
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
