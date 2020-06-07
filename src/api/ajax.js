/*
   axios 的二次封装
   1.配置通用的基础路径超时
   2.显示请求的进度条
   3.成功返回的数据不再是 response，而是直接向相应体数据response.data
   4.统一处理请求错误，具体请求也可以选择处理，或者不处理
*/

import axios from 'axios'
import  NProgress from 'nprogress'
 //  配置通用的基础路径和超时
const instace = axios.create({
        baseURL:'/api',  //基础path
        timeout:15000     //请求超时时间
})
// 注册请求拦截器
axios.interceptors.request.use(config =>{
      // 显示请求进度条
      NProgress.start()
        return config
})
// 注册响应拦截器
axios.interceptors.response.use(
      response =>{  //请求成功的回调
        // 隐藏进度条  无论是成功还是失败
        NProgress.done()
        return response.data
      },
      error =>{      //请求失败的回调
          NProgress.done()
          //4.统一处理请求错误，具体请求也可以选择处理，或者不处理
          // 显示一个统一的提示
          alert(error.message || '未知错误')
          // 要么 抛出 error 或者返回一个失败的promise
          return Promise.reject(error)
          // throw error
      }
)

export default instace
