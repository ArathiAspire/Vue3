<template>
    <div>
        <h4>Tab C Content</h4>
    <p>This is the content for Tab C.</p>
        <input type="text" v-model="name"/>
    </div>
</template>

<script>
    export default {
        name: "TabC",
        data() {
            return {
                name:''
            }
        }
    }
</script>

<style lang="sass" scoped>

</style>