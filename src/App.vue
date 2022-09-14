<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="this.$route.meta.show"></Footer>
  </div>
</template>

<script>
import Header from './components/Header'
import Footer from './components/Footer'
export default {
  name: 'App',
  components: { Header, Footer },
  mounted() {
    // 派发一个actions 获取商品分类列表
    // 处于性能的考虑放在app.vue中，因为只执行一次
    this.$store.dispatch('categoryList')
  }
}
</script>

<style>
</style>
