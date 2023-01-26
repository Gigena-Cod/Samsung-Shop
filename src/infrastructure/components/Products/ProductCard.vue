<template>
  <div
    className="hover:shadow-lg transition-all duration-300 ease-out p-4 border rounded-xl card__product"
  >
    <div className="flex justify-between discount__plans">
      <div
        className=" rounded-2xl flex items-center font-bold text-white bg-[#2189FF] h-8 px-3 discounts"
      >
        -{{ product.discount }}%
      </div>
      <div className="flex flex-col items-center border rounded-md shadow-md plans">
        <span className="pt-1 text-xs font-bold leading-none">hasta</span>
        <span className="leading-none text-[#2189FF] text-4xl font-bold">
          {{ product.fees }}
        </span>
        <span className="leading-none  pb-1 text-[#2189FF] font-bold"> cuotas </span>
        <span
          className="w-full px-4 text-sm font-semibold text-center text-white bg-black rounded-md"
        >
          sin interés
        </span>
      </div>
    </div>
    <div className="flex items-center justify-center h-80 image__container">
      <router-link
        :to="{
          name: 'detailProduct',
          params: { productId: product.id, productName: product.name },
        }"
        className=" image"
      >
        <img
          className="w-full h-fit max-h-80"
          :src="product.picture"
          :alt="`Image ${product.name}`"
        />
      </router-link>
    </div>
    <span
      className=" h-14 overflow-hidden text-xl font-bold text-ellipsis line-clamp title"
    >
      {{ product.name }}
    </span>
    <span className="text-sm text-gray-500 subtitle">{{ product.code }}</span>
    <hr className="w-full mt-4 mb-3 " />
    <div className="flex justify-center gap-6 send__images">
      <img
        src="https://samsungar.vtexassets.com/_v/public/assets/v1/published/samsungbr.samsung-store@1.424.2/public/react/e125a661dee99f25f97aaa312e0dc663.png"
        alt=""
      />
      <img
        src="https://samsungar.vtexassets.com/_v/public/assets/v1/published/samsungbr.samsung-store@1.424.2/public/react/78cf68a962dc9dff8f45eede4e9bbf88.png"
        alt=""
      />
    </div>
    <div
      @click="addToCartProduct()"
      className="flex items-center justify-center h-10 mt-4 font-semibold text-white transition-all duration-300 ease-in-out bg-black border-2 border-black cursor-pointer select-none rounded-2xl hover:bg-white hover:text-black buy__button"
    >
      Comprar
    </div>
  </div>
</template>

<script lang="ts">
import { PropType } from "vue";
import { Product } from "../../../domain/models/Product";
import { useShoppingStore } from "../../stores/ShoppingStore";

export default {
  name: "ProductCard",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
  setup(props) {
    const ShoppingStore = useShoppingStore();

    const addToCartProduct = () => {
      ShoppingStore.addProduct(props.product.id);
    };

    return {
      addToCartProduct,
    };
  },
};
</script>
