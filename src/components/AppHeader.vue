<template>
<header class="bg-black text-white">
    <div class="container d-flex justify-content-between py-3 align-items-center">
      <div class="logo">logo</div>
      <ul class="list-unstyled d-flex gap-2">
        <li>
          <router-link :to="{name: 'home'}" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link :to="{name: 'about'}" class="nav-link">About</router-link>
        </li>
        <li>
          <router-link :to="{name: 'projects'}" class="nav-link">Projects</router-link>
        </li>
      </ul>
  </div>
</header>
</template>

<script>
export default {
  name: "AppHeader",
};
</script>

<style lang="scss" scoped></style>
