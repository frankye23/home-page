/*
 * @Author: yedaf
 * @Date: 2022-02-17 17:19:12
 * @LastEditTime: 2022-02-22 14:11:11
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \home-page\src\main.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createApp } from 'vue'
import App from './App.vue'
import router  from './router';
import '../src/styles/index.scss' // global css
import { setupI18n } from '../src/locale';

import ElementPlus from 'element-plus'
import * as Icons from '@element-plus/icons'

import 'element-plus/dist/index.css'

const app = createApp(App);
// setupRouter(app);
app.use(router)
app.use(ElementPlus)
await setupI18n(app);

app.mount('#app')
//注册全局组件
Object.keys(Icons).forEach(key => {
    app.component(key, Icons[key as keyof typeof Icons])
})