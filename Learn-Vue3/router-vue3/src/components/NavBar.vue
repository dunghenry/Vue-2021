<template>
    <nav class="nav">
        <router-link to="/">Overview</router-link>
        <router-link :to="{name: 'transactions-route'}">Transaction</router-link>
        <router-link to="/budgets">Budgets</router-link>
        <router-link to="/reports">Reports</router-link>
        <router-link to="/settings">Settings</router-link>
    </nav>
</template>

<script>
export default {

}
</script>

<style>

</style>