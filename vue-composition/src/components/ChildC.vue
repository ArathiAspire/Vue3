<template>
    <div>
        <h3 class="text-center">ChildC component</h3>
        <h4>Injected value - {{ username }}</h4>
        <h4>Injected value using composition - {{ value }}</h4>
        <h4>{{ count }}</h4>
        <button @click="increment">Incrememt Count from Child</button>
        <h4>{{ fname }} {{ lname }}</h4>

    </div>
</template>

<script>
import { inject, toRefs } from 'vue'
export default {
    name: "ChildC",
    inject: ['username'],
    setup() {
        const value = inject('c_user', 'default value')
        const count = inject('c_count', 0)
        const childHero = inject('c_hero', {})
        const increment = inject('icrementCountFromPArent');

        return {
            value,
            count,
            ...toRefs(childHero),
            increment
        }
    }

}
</script>

<style lang="scss" scoped></style>