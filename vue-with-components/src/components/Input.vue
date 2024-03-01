<template>
    <div :style="{padding:'3rem'}">
        <input type="text" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />

    </div>
</template>

<script>
export default {
    name: 'InputComponent',
    props: {
        modelValue: String
    }
}
</script>

<style scoped>
input[type='text'] {
    width: 300px;
    height: 40px;
    padding-left: 15px;
    font-size: 20px;
    border: solid tomato;
    outline: none;
    background-color: #f7f7f7;
    box-shadow: inset 8px 8px 16px -8px rgba(34, 1, 1, 0.288);
    margin-bottom: 20px;

}
</style>