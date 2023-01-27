<script lang="ts">
import HeaderComponent from "./infrastructure/components/HeaderComponent.vue";
import ModalComponent from "./infrastructure/components/ModalComponent.vue";
export default {
  name:'App',
  components:{ HeaderComponent,ModalComponent}
}
</script>

<template>
  
  <ModalComponent  message="Producto agreado exitosamente!" />
  <HeaderComponent />
  <main>
    <router-view />
  </main>
</template>
