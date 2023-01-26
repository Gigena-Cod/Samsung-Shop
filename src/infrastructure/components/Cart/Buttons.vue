<script lang="ts">
import { useShoppingStore } from "../../stores/ShoppingStore";
export default {
  name: "Buttons",
  props: {
    id: {
      type: String,
      required: true,
      default: "",
    },
    quantity: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup(props) {
    const ShoppingStore = useShoppingStore();

    const addProduct = () => {
      ShoppingStore.addProduct(props.id);
    };
    const deleteOneProduct = () => {
      ShoppingStore.deleteOneProduct(props.id);
    };

    return {
      addProduct,
      deleteOneProduct,
    };
  },
};
</script>

<template>
  <div class="text-black flex gap-4 buttons">
    <div
      @click="addProduct"
      class="border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer button"
    >
      +
    </div>
    <div class="flex items-center w-8 justify-center counted">{{ quantity }}</div>
    <div
      @click="deleteOneProduct"
      class="border rounded-full w-8 h-8 flex items-center justify-center cursor-pointer button"
    >
      -
    </div>
  </div>
</template>
