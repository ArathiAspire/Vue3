<template>
    <div>
        <h1 class="text-center">ChildB Component</h1>
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