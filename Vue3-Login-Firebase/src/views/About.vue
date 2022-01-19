<template>
  <div class="about" id="about">
    <div class="about-img">
      <img src="https://www.w3schools.com/w3images/tablesetting2.jpg" alt="" />
    </div>
    <div class="about-text">
      <h1 class="title">About Catering</h1>
      <br />
      <h3 class="text-center">Tradition since 1889</h3>
      <p class="text-large">
        The Catering was founded in blabla by Mr. Smith in lorem ipsum dolor sit
        amet, consectetur adipiscing elit consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
        minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
        ex ea commodo consequat. Duis aute iruredolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur.We only use
        seasonal ingredients.
      </p>
      <p class="text-gray">
        Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
        officia deserunt mollit anim id est laborum consectetur adipiscing elit,
        sed do eiusmod temporincididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
        aliquip ex ea commodo consequat.
      </p>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.about {
  padding-top: 64px;
  padding-bottom: 64px;
  display: flex;
  border-bottom: 1px solid rgba(128, 128, 128, 0.211);
  .about-img {
    width: 48%;
    padding: 12px 24px;
    img {
      width: 100%;
      border-radius: 4px;
      opacity: 0.75;
    }
  }
  .about-text {
    width: 50%;
    padding: 12px 24px;
    h1.title {
      text-align: center;
      letter-spacing: 4px;
      font-size: 2.5rem;
      margin: 10px 0px;
      font-weight: 300;
    }
    h3.text-center {
      text-align: center;
      letter-spacing: 4px;
      font-weight: 300;
      margin: 10px 0px;
    }
    p.text-large {
      line-height: 24px;
      font-size: 1.2rem;
      margin: 18px 0px;
    }
    p.text-gray {
      color: #757575;
      margin: 18px 0px;
      font-size: 1.2rem;
    }
  }
}
</style>
