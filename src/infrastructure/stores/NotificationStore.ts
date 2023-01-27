import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useNotification = defineStore("NotificationsPopup", () => {
  // STATE
  const isActive = ref<boolean>(false);

  // GETTERS
  const getIsActive = computed(() => isActive.value);

  // ACTIONS
  const activePopup = () => {
    isActive.value = !isActive.value;
    setTimeout(autoclose, 3000);
  };

  const autoclose = () => (isActive.value = false);

  return {
    getIsActive,
    activePopup,
  };
});
