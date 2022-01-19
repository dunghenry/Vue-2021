<template>
    <div v-if="isAuthenticated">
        <p class="progress-bar">Progress: {{progress}}%</p>
        <p class="text-center">Số lượng công việc đã hoàn thành: {{doneTodos.length}}/{{todos.length}}</p>
    </div>
</template>

<script>

import {mapGetters} from 'vuex'
export default {
    name: 'ProgressBar',
    computed: {...mapGetters(['progress', 'doneTodos', 'isAuthenticated', 'todos'])}

    // computed: {
    //     totalCompleted(){
    //         return this.$store.state.todos.filter(todo => todo.completed).length;
    //     },
    //     totalTodos(){
    //         return this.$store.state.todos.length;
    //     },
    //     progress(){
    //         let todo = this.$store.state.todos.filter(todo => todo.completed);
    //         let todos = this.$store.state.todos;
    //         return Math.round((todo.length / todos.length) * 100);
    //     },
    //     isAuthenticated(){
    //         return this.$store.state.author.isAuthenticated
    //     },
    // }
}
</script>

<style>
.progress-bar {
  padding: 5px;
  text-align: center;
  background: rgb(106, 248, 118);
  color:red;
}
.text-center{
    text-align: center;
    color:blue;
}
</style>