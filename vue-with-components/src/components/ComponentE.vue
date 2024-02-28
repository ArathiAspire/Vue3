<template>
    <div>
        <h2>I m ComponentE</h2>
        <ComponentF/>
    </div>
</template>

<script>
import ComponentF from './ComponentF.vue';
    export default {
        components:{
            ComponentF,
        }
    }
</script>

<style scoped>

</style>