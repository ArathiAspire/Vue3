<template>
    <div>
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

<style lang="scss" scoped></style>