// 路由对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

// 生命使用vue插件
Vue.use(VueRouter)

// vueRouter 原型对象上的push方法有问题：当没有指定回调函数时，
// 先保存一下原本的push函数
const originpush = VueRouter.prototype.push
const originReplace = VueRouter.prototype.replace

VueRouter.prototype.push = function(location,onComolete,onAbort){
        if(!onComolete && !onAbort){
          // 需要使用call来指定this
          // 需要返回生产promise对象
        return originpush.call(this,location).catch(error =>{
            console.log('--push',error.message);
          })
        }else{  //如果传入了回调函数,本身就没问题，直接调用原本的push()就可以
          originpush.call(this,location,onComolete,onAbort)
        }
}


VueRouter.prototype.replace = function(location,onComolete,onAbort){
        if(!onComolete && !onAbort){
        return originReplace.call(this,location).catch(error =>{
          console.log('--relplace',error.message);
          })
        }else{
          originReplace.call(this,location,onComolete,onAbort)
        }
}

// 向外暴露路由对象
export default new VueRouter({
      mode:'history', //不带#
      routes,

      //路由跳转后 滚动条停留在最上面(0,0)
      scrollBehavior (to, from, savedPosition) {
        return { x: 0, y: 0 }
      }
})
