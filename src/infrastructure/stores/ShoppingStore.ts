import { defineStore } from "pinia";
import { computed, ref } from "vue";
import { ProductCart } from "../../domain/models/Product";
import { productService } from "../../domain/services/Product.service";

export const useShoppingStore = defineStore("shopCart", () => {
  // STATE
  const products = ref<ReadonlyArray<ProductCart>>([]);
  const showCart = ref<boolean>(false);
  const totalAmount = ref<number>(0);

  // GETTERS
  const getTotalAmount = computed(() => totalAmount.value);
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
      (product: ProductCart) => productId === product.id
    );

    // IF EXIST ELEMENT IN CART
    if (!existElement) {
      let newProduct: ProductCart = {
        id: productId,
        quantity: 1,
      };
      updateTotalAmount();
      products.value = [...products.value, newProduct];
      return;
    }

    // NOT EXIST IN CART
    products.value.map((product: ProductCart) => {
      if (product.id === productId) {
        product.quantity += 1;
        updateTotalAmount();
        return;
      }
    });
  };

  const deleteProduct = (productId: string) => {
    products.value = products.value.filter(
      (product: ProductCart) => product.id !== productId
    );
    updateTotalAmount();
  };

  const deleteOneProduct = (productId: string) => {
    const index = products.value.findIndex((product: ProductCart) => {
      if (product.id === productId) return true;
    });

    if (products.value[index].quantity === 1) {
      products.value = products.value.filter(
        (product: ProductCart) => product.id !== productId
      );
      updateTotalAmount();
      return;
    }

    products.value.map((product: ProductCart) => {
      if (product.id === productId) {
        product.quantity -= 1;
        updateTotalAmount();
        return;
      }
    });
  };

  const deleteAllProduct = () => {
    products.value = [];
    updateTotalAmount();
  };

  const updateTotalAmount = async () => {
    if (products.value.length === 0) {
      totalAmount.value = 0;
      return;
    }

    let sum = 0;
    products.value.map(async (Product: ProductCart) => {
      productService
        .getProductById(Product.id)
        .then((response) => {
          if (response) {
            sum += response?.price * Product.quantity;
          }
        })
        .finally(() => {
          totalAmount.value = sum;
        });
    });
  };

  return {
    getShowCart,
    getTotalAmount,
    getProducts,
    getQuantityProducts,
    toggleShowCart,
    addProduct,
    deleteOneProduct,
    deleteProduct,
    deleteAllProduct,
  };
});
