import { createStore } from "vuex";

const store = createStore({
// state 提供唯一的公共数据源
  state() {
    return {
      lang: localStorage.getItem('lang') || 'en', // 语言
      screenWidth: document.body.clientWidth, // 当前窗口的宽度
    }
  },
  mutations: {
    setLang(state, lang) {
      localStorage.setItem('lang', lang)
      state.lang = lang
    },
    setScreenWidth(state, val) {
      state.screenWidth = val
    },
  }
})

export default store