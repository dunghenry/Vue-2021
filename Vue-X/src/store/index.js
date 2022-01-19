import Vue from 'vue'
import Vuex from 'vuex'

import author from './modules/author'
import todos from './modules/todos'
Vue.use(Vuex)

const storeData = {
    modules:{
        author,
        todos
    },

    //Được chia sẻ chung giữa các component
    // state: {
    //     todos: [
    //         // {id: 1, title: 'Công việc 1', completed: true},
    //         // {id: 2, title: 'Công việc 2', completed: true},
    //         // {id: 3, title: 'Công việc 3', completed: true},
    //     ],

    //     // author: {
    //     //     isAuthenticated: false,
    //     // }
    // },
    // getters: {
    //     doneTodos: state => state.todos.filter(todo => todo.completed),
    //     progress: (state, getters) =>{
    //         // const doneTodos = state.todos.filter(todo => todo.completed);
            
    //         const doneTodos = getters.doneTodos;
    //         if(doneTodos.length === 0){
    //             return 0;
    //         }
    //         return Math.round( doneTodos.length / state.todos.length * 100);
    //     }
    // },  
    // actions: {
    //     async deleteTodo(context, todoId){
    //         try {
    //             await axios.delete(`https://jsonplaceholder.typicode.com/todos/${todoId}`);
    //             context.commit('DELETE_TODO', todoId)
    //         } catch (error) {
    //             console.log(error)
    //         }
            
    //     },
    //     async addTodo({commit}, newTodo){
    //         try {
    //             await axios.post(`https://jsonplaceholder.typicode.com/todos`, newTodo);
    //             commit('ADD_TODO', newTodo)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     },
    //     async getTodos({commit}){
    //         try {
    //             const response = await axios.get('https://jsonplaceholder.typicode.com/todos?_limit=4');
    //             commit('SET_TODOS', response.data)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     }
    // },
    // mutations:{
    //     TOGGLE_AUTHOR(state){
    //         state.author.isAuthenticated = !state.author.isAuthenticated
    //     },
    //     MARK_COMPLETE(state, todoId){
    //         state.todos.map(todo => {
    //             if(todo.id === todoId) todo.completed = !todo.completed
    //             return todo;
    //         })
    //     },
    //     DELETE_TODO(state, todoId) {
    //         state.todos = state.todos.filter(todo => todo.id !== todoId)
    //     },
    //     ADD_TODO(state, newTodo) {
    //         state.todos.unshift(newTodo);

    //     },
    //     SET_TODOS(state, todos){
    //         state.todos = todos;
    //     }
    // }
}

const store = new Vuex.Store(storeData)

export default store;