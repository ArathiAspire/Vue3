<template>
    <h3>Template Refs</h3>
    <div>
        <input type="text" ref="inputRef" />
    </div>
</template>

<script>
export default {
    name: "TemplateRef",
    mounted() {
        this.$refs.inputRef.focus()
    }
}
</script>

<style lang="sass" scoped>

</style>