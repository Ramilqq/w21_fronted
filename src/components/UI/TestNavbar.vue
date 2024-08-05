<template>
    <nav>
        <router-link to="/">Home</router-link> |
        <router-link to="/about">About</router-link> |
        <router-link to="/posts-store">PostsStore</router-link> |
        <router-link to="/posts-compositionapi">PostsCompositionapi</router-link>

        <test-button @click="$router.push('/')" >Home</test-button>
    </nav>
</template>

<script>
import TestButton from './TestButton.vue';
export default {
    name: 'test-navbar',
    components: {
        TestButton
    }
}
</script>

<style scoped>
nav {
    padding: 30px;
}

nav a {
    font-weight: bold;
    color: #2c3e50;
}

nav a.router-link-exact-active {
    color: #42b983;
}
</style>