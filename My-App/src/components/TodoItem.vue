<template>
  <p :class="['todo-item', todoProps.completed ? 'is-completed' : '']">
    <input
      type="checkbox"
      :checked="todoProps.completed"
      @change="markItemCompleted"
    />
    {{ todoProps.title }}
    <button id="del-btn" @click="deleteItem()">Delete</button>
  </p>
</template>

<script>
// import {ref} from 'vue'
export default {
  name: 'TodoItem',
  props: ['todoProps'],
  setup(props, context) {
    const markItemCompleted = () => {
      // console.log(props.todoProps);
        context.emit('item-completed', props.todoProps.id)
    }
    const deleteItem =()=>{
        context.emit('delete-item', props.todoProps.id)
    }
    return {
      markItemCompleted,
      deleteItem
    }
  }
}
</script>

<style scoped>
* {
  margin: 0;
}
p {
  color: black;
  font-size: 20px;
  background: #f4f4f4f4;
  padding-bottom: 30px;
  padding-top: 25px;
  border-bottom: 1px solid rgba(128, 128, 128, 0.143);
}
button {
  cursor: pointer;
  float: right;
  background: red;
  padding: 7px 20px;
  color: white;
  border: none;
  outline: none;
  border-radius: 4px;
}
.is-completed {
  text-decoration: line-through;
}
</style>