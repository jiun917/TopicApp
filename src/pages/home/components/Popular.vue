<template>
    <div class="popular">
        <div class="title">受歡迎</div>
        <swiper
        :slidesPerView="2"
        :spaceBetween="100"
        >
            <swiper-slide>
                <div class="q-pa-md  items-start q-gutter-md ">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                        <q-card-section >
                            <q-btn
                            round
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
            </swiper-slide>
            <swiper-slide>
                <div class="q-pa-md  items-start q-gutter-md ">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                        <q-card-section >
                            <q-btn
                            round
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
            </swiper-slide>
            <swiper-slide>
                <div class="q-pa-md  items-start q-gutter-md ">
                    <q-card class="my-card">
                        <q-img src="https://cdn.quasar.dev/img/chicken-salad.jpg" />
                        <q-card-section >
                            <q-btn
                            round
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
            </swiper-slide>
        </swiper>
    </div>
</template>
<script>
  import { Swiper, SwiperSlide } from 'swiper/vue'
  import 'swiper/css'

  export default {
    name: 'HomePopular',
    components: {
      Swiper,
      SwiperSlide,
    },
    
  }
</script>

<style lang="sass" scoped>
.popular 
    width: 100%
    height: 5.68rem
    
    .title 
        font-size: 0.45rem
        margin: 0.2rem 0 0 0.3rem
    .my-card
        height: 4.52rem 
        width: 4.42rem
</style>