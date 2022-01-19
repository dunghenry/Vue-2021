import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9

const firebaseConfig = {
  apiKey: "AIzaSyDiWwsFdB8SgtgZhaZlSHtnEDhwyocUwRw",
  authDomain: "vue3-firebase-9b68e.firebaseapp.com",
  projectId: "vue3-firebase-9b68e",
  storageBucket: "vue3-firebase-9b68e.appspot.com",
  messagingSenderId: "1020593923422",
  appId: "1:1020593923422:web:b1fbd13d41ba4fe2475bcf"
};

export default firebase.initializeApp(firebaseConfig);

createApp(App).use(router).mount('#app')
