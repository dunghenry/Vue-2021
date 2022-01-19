<template>
  <div class="status-bar" v-if="isAuthenticated"> 
      <h1>Done</h1>
      <ul>
          <li v-for="todo in doneTodos" :key="todo.id">{{todo.title}}</li>
      </ul>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'StatusBar',
    
    // computed: mapState(['todos'])

    computed: { ...mapGetters(['doneTodos', 'isAuthenticated'])}

    // computed: {
    //     isAuthenticated(){
    //         return this.$store.state.author.isAuthenticated
    //     },

    //     Cách 1
    //     doneTodos(){
    //         return this.$store.state.todos.filter(todo => todo.completed)
    //     }

    //      Cách 2
    //     doneTodos(){
    //         return this.$store.getters.doneTodos
    //     }

    // },
    
}
</script>

<style>
.status-bar {
  padding: 5px;
  text-align: center;
  background: rgb(240, 240, 240);
  color: black;
}
ul{
  list-style: none;
  padding: 0;
}
</style>