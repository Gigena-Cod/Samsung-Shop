<template>
  <div
    class="w-full rounded px-6 py-10 gap-4 text-center grid grid-cols-3 border discount"
  >
    <span class="col-span-3">¿Tienes un codigo de descuento?</span>
    <input disabled class="h-10 border rounded col-span-2" type="text" name="" id="" />
    <div
      class="bg-[#2189ff] text-white h-10 border justify-center rounded px-4 flex items-center button"
    >
      APLICAR
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "CouponCode",
};
</script>
