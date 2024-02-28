<template>
    <div>
        <h3 @mouseover="incrementCount">Hovered {{ count }} times</h3>
    </div>
</template>

<script>
import Counter from '@/mixins/counter';
export default {
    name: "HoverCounter",
    mixins: [Counter]
}
</script>

<style lang="sass" scoped>

</style>