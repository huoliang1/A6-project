/*
  管理购物车相关数据的vuex子模块
*/
import {reqShopCart,reqaddToCart} from '@/api'
const state = {
    cartList:[]  //购物车购物项列表啊
}
const mutations = {
    /*
      接收保存购物项列表
    */
    RECEIVE_CART_LIST(state,cartList){
      state.cartList = cartList

    }
}
const actions = {
      /*
        获取购物车列表数据的异步action
      */
    async getCartList({commit}){
      const result = await reqShopCart()
      if(result.code ===200){
        const cartList = result.data
        commit('RECEIVE_CART_LIST',cartList)
      }
    },
      /*
      添加到购物车的异步action
      */
    //  async addToCart({commit},{skuId,skuNum,callback}){
    //   const result = await reqaddToCart(skuId,skuNum)
    //   if(result.code ===200){
    //       // 通知组件成功了
    //       callback()
    //   }else{
    //       // 通知组件失败了
    //       callback('添加购物车失败')
    //   }
    // },

    // 方法二
          /*
      添加到购物车的异步action
      */
     async addToCart2({commit},{skuId,skuNum}){
      const result = await reqaddToCart(skuId,skuNum)
      if(result.code !== 200){
          // 通知组件失败了
          throw new Error('添加购物车失败')
      }
    },

}
const getters = {}

export default{
  state,
  mutations,
  actions,
  getters
}
