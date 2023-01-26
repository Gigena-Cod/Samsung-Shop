<template>
  <div class="col-span-full lg:col-span-2 information">
    <div class="p-6 border-t border-l border-r rounded-t-md flex-col flex title__section">
      <span class="text-3xl font-bold">
        {{ name }}
      </span>
      <span class="text-gray-400">
        {{ code }}
      </span>
    </div>
    <div class="pb-6 px-6 border-l border-r text-2xl price__section">
      <div class="flex gap-4 discount">
        <span class="text-gray-400 line-through"> ${{ price?.toFixed(2) }} </span>
        <span
          class="cursor-pointer rounded-full text-sm text-white flex items-center bg-[#2189FF] px-2"
        >
          {{ discount }}%
        </span>
      </div>
      <span class="font-bold"> ${{ pricePlans.discount.toFixed(2) }} </span>
    </div>
    <div class="p-6 border-l border-r border-t grid grid-cols-1 gap-4 credit__options">
      <span class="font-bold text-xl"> Nuestras promociones bancarias! </span>
      <div class="grid grid-cols-1 mb-4 gap-2 fees">
        <div class="text-green-600 font-semibold fees__decription">
          {{ fees }} cuotas sin interés de ${{ pricePlans.fees.toFixed(2) }}
        </div>
        <div class="flex gap-4 fees__images">
          <img
            src="https://images.fravega.com/f300/d91d7904a85783a86377e30feb87e7ff.png.webp"
            width="64"
            height="auto"
            loading="lazy"
            alt="Opción de pago"
            class="border rounded"
          /><img
            src="https://images.fravega.com/f300/54c0d769ece1b00f739360d6c900e4f9.png.webp"
            width="64"
            height="auto"
            loading="lazy"
            alt="Opción de pago"
            class="border rounded"
          /><img
            src="https://images.fravega.com/f300/11509c3fdfabb96a8fe2c3692726597b.png.webp"
            width="64"
            height="auto"
            loading="lazy"
            alt="Opción de pago"
            class="border rounded"
          /><img
            src="https://images.fravega.com/f300/5e3b1f271aff1e0b6f8f9ce4bf98beb7.png.webp"
            width="64"
            height="auto"
            loading="lazy"
            alt="Opción de pago"
            class="border rounded"
          />
        </div>
      </div>
      <div class="flex gap-4 items-center">
        <div class="description">
          <span class="font-bold">Ahora 24</span> cuotas fijas de ${{
            pricePlans.option24.toFixed(2)
          }}
        </div>
        <img
          src="https://images.fravega.com/f300/7fa0c5e4933586e88e0ec4bce7deb954.png.webp"
          width="64"
          height="auto"
          loading="lazy"
          alt="Opción de pago"
          class="border h-8 w-fit rounded"
        />
      </div>
      <div class="flex gap-4 items-center">
        <div class="description">
          <span class="font-bold">Ahora 18</span> cuotas fijas de ${{
            pricePlans.option18.toFixed(2)
          }}
        </div>
        <img
          src="https://images.fravega.com/f300/2568649e97c204122fc4fdd22d6539a4.png.webp"
          width="64"
          height="auto"
          loading="lazy"
          alt="Opción de pago"
          class="border h-8 w-fit rounded"
        />
      </div>
      <div class="flex gap-4 items-center">
        <div class="description">
          <span class="font-bold">Ahora 12</span> cuotas fijas de ${{
            pricePlans.option12.toFixed(2)
          }}
        </div>
        <img
          src="https://images.fravega.com/f300/72898c958b0832cced664bb473007aa5.png.webp"
          width="64"
          height="auto"
          loading="lazy"
          alt="Opción de pago"
          class="border h-8 w-fit rounded"
        />
      </div>
    </div>
    <div class="p-6 border button-section">
      <div
        @click="addToCart"
        class="h-10 justify-center font-bold cursor-pointer rounded flex items-center text-white bg-[#2189FF] px-4 buy__button"
      >
        COMPRAR
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { watchEffect } from "vue";
import { useShoppingStore } from "../../stores/ShoppingStore";

interface PricePlans {
  discount: Number;
  fees: Number;
  option24: Number;
  option18: Number;
  option12: Number;
}

export default {
  name: "Information",
  props: {
    id: {
      type: String,
      requied: true,
    },
    name: {
      type: String,
      requied: true,
    },
    price: {
      type: Number,
      requied: true,
    },
    code: {
      type: String,
      requied: true,
    },
    fees: {
      type: Number,
      requied: true,
    },
    discount: {
      type: Number,
      requied: true,
    },
  },
  setup(props) {
    const ShoppingStore = useShoppingStore();

    const addToCart = () => {
      if (!props.id) return;
      ShoppingStore.addProduct(props.id);
    };

    const pricePlans = ref<PricePlans>({
      discount: 0,
      fees: 0,
      option24: 0,
      option18: 0,
      option12: 0,
    });

    const calculatedPlan = () => {
      if (!props.discount || !props.fees || !props.price) return;

      let discount = props.discount
        ? props.price * (1 - props.discount / 100)
        : props.price;

      pricePlans.value.discount = discount;

      pricePlans.value.fees = discount / props.fees;
      pricePlans.value.option24 = (props.price * 3) / 24;
      pricePlans.value.option18 = (props.price * 2.75) / 18;
      pricePlans.value.option12 = (props.price * 1.75) / 12;
    };

    watchEffect(async () => {
      calculatedPlan();
    });

    return {
      pricePlans,
      addToCart,
    };
  },
};
</script>
