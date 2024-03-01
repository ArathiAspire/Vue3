<template>
    <form @submit.prevent="createPosts" class="post-form">
        <h3>Post Data</h3>
        <div class="form-group">
            <label for="userId">User Id</label>
            <input type="text" id="userId" v-model="FormData.userId">
        </div>
        <div class="form-group">
            <label for="title">Title</label>
            <input type="text" id="title" v-model="FormData.title">
        </div>
        <div class="form-group">
            <label for="body">Body</label>
            <input type="text" id="body" v-model="FormData.body">
        </div>
        <div class="form-group"><Button>Submit Data</Button></div>
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
                .then(res => {
                    console.log(res)
                    alert(JSON.stringify(this.FormData))
                })
                .catch(err => console.log(err))
        }
    }
}
</script>

<style scoped>
.post-form {
    max-width: 400px;
    margin: auto;
    background-color: #94c596;
    padding: 2rem;
    border-radius: .5rem;
}

.form-group {
    margin-bottom: 15px;
}

label {
    display: block;
    font-weight: bold;
    margin-bottom: 5px;
}

.input,
textarea {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 4px;
    outline: none;
}

button {
    background-color: #4caf50;
    color: white;
    padding: 10px 15px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
}

button:hover {
    background-color: #45a049;
}
</style>