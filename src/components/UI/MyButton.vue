<template>
    <button class="btn__test">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button',
}
</script>

<style scoped>
.btn__test{
    background-color: beige;
}
</style>