<template>
  <h1>Composition API</h1>
  <h2>Refs and reactive</h2>
  <Data />
  <h2>Reactive and toRefs</h2>
  <DemoOne />
  <DemoTwo />
  <h2>Replacing methods</h2>
  <Methods />
  <h2>Provide and inject (passing data to nested childs without using props)</h2>
  <ProvideInject />
  <h2>Template Refs</h2>
  <TemplateRefs />
  <h2>Props from parent to child and vise versa</h2>
  <Person />
  <h2>Resusing functionalities</h2>
  <ClickCounter />
  <HoverCounter />
</template>

<script>
import Data from './components/Data.vue';
import DemoOne from './components/DemoOne.vue';
import DemoTwo from './components/DemoTwo.vue';
import Methods from './components/Methods.vue';
import ProvideInject from './components/ProvideInject.vue';
import TemplateRefs from './components/TemplateRefs.vue';
import Person from './components/Person.vue';
import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';
export default {
  name: 'App',
  components: {
    Data,
    DemoOne,
    DemoTwo,
    Methods,
    ProvideInject,
    TemplateRefs, Person,
    ClickCounter,
    HoverCounter
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
