import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  { path: '/', name: 'Home', component: () => import('./../views/Home.vue') },
//   { path: '/events', name: 'Events', component: () => import('@/views/Events.vue') },
  { path: '/login', name: 'Login', component: () => import('./../views/Login.vue') },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
