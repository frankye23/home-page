/*
 * @Author: your name
 * @Date: 2022-02-17 17:28:01
 * @LastEditTime: 2022-03-02 10:13:33
 * @LastEditors: your name
 * @Description: 路由元文件
 * @FilePath: \home-page\src\router\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import { PageEnum } from '../enums/pageENum';
const Layout = () => import('../views/layout/Layout.vue') 
const Dashboard = () => import('../views/dashboard/index.vue')
const Market = () => import('../views/cloud/index.vue')
const Host = () => import('../views/host/index.vue')
export const RootRoute: RouteRecordRaw = {
    path: '/',
    name: 'Root',
    // redirect: '/dashboard',
    component: Layout,
    meta: {
      title: 'Root',
    },
    children:[
      {
        path: '/',
        component: Dashboard,
        name: 'Dashboard'
      },
      {
        path: 'list',
        component: Market,
        name: 'Market'
      },
      {
        path: 'host',
        component: Host,
        name: 'Host'
      },        

  ]
  };
export const LoginRoute: RouteRecordRaw = {
    path: '/login',
    name: 'Login',
    component: () => import('../views/login/index.vue'),
    meta: {
      title: '登录',
    },
  };
//普通路由 无需验证权限
export const constantRouter: any[] = [LoginRoute, RootRoute];
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRouter,
    // strict: true,
    // scrollBehavior: () => ({ left: 0, top: 0 }),
  });
  
  // export function setupRouter(app: App) {
  //   app.use(router);
  //   // 创建路由守卫
  //   // createRouterGuards(router);
  // }
  export default router;