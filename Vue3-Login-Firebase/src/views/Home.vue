<template>
  <div class="home">
    <h1>Well come {{ name }}</h1>
    <button class="logout" @click="Logout">Logout</button>
    <nav>
      <img src="https://www.w3schools.com/w3images/hamburger.jpg" alt="" />
      <div class="title">
        <h2>Le Catering</h2>
      </div>
    </nav>
  </div>
</template>

<script>
// @ is an alias to /src
import { ref, onBeforeMount } from "vue";
import firebase from "firebase/compat/app"; //v9
import "firebase/compat/auth"; //v9
import "firebase/compat/firestore"; //v9
export default {
  setup() {
    const name = ref("");
    onBeforeMount(() => {
      const user = firebase.auth().currentUser;
      if (user) {
        name.value = user.email.split("@")[0];
        console.log(user.email);
      }
    });
    const Logout = () => {
      firebase
        .auth()
        .signOut()
        .then(() => console.log("Signed Out"))
        .catch((err) => alert(err.message));
    };
    return {
      name,
      Logout,
    };
  },
};
</script>

<style lang="scss">
nav {
  width: 100%;
  position: relative;
  img {
    height: 800px;
    width: 100%;
  }
  .title {
    position: absolute;
    bottom: 9%;
    left: 3%;
    font-size: 1.5rem;
    letter-spacing: 5px;
    h2 {
      color: rgb(140, 133, 133);
      font-weight: 400;
    }
  }
}
.logout {
  width: 100px;
  padding: 5px 0;
  margin-top: 10px;
  margin-bottom: 10px;
  margin-right: 30px;
  cursor: pointer;
  font-weight: bold;
  color: white;
  border-radius: 5px;
  background-image: linear-gradient(
    to right,
    rgba(255, 0, 0, 0.643),
    rgba(0, 0, 255, 0.705)
  );
}
</style>
