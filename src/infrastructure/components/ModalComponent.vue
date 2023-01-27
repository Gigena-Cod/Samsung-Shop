<template>
  <teleport to="body">
    <div
      v-if="isActive"
      class="z-50 w-screen h-screen bg-black bg-opacity-25 top-0 left-0 absolute items-center flex justify-center"
    >
      <div
        class="px-8 py-14 items-center max-w-md flex flex-col w-1/2 rounded-lg bg-white modal__content"
      >
        <img class="w-10 h-10" src="../../assets/check.png" alt="Check icon" />
        <span class="font-bold mt-5 text-center text-4xl"> Felicitaciones </span>
        <span class="text-gray-500 text-center"> Su compra fue realizada correctamente</span>
      </div>
    </div>
  </teleport>
  <div></div>
</template>

<script lang="ts">
import { useNotification } from "../stores/NotificationStore";
import { computed, ref } from "vue";
export default {
  name: "ModalComponent",
  props: {
    message: {
      type: String,
      required: true,
    },
  },
  setup() {
    const Notification = useNotification();
    const isActive = computed(() => Notification.getIsActive);
    return {
      isActive,
    };
  },
};
</script>

<style lang="scss" scoped></style>
