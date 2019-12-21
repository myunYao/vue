// 路由列表的配置

import Home from '../views/Home.vue'

export default [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '@/views/About.vue')
  },
  {
    // name 动态路由参数
    path: '/argu/:name',
    component: () => import('@/views/argu.vue')
  },
  {
    path: '/parent',
    component: () => import('@/views/parent.vue'),
    children: [
      {
        //   子路由不需要写 /
        path: 'child',
        component: () => import('@/views/child.vue')
      }
    ]
  }
]
