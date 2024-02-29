<template>
    <div>
        <h3>Welcome {{ fullname }}</h3>
        <button @click="sendEvent">Greet</button>
    </div>
</template>

<script>
import { computed } from 'vue'
export default {
    name: "PersonGreet",
    props: ['fname', 'lname'],

    setup(props, context) {
        const fullname = computed(() => {
            return `${props.fname} ${props.lname}`
        })
        function sendEvent() {
            context.emit('greeting', fullname.value);
        }
        return {
            fullname,
            sendEvent
        }
    }
}
</script>

<style lang="scss" scoped></style>