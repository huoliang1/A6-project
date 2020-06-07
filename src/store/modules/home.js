/*
  管理首页数据的vuex子模块
*/
import {reqCategoryList} from '@/api'
export default {
    state:{
        categoryList:[],
        xxx:111,
        yyy:222
    },

    modules:{},

    mutations:{
        /*
          接收保存分类列表的mutation
        */
       RECEIVE_CATEGORT_LIST (state,categoryList){
          state.categoryList = categoryList.filter((item,index) =>index<15)
       }
    },

    actions:{
        test3({commit,state}){
        },

        /*
          请求获取分类列表的异步action
        */
     async getCategoryList({commit}){
        // 调用接口 请求函数法异步ajax请求
        const result = await reqCategoryList()
        console.log('result',result);

        // 请求成功后，取出数据,提交给mutation保存
        if(result.code === 200){
            const categoryList = result.data
            commit('RECEIVE_CATEGORT_LIST',categoryList)
        }

    }



    },

    getters:{},
}
