<template>
    <form @submit="createPosts">
        <div>
            <label for="userId">User Id</label>
            <input type="text" id="userId" v-model="FormData.userId">
        </div>
        <div>
            <label for="title">Title</label>
            <input type="text" id="title" v-model="FormData.title">
        </div>
        <div>
            <label for="body">Body</label>
            <input type="text" id="body" v-model="FormData.body">
        </div>
        <div><Button>Submit Data</Button></div>
    </form>
</template>

<script>
import axios from 'axios'

export default {
    name: "CreatePosts",
    data() {
        return {
            FormData: {
                userId: '',
                title: '',
                body: ''
            }
        }
    },
    methods: {
        createPosts() {
            axios.post('https://jsonplaceholder.typicode.com/posts', this.FormData)
                .then(res => console.log(res))
                .catch(err => console.log(err))
        }
    }
}
</script>

<style lang="sass" scoped>

</style>