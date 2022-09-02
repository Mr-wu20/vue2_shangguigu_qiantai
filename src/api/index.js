import requests from './request'

export const reqCategoryList = () => requests.get('/product/getBaseCategoryList')
