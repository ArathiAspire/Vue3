<template>
    <div>
        <h2>I m ComponentC</h2>
        <ComponentE/>
    </div>
</template>

<script>
import ComponentE from './ComponentE.vue';
    export default {
        name:"ComponentC",
        components:{
            ComponentE,
        }
    }
</script>

<style scoped>

</style>