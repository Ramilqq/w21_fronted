<template>
    <div class="about">
        <h1>This is an about page</h1>
        
        <div>
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
        
        <div v-intersection="sortOptions" class="observer"></div>
    </div>
</template>

<script>
import PostForm from '@/components/PostForm.vue';
import PostList from '@/components/PostList.vue';
import axios from 'axios';

export default {
    components:{
        PostForm, PostList
    },
    data() {
        return {
            posts : [],
            postsRequest : [],
            dialogStatus: false,
            modificatorValue: '',
            isPostLoading: false,
            selectedSort: '',
            sortOptions: [
                {name:'title', value:'По названию'},
                {name:'body', value:'По тексту'}
            ],
            searchPost: '',
            page: 1,
            limit: 10,
            totalPage: 0,
        }
    },
    methods:{
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
        async featchPosts(){
            try {
                this.isPostLoading = true;
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _page: this.page,
                        _limit: this.limit
                    }
                });
                this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = response.data;
                
            } catch (error) {
                alert('error.featchPosts')
            }finally{
                this.isPostLoading = false;
            }
        },
        changePage(num){
            this.page = num
        }
    },
    mounted() {
        this.featchPosts()
        
        // пересечение конца страницы
        /*const options = {
            //root: document.querySelector("#scrollArea"),
            rootMargin: "0px",
            threshold: 1.0,
        };
        const callback =  (entries, observer) => {
            if(entries[0].isIntersecting && this.page < this.totalPage){
                console.log(entries, observer)
            }
        }
        const observer = new IntersectionObserver(callback, options)
        observer.observe(this.$refs.observer)*/
        // !пересечение конца страницы
    },
    watch: {
        page(){
            this.featchPosts()
        }
        /*selectedSort(newValue) {
            this.posts.sort((post1, post2) =>{
                return post1[newValue] ?.localeCompare(post2[newValue])
            })
        },*/
    },
    computed:{
        sortedPosts(){
            return [...this.posts].sort((post1, post2) =>{
                return post1[this.selectedSort] ?.localeCompare(post2[this.selectedSort])
            })
        },
        sortedPostsAndSearch(){
            return this.sortedPosts.filter(post => post.title.toLowerCase().includes(this.searchPost.toLowerCase()))
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