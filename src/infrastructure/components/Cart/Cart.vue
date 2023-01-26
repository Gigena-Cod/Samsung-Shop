<template>
  <div class="relative cart__container">
    <div @click="toggleShow" class="flex w-auto relative cursor-pointer Cart">
      <div class="icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="29"
          height="29"
          viewBox="0 0 29 29"
          alt="cart"
          class="w-10 h-fit text-dark"
        >
          <g fill="none" fill-rule="evenodd">
            <g fill="currentcolor">
              <path
                d="M9.1 17.84l-1.598-7.39h16.127l-2.452 7.39H9.1zm11.994 6.274c0 .508-.395.922-.883.922-.487 0-.884-.414-.884-.922 0-.51.397-.924.884-.924.488 0 .883.414.883.924zm-11.977.922c-.487 0-.884-.414-.884-.922 0-.51.397-.924.884-.924s.883.414.883.924c0 .508-.396.922-.883.922zm13.362-6.104l2.997-9.034c.084-.251.046-.53-.103-.746-.146-.216-.385-.346-.64-.346H7.147L6.132 4.12c-.08-.375-.399-.64-.767-.64H1.946c-.434 0-.786.367-.786.822 0 .453.352.822.786.822h2.791l3.584 16.573c-.962.347-1.66 1.294-1.66 2.417 0 1.415 1.102 2.566 2.456 2.566 1.355 0 2.456-1.15 2.456-2.566 0-.327-.064-.636-.171-.924h6.524c-.107.288-.171.597-.171.924 0 1.415 1.102 2.566 2.456 2.566 1.355 0 2.456-1.15 2.456-2.566s-1.101-2.568-2.456-2.568c-.044 0-.085.013-.128.015-.022-.002-.042-.015-.064-.015H9.902l-.446-2.062h12.28c.335 0 .634-.222.743-.552z"
              ></path>
            </g>
          </g>
        </svg>
      </div>
      <div
        v-if="!isEmpty"
        class="absolute top-0 right-0 text-white flex items-center justify-center rounded-full w-5 h-5 text-xs bg-[#2189FF] border border-white count"
      >
        {{ countProductsInCart }}
      </div>
    </div>

    <div
      v-if="isOpen"
      class="border shadow-xl select-none w-screen bg-white z-20 grid grid-cols-1 gap-4 p-4 max-w-sm md:max-w-md rounded-md absolute top-16 right-0 container__products"
    >
      <div v-if="!isEmpty" class="px-4 text-black justify-between flex items-center">
        <div @click="redirectToCartPage" class="font-bold cursor-pointer">
          Ir a mi carrito
        </div>

        <div @click="toggleShow" class="w-5 h-5 cursor-pointer icon">
          <svg viewBox="0.39372 0.392965 21.21208 21.213435" class="sc-jifHHV gnftow">
            <path
              d="M 12.9001 10.9997 L 21.6058 2.29398 C 22.1311 1.76868 22.1311 0.918262 21.6058 0.392965 C 21.0818 -0.130988 20.2314 -0.130988 19.7061 0.392965 L 11.0004 9.1 L 2.29339 0.392965 C 1.76943 -0.130988 0.919017 -0.130988 0.39372 0.392965 C -0.130233 0.918262 -0.130233 1.76868 0.39372 2.29398 L 9.10075 10.9997 L 0.39372 19.7054 C -0.130233 20.2306 -0.132246 21.0831 0.39372 21.6064 C 0.918791 22.1288 1.89975 22 2.29339 21.6064 L 11.0004 12.8993 L 19.7061 21.6064 C 20.1534 22.0514 21.0706 22.1415 21.6058 21.6064 C 22.1311 21.0811 22.1311 20.2306 21.6058 19.7054 L 12.9001 10.9997 Z"
              fill="currentColor"
            ></path>
          </svg>
        </div>
      </div>
      <product-card
        :key="index"
        v-for="(product, index) in productsInCart"
        :id="product.id"
        :quantity="product.quantity"
      ></product-card>

      <div
        v-if="countProductsInCart > 2"
        class="rounded font-bold px-4 py-1 text-black text-center border-2 cursor-pointer border-[#2189FF] button show_more"
      >
        Ver mas
      </div>

      <div v-if="isEmpty" class="flex items-center gap-4 empty">
        <div class="text-[#2189FF] icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="56"
            height="56"
            viewBox="0 0 56 56"
            alt="Carrito"
            class="sc-JAcba bXmbGq"
          >
            <g fill="none" fill-rule="evenodd">
              <g fill="currentcolor" fill-rule="nonzero">
                <path
                  d="M43 135c15.464 0 28 12.536 28 28s-12.536 28-28 28-28-12.536-28-28 12.536-28 28-28zm0 2c-14.36 0-26 11.64-26 26s11.64 26 26 26 26-11.64 26-26-11.64-26-26-26zm-11.6 11.8c.508 0 .947.366 1.059.883l1.398 6.464h24.259c.35 0 .68.178.882.476.205.299.257.683.142 1.029l-4.135 12.461c-.15.455-.562.762-1.023.762h-16.94l.617 2.844h13.954c.03 0 .058.017.088.02.06-.003.116-.02.177-.02 1.868 0 3.386 1.589 3.386 3.541 0 1.953-1.518 3.54-3.386 3.54-1.869 0-3.389-1.587-3.389-3.54 0-.45.089-.876.236-1.274h-8.999c.148.398.236.824.236 1.274 0 1.953-1.518 3.54-3.387 3.54-1.868 0-3.388-1.587-3.388-3.54 0-1.549.963-2.855 2.29-3.334l-4.943-22.859h-3.85c-.598 0-1.084-.508-1.084-1.133 0-.628.486-1.134 1.085-1.134zm20.478 27.186c-.673 0-1.22.572-1.22 1.274 0 .702.547 1.273 1.22 1.273.672 0 1.217-.571 1.217-1.273s-.545-1.274-1.217-1.274zm-15.303 0c-.672 0-1.219.572-1.219 1.274 0 .702.547 1.273 1.22 1.273.67 0 1.217-.571 1.217-1.273s-.547-1.274-1.218-1.274zm20.017-17.572H34.347l2.205 10.194H53.21l3.383-10.194z"
                  transform="translate(-15 -135)"
                ></path>
              </g>
            </g>
          </svg>
        </div>
        <div class="flex flex-wrap gap-2 text-black description">
          <span class="text-lg"> Tu carrito esta vacio </span>
          <span>Descubrí las categorías del sitio y elegí los mejores productos.</span>
          <div
            @click="toggleShow"
            class="rounded font-bold px-4 py-1 border-2 cursor-pointer border-[#2189FF] button"
          >
            SEGUI COMPRANDO
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed } from "vue";
import { useRouter } from "vue-router";
import { useShoppingStore } from "../../stores/ShoppingStore";
import ProductCard from "./ProductCard.vue";
export default {
  components: {
    ProductCard,
  },
  name: "Cart",
  setup() {
    const router = useRouter();
    const ShoppingStore = useShoppingStore();

    const isOpen = computed(() => ShoppingStore.getShowCart);

    const productsInCart = computed(() => {
      const Products = ShoppingStore.getProducts;
      if (Products.length > 2) {
        return Products.slice(0, 2);
      }
      return Products;
    });

    const countProductsInCart = computed(() => ShoppingStore.getQuantityProducts);

    const isEmpty = computed(() =>
      ShoppingStore.getQuantityProducts === 0 ? true : false
    );

    const toggleShow = () => ShoppingStore.toggleShowCart();

    const redirectToCartPage = () => {
      toggleShow();
      router.push({ name: "cart" });
    };
    return {
      isEmpty,
      countProductsInCart,
      isOpen,
      toggleShow,
      productsInCart,
      redirectToCartPage,
    };
  },
};
</script>
