<template>
    <div>
        <h4 @mouseover="incrementCount">Hovered {{ count }} times</h4>
    </div>
</template>

<script>
import useCounter from '@/Composables/useCounter';
export default {
    name: "HoverCounter",
    setup() {
        const { count, incrementCount } = useCounter();
        return { count, incrementCount };

    }
}
</script>

<style lang="scss" scoped></style>