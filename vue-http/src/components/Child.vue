<template>
    <div>
        <h4>Child Component</h4>
    </div>
</template>

<script>
export default {
    name: "ChildComponent",
    beforeCreate() {
        console.log('Child before create');
    },
    created() {
        console.log('Child Created');
    },
    beforeMount() {
        console.log('Child Before Mounted');
    },
    mounted() {
        console.log('Child Mouted');
    },
    beforeUpdate() {
        console.log('Child Before Update');
    },
    updated() {
        console.log('Child Updated');
    },
    beforeUnmount() {
        console.log('Child Before UnMount');
    },
    unmounted() {
        console.log('Child UnMounted');
    },
}
</script>

<style lang="scss" scoped></style>