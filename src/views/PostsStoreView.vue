<template>
    <div class="about">

        <h1>This is an about page {{ $store.getters.dobleLikes }}</h1>
        <h1>{{ $store.state.isAuth ? 'auth' : 'no auth'}}</h1>
        <div>
            <test-button 
                @click="$store.commit('incrementLikes')"
            >
                уменьшить
            </test-button>
            <test-button 
                @click="$store.commit('decrementLikes')"
            >
                увеличить
            </test-button>
        </div>
        <div>
            <test-input 
                type="text" 
                :model-value="searchPost"
                @update:model-value="setSearchPost"
                placeholder="Поиск..."
                v-focus
            />
        </div>

        <div>
            <test-select 
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
                :options="sortOptions"
            />
        </div>

        <div>
            <test-button 
                @click="showDialog"
            >
                Создать пост
            </test-button>
            <test-button
                @click="featchPosts"
            >
                Получить пост
            </test-button>
        </div>

        <test-dialog v-model:show="dialogStatus">
            <PostForm @eventCreatePost="createPost"/>
        </test-dialog>

        <PostList 
            :posts="sortedPostsAndSearch" 
            @remove="emitRemovePost"
            v-if="!isPostLoading"
        />
        <div v-else>Идет загрузка...</div>

        <div class="paginate__wrapper">
            <div class="paginate__row">
                <div
                    v-for="pageNum in totalPage"
                    :key="pageNum"
                    :class="{
                        'paginate__curent': page === pageNum
                    }"
                    @click="changePage(pageNum)"
                >
                    {{ pageNum }}
                </div>
            </div>
        </div>
        
        <div v-intersection="sortOptions" class="observer"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import TestInput from '@/components/UI/TestInput.vue';
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    components:{
        PostForm, PostList, TestInput
    },
    data() {
        return {
            dialogStatus: false,
        }
    },
    methods:{

        ...mapMutations({
            setPage: 'post/setPage',
            setSearchPost: 'post/setSearchPost',
            setSelectedSort: 'post/setSelectedSort'
        }),
        ...mapActions({
            featchPosts: 'post/featchPosts'
        }),


        createPost(post){
            this.posts.push(post);
            this.dialogStatus = false;
        },
        emitRemovePost(post){
            this.posts = this.posts.filter(p => p.id !== post.id);
        },
        showDialog(){
            this.dialogStatus = true;
        },
        changePage(num){
            this.page = num
        }
    },
    mounted() {
        this.featchPosts()
    },
    watch: {

    },
    computed:{
        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedPostsAndSearch: 'post/sortedPostsAndSearch',
        }),
        ...mapState({
            posts : state => state.post.posts,
            postsRequest : state => state.post.postsRequest,
            modificatorValue: state => state.post.modificatorValue,
            isPostLoading: state => state.post.isPostLoading,
            selectedSort: state => state.post.selectedSort,
            sortOptions: state => state.post.sortOptions,
            searchPost: state => state.post.searchPost,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPage: state => state.post.totalPage,
        })
    }
    
}

</script>

<style scoped>
.paginate__wrapper{
    display: flex;
}
.paginate__row{
    display: flex;
    margin: auto;
}
.paginate__curent{
    color: brown;
}
.observer{
    height: 20px;
    background-color: aqua;
}
</style>