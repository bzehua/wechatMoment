import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';

export const layoutRoutes: Array<RouteRecordRaw> = [
  {
    path: 'index',
    name: 'index',
    meta: {
      title: 'index'
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: 'pinia',
    name: 'pinia',
    meta: {
      title: 'pinia'
    },
    component: () => import('@/pages/pinia/index.vue')
  },
  {
    path: 'geo',
    name: 'geo',
    meta: {
      title: 'geo'
    },
    component: () => import('@/pages/geo/index.vue')
  },
  {
    path: 'image-rotate',
    name: 'image-rotate',
    meta: {
      title: 'image-rotate'
    },
    component: () => import('@/pages/image-rotate/index.vue')
  }
];

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/wechatMoment'
  },
  {
    path: '/wechatMoment',
    name: 'wechatMoment',
    meta: {
      title: 'wechatMoment'
    },
    component: () => import('@/pages/wechatMoment/index.vue')
  },
  {
    path: '/login',
    name: 'login',
    meta: {
      title: 'login'
    },
    component: () => import('@/pages/login/index.vue')
  },
  // 不需要layout的页面
  {
    path: '/index',
    name: 'index',
    meta: {
      title: 'index'
    },
    component: () => import('@/pages/index.vue')
  },
  {
    path: '/pinia',
    name: 'pinia',
    meta: {
      title: 'pinia'
    },
    component: () => import('@/pages/pinia/index.vue')
  },
  {
    path: '/geo',
    name: 'geo',
    meta: {
      title: 'geo'
    },
    component: () => import('@/pages/geo/index.vue')
  },
  {
    path: '/image-rotate',
    name: 'image-rotate',
    meta: {
      title: 'image-rotate'
    },
    component: () => import('@/pages/image-rotate/index.vue')
  },
  // 替代vue2中的'*'通配符路径
  { path: '/:pathMatch(.*)*', redirect: '/' }
];

const router = createRouter({
  history: createWebHashHistory(), // history 模式则使用 createWebHistory()
  routes
});
export default router;
