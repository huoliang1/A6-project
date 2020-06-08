import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import '@/mock/mockServer'  //引入加载
// 注册全局组件 (所有组件都能使用)
Vue.component('TypeNav',TypeNav)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
