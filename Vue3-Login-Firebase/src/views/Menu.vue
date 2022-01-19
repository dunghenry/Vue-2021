<template>
  <div id="menu" class="menu">
    <div class="menu-text">
      <h2 class="title">Our Menu</h2>
      <br />
      <h4>Bread Basket</h4>
      <p class="text-gray">
        Assortment of fresh baked fruit breads and muffins 5.50
      </p>
      <br />
      <h4>Honey Almond Granola with Fruits</h4>
      <p class="text-gray">
        Natural cereal of honey toasted oats, raisins, almonds and dates 7.00
      </p>
      <br />
      <h4>Belgian Waffle</h4>
      <p class="text-gray">Vanilla flavored batter with malted flour 7.50</p>
      <br />
      <h4>Scrambled eggs</h4>
      <p class="text-gray">
        Scrambled eggs, roasted red pepper and garlic, with green onions 7.50
      </p>
      <br />
      <h4>Blueberry Pancakes</h4>
      <p class="text-gray">With syrup, butter and lots of berries 8.50</p>
      <br />
    </div>
    <div class="menu-img">
      <img src="https://www.w3schools.com/w3images/tablesetting.jpg" alt="" />
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
.menu {
    padding: 64px 0px;
    display: flex;
    border-bottom: 1px solid rgba(128, 128, 128, 0.211);
    .menu-text {
      width: 50%;
      h2.title {
        font-size: 2.5rem;
        letter-spacing: 4px;
        font-weight: 300;
        text-align: center;
        margin: 10px 0px;
      }
      h4 {
        font-size: 1.3rem;
        letter-spacing: 4px;
        font-weight: 300;
        margin: 10px 0px;
      }
      p.text-gray {
        margin: 20px 0px;

        color: gray;
      }
    }
    .menu-img {
      padding: 8px 24px;
      img {
        opacity: 0.75;
        border-radius: 4px;
      }
    }
  }
</style>
