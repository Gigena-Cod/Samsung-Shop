<template>
  <div class="w-full rounded px-6 py-10 grid grid-cols-1 border discount">
    <div class="flex font-bold justify-between price">
      <span> TOTAL </span>
      <span> ${{ getTotalAmount }} </span>
    </div>
    <hr class="w-full bg-black my-4" />
    <div class="grid grid-cols-1 gap-4 buttons">
      <div
        v-if="getTotalAmount > 0"
        @click="finalizePurchase"
        class="flex h-10 items-center justify-center w-full hover:shadow-lg transition-all duration-300 ease-in-out cursor-pointer bg-[#2189ff] text-white rounded px-4 buy__button"
      >
        FINALIZAR COMPRA
      </div>
      <router-link
        to="/"
        class="flex h-10 items-center justify-center w-full bg-[#2189ff] hover:shadow transition-all duration-200 ease-in-out cursor-pointer text-white rounded px-4 back__button"
        >CONTINUAR COMPRANDO</router-link
      >
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "@vue/runtime-core";
import { useRouter } from "vue-router";

import { useShoppingStore } from "../../stores/ShoppingStore";
export default {
  name: "FinanceCart",
  setup() {
    const route = useRouter();
    const ShoppingStore = useShoppingStore();

    const finalizePurchase = () => {
      alert("Gracias por tu compra");
      ShoppingStore.deleteAllProduct();
      setTimeout(() => {
        route.push("/");
      }, 3000);
    };

    const getTotalAmount = computed(() => ShoppingStore.getTotalAmount);

    return {
      finalizePurchase,
      getTotalAmount,
    };
  },
};
</script>
