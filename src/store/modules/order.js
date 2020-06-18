
import {reqTradeInfo,reqPayInfo} from '@/api'

export default {
  state:{
    tradeInfo:{},  //订单交易页信息
    payInfo:{},   //订单支付信息
  },

  mutations:{
      RECEIVE_TRADE_INFO(state,{tradeInfo}){  //这里必须用解构写法 取出对象中的数据
          state.tradeInfo = tradeInfo
      },
      RECEIVE_PAY_INFO(state,{payInfo}){
          state.payInfo = payInfo
      }
  },
  actions:{
    /*
      请求获取交易信息的异步action
    */
    async getTradeInfo({commit}){
      const result = await reqTradeInfo()
      if(result.code === 200){
        const tradeInfo = result.data
        commit('RECEIVE_TRADE_INFO',{tradeInfo}) // 提交给mutation的是包含数据的对象
      }
    },
    /*
    请求获取支付信息的异步action
    */
    async getPayInfo({commit},orderId){
        const result = await reqPayInfo(orderId)
        if(result.code === 200){
          const payInfo = result.data
          commit('RECEIVE_PAY_INFO',{payInfo}) // 提交给mutation的是包含数据的对象
        }
    }


  },

  getters:{},
}
