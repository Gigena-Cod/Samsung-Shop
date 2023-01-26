<script lang="ts">
import { ref, watchEffect } from "vue";
import { useRoute } from "vue-router";
import { DetailProduct } from "../../domain/models/Product";
import { productService } from "../../domain/services/Product.service";

import LoadingComponent from "../components/Spinners/LoadingComponent.vue";
import Gallery from "../components/DetailProduct/Gallery.vue";
import Information from "../components/DetailProduct/Information.vue";

export default {
  name: "DetailProductView",
  components: {
    LoadingComponent,
    Gallery,
    Information,
  },

  setup() {
    let Product = ref<DetailProduct>();
    let loading = ref(true);

    const route = useRoute();

    const getProductById = async () => {
      let productId;

      if (Array.isArray(route.params.productId)) {
        productId = route.params.productId[0];
      } else {
        productId = route.params.productId;
      }
      Product.value = await productService.getProductById(productId);
      if (Product.value) {
        loading.value = false;
      }
    };

    watchEffect(async () => {
      await getProductById();
    });

    return {
      Product,
      loading,
    };
  },
};
</script>

<template>
  <div class="w-full p-4 detail__view">
    <LoadingComponent v-if="loading" />
    <div
      v-else
      class="mx-auto w-full max-w-screen-2xl grid grid-cols-1 lg:grid-cols-5 gap-16 home__content"
    >
      <div
        class="col-span-full rounded select-none text-white p-4 gap-4 flex flex-col items-center sm:flex-row justify-between bg-black min-h-20 max-w-screen-2xl font-bold banner"
      >
        <span class="text-2xl">
          {{ Product?.name }}
        </span>
        <div
          class="flex w-full sm:w-auto justify-between gap-8 items-center button__buy__price"
        >
          <span class="text-xl"> ${{ Product?.price }} </span>
          <RouterLink
            to="/"
            class="h-10 cursor-pointer rounded flex items-center bg-[#2189FF] px-4 buy__button"
          >
            Regresar
          </RouterLink>
        </div>
      </div>
      <Gallery :fees="Product?.fees" :pictures="Product?.pictures" />
      <Information
        :fees="Product?.fees"
        :code="Product?.code"
        :discount="Product?.discount"
        :id="Product?.id"
        :price="Product?.price"
        :name="Product?.name"
      />
    </div>
  </div>
</template>
