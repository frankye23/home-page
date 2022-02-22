import common from '../common/index'
const Language = 'language'
export function getLanguage() {
    if (localStorage.getItem(Language)) {
      return localStorage.getItem(Language)
    } else {
      return common.setLanguage()
    }
  }