<template>
    <form action="" @submit.prevent>
        <h4>Название поста</h4>
        <!--input type="text" @input="post.title = $event.target.value" v-bind:value="post.title" placeholder="title">
        <input type="text" @input="post.body = $event.target.value" v-bind:value="post.body" placeholder="body"-->

        <test-input v-focus v-model="post.title" placeholder="title" />
        <test-input v-model="post.body" placeholder="body" />

        <test-button @click="createPost">Добавить</test-button>
    </form>
</template>

<script>
export default {
    components: {
    },
    data(){
        return {
            post: {title:'', body: ''}
        }
    },
    methods:{
        createPost(){
            this.post.id = Date.now();
            //this.posts.push(newPost);
            this.$emit('eventCreatePost', this.post);
            this.post = {title:'', body: ''};
        }
    },
    watch:{
        post:{
            handler(newValue){
                console.log(newValue)
            },
            deep: true
        }
    }
}
</script>

<style scoped>

</style>