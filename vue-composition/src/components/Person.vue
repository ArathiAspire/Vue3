<template>
    <div class="name-form">

        <label id="fname">Enter First name</label>
        <input type="text" v-model="fname" />
        <label id="fname">Enter Last name</label>
        <input type="text" v-model="lname" />
        <PersonGreet :fname="fname" :lname="lname" @greeting="greeting" />
    </div>
</template>

<script>
import PersonGreet from './PersonGreet.vue'
import { reactive, toRefs } from 'vue'
export default {
    name: "PersonComponent",
    components: {
        PersonGreet
    },
    setup() {
        const state = reactive({
            fname: '',
            lname: ''
        })
        function greeting(greeting) {
            alert(`Welcome ${greeting}`)
        }
        return {
            ...toRefs(state),
            greeting
        }
    }
}
</script>

<style scoped>
.name-form {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    background-color: rgb(150, 164, 201);
}

label {
    display: block;
    margin-bottom: 8px;
}

input {
    width: 100%;
    padding: 8px;
    box-sizing: border-box;
    margin-bottom: 16px;
}
</style>