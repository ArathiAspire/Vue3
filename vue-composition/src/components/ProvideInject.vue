<template>
    <div>
        <h1 class="text-center">{{ user }}</h1>
        <ChildA/>
        <button @click="incrementCount">Increment Count in Parent</button>
       
    </div>
</template>

<script>
import ChildA from './ChildA.vue'
import {provide, ref,reactive,toRefs} from 'vue'

export default {
    data() {
        return {
            user: 'Arathi',
        }

    },
    components:{
        ChildA
    },
    setup(){
        // provide('c_user','CompositionProvideValue')
        const count=ref(0)
        function incrementCount(){
            count.value++
        }
        const state=reactive({
            fname: "Michael",
            lname:"Doe"
        })
       
        provide('c_count',count),
        provide('c_hero',state),
        provide('icrementCountFromPArent',incrementCount)
        return{
            count,
            ...toRefs(state),
            incrementCount
        }
    },
    provide() {
        return {
            username: this.user,
        }
    }
}
</script>

<style lang="scss" scoped></style>