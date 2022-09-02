import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 引入小仓库
import home from './home'
import search from './search'

// 仓库存储数据的地方
const state = {
  count: 1
}
// 修改仓库数据的唯一手段
const mutations = {
  ADD(state) {
    state.count++
  },
  JIAN(state) {
    if (state.count >= 1) {
      state.count--
    } else {
      return
    }
  }
}
// 处理action ,可以书写自己的业务逻辑,也可以处理异步
const actions = {
  add({ commit }) {
    commit('ADD')
  },
  jian({ commit }) {
    commit('JIAN')
  }
}
// 计算属性,用于简化仓库数据,让组件从仓库获取数据更加方便
const getters = {}

export default new Vuex.Store({
  modules: {
    home,
    search
  }
})
