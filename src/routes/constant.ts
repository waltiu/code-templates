



const routes = [
  {
    path: '/',
    component: () => import('@/layout/index.vue'),
    redirect: "/home",
    children: [
      {
        path: '/home',
        component: () => import('@/pages/home/index.vue')
      },
    ]
  },
  {
    path: '/login',
    component: () => import('@/pages/login/index.vue')
  },
]

export default routes