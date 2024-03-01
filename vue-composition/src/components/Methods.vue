<template>
    <div>
        <h4>{{ name }} - Options</h4>
        <button @click="changeName">Change Name</button>
        <h4> {{ count }} - Composition</h4>
        <button @click="incrementCount">Increment Count</button>
        <h4>{{ fname }} {{ lname }}</h4>
        <button @click="changeLname">Change LastName</button>
    </div>
</template>

<script>
import { ref, reactive, toRefs } from 'vue'
export default {
    name: "MethodComponent",
    data() {
        return {
            name: "Arathi",
            alternate: "Akshay",
            isAlter: false
        }
    },
    methods: {
        changeName() {
            this.name = this.isAlter ? this.alternate : 'Arathi';
            this.isAlter = !this.isAlter;
        }
    },
    setup() {
        const count = ref(0);
        const state = reactive({
            fname: "Michael",
            lname: "Max",
            alternateLname: 'Jax',
            IsAlterLname: false
        })
        function incrementCount() {
            count.value += 1
        }
        function changeLname() {

            state.lname = state.IsAlterLname ? state.alternateLname : 'Max';
            state.IsAlterLname = !state.IsAlterLname;
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