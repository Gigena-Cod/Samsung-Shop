<template>
  <SimpleLoadingComponent v-if="loading" />
  <div v-else class="p-4 border-b product__container">
    <div class="grid grid-cols-6 gap-4 lg:h-32 product_content">
      <img
        class="col-span-2 lg:col-span-1 lg:w-fit"
        :src="ProductData?.pictures[0]"
        alt=""
      />
      <div
        class="col-span-3 grid grid-cols-1 lg:flex lg:items-center lg:justify-between gap-2 information"
      >
        <span class="line-clamp max-h-12 overflow-hidden information__name">{{
          ProductData?.name
        }}</span>
        <div class="flex gap-2 information__price">
          <span class="text-gray-400 line-through information__price">{{
            currencyMoney(ProductData?.price)
          }}</span>
          <span class="font-bold information__price_discount">{{ priceUpdated }}</span>
        </div>
        <Buttons :quantity="Product.quantity" :id="Product.id" />
      </div>

      <div
        class="col-span-1 w-full flex justify-end lg:items-center lg:h-full h-fit cursor-pointer deleteButton"
      >
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 14 17" class="w-fit h-6">
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
import { computed, PropType } from "@vue/runtime-core";

import Buttons from "./Buttons.vue";
import { DetailProduct, ProductCart } from "../../../domain/models/Product";
import { ref, watchEffect } from "vue";
import { productService } from "../../../domain/services/Product.service";
import SimpleLoadingComponent from "../Spinners/SimpleLoadingComponent.vue";
export default {
  name: "ProductDetailCard",
  components: { Buttons, SimpleLoadingComponent },
  props: {
    Product: {
      required: true,
      type: Object as PropType<ProductCart>,
    },
  },
  filters: {
    currencyMoney(value: number) {
      return "$" + value.toFixed(0);
    },
  },
  setup(props) {
    let ProductData = ref<DetailProduct>();
    let loading = ref(true);

    const getProductById = async () => {
      ProductData.value = await productService.getProductById(props.Product.id);
      if (ProductData.value) {
        loading.value = false;
      }
    };

    watchEffect(async () => {
      await getProductById();
    });

    const currencyMoney = (value: number | undefined) => {
      if (value) return "$" + value.toFixed(0);
    };

    const priceUpdated = computed(() => {
      if (ProductData.value) {
        let priceUpdated: number =
          ProductData.value?.price -
          (ProductData.value?.discount * ProductData.value?.price) / 100;

        return currencyMoney(priceUpdated);
      }
      return 0;
    });

    return {
      currencyMoney,
      priceUpdated,
      ProductData,
      loading,
    };
  },
};
</script>
