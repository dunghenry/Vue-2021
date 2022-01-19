<template>
  <div class="screen">
    <div
      class="screen__inner"
      :style="{
        width: `${
          ((((1000 - 16 * 4) / Math.sqrt(cardsContext.length) - 16) * 3) / 4 +
            16) *
          Math.sqrt(cardsContext.length)
        }px`,
      }"
    >
      <Card
        v-for="(card, index) in cardsContext"
        :key="index"
        :imgBackFaceUrl="`images/${card}.png`"
        :card="{ index, value: card }"
        @onFlip="checkRule($event)"
        :ref="`card-${index}`"
        :cardsContext="cardsContext"
      />
    </div>
  </div>
</template>

<script>
import Card from "./Card.vue";
export default {
  props: {
    cardsContext: {
      type: Array,
      default: function () {
        return [];
      },
    },
  },
  name: "InteractScreen",
  components: {
    Card,
  },
  data() {
    return {
      rules: [],
    };
  },
  methods: {
    checkRule(card) {
      if (this.rules.length === 2) return false;
      this.rules.push(card);

      console.log(this.rules);

      if (
        this.rules.length === 2 &&
        this.rules[0].value === this.rules[1].value
      ) {
        console.log("Right...");

        //Add class disable
        this.$refs[`card-${this.rules[0].index}`].onEnabledDisableMode();
        this.$refs[`card-${this.rules[1].index}`].onEnabledDisableMode();

        //! Reset arr
        this.rules = [];

        const disableElements = document.querySelectorAll(".card.disabled");
        console.log(disableElements);

        if (
          disableElements &&
          disableElements.length === this.cardsContext.length - 2
        ) {
          setTimeout(() => {
            this.$emit("onFinish");
          }, 1000);
        }
      } else if (
        this.rules.length === 2 &&
        this.rules[0].value !== this.rules[1].value
      ) {
        console.log("Wrong...");
        setTimeout(() => {
          this.$refs[`card-${this.rules[0].index}`].onFlipBackCard();
          this.$refs[`card-${this.rules[1].index}`].onFlipBackCard();
          //! Reset arr
          this.rules = [];
        }, 800);
      } else return false;
    },
  },
};
</script>

<style scoped>
.screen {
  width: 100%;
  height: 130vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  background-color: var(--dark);
  color: var(--light);
}
.screen__inner {
  width: calc(424px);
  display: flex;
  flex-wrap: wrap;
}
</style>
