<script lang="ts">
import { computed } from "@vue/runtime-core";
import { useShoppingStore } from "../../stores/ShoppingStore";
export default {
  name: "Buttons",
  props: {
    id: {
      type: String,
      required: true,
    },
  },
  setup(props) {
    const ShoppingStore = useShoppingStore();

    const Quantity = computed(() => ShoppingStore.getProductById(props.id));

    const addProduct = () => {
      ShoppingStore.addProduct(props.id);
    };
    const deleteOneProduct = () => {
      ShoppingStore.deleteOneProduct(props.id);
    };

    return {
      addProduct,
      deleteOneProduct,
      Quantity,
    };
  },
};
</script>

<template>
  <div class="text-black flex gap-4 buttons">
    <div
      @click="addProduct"
      class="border rounded-full w-8 h-8 flex items-center justify-center button"
    >
      +
    </div>
    <div class="flex items-center justify-center counted">{{ Quantity }}</div>
    <div
      @click="deleteOneProduct"
      class="border rounded-full w-8 h-8 flex items-center justify-center button"
    >
      -
    </div>
  </div>
</template>
