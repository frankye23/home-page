/*
 * @Author: your name
 * @Date: 2022-02-17 17:46:26
 * @LastEditTime: 2022-02-17 17:49:34
 * @LastEditors: your name
 * @Description: dashboard页面路由
 * @FilePath: \algoPlatform\src\router\mudules\dashboard.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { RouteRecordRaw } from 'vue-router';

const routeName = 'dashboard';
const routes: Array<RouteRecordRaw> = [
    {
      path: '/dashboard',
      name: routeName,
      component: () => import('../../views/dashboard/index.vue'),
      meta: {
        title: 'Dashboard',
      },
    },
  ];
  
  export default routes;