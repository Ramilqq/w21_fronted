<template>
    <div class="testimonials-area border-top pt-115 pb-80">
        <div class="container">
            <div class="testimonials-active owl-carousel">


                <Carousel :items-to-show="2.5" :wrap-around="true" :autoplay="2000" :breakpoints="breakpoints">
                    <Slide v-for="slide in 10" :key="slide">
                        <div class="single-testimonials">
                            <div class="testimonials-img">
                                <img src="assets/img/testimonial/1.png" alt="">
                                <span><i class="fa fa-quote-right"></i></span>
                            </div>
                            <div class="testimonials-text">
                                <p>Lorem Khaled Ipsum is a major key to success. Fan luv. Lion! Fan luv. Watch your back, but more importantly .</p>
                                <h4>Ms. Shopia</h4>
                            </div>
                        </div>
                    </Slide>

                    
            </Carousel>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

export default {
    name: 'LastComments',
    components: {
        Carousel, Slide
    },
    props: {
    },
    data: () => ({
        // carousel settings
        settings: {
            itemsToShow: 1,
            snapAlign: 'center',
        },
        // breakpoints are mobile first
        // any settings not specified will fallback to the carousel settings
        breakpoints: {
            // 0px and up
            0: {
                itemsToShow: 1,
                snapAlign: 'center',
            },
            700: {
                itemsToShow: 2,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 3,
                snapAlign: 'start',
            },
        },
    }),
    methods: {
    }
}
</script>

<style scoped>

</style>