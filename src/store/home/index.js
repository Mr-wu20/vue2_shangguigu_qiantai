import { reqCategoryList, reqBannerList, reqFloorList } from '@/api'

// home小仓库模块
const state = {
  categoryList: [],
  bannerList: [],
  floorList: []
}
const mutations = {
  CATEGORYLIST(state, categoryList) {
    state.categoryList = categoryList
  },
  GETBANNERLIST(state, bannerList) {
    state.bannerList = bannerList
  },
  GETFLOORLIST(state, floorList) {
    state.floorList = floorList
  }
}
const actions = {
  // 获取商品分类列表
  async categoryList({ commit }) {
    let result = await reqCategoryList()
    if (result.code && result.code === 200) {
      commit('CATEGORYLIST', result.data)
    }
  },
  // 获取轮播图数据列表
  async getBannerList({ commit }) {
    let result = await reqBannerList()
    if (result.code && result.code === 200) {
      commit('GETBANNERLIST', result.data)
    }
  },
  // 获取floor数据
  async getFloorList({ commit }) {
    let result = await reqFloorList()
    if (result.code && result.code === 200) {
      commit('GETFLOORLIST', result.data)
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
