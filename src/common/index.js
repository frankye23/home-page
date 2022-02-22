export default {
    setLanguage() {
        const userLang = navigator.language || navigator.userLanguage
        if (userLang === 'zh-CN' || userLang === 'zh-cn' || userLang === 'zh') {
          localStorage.setItem('language', 'zh-CN')
          return 'zh-CN'
        } else {
          localStorage.setItem('language', 'en')
          return 'en'
        }
      },
}
