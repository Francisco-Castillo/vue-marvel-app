import Vue from 'vue'
import './plugins/bootstrap-vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import VueLoading from 'vuejs-loading-plugin'

Vue.use(BootstrapVue)
Vue.use(BootstrapVueIcons)
Vue.config.productionTip = false
Vue.use(VueLoading, {
  dark: true, // default false
  text: 'Procesando', // default 'Loading'
  loading: false, // default false
  background: 'rgb( 250, 47, 47 )', // set custom background
})

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
