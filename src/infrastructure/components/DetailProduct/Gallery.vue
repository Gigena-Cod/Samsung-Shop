<script lang="ts">
import { PropType, ref } from "vue";
export default {
  name: "Gallery",
  props: {
    pictures: {
      type: Array as PropType<string[]>,
      required: true,
      default: [],
    },
    fees: {
      type: Number,
      required: true,
      default: 0,
    },
  },
  setup() {
    let imageSelected = ref(0);
    const selectedImage = (position: number) => (imageSelected.value = position);

    const backImage = () => {
      imageSelected.value = imageSelected.value - 1;
    };
    const nextImage = () => {
      imageSelected.value = imageSelected.value + 1;
    };
    return {
      imageSelected,
      selectedImage,
      nextImage,
      backImage,
    };
  },
};
</script>

<template>
  <div class="scroll-smooth col-span-full lg:col-span-3 gallery__container">
    <div class="gallery__content">
      <div class="relative mb-10 flex items-center justify-center rounded selected">
        <div
          @click="backImage"
          v-if="imageSelected !== 0"
          class="w-10 bg-white h-10 bg-opacity-40 absolute top-0 bottom-0 my-auto left-4 cursor-pointer rounded-full back"
        >
          <img class="w-10 h-10" src="../../../assets/icons-back.png" />
        </div>
        <div
          @click="nextImage"
          v-if="imageSelected !== pictures.length - 1"
          class="w-10 bg-white h-10 bg-opacity-40 absolute top-0 bottom-0 my-auto right-4 cursor-pointer rounded-full back"
        >
          <img class="w-10 h-10" src="../../../assets/icons-next.png" />
        </div>
        <img loading="lazy" :src="pictures[imageSelected]" alt="Image" class="w-full" />
        <div
          className="bg-white absolute top-4 right-4 flex flex-col items-center border rounded-md shadow-md plans"
        >
          <span className="pt-1 text-xs font-bold leading-none">hasta</span>
          <span className="leading-none text-[#2189FF] text-4xl font-bold">
            {{ fees }}
          </span>
          <span className="leading-none  pb-1 text-[#2189FF] font-bold"> cuotas </span>
          <span
            className="w-full px-4 text-sm font-semibold text-center text-white bg-black rounded-md"
          >
            sin interés
          </span>
        </div>
      </div>
      <div
        class="snap-mandatory snap-x overflow-x-auto py-4 w-full flex gap-6 scrollbar thumbnails"
      >
        <img
          loading="lazy"
          @click="selectedImage(index)"
          class="border snap-end cursor-pointer rounded p-2 h-20 w-fit"
          :src="picture"
          :key="index"
          v-for="(picture, index) in pictures"
          alt="Thumbnails"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.scrollbar::-webkit-scrollbar {
  width: 0.75rem;
  height: 0.75rem;
}

.scrollbar::-webkit-scrollbar-track {
  border-radius: 100vh;
  background: #f7f4ed;
}

.scrollbar::-webkit-scrollbar-thumb {
  background: #222;
  border-radius: 2rem;
  border: 3px solid #f6f7ed;
}
</style>
