<template>
    <div>
        <h4 class="text-center">ChildA Component</h4>
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