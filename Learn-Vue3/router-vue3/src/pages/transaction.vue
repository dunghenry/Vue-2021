<template>
  <div>
      <h1>This is Transaction Page</h1>
      <div v-if="transactions.length">
        <div class="item" v-for="transaction in transactions" :key="transaction.id">
          <router-link :to="{name: 'transaction-details-route', params: {id: transaction.id},}">{{transaction.name}}</router-link>
          <div class="price">Price: {{transaction.price}}</div>
        </div>
      </div>
      <div v-else>
        Loading transactions ...
      </div>
  </div>
</template>

<script>
export default {
  data(){
    return{
      transactions: [
        // {
        //   id: 1,
        //   name: "Đi siêu thị",
        //   price: 1000,
        // },
        // {
        //   id: 2,
        //   name: "Đi chơi với gấu",
        //   price: 2000,
        // },
        // {
        //   id: 3,
        //   name: "Đi chơi game",
        //   price: 3000,
        // },
      ]
    }
  },
  created() {

    fetch("http://localhost:3000/transactions")
      .then(response => response.json())
      .then(data => this.transactions = data);
  }
} 
</script>

<style>

</style>