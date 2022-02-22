/*
 * @Author: your name
 * @Date: 2022-02-22 10:46:30
 * @LastEditTime: 2022-02-22 17:22:57
 * @LastEditors: your name
 * @Description: 
 * @FilePath: \home-page\src\common\index.ts
 * 可以输入预定的版权声明、个性签名、空行等
 */
export default {
    setLanguage() {
        const userLang = navigator.language 
        if (userLang === 'zh-CN' || userLang === 'zh-cn' || userLang === 'zh') {
          localStorage.setItem('language', 'zh-CN')
          return 'zh-CN'
        } else {
          localStorage.setItem('language', 'en')
          return 'en'
        }
      },
}
