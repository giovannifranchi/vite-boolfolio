<template>
  <div class="container" v-if="isBusy">Loading...</div>
  <div v-else class="container">
    <h1>{{ type.name }}</h1>
    <p>{{ type.description ? type.description : "Description not available" }}</p>
    <hr />
    <h3>Related Projects</h3>
    <ul v-if="type.projects" class="d-flex gap-3 list-unstyled">
      <li v-for="(project, index) in type.projects" :key="index">
        {{ project.title }}
      </li>
    </ul>
    <h5 v-else>No projects currently related to this type</h5>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";

export default {
  name: "TypesPage",

  data() {
    return {
      isBusy: true,
      type: null,
    };
  },

  methods: {
    getSingleType() {
      axios
        .get(store.baseUrl + store.endpoints.types + "/" + this.$route.params.slug)
        .then((result) => {
          this.type = result.data;
          this.isBusy = false;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getSingleType();

    this.$watch(
        ()=> this.$route.params,
        (toParams, previousParams)=>{
            this.getSingleType();
        }
    )
  },
};
</script>

<style lang="scss" scoped></style>
