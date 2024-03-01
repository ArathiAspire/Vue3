<template>
    <div :style="{backgroundColor:'skyblue'}">
        <h2>I m ComponentF</h2>
        <b> username from app - using provide and inject - {{username}}</b>
    </div>
</template>

<script>
export default {
    name: "ComponentF",
    inject:['username']

}
</script>

<style scoped></style>