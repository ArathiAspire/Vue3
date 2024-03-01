<template>
  <div>
    <h2 :style="{color:'green'}">Vue-http</h2>
    <PostLists />
    <CreatePosts />
    <TemplateRef />
    <h3>Mixins</h3>
    <click-counter />
    <hover-counter /> 
    <h3>Component Lifecycles</h3>
    <Parent />
  </div>
</template>

<script>
import PostLists from './components/PostLists.vue';
import CreatePosts from './components/CreatePosts.vue';
import Parent from './components/Parent.vue';
import TemplateRef from './components/TemplateRef.vue';
import ClickCounter from './components/ClickCounter.vue';
import HoverCounter from './components/HoverCounter.vue';


export default {
  name: 'App',
  components: {
    PostLists,
    CreatePosts,
    Parent,
    TemplateRef,
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
  padding: .5rem;
}

button {
  padding: 10px 15px;
  font-size: 15px;
  cursor: pointer;
  background-color: #4d8d5d;
  border: 1px solid #ccc;
  border-radius: 5px;
}

button:hover {
  background-color: #64795d;
  color: #fff;
}
h3{
  color: #4ea163;
}
</style>
