/*
  管理购物车相关数据的vuex子模块
*/
import {reqShopCart,reqaddToCart, reqCheckCartItem,reqDeleteCartItem} from '@/api'
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

    /*
      勾选、不勾选某个购物的商品项
    */
   async checkCartItem ({commit},{skuId,isChecked}){
        const result = await reqCheckCartItem(skuId,isChecked)
        if(result.code !== 200){
            // 通知组件失败了
            throw new Error(result.message || '选中商品失败')
        }
   },

  /*
    全部勾选/不勾选
    checked:是否勾选的布尔值
    需要对所有购物项与checked不一致的购物项发送请求
    针对每个需要发请求的item去触发checkCartItem()调用 ==> 调用dispatch
    执行多个请求的异步操作,只有当都成功时，整体异步action才成功  否则失败
    Promise.all([])
  */
   async checkAllCartItems({commit,state,dispatch},checked){
        //  确定对应的isChecked值
        const isChecked = checked ? '1' : '0'
        let promises = []
        // 遍历每个购物项
        state.cartList.forEach(item =>{
            // 购物项的状态与目标状态不一样
          if(item.isChecked != isChecked){
            // 分发给checkCartItem，得到其返回的promise对象
            const promise = dispatch('checkCartItem',{skuId:item.skuId,isChecked})
            // 保存到数组中
            promises.push(promise)
          }
        })
        //返回promise 对象
        return Promise.all(promises)
   },
    /*
  删除一个购物项的异步action
  */
  async deleteCartItem (context, skuId) {
    const result = await reqDeleteCartItem(skuId)
    if (result.code!==200) { // 失败
      throw new Error('删除购物项失败')   // async函数的promise就是失败的
    }
  },

  /*
  删除所有勾选的购物项的异步action
  */
  async deleteCheckedCartItems ({state, dispatch}) {

    // 遍历每个勾选的购物项去分发deleteCartItem
    const promises = state.cartList.reduce((pre, item) => {
      if (item.isChecked===1) {
        pre.push(dispatch('deleteCartItem', item.skuId))
      }
      return pre
    }, [])

    return Promise.all(promises)
  }
}


const getters = {
    /*
    选中的总数量
    */
    totalCount(){
        // let total = 0
        // state.cartList.forEach(item =>{
        //     total += item.skuNum
        // })
        // return state.cartList

        return state.cartList.reduce((preTotal,item,index) =>preTotal + (item.isChecked===1?item.skuNum:0),0)
    },
    /*
    选中的总价格
    */
    totalPrice(){
      return state.cartList.reduce((pre,item,index) =>pre + item.skuNum * item.skuPrice,0)
    },

    /*
    是否全部选中
    */

    isCheckAll(){
      return state.cartList.length> 0 && state.cartList.every((item,index) =>item.isChecked===1)
    }
}

export default{
  state,
  mutations,
  actions,
  getters
}
