<template>
    <div>
        {{ message }}
    </div>
</template>

<script>
import { ref } from 'vue'
export default {
    name: "DemoOne",
    setup() {
        const message = ref('Hello Vue3');
        console.log(message);
        setTimeout(() => {
            message.value = 'Welcome to Vue 3!'
            console.log(message);
        }, 2000)

        return {
            message
        }
    }

}
</script>

<style lang="sass" scoped>

</style>