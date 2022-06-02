<template>
  <div class="home">
      <home-header></home-header>
      <home-ad> </home-ad>
      <home-recommend></home-recommend>
      <home-contents></home-contents>
      <home-popular></home-popular>
  </div>
</template>

<script>
import HomeHeader from './components/Header.vue'
import HomeAd from './components/Ad.vue'
import HomeRecommend from './components/Recommend.vue'
import HomeContents from './components/Contents.vue'
import HomePopular from './components/Popular.vue'

export default {
    name:'HomePage',
    components: {
      HomeHeader,
      HomeAd,
      HomeRecommend,
      HomeContents,
      HomePopular
    }
}
</script>

<style lang="sass" scoped>
  .home 
    height: 100rem
</style>