// search小仓库模块

import { reqSearchList } from '@/api'

const state = {
  searchList: {}
}
const mutations = {
  GETSEARCHLIST(state, searchList) {
    state.searchList = searchList
  }
}
const actions = {
  // 获取search模块数据
  async getSearchList({ commit }, params = {}) {
    let result = await reqSearchList(params)

    if (result.code && result.code === 200) {
      commit('GETSEARCHLIST', result.data)
    }
  }
}
const getters = {
  attrsList(state) {
    return state.searchList.attrsList || []
  },
  goodsList(state) {
    return state.searchList.goodsList || []
  },
  trademarkList(state) {
    return state.searchList.trademarkList || []
  }
}

export default {
  state,
  mutations,
  actions,
  getters
}
