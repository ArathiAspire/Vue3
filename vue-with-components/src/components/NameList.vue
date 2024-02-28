<template>
      <!-- eslint-disable-next-line vue/max-attributes-per-line -->

    <h3 v-for="name in names" :key="name.firstName">
        <slot :firstName="name.firstName" :lastName="name.lastName"></slot>
    </h3>
</template>


<script>
export default {
    name: "NameList",
    data() {
        return {
            names: [
                {
                    firstName: "Joanna",
                    lastName: "Biju"
                },
                {
                    firstName: "Dilna",
                    lastName: "Daison"
                },
                {
                    firstName: "Anu",
                    lastName: "Surendran"
                },
            ]
        }
    },
}
</script>

<style lang="sass" scoped>

</style>