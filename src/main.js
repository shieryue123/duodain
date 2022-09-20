import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/reset.css'
import './assets/js/rem'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import 'swiper/dist/css/swiper.css'
import '@/assets/iconfont/iconfont.css'
import $api from '@/api'
import ElList from './components/ElList/ElList.vue'

Vue.use($api)

Vue.use(VueAwesomeSwiper)
Vue.config.productionTip = false

Vue.component('ElList', ElList)

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
