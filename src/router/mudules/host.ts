/*
 * @Author: your name
 * @Date: 2022-03-02 10:03:29
 * @LastEditTime: 2022-03-02 10:04:30
 * @LastEditors: your name
 * @Description: cloud hosting
 * @FilePath: \home-page\src\router\mudules\host.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { RouteRecordRaw } from 'vue-router';
import LayoutVue from '../../views/layout/Layout.vue';
const routeName = 'host';
const routes: Array<RouteRecordRaw> = [
    {
      path: '/host',
      name: routeName,
      component: LayoutVue,
      redirect: '/hosts',
      meta: {
        title: '矿机托管',
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