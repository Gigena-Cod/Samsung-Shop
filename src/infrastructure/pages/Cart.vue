<script lang="ts">
import { computed } from "vue";
import { useShoppingStore } from "../stores/ShoppingStore";
import ProductDetailCard from "../components/Cart/ProductDetailCard.vue";
import CouponCode from "../components/Cart/CouponCode.vue";
import FinanceCart from "../components/Cart/FinanceCart.vue";

export default {
  name: "CartView",
  components: {
    ProductDetailCard,
    CouponCode,
    FinanceCart,
  },
  setup() {
    const ShoppingStore = useShoppingStore();

    const discountPrice = (price: number, discount: number) => {
      let percentage = 1 - discount / 100;
      return (price * percentage).toFixed(2);
    };

    const deleteProduct = (id: string) => ShoppingStore.deleteProduct(id);

    const ProductsInCart = computed(() => ShoppingStore.getProducts);

    return {
      ProductsInCart,
      discountPrice,
      deleteProduct,
    };
  },
};
</script>

<template>
  <div class="w-full p-4 cart__view">
    <div
      class="grid w-full md:grid-cols-3 md:gap-8 pt-16 max-w-screen-2xl mx-auto cart__content"
    >
      <div class="w-full md:col-span-2 list__products">
        <div class="font-bold border-b pb-4 text-3xl title_list__products">
          MI CARRITO
        </div>
        <div class="w-full grid grid-cols-1 content__list__products">
          <product-detail-card
            :key="index"
            v-for="(product, index) in ProductsInCart"
            :Product="product"
          />
        </div>
        <div v-if="ProductsInCart.length === 0" class="text-lg py-4 emptyCart">
          Su carrito esta vacio
        </div>
      </div>
      <div class="w-full md:col-span-1 py-12 border-t grid grid-cols-1 gap-y-8  md:border-t-0 products">
        <CouponCode />
        <FinanceCart />
      </div>
    </div>
  </div>
</template>
