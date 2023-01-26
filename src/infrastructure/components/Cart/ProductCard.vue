<template>
  <SimpleLoadingComponent v-if="loading" />
  <div v-else class="p-4 h-40 max-w-lg border rounded flex product__cart">
    <div class="w-2/5 flex items-center image">
      <img class="w-full h-fit m-auto" :src="Product?.pictures[0]" alt="Image " />
    </div>
    <div class="w-2/5 flex flex-col description">
      <span
        class="font-bold text-black w-full h-14 overflow-hidden text-ellipsis line-clamp name"
      >
        {{ Product?.name }}
      </span>
      <div class="price">
        <div class="flex gap-2 discount">
          <span class="text-gray-500 line-through"> ${{ Product?.price }} </span>
          <span
            class="text-white rounded bg-black px-2 h-6 flex items-center justify-center text-xs"
          >
            {{ Product?.discount }}% OFF
          </span>
        </div>
        <span class="text-black font-bold"> ${{ discount }} </span>
      </div>

      <buttons :quantity="quantity" :id="Product?.id" />
    </div>
    <div class="w-1/5 flex flex-col justify-start items-end delete">
      <div @click="deleteProduct" class="w-5 h-fit cursor-pointer icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 14 17"
          class="sc-iWFTwQ imHBBB"
        >
          <path
            d="M13.664 1.819H9.482V0H4.23v1.819H.05v3.32h1.59v9.752c0 .997.817 1.807 1.821 1.807h6.792c1.004 0 1.822-.81 1.822-1.807V5.14h1.59V1.82zM5.038.8h3.636V1.82H5.038V.8zm6.228 14.09c0 .555-.455 1.006-1.014 1.006H3.46c-.559 0-1.014-.451-1.014-1.006V5.14h8.82v9.752zm1.59-10.553h-12V2.62h12v1.718z"
            transform="translate(-328 -133) translate(328 133)"
          ></path>
        </svg>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, ref, watchEffect } from "vue";
import { DetailProduct } from "../../../domain/models/Product";

import { useShoppingStore } from "../../stores/ShoppingStore";
import Buttons from "./Buttons.vue";
import { productService } from "../../../domain/services/Product.service";  
import SimpleLoadingComponent from '../Spinners/SimpleLoadingComponent.vue' 
export default {
  components: { Buttons, SimpleLoadingComponent },
  name: "ProductCard",
  props: {
    id: {
      required: true,
      type: String,
    },
    quantity: {
      required: true,
      type: Number,
    },
  },
  setup(props) {
    const ShoppingStore = useShoppingStore();
    let Product = ref<DetailProduct>();
    let loading = ref(true);

    const getProductById = async () => {
      Product.value = await productService.getProductById(props.id);
      if (Product.value) {
        loading.value = false;
      }
    };
    
    const deleteProduct = () => {
      ShoppingStore.deleteProduct(props.id);
    };

    const discount = computed(() => {
      if (Product.value) {
        let { price, discount } = Product.value;
        let priceUpdated = price - (discount * price) / 100;
        return priceUpdated;
      }
      return 0;
    });

    watchEffect(async () => {
      await getProductById();
    });

    return {
      Product,
      deleteProduct,
      discount,
      loading,
    };
  },
};
</script>
