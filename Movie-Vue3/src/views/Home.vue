<template>
  <div class="home">
    <div class="feature-card">
      <router-link to="/movie/tt0409591">
        <img src="../assets/img.jpg" alt="Naruto Poster" class="feature-img" />
        <div class="detail">
          <h3>Naruto</h3>
          <p>
            Naruto Uzumaki, a mischievous adolescent ninja, struggles as he
            searches for recognition and dreams of becoming the Hokage, the
            village's leader and strongest ninja.
          </p>
        </div>
      </router-link>
    </div>
    <form @submit.prevent="SearchMovies()" class="search-box">
      <input
        type="text"
        placeholder="What are you looking for?"
        v-model="search"
      />
      <input type="submit" value="Search" />
    </form>
    <div
      class="movies-list"
      style="display: flex; flex-wrap: wrap; margin: 0px 8px;"
    >
      <div
        class="movie"
        v-for="movie in movies"
        :key="movie.imdbID"
        style="width: 75%; padding: 16px 8px; margin-left: auto; margin-right: auto; font-weight: bold; margin-top: 15  px"
      >
        {{ movie.Title }}
        <router-link
          :to="'/movie/' + movie.imdbID"
          class="movie-link"
          style="display: flex; flex-direction: column; height: 100%;"
        >
          <div
            class="product-image"
            style="position: relative; display: block;"
          >
            <img
              v-bind:src="movie.Poster"
              alt="Movie Poster"
              class="img"
              style="
                display: block;
                width: 100%;
                height: 290px;
                object-fit: cover;
                margin-top: 10px;
              "
            />
            <div
              class="type"
              style="
                position: absolute;
                padding: 8px 16px;
                background-color: #42b883;
                color: #fff;
                bottom: 10px;
                left: 0px;
                text-transform: capitalize;
                border-top-right-radius: 5px;
                border-bottom-right-radius: 5px;
              "
            >
              {{ movie.Type }}
            </div>
          </div>
          <div
            class="details"
            style="
              background-color: #496583;
              padding: 16px 8px;
              flex: 1 1 100%;
              border-radius: 0px 0px 8px 8px;
            "
          >
            <p class="year" style="color: #aaa; font-size: 14px;">
              {{ movie.Year }}
            </p>
            <h4 style="color: #fff; font-weight: 600; font-size: 13px; letter-spacing: 0.5px">
              {{ movie.Title }}
            </h4>
          </div>
        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import env from '@/env.js'
export default {
  setup() {
    const search = ref('')
    const movies = ref([])
    const SearchMovies = () => {
      if (search.value != '') {
        fetch(`http://www.omdbapi.com/?apikey=${env.apikey}&s=${search.value}`)
          .then(async(response) => await response.json())
          .then((data) => {
            movies.value = data.Search;
            search.value = '';
            //  console.log(data);
          })
      }
    }
    return {
      search,
      movies,
      SearchMovies,
    }
  },
}
</script>
<style lang="scss">
.home {
  .feature-card {
    position: relative;
    .feature-img {
      width: 100%;
      display: block;
      height: 450px;
      object-fit: fill;
      position: relative;
      z-index: 0;
    }
  }
  .detail {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
    padding: 16px;
    z-index: 1;
  }
  h3 {
    color: #fff;
    margin-bottom: 16px;
  }
  p {
    color: #ffffff;
  }
}
.search-box {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 16px;
  input {
    display: block;
    appearance: none;
    border: none;
    outline: none;
    background: none;
    &[type='text'] {
      width: 100%;
      color: #fff;
      background-color: #496583;
      font-size: 20px;
      padding: 10px 16px;
      border-radius: 8px;
      margin-bottom: 15px;
      transition: 0.4s;
      &::placeholder {
        color: #f3f3f3;
      }
      &:focus {
        box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.2);
      }
    }
    &[type='submit'] {
      width: 100%;
      max-width: 300px;
      background-color: #42b883;
      padding: 16px;
      border-radius: 8px;
      color: #fff;
      font-size: 20px;
      text-transform: uppercase;
      transition: 0.4s;
      &:active {
        background-color: #3b8070;
      }
    }
  }
}
</style>
