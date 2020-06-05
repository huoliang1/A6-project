// 应用所有的路由配置数组

import Home from '@/pages/Home'
import Search from '@/pages/Search'
import Register from '@/pages/Register'
import Login from '@/pages/Login'
export default [
    {
      path:'/',
      component:Home
    },
    {
      name:'search',  //一旦有params参数,想用push()的对象语法，必须有name配置
      path:'/search/:keyword?',   //带:de 对应的部分就是params参数
      component:Search
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
      }
    },

]
