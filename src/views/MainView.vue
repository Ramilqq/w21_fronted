<template>
    <slider-main/>
    <sllider-table-main/>
    <brand-slider/>
    <commetn-last/>
    <load-scripts/>
</template>

<script>
import SliderMain from '@/components/SliderMain.vue';
import LoadScripts from '@/components/LoadScripts.vue';
import SlliderTableMain from '@/components/SlliderTableMain.vue';
import CommetnLast from '@/components/CommetnLast.vue';
import BrandSlider from '@/components/BrandSlider.vue';

export default {
    name: 'MainView',
    components: {
        SliderMain, LoadScripts, SlliderTableMain, CommetnLast, BrandSlider
    }
}
</script>

<style>

</style>