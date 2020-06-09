/*
  包含项目中的所有接口的ajax请求
  函数的返回值是promise,函数内部调用ajax模块发请求

  需要根据接口文档，定义接口请求函数
*/

import ajax from './ajax'
import mockAjax from './mockAjax'

/*
  登录
  /api/user/passport/login
*/
export function reqLogin (mobile, password){
      // 将ajax作为函数去使用
      // return ajax({
      //     url:'/user/passport/login',
      //     method:'POST',
      //     data:{mobile,password}
      // })

      // 将ajax作为对象使用
    return ajax.post('/user/passport/login',{mobile,password})
}

/*
  首页三级分类
  /api/product/getBaseCategoryList
*/
export const reqCategoryList = () => ajax('/product/getBaseCategoryList')


/*
定义访问mock接口请求函数
*/
export const reqBanners = () =>mockAjax('/banners')
export const reqFloors = () =>mockAjax('/floors')


/*
获取商品列表
/api/list/   POST
options: 包含所有需要传递的搜索请求参数对象
*/
export const reqProductList =(options)=> ajax.post('/list',options)
