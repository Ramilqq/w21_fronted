<template>
    <div class="brand-area pt-20 pb-70">
        <div class="container">
            <div class="brand-hover">
                <div class="brand-logo-active owl-carousel">

                    <Carousel v-bind="settings" :breakpoints="breakpoints" :autoplay="2500" :wrap-around="true">
                        <Slide v-for="slide in 10" :key="slide">
                            <div class="single-brand">
                                <a href="#"><img src="assets/img/brand-logo/1.png" alt=""></a>
                            </div>
                        </Slide>
                    
                        <template #addons>
                            <Navigation />
                        </template>
                    </Carousel>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import 'vue3-carousel/dist/carousel.css'
import { defineComponent } from 'vue'
import { Carousel, Slide, Navigation } from 'vue3-carousel'

export default defineComponent ({
    name: 'BrandSilder',
    components: {
        Carousel, Slide, Navigation
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
            // 700px and up
            700: {
                itemsToShow: 3,
                snapAlign: 'center',
            },
            // 1024 and up
            1024: {
                itemsToShow: 5,
                snapAlign: 'start',
            },
        },
    }),
    methods: {
    }
})
</script>

<style scoped>

</style>