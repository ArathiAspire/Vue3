<template>
    <div>
        <h4>Parent Component</h4>
        <button @click="showChild = !showChild">Toggle Child Visibility</button>
        <ChildComponent v-show="showChild" />
    </div>
</template>

<script>
import ChildComponent from './Child.vue'
export default {
    name: "ParentComponent",
    components: {
        ChildComponent
    },
    data() {
        return {
            showChild: true
        }
    },
    beforeCreate() {
        console.log('Parent before create');
    },
    created() {
        console.log('Parent Created');
    },
    beforeMount() {
        console.log('Parent Before Mounted');
    },
    mounted() {
        console.log('Parent Mouted');
    },
    beforeUpdate() {
        console.log('Parent Before Update');
    },
    updated() {
        console.log('Parent Updated');
    },
    beforeUnmount() {
        console.log('Parent Before UnMount');
    },
    unmounted() {
        console.log('Parent UnMounted');
    },
}
</script>

<style lang="scss" scoped></style>