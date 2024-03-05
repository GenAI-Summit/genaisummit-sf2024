import { createApp } from 'vue'
import './assets/scss/main.scss'
import App from './App.vue'
import 'slick-carousel';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'lib-flexible';
// 导入 store
import store from './store'
import i18n from './locales'
import router from './route'
import AOS from 'aos';
import 'aos/dist/aos.css'; // 引入 AOS CSS 样式
AOS.init({
    // Global settings:
    offset: -100, // 偏移量，以像素为单位，相对于元素底部的位置开始触发动画
    duration: 1500, // 动画持续时间，以毫秒为单位
    delay: 500,
    anchorPlacement: 'center-bottom' 
  })
const app = createApp(App)
app.use(store)
app.use(i18n)
app.use(router)
app.mount('#app')
