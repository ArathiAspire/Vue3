<template>
    <div>
        <p> Options - {{ o_firstName }}</p>
        <p>Compostion - {{ c_firstName }}</p>
        <p>Full name:{{ state.firstName }} {{ state.lastName }}</p>
        <p>Job:{{ state.Job }}</p>

    </div>
</template>

<script>
import { ref, reactive } from 'vue'
export default {


    name: 'DataComponent',
    data() {
        return {
            o_firstName: 'John',

        }
    },
    setup() {
        const c_firstName = ref('Jane')
        const state = reactive({
            firstName: "Tom",
            lastName: "Brady",
            Job: "Developer"
        })
        return {
            state,
            c_firstName
        }
    }
}
</script>

<style scoped>
p{
    color:rgb(48, 48, 109)
}

</style>