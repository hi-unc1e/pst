import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '@/components/HomePage.vue';
import VenomBuilder from '@/components/VenomBuilder.vue';

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },
  {
    path: '/tools/venom-builder',
    name: 'VenomBuilder',
    component: VenomBuilder
  },
  // 在此处添加其他路由
];

const router = createRouter({
  // history: createWebHashHistory(process.env.BASE_URL), //如果在访问/tools/venom-builder时，URL变成了/tools/venom-builder/#/，那么可能是因为应用程序的基础URL没有正确配置。您的路由将使用基础URL和哈希历史记录一起工作。
  history: createWebHistory(), //如果在访问/tools/venom-builder时，URL变成了/tools/venom-builder/#/，那么可能是因为应用程序的基础URL没有正确配置。您的路由将使用基础URL和哈希历史记录一起工作。
  routes
});

export default router;
