<template>
  <div>
      <h1>This is transaction details</h1>
      <div v-if="transaction">
          <h2>Name: {{transaction.name}}</h2>
          <p>Price: {{transaction.price}}</p>
      </div>
      <div v-else>
        <p>Loading transaction {{$route.params.id}}</p>
      </div>
      <!-- <p>{{$route.params.id}}</p> -->
  </div>
</template>

<script>
export default {
  data(){
    return{
      transaction: null,
    }
  },
  created(){
    fetch(`http://localhost:3000/transactions/${this.$route.params.id}`)
      .then(response => response.json())
      .then(data => this.transaction = data)
      // .then(() => console.log(this.transaction))
  }
}
</script>

<style>

</style>