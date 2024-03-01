<template>
    <div>
        <Button @click="getPosts">Get Posts</Button>
        <div v-for="post in posts" :key="post.id">
            <h3>{{ post.id }} {{ post.title }}</h3>
            <p>{{ post.body }}</p>
            <hr />
        </div>
        <div v-if="errorMsg">{{ errorMsg }}</div>
    </div>
</template>

<script>
import axios from 'axios'
export default {
    name: "PostLists",
    // created() {
    //     this.getPosts()
    // },
    data() {
        return {
            posts: [],
            errorMsg: ''
        }
    },
    methods: {
        getPosts() {
            axios.get('https://jsonplaceholder.typicode.com/posts').then((respose) => {
                console.log(respose.data);
                this.posts = respose.data;
            }).catch((error) => {
                console.log(error);
                this.errorMsg = 'Error while retrieving data'
            })
        }
    }
}
</script>

<style scoped>

</style>