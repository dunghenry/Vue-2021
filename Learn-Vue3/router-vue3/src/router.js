import {createRouter, createWebHistory} from 'vue-router';
import Home from './pages/home.vue';
import Transaction from './pages/transaction.vue';
import Budgets from './pages/budgets.vue';
import Reports from './pages/reports.vue';
import Settings from './pages/settings.vue';
import Transaction_Details from './pages/transaction-details.vue';
import NotFound from './pages/notfound.vue';
const routes = [
  { path: '/', component: Home},
  { path: '/success', name: "transactions-route", component: Transaction},
  { path: '/transactions/:id',name: 'transaction-details-route', component:  Transaction_Details},
  { path: '/budgets', component: Budgets},
  { path: '/reports', component: Reports},
  { path: '/settings', component: Settings},
  { path: '/:pathMatch(.*)*', component: NotFound},
]
const router = createRouter({
  // 4. Provide the history implementation to use. We are using the hash history for simplicity here.
  history: createWebHistory(process.env.BASE_URL),
  routes, // short for `routes: routes`
})

export default router;