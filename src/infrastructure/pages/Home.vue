<script lang="ts">
import ProductList from "../components/Products/ProductList.vue";

export default {
  components: { ProductList },
  name: "HomeView",
  setup() {},
};
</script>

<template>
  <div class="home__view">
    <ProductList />
  </div>
</template>
