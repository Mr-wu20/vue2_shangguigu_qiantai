import Vue from 'vue'
import App from './App.vue'

// 注册全局组件
import TypeNav from '@/components/TypeNav'
import Carousel from '@/components/Carousel'
import Pagination from '@/components/Pagination'

// 第一个参数是组件的name,第二个参数是组件
Vue.component(TypeNav.name, TypeNav)
Vue.component(Carousel.name, Carousel)
Vue.component(Pagination.name, Pagination)
// 引入mock数据
import '@/mock/mockServe'

// 引入路由
import router from '@/router'

// 引入swiper样式
import 'swiper/dist/css/swiper.css'

// 引入仓库
import store from '@/store'

Vue.config.productionTip = false

new Vue({
  render: (h) => h(App),
  beforeCreate() {
    Vue.prototype.$bus = this
  },
  // 注册路由
  router,
  // 注册仓库
  // 组件实例身上会多一个属性$store
  store
}).$mount('#app')
