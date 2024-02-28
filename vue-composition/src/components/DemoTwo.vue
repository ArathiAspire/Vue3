<template>
    <div>
        {{ fname }} {{ lname }}
    </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
export default {
    name: "DemoTwo",
    setup() {
        const state = reactive({
            fname: 'John',
            lname: "Doe"
        })

        setTimeout(() => {
            state.fname = "Jane";
            state.lname = "Smith";
        }, 2000)
        return  toRefs(state); // returns an object

    }
}
</script>

<style lang="sass" scoped>

</style>