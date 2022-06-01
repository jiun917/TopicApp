<template>
  <div class="q-pa-md  items-start q-gutter-md ">
    <div class="title">專屬你的推薦</div>
      <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
      <q-card-section >
        <q-btn
          fab
          color="primary"
          icon="place"
          class="absolute"
          style="top: 0; right: 0.24rem; transform: translateY(-80%);"
          
        />
        <div class="row no-wrap items-center">
          <div class="col  ellipsis text-bold">
            肯德基
          </div>
          <div class="col-auto text-grey  items-center">
            5km
          </div>
        </div>
        <div class="row grade">
            <span class="grade">5.0</span>
            <q-rating v-model="stars" :max="5" size="0.4rem" />
        </div>
        <div class="text-grey ellipsis /">
          Small plates, salads & sandwiches in an intimate setting.
        </div>
      </q-card-section>
    </q-card>
    
  </div>
</template>

<script>
export default {
    name: 'HomeRecommend'
}
</script>

<style lang="sass" scoped>
    .title 
        font-size: 0.45rem
    .my-card
        height: 4.52rem 
        width: 4.42rem
    .q-pt-none
        height: 1.64rem 
        widhth: 4.34rem
   .grade 
       margin: 0.08rem 0 0.08rem 0

</style>