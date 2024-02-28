<template>
  <div>
    <TemplateRef />
    <click-counter />
    <hover-counter />
    <CreatePosts />
    <PostLists />
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
}
</style>
