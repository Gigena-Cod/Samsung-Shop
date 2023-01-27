<script lang="ts">
import ModalComponent from "../components/ModalComponent.vue";
import ProductList from "../components/Products/ProductList.vue";

export default {
  components: { ProductList, ModalComponent },
  name: "HomeView",
  setup() {   
  },
};
</script>

<template>
  <div class="home__view">
    <ProductList />
  </div>
</template>
