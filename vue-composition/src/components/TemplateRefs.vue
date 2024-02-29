<template>
    <h3>Focusing input</h3>
    <input type="text" ref="inputRef" />
</template>

<script>
import { ref, onMounted } from 'vue'
export default {
    name: 'TemplateRefs',
    setup() {
        const inputRef = ref(null)
        onMounted(() => {
            inputRef.value.focus()
        })
        return {
            inputRef
        }

    },

}
</script>

<style lang="scss" scoped></style>