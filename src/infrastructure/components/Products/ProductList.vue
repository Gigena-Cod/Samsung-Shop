<script lang="ts">
import { ref } from "@vue/reactivity";
import { onMounted } from "vue";


import LoadingComponent from "../Spinners/LoadingComponent.vue";
import { productService } from "../../../domain/services/Product.service";
import { Product } from "../../../domain/models/Product";
import ProductCard from '../Products/ProductCard.vue';


export default {
  name: "ProductList",
  components: { ProductCard,LoadingComponent},
  setup() {
    let loading = ref(true);
    const Products = ref<Product[]>([]);

    onMounted(async () => {
      Products.value = await productService.getProducts();
      loading.value=false
    });

    return { Products,loading };
  },
};
</script>

<template>
  <div class="p-8 w-full products__container">
    
    <LoadingComponent v-if="loading"/>
    <div v-else
      class="mx-auto gap-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-screen-2xl"
    >
   
      <ProductCard v-for="(product, index) in Products" :product="product" :key="index" />
    </div>
  </div>
</template>
