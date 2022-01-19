<template>
  <div class="copyright">
    <p>
      This game owned by Tran Dung in Vue 3 course for begginers -
      <a href="https://github.com/trandung2k1/Pokemon-Vue3">view here</a>
    </p>
  </div>
</template>

<script>
export default {};
</script>

<style>
.copyright {
  position: fixed;
  left: 50%;
  transform: translateX(-50%);
  bottom: 0rem;
  color: var(--light);
  z-index: 3;
  font-size: 1.5rem;
}
.copyright a {
  color: #f4dc26;
}
</style>
