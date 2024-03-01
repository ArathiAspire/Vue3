<template>
    <div>
        <p :style="{color:'blue'}">Welcome {{name}}</p>
    </div>
</template>

<script>
    export default {
        name:'GreetMesssage',
        props:['name']
    }
</script>

<style scoped>

</style>