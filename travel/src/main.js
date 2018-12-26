import Vue from 'vue'
import App from './App'
import router from './router'
import FastClick from 'fastclick'
import store from './store'
import 'babel-polyfill'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import '@styles/reset.css'
import '@styles/border.css'
import '@styles/iconfont.css'
import 'swiper/dist/css/swiper.css'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper)

FastClick.attach(document.body)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
