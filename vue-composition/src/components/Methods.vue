<template>
    <div>
        <h3>{{ name }} - Options</h3>
        <button @click="changeName">Change Name</button>
        <h3> {{ count }} - Coposition</h3>
        <button @click="incrementCount">Increment Count</button>
        <h3>{{ fname }} {{ lname }}</h3>
        <button @click="changeLname">Change LastName</button>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
    name: "MethodComponent",
    data() {
        return {
            name: "Arathi"
        }
    },
    methods: {
        changeName() {
            this.name = "Akshay";
        }
    },
    setup() {
        const count = ref(0);
        const state = reactive({
            fname: "John",
            lname: "Doe"
        })
        function incrementCount() {
            count.value += 1
        }
        function changeLname() {
            state.lname = "Smith"
        }
        return {
            
            count,
            incrementCount,
            ...toRefs(state),
            changeLname

        }
    }
}
</script>

<style lang="sass" scoped>

</style>