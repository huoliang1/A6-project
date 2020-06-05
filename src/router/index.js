// 路由对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 生命使用vue插件
Vue.use(VueRouter)

// 向外暴露路由对象
export default new VueRouter({
      mode:'history', //不带#
      routes
})
