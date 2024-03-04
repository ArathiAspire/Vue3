<template>
    <div>
        <h4 class="text-center">{{ user }}</h4>
        <ChildA />
        <button @click="incrementCount">Increment Count in Parent</button>

    </div>
</template>

<script>
import ChildA from './ChildA.vue'
import { provide, ref, reactive, toRefs } from 'vue'

export default {
    data() {
        return {
            user: 'Arathi',
        }

    },
    components: {
        ChildA
    },
    provide() {
        return {
            username: this.user,
        }
    },
    setup() {
        // provide('c_user','CompositionProvideValue')
        const count = ref(0)
        function incrementCount() {
            count.value++
        }
        const state = reactive({
            fname: "Michael",
            lname: "Doe"
        })

        provide('c_count', count),
            provide('c_hero', state),
            provide('icrementCountFromParent', incrementCount)
        return {
            count,
            ...toRefs(state),
            incrementCount
        }
    },

}
</script>

<style lang="scss" scoped></style>