<template>
    <div>
        <h4 class="text-center">ChildB Component</h4>
        <ChildC/>
    </div>
</template>

<script>
import ChildC from './ChildC.vue'

    export default {
        name: "ChildB",
        components:{
            ChildC
        },
    }
</script>

<style lang="scss" scoped>

</style>