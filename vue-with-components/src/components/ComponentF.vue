<template>
    <div>
        <h2>I m ComponentF</h2>
        <p> username from app - using provide and inject - {{username}}</p>
    </div>
</template>

<script>
export default {
    name: "ComponentF",
    inject:['username']

}
</script>

<style scoped></style>