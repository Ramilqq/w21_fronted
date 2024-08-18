<template>
    <header-main/>
    <offset-menu/>
    <router-view/>
    <footer-main/>
</template>

<script>
import HeaderMain from '@/components/HeaderMain.vue';
import OffsetMenu from '@/components/OffsetMenu.vue';
import FooterMain from '@/components/FooterMain.vue'

export default {
    components:{
        HeaderMain, OffsetMenu, FooterMain
    },
}
</script>

<style>

.carousel__prev{
  background: #fea1ac;
  height: 100px;
  border: solid 0px;
  border-radius: 20px;
  margin-left: 20px;
}
.carousel__next{
  background: #fea1ac;
  height: 100px;
  border: solid 0px;
  border-radius: 20px;
  margin-left: 20px;
}

</style>
