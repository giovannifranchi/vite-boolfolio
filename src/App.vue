<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";


export default {
  name: "App",

  components: { AppHeader, AppFooter },

};
</script>

<template>
  <div class="d-flex flex-column wrapper">
    <AppHeader />
    <RouterView class="flex-grow-1"/>
    <AppFooter />
  </div>
</template>

<style lang="scss">
.wrapper {
  height: 100vh;
}
</style>