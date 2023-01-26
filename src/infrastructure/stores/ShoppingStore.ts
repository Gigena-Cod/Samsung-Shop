import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ProductCart } from "../../domain/models/Product";

export const useShoppingStore = defineStore("shopCart", () => {
  // STATE
  const products = ref<ReadonlyArray<ProductCart>>([
    {
      id: "af9fdf4a-9511-11ed-a1eb-0242ac120002",
      quantity: 1,
    },
  ]);
  const showCart = ref<boolean>(false);

  // GETTERS
  const getShowCart = computed(() => showCart.value);
  const getProducts = computed(() => products.value);

  const getQuantityProducts = computed(() => products.value.length);

  // ACTIONS
  const toggleShowCart = () => {
    showCart.value = !showCart.value;
  };
  const addProduct = (productId: string) => {
    // VERIFY EXIST PRODUCT IN CART
    const existElement = products.value.find(
      (product: ProductCart, index: number) => productId === product.id
    );

    // IF EXIST ELEMENT IN CART
    if (!existElement) {
      console.log("Agregando nuevo producto");
      let newProduct: ProductCart = {
        id: productId,
        quantity: 1,
      };
      products.value = [...products.value, newProduct];
      return;
    }

    // NOT EXIST IN CART
    products.value.map((product: ProductCart) => {
      if (product.id === productId) {
        product.quantity += 1;
        return;
      }
    });
  };

  const deleteProduct = (productId: string) => {
    products.value = products.value.filter(
      (product: ProductCart) => product.id !== productId
    );
  };

  const deleteOneProduct = (productId: string) => {
    const index = products.value.findIndex((product: ProductCart) => {
      if (product.id === productId) return true;
    });

    if (products.value[index].quantity === 1) {
      products.value = products.value.filter(
        (product: ProductCart) => product.id !== productId
      );
      return;
    }

    products.value.map((product: ProductCart) => {
      if (product.id === productId) {
        product.quantity -= 1;
        return;
      }
    });
  };

  const deleteAllProduct = () => {
    products.value = [];
  };

  return {
    getShowCart,
    getProducts,
    getQuantityProducts,
    toggleShowCart,
    addProduct,
    deleteOneProduct,
    deleteProduct,
    deleteAllProduct,
  };
});
