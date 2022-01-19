<template>
  <div class="todo-list">

    <!-- <h3>
      Số lượng công việc: <b>{{ todos.length }}</b>
    </h3> -->
    <TodoForm/>
    <ul v-if="isAuthenticated">
      <li v-for="todo in todos" 
      :key="todo.id" 
      :class="todo.completed ? 'completed' : '' "
      >{{ todo.title }} 
      <input type="checkbox" :checked="todo.completed" @change="MARK_COMPLETE(todo.id)">
      <button @click="deleteTodo(todo.id)">Delete</button>
      </li>
    </ul>
    <h3 v-else style="color: red; font-size: 20px">Not authorised</h3>
  </div>
</template>

<script>
import TodoForm from './TodoForm';
import {mapMutations, mapActions, mapGetters} from 'vuex';

export default {
  name: "Todos",
  components:{
    TodoForm,
  },
  //! Cách 1 dài dòng
  // computed: {
  //   todos() {
  //     return this.$store.state.todos;
  //   },
  //   isAuthenticated(){
  //     return this.$store.state.author.isAuthenticated;
  //   }
  // },

  //Cách 2 ngắn gọn hơn
  // computed: mapState({
  //   todos: state => state.todos,
  //   isAuthenticated: state => state.author.isAuthenticated,
  // })

  //? Cách 3
  computed: {...mapGetters(['isAuthenticated', 'todos'])},
  // methods: {
  //   markTodoCompleted(todoId){
  //     this.$store.commit('MARK_COMPLETE', todoId)
  //   }
  // }

  methods: {...mapMutations(['MARK_COMPLETE']),
    // deleteTodo(todoId){
    //   this.$store.dispatch('deleteTodo', todoId)
    // }

    ...mapActions(['deleteTodo', 'getTodos'])
  },
  created(){
    this.getTodos();
  }
};
</script>

<style>
.todo-list ul {
  padding: 0 10px 10px 10px;
  list-style-type: none;
}

.todo-list li {
  padding: 20px;
  padding-left: 50px;
  cursor: pointer;
  margin: 10px 0;
  border-radius: 4px;
  background: rgb(240, 240, 240);
  color: black;
  
}
h3{
  font-weight: 400;
  text-align: center;
  font-size: 25px;
}
b{
  color: red;
}
li input{
  position: relative;
  top: -3px;
  float: left;
  width: 20px;
  height: 20px;
 margin-right: 20px;
}
.todo-list li.completed {
 background: rgb(119, 218, 243);
}
li button{
  position: relative;
  top: -5px;
  margin-bottom: 10px;
  float: right;
  margin-right: 100px;
  background: red;
  color: white;
  border: none;
  outline: none;
  cursor: pointer;
  font-weight: 500;
}

</style>
