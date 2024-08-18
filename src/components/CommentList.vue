<template>
    <div class="sin-rattings" v-for="item in 5" :key="item">
        <div class="star-author-all">
            <div class="ratting-star f-left">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <span>(5)</span>
            </div>
            <div class="ratting-author f-right">
                <h3>farhana shuvo</h3>
                <span>12:24</span>
                <span>9 March 2017</span>
            </div>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost rud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nost.</p>
    </div>
</template>

<script>
export default {
    name: 'CommetnList',
    components: {
    },
    props: {
    },
    methods: {
    }
}
</script>

<style scoped>

</style>