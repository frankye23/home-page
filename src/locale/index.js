/*
 * @Author: your name
 * @Date: 2022-02-22 09:21:41
 * @LastEditTime: 2022-02-22 10:38:39
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \algoPlatform\src\locale\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
import  Vue  from 'vue'
import VueI18n from 'vue-i18n'
import store from '../store/index'
// import elementEnLocale from 'element-ui/lib/locale/lang/en' // element-ui lang
// import elementZhLocale from 'element-ui/lib/locale/lang/zh-CN' // element-ui lang
// import ElementLocale from 'element-ui/lib/locale'
import enLocale from './en'
import zhLocale from './zh/index'

Vue.use(VueI18n)
const messages = {
  'en': {
    ...enLocale,
    // ...elementEnLocale
  },
  'zh-CN': {
    ...zhLocale,
    // ...elementZhLocale
  },

}
const i18n = new VueI18n({
  locale: store.state.app.language || 'zh-CN', // set locale
  messages // set locale messages
})

// ElementLocale.i18n((key, value) => i18n.t(key, value))

export default i18n
