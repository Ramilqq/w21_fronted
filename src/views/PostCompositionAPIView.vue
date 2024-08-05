<template>
    <div class="about">
        <h1>This is an about page {{likes}}</h1>
        <button @click="addLike">add like</button>
        <!--div>
            <input 
                type="text" 
                v-model.trim.number="modificatorValue"
            >
            <input 
                type="text" 
                v-model.trim="searchPost"
                placeholder="Поиск..."
                v-focus
            >
        </div>

        <div>
            <test-select 
                v-model="selectedSort"
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
        
        <div v-intersection="sortOptions" class="observer"></div-->
    </div>
</template>

<script>
//import PostForm from '@/components/PostForm.vue';
//import PostList from '@/components/PostList.vue';
import  {usePosts}  from '@/hooks/usePosts';
import {ref} from 'vue';

export default {
    components:{
        //PostForm, PostList
    },
    data() {
        return {
            dialogStatus: false,
            sortOptions: [
                {name:'title', value:'По названию'},
                {name:'body', value:'По тексту'}
            ],
        }
    },
    
    setup(){
        const likes = ref(0)
        const addLike = () => {
            likes.value += 1
        }

        const {posts, totalPage, isPostLoading} = usePosts(10)


        return {
            likes, addLike,
            posts, totalPage, isPostLoading,
        }
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