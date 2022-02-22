/*
 * @Author: your name
 * @Date: 2022-02-17 17:19:12
 * @LastEditTime: 2022-02-22 10:44:32
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \algoPlatform\src\main.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import { createApp } from 'vue'
import App from './App.vue'
import router  from './router';
import '../src/styles/index.scss' // global css
// import i18n from './locale' // Internationalization
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App);
// setupRouter(app);
app.use(router)
app.use(ElementPlus)
// app.use(i18n)
app.mount('#app')
