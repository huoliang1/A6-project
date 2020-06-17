// 路由对象
import Vue from 'vue'
import VueRouter from 'vue-router'
import routes from './routes'

import store from '@/store'

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
    // 创建路由器对象
    const router = new VueRouter({

          mode:'history', //不带#
          routes,

          //路由跳转后 滚动条停留在最上面(0,0)
          scrollBehavior (to, from, savedPosition) {
            return { x: 0, y: 0 }
          }
    })

    /*
        注册全局前置守卫
        to:目标路由对象
        from:当前路由对象  对应的就是$route
        next: 控制路由跳转的函数
        不放行不会跳转到目标路由
        next(): 放行，请求路由组件才会显示
        next(path): 强制跳转到指定的路由
    */

    // 访问这些路由路径 必须检查其已经登录
    const checkPaths = ['/trade','/pay','/center']
    /*
      只有登陆了，才能查看交易、支付、个人中心界面
    */
    router.beforeEach((to, from, next) => {
        //得到目标路径
        const targetPath = to.path
        // 判断如果是需要登录检查路由
        const needCheck = !!checkPaths.find(path => targetPath.indexOf(path) === 0)
            // 需要检查
            if(needCheck){
              //已经登录(state 中的 userInfo 中有数据)，放行
                const token = store.state.user.userInfo.token
                if(token){
                  next()
                }else{
                  // 如果没有登录,强制跳转到login界面
                  next('/login')
                }
            }else{
              // 放行
                next()
            }

    })
  // 向外暴露路由对象
  export default router
