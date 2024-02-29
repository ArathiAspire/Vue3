<template>
  <Data />
  <DemoOne />
  <DemoTwo />

  <Methods />

  <ProvideInject />
  <TemplateRefs />
</template>

<script>
import Data from './components/Data.vue';
import DemoOne from './components/DemoOne.vue';
import DemoTwo from './components/DemoTwo.vue';
import Methods from './components/Methods.vue';
import ProvideInject from './components/ProvideInject.vue';
import TemplateRefs from './components/TemplateRefs.vue';
export default {
  name: 'App',
  components: {
    Data,
    DemoOne,
    DemoTwo,
    Methods,
    ProvideInject,
    TemplateRefs
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
