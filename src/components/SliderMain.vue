<template>
   
    <Carousel>
        <Slide v-for="slide in 10" :key="slide">
            <div class=" single-slider bg-img gray-bg pt-165 pb-175" style="background-image:url(assets/img/slider/2.jpg);width: 100%; height: 100%;" >
                <div class="slider-content text-center">
                    <h2>Life is short. {{ slide }}</h2>
                    <h3>Enjoy it !</h3>
                    <a href="about.html">Read More</a>
                </div>
            </div>
        </Slide>

        <template #addons>
            <Navigation />
            <Pagination />
        </template>
  </Carousel>

</template>

<script>
//import carousel from 'vue-owl-carousel/src/Carousel';
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

export default {
    components: {
        Carousel, Slide, Pagination, Navigation,
    },
    name: 'SliderMain'
}
</script>

<style>
</style>
