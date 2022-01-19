<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/contact">Contact</router-link> |
    <router-link to="/menu">Menu</router-link> |
    <router-link to="/login">Login</router-link>
  </div>
  <router-view/>
</template>
<script>
import {onBeforeMount} from 'vue';
import {useRouter, useRoute} from 'vue-router';
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
export default {
  setup(){
    const router = useRouter();
    const route = useRoute();
    onBeforeMount(()=>{
      firebase.auth().onAuthStateChanged((user)=>{
        if(!user){
          router.replace('/login');
        }
        else if(route.path=="/login" || route.path=="/register"){
          router.replace('/');
        }
      })
    });
  }
}
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 15px;
  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
*{
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}
</style>