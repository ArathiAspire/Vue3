<template>
  <h2 :style="{color:'steelblue'}">Composition API</h2>
  <h3>Refs and reactive</h3>
  <Data />

  <h3>Reactive and toRefs</h3>
  <DemoOne />
  <DemoTwo />

  <h3>Replacing methods</h3>
  <Methods />

  <h3>Provide and inject</h3>
  <ProvideInject />

  <h3>Template Refs</h3>
  <TemplateRefs />

  <h3>Props</h3>
  <Person />

  <h3>Resusing functionalities</h3>
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
h3{
  color:rgb(119, 119, 153)
}
</style>
