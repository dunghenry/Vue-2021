<template>
  <div id="app">
    <h1>Đây là app Vue đầu tiên</h1>
    <Header/>
    <Todo/>
  </div>
 
</template>

<script>
import Header from './components/Header';
import Todo from './components/Todo';
export default {
  name: 'App',
  components: {Header, Todo},
 
}
</script>

<style>
  #app{
  
  }
  h1{
    color: red;
    text-align: center;
    font-family: Arial, Helvetica, sans-serif;
  }
</style>