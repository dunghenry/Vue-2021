<template>
    <div v-if="isAuthenticated">
        <form @submit.prevent="onSubmit" >
            <input type="text" v-model="title">
            <input type="submit" value="Add">`
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters} from 'vuex'
import { v4 as uuid4 } from 'uuid'
export default {
    name: "TodoForm",
    data(){
        return{
            title: '',
        }
    },
    computed: {
       ...mapGetters(['isAuthenticated'])
    },
    methods:{...mapActions(['addTodo']),
        //Cách 1 @submit.prevent

        onSubmit(){
            if(this.title !== '')
                this.addTodo({
                    id: uuid4(),
                    title: this.title,
                    completed: false
                })
            this.title = '';
        },

        //! cách 2
        // onSubmit(event){
        //     event.preventDefault();
        // }
    }
}
</script>

<style>
form {
 padding: 10px;
}

input[type='text'] {
 width: 100%;
 box-sizing: border-box;
 padding: 10px;
 margin: 6px 0;
 border: 0;
 border-radius: 4px;
}

input[type='submit'] {
 margin: 10px auto;
 padding: 10px 40px;
 font-weight: 550;
 font-size: 18px;
 border: 0;
 display: block;
 border-radius: 20px;
 cursor: pointer;
 background-color: #28a745;
 color: white;
}


</style>