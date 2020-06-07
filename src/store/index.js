/*
  Vuex最核心的管理对象:store(仓库)
*/

import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import user from './modules/user'

Vue.use(Vuex)

const mutations = {

}
const actions = {

}
const getters = {

}

// 向外暴露 store对象
export default new Vuex.Store({
    //state
  mutations,
  actions,
  getters,
  modules: {   //指定vuex管理所有子模块
      home,  //表示名称:vuex 子模块
      user
  }
})
