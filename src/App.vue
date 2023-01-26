<script lang="ts">
import HeaderComponent from "./infrastructure/components/HeaderComponent.vue";
export default {
  name:'App',
  components:{ HeaderComponent}
}
</script>

<template>
  <HeaderComponent />
  <main>
    <router-view />
  </main>
</template>
