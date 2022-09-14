import requests from './request'

import mockRequests from './mockAjax'

// 获取商品分类列表接口
export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')

//获取轮播图数据
export const reqBannerList = () => mockRequests.get('/banner')
