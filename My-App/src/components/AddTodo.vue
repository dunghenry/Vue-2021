<template>
  <form @submit="addItem">
    <input type="text" placeholder="Thêm việc mới" v-model="title"/>
    <!-- @input="check() -->
    <input type="submit" value="Add" class="add-btn" />
  </form>
</template>

<script>
import {ref} from 'vue'
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'AddTodo',
  setup(props, context) {
    const title = ref('')
    // const check = () =>{
    //     console.log(title.value)
    // }
    const addItem = event =>{
        event.preventDefault();
        const newItem = {
            id: uuidv4(),
            title: title.value,
            computed: false
        }
        context.emit('add-todo', newItem)
        title.value =''
    }
    return{
        title,
        // check
        addItem
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
}
input[type='text'] {
  flex: 10;
  padding: 5px;
}
input[type='submit'] {
  padding: 5px;
  flex: 2;
}</style
>>
