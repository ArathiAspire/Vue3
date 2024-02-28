<template>
    <div>
        <button @click="incrementCount">Clicked {{ count }} times</button>
    </div>
</template>

<script>
import Counter from '../mixins/counter.js';
export default {
    name: "ClickCounter",
    mixins: [Counter]
}
</script>

<style lang="sass" scoped>

</style>