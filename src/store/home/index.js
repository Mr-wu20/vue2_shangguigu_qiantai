import { reqCategoryList, reqBannerList } from '@/api'

// home小仓库模块
const state = {
  categoryList: [],
  bannerList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  }
}
const actions = {
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code && result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  async getBannerList({ commit }) {
    let result = await reqBannerList()
    if (result.code && result.code === 200) {
      commit('GETBANNERLIST', result.data)
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
