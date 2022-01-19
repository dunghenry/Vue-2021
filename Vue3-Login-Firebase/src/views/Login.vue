<template>
  <div>
      <div class="login">
          <h1>Login</h1>
          <form @submit.prevent="Login">
            <div class="item">
                <label>Email:</label>
                <input type="text" placeholder="Enter email..." v-model="email" />
            </div>
            <div class="item">
              <label>Password:</label>
              <input type="password" placeholder="Enter password..." v-model="password" />
            </div>
            <div class="item">
              <input type="submit" value="Login" class="btn-submit"/>
              <p>Need an account? <router-link to="/register">Register Here</router-link></p>
            </div>
          </form>
      </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import firebase from 'firebase/compat/app'; //v9
import 'firebase/compat/auth'; //v9
import 'firebase/compat/firestore'; //v9
export default {
  setup(){
    const email = ref("");
    const password = ref("");
    const Login = () =>{
      firebase
      .auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(data =>console.log(data))
      .catch(error =>alert(error.message))
    }
    return{
      email,
      password,
      Login,
    }
  }
}
</script>

<style lang="scss">
.login{
  text-align: left;
  h1{
    text-align: center;
  }
  form{
    width: 350px;
    margin-left: auto;
    margin-right: auto;
    .item{
      margin-bottom: 10px;
      input{
        width: 90%;
        padding: 5px 0;
        margin-top: 5px;
      }
      input.btn-submit{
        width: 100px;
        float: right;
        margin-right: 30px;
        cursor: pointer;
        font-weight: bold;
        color: white;
        border-radius: 5px;
        background-image: linear-gradient(to right, rgba(255, 0, 0, 0.643), rgba(0, 0, 255, 0.705));
      }
      p{
        font-size: 13px;
        a{
          color: blue;
        }
      }
    }
  }
}
</style>