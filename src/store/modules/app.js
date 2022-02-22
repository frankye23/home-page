import { getLanguage } from '../../utils/auth'
const app = {
    state: {
        language: getLanguage()
    },
    mutations: {
        SET_LANGUAGE: (state, language) => {
            state.language = language
          },
    },
    actions: {
        setLanguage({
            commit
          }, language) {
            commit('SET_LANGUAGE', language)
          },
    }
}

export default app
