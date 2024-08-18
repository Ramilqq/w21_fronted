<template>
    <test-navbar />

    <router-view/>
</template>

<script>
import TestNavbar from '@/components/UI/TestNavbar.vue';


export default {
    components:{
        TestNavbar
    }
}
</script>

<style>
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}



</style>
