<template>
    
    <div class="related-post-area">
        <div class="container">
            <div class="related-post-title">
                <h2>related products</h2>
            </div>
            <div class="related-post-active">
                <Carousel :itemsToShow="3.95" :wrapAround="false" :transition="500" :breakpoints="breakpoints" :mouseDrag="mouseDrag">
                    <Slide v-for="slide in 10" :key="slide">
                        <div class="single-product mb-10">
                            <div class="related-img">
                                <a href="single-product.html">
                                    <img src="assets/img/shop/product/4.jpg" alt="">
                                </a>
                            </div>
                            <div class="product-title text-center">
                                <h3><a href="product-details.html">Oversize poplin shirt</a></h3>
                                <span>$50.9</span>
                            </div>
                        </div>
                    </Slide>
                    
                    <template #addons>
                        <Navigation />
                    </template>
                </Carousel>
            </div>
        </div>
    </div>

  </template>
  
  <script>
  import { defineComponent } from 'vue'
  import { Carousel, Navigation, Slide } from 'vue3-carousel'
  
  import 'vue3-carousel/dist/carousel.css'
  
  export default defineComponent({
    name: 'ProductRelatedCarousel',
    components: {
      Carousel,
      Slide,
      Navigation,
    },
    data: () => ({
      // carousel settings
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
        
      },
      mouseDrag: true,
      // breakpoints are mobile first
      // any settings not specified will fallback to the carousel settings
      breakpoints: {
        // 0px and up
        0: {
          itemsToShow: 1,
          snapAlign: 'center',
          itemsToScroll: 1
        },
        // 700px and up
        700: {
          itemsToShow: 2,
          snapAlign: 'center',
          itemsToScroll: 2
        },
        // 1024 and up
        1024: {
          itemsToShow: 5,
          snapAlign: 'center',
          itemsToScroll: 4,
          mouseDrag: false
        },
      },
    }),
  })
  </script>

<style scoped>
.single-product {
    margin-left: 10px;
}

</style>
