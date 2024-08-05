<template>
    <div class="post">
        <div><strong>Post:</strong>{{ post.title }}</div>
        <div><strong>Text:</strong>{{ post.body }}</div>

        <test-button @click="$router.push(`/posts/${post.id}`)" >Открыть</test-button>
        <test-button @click="$emit('remove', post)" >Удалить</test-button>
    </div>
</template>

<script>
export default {
    components: {
    },
    props:{
        post: {
            type: Object,
            required: true,
        }
    }
}
</script>

<style scoped>

</style>