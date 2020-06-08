/*
  管理首页数据的vuex子模块
*/
import {reqCategoryList,reqBanners,reqFloors} from '@/api'
export default {
    state:{
        categoryList:[],
        banners:[],  //广告轮播列表数据
        floors:[],  //楼层列表数据
    },

    modules:{},

    mutations:{
       /*
          接收保存广告轮播
        */
      RECEIVE_BANNERS(state,banners){
          state.banners = banners
      },

        /*
          接收保存楼层列表数据
        */
       RECEIVE_FLOORS(state,floors){
        state.floors = floors
       },




        /*
          接收保存分类列表的mutation
        */
       RECEIVE_CATEGORT_LIST (state,categoryList){
          state.categoryList = categoryList.filter((item,index) =>index<15)
       }
    },

    actions:{

      /*
        请求获取轮播列表的异步action
      */
      async getBanners({commit}){
          const result = await reqBanners()
          if(result.code ===200){
            const banners = result.data
            commit('RECEIVE_BANNERS',banners)
          }
      },

       /*
        请求获取轮播列表的异步action
      */
        async getFloors({commit}){
          const result = await reqFloors()
          if(result.code ===200){
            const floors = result.data
            commit('RECEIVE_FLOORS',floors)
          }
      },





        /*
          请求获取分类列表的异步action
        */
     async getCategoryList({commit}){
        // 调用接口 请求函数法异步ajax请求
        const result = await reqCategoryList()
        // console.log('result',result);

        // 请求成功后，取出数据,提交给mutation保存
        if(result.code === 200){
            const categoryList = result.data
            commit('RECEIVE_CATEGORT_LIST',categoryList)
        }

    }



    },

    getters:{},
}
