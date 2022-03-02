/*
 * @Author: your name
 * @Date: 2022-03-01 16:57:04
 * @LastEditTime: 2022-03-02 10:02:28
 * @LastEditors: your name
 * @Description: list路由
 * @FilePath: \home-page\src\router\mudules\list.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { RouteRecordRaw } from 'vue-router';
import LayoutVue from '../../views/layout/Layout.vue';
const routeName = 'list';
const routes: Array<RouteRecordRaw> = [
    {
      path: '/list',
      name: routeName,
      component: LayoutVue,
      redirect: '/lists',
      meta: {
        title: '算力市场',
      },
    //   children: [
    //     {
    //         path: "/lists",
    //         name: "list",
    //         component: () => import("../../views/cloud/index.vue"),
    //         meta: {
    //           title: '算力',
    //           i18n: true
    //         }
    //     }
    //   ]
    },
  ];
  
  export default routes;