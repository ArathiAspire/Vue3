<template>
  <div>
    <navBar />
    <SignIn v-show="signInShow"/>
    <HomePage />

    <!--<Footer />-->

  </div>
</template>

<script>
import navBar from './components/nav.vue';
import HomePage from './components/HomePage.vue';
import SignIn from './components/SignIn.vue'

export default {
  name: 'App',
  components: {
    navBar,
    HomePage,
    SignIn
  },
  data(){
    return{
      signInShow:false
    }
  },  
  provide:{
    signIn(){
      this.signInShow = !this.signInShow;
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #f8fcff;
  background-color: #2c3e50;
}
</style>
