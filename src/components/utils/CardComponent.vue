<template>
  <div class="card h-100">
    <img :src="detail.image" class="card-img-top" alt="..." v-if="detail.image" />
    <div class="card-body">
      <h5 class="card-title">{{ detail.title }}</h5>
      <p class="card-text">
        {{ detail.summary.substring(0, 250) }}
      </p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    detail: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped></style>
