<template>
    <div class="navbar">
        <h1>My App Todos from VueX</h1>
        <div v-if="isAuthenticated">
            <h3>Số lượng công việc là : <b>{{todos.length}}</b></h3>
            <button @click="TOGGLE_AUTHOR">Logout</button>
        </div>
        <button v-else @click="TOGGLE_AUTHOR">Login</button>
    </div>
</template>

<script>
import {mapMutations, mapGetters} from "vuex"
export default {
    computed: {...mapGetters(['isAuthenticated', 'todos'])},
    // methods: {
    //     loginOrlogout(){
            // this.author.isAuthenticated = !this.author.isAuthenticated;
    //         this.$store.commit('TOGGLE_AUTHOR')
    //     },
    // }

    methods: mapMutations(['TOGGLE_AUTHOR'])
}
</script>

<style>
.navbar {
 padding: 5px;
 text-align: center;
 background: rgb(240, 240, 240);
 color: black;
}
button{
    font-size: 16px;
    font-weight: 550;
    background: none;
    outline: none;
    border: 2px solid gray;
    padding: 5px 10px;
    border-radius: 5px;
    cursor: pointer;
    margin-bottom: 15px;
}
b{
    color: red;
}
</style>