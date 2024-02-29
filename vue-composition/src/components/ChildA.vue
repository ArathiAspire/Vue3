<template>
    <div>
        <h1 class="text-center">ChildA Component</h1>
        <ChildB/>
        
    </div>
</template>

<script>
import ChildB from './ChildB.vue'

    export default {
        name: "ChildA",
        components:{
            ChildB
        }
    }
</script>

<style lang="scss" scoped>

</style>