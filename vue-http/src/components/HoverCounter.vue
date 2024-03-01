<template>
    <div>
        <h4 @mouseover="incrementCount">Hovered {{ count }} times</h4>
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