// 应用所有的路由配置数组
import store from '@/store'

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
import Detail from '@/pages/Detail/'
import AddCartSuccess from '@/pages/AddCartSuccess'
import ShopCart from '@/pages/ShopCart'


import Trade from '@/pages/Trade'
import Pay from '@/pages/Pay'
import PaySuccess from '@/pages/PaySuccess'
import Center from '@/pages/Center'

import MyOrder from '@/pages/Center/MyOrder'
import GroupBdy from '@/pages/Center/GroupBdy'

export default [
    {
      path:'/',
      component:Home
    },
    {
      name:'search',  //一旦有params参数,想用push()的对象语法，必须有name配置
      path:'/search/:keyword?',   //带:的对应的部分就是params参数
      component:Search,
      props:route =>({keyword3:route.params.keyword,keyword4:route.query.keyword2})
    },
    {
      path:'/register',
      component:Register,
      meta:{
        isHideFooter:true
      }
    },
    {
      path:'/login',
      component:Login,
      meta:{
        isHideFooter:true
      },
      // 功能: 只有没有登录,才能查看登录界面
      // beforeEnter: (to, from, next) => {
      //   //如果已经登录,强制跳转到首页
      //   const token = store.state.user.userInfo.token
      //   if(token){
      //     next('/')
      //   }else{  //如果没有登录就放行
      //     next()
      //   }
      // }

    },

    {
      path:'/detail/:id',
      component:Detail,
    },
    {
      path:'/addcartSuccess',
      component:AddCartSuccess,
    // 只有携带的skuNum以及sessionStorage中有skuInfo数据, 才能查看添加购物车成功的界面
          beforeEnter: (to, from, next) => {
            // query参数skuNum
            const skuNum = to.query.skuNum
            // sessionStorage中有skuInfo数据
            const skuInfo = JSON.parse(window.sessionStorage.getItem('SKU_INFO_KEY'))
            // 只有2个条件都满足才放行
            if (skuNum && skuInfo instanceof Object) {
              next()
            } else { // 如果没有, 自动跳转到购物车
              next('/shopcart')
            }
          }
    },
    {
      path:'/shopcart',
      component:ShopCart,
    },

    {
      path:'/trade',
      component:Trade,
        beforeEnter: (to, from, next) => {
          //必须是重购物车页面过来的才行
          if(from.path === '/shopcart'){
              next()
          }else{   //否则自动跳转到购物车界面
            next('/shopcart')
          }
        }
    },
    {
      path:'/pay',
      component:Pay,
      beforeEnter: (to, from, next) => {
        //必须是重/trade页面过来的才行
        if(from.path === '/trade'){
            next()
        }else{   //否则自动跳转到/trade界面
          next('/trade')
        }
      }
    },
    {
      path:'/paySuccess',
      component:PaySuccess,
      beforeEnter: (to, from, next) => {
        //必须是重/pay页面过来的才行
        if(from.path === '/pay'){
            next()
        }else{   //否则自动跳转到/trade界面
          next('/pay')
        }
      }
    },

    {
      path:'/center',
      component:Center,
      children:[
        {
          path:'/center/myOrder',
          component:MyOrder,
        },
        {
          path:'groupbdy',
          component:GroupBdy,
        },
        // 自动跳转路由
        {
          path:'',
          redirect: '/center/myOrder'
        },
      ]
    },


]
