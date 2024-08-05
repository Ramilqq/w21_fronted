import {ref, computed} from 'vue';

export function useSortedPostsAndSearch(sortedPosts){
    const searchPost = ref('')
    
    const sortedPostsAndSearch = computed(() => {
        return sortedPosts.value.filter(post => post.title.toLowerCase().includes(searchPost.value.toLowerCase()))
    })

    return{
        searchPost, sortedPostsAndSearch
    }
}