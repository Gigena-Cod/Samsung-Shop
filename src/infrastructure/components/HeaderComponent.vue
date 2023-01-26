<template>
  <div class="w-full bg-white border-b h-16 header__container">
    <div
      class="max-w-screen-2xl h-full mx-auto px-8 flex justify-between items-center header__content"
    >
      <router-link to="/" class="logo">
        <img src="../../assets/samsung-logo.png" alt="" />
      </router-link>

      <Cart />
    </div>
  </div>
</template>

<script lang="ts">
import Cart from "./Cart/Cart.vue";

export default {
  name: "HeaderComponent",
  components: { Cart },
  setup() {},
};
</script>
