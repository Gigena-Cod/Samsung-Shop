<template>
  <div
    class="w-full sticky top-0 z-50 px-8 shadow-lg bg-white border-b h-16 header__container"
  >
    <div
      class="max-w-screen-2xl h-full mx-auto flex justify-between items-center header__content"
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
