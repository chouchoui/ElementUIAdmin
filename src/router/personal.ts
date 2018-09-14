export default {
  index: {
    path: '/personal',
    name: 'Personal',
    meta: {
      title: '个人中心',
      keepAlive: true,
    },
    component: () => import('@/views/Personal/Index.vue'),
  },
};
