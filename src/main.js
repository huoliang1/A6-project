import Vue from 'vue'
import VueLazyload from 'vue-lazyload'
import App from './App.vue'
import router from './router'
import store from './store'
import TypeNav from './components/TypeNav'
import Carousel from './components/Carousel'
import Pagination from './components/pagination'

// 引入api模块所有分别暴露的函数,封装到API对象中
import * as API from '@/api'

import '@/mock/mockServer'  //引入加载
import './validate'    //引入表单效验模块
import './elements'
//引入懒加载图片
import loading from './assets/images/loaging.jpg'
// 配置vue插件
Vue.use(VueLazyload,{
    loading,  //配置loading图片
})
// 注册全局组件 (所有组件都能使用)
Vue.component('TypeNav',TypeNav)
Vue.component('Carousel',Carousel)
Vue.component('Pagination',Pagination)

// 将API 对象保存到Vue 的原型对象上 ===> 让所有的组件都直接可见(不在引入API)
Vue.prototype.$API = API


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
