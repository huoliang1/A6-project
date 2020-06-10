import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/pagination'

import '@/mock/mockServer'  //引入加载

// 注册全局组件 (所有组件都能使用)
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

Vue.config.productionTip = false

new Vue({

  render: h => h(App),
  router,
  store,
  // 全局事件总线
  beforeCreate() {  //尽量早一些
    // 将全局事件总线对象(vm)保存到Vue原型对象上
    Vue.prototype.$bus = this
  },

}).$mount('#app')
