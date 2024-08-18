<template>
    <div class="product-details-leftbar">
        <div class="tab-content product-details-images">

            <Carousel id="gallery" :items-to-show="1" :wrap-around="false" v-model="currentSlide">
                <Slide v-for="slide in 10" :key="slide">
                    <div class="tab-pane active">
                        <img src="assets/img/shop/product-details/1.jpg" alt="" />
                    </div>
                </Slide>
            </Carousel>

        </div>
        <div class="product-tab-details nav">

            <Carousel
            id="thumbnails"
            :items-to-show="4"
            :wrap-around="true"
            v-model="currentSlide"
            ref="carousel"
            >
                <Slide v-for="slide in 10" :key="slide">
                    <a  @click="slideTo(slide - 1)">
                        <img src="assets/img/shop/product-details/s1.jpg" alt="" />
                    </a>

                </Slide>
            </Carousel>

        </div>
    </div>
</template>
  
<script>
import { defineComponent } from 'vue'
import { Carousel, Slide } from 'vue3-carousel'

import 'vue3-carousel/dist/carousel.css'

export default defineComponent({
  name: 'ProductGalleryCarousel',
  components: {
    Carousel,
    Slide
  },
  data: () => ({
    currentSlide: 0,
  }),
  methods: {
    slideTo(val) {
      this.currentSlide = val
    },
  },
})
</script>

<style scoped>
.product-tab-details.nav{
  margin-bottom: 20px;
}
</style>
