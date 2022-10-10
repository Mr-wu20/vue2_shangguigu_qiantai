import { reqGoodsInfo } from '@/api'

// home小仓库模块
const state = {
  goodInfo: {}
}
const mutations = {
  GETGOODINFO(state, goodInfo) {
    state.goodInfo = goodInfo
  }
}
const actions = {
  // 获取产品详情
  async getGoodInfo({ commit }, skuId) {
    let result = await reqGoodsInfo(skuId)
    if (result.code && result.code === 200) {
      commit('GETGOODINFO', result.data)
    }
  }
}
const getters = {}

export default {
  state,
  mutations,
  actions,
  getters
}
