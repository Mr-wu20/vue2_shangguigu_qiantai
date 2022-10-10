import requests from './request'

import mockRequests from './mockAjax'

// 获取商品分类列表接口
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

//获取轮播图数据
export const reqBannerList = () => mockRequests.get('/banner')

// 获取floor数据
export const reqFloorList = () => mockRequests.get('/floor')

// 获取search模块数据
export const reqSearchList = (params) =>
  requests({
    url: '/list',
    method: 'post',
    data: params
  })

// 获取产品的详情信息
export const reqGoodsInfo = (skuId) => requests.get(`/item/${skuId}`)
