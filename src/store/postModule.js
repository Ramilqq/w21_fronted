import axios from "axios"

export const postModule = {
    
    state: ()=>({
        posts : [{id: 1, 'title': 'asd', body: 'asdad'}],
        postsRequest : [],
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
    }),
    getters: {
        sortedPosts(state){
            return [...state.posts].sort((post1, post2) =>{
                return post1[state.selectedSort] ?.localeCompare(post2[state.selectedSort])
            })
        },
        sortedPostsAndSearch(state, getters){
            return getters.sortedPosts.filter(post => post.title.toLowerCase().includes(state.searchPost.toLowerCase()))
        }
    },
    mutations: {
        setPosts(state, posts){
            state.posts = posts
        },
        setPostsRequest(state, postsRequest){
            state.postsRequest = postsRequest
        },
        setModificatorValue(state, modificatorValue){
            state.modificatorValue = modificatorValue
        },
        setIsPostLoading(state, isPostLoading){
            state.isPostLoading = isPostLoading
        },
        setSelectedSort(state, selectedSort){
            state.selectedSort = selectedSort
        },
        setSearchPost(state, searchPost){
            console.log(searchPost)
            state.searchPost = searchPost
        },
        setPage(state, page){
            state.page = page
        },
        setTotalPage(state, totalPage){
            state.totalPage = totalPage
        },
    },
    actions: {
        async featchPosts({state, commit}){
            try {
                commit('setIsPostLoading', true)
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts',{
                    params:{
                        _page: state.page,
                        _limit: state.limit
                    }
                });
                commit('setTotalPage', Math.ceil(response.headers['x-total-count'] / state.limit))
                //this.totalPage = Math.ceil(response.headers['x-total-count'] / this.limit)
                commit('setPosts', response.data)
                //this.posts = response.data;
                
            } catch (error) {
                alert('error.featchPosts')
            }finally{
                commit('setIsPostLoading', false)
            }
        }
    },
    namespaced: true
}