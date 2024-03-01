<template>
    <div class="container">
        <h2>This is the Popup</h2>
        <input type="text" v-model.trim="msg" />
        <button @click="$emit('close', msg)">Close the popup</button>
    </div>
</template>

<script>
export default {
    name: "popUp",
    emits: {
        close: (msg) => {
            if (!msg) {
                alert("Please enter a message");
                return false;
            } else {
                return true;
            }
        }
    },
    data() {
        return {
            msg: ''

        }
    }
}
</script>

<style scoped>
.container {
    border: solid black;
}
</style>