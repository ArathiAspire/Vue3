<template>
    <div>
        <h3> Options - {{ o_firstName }}</h3>
        <h3>Compostion - {{ c_firstName }}</h3>
        Full name:{{ state.firstName }} {{ state.lastName }}
        Job:{{ state.Job }}

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

<style lang="sass" scoped>

</style>