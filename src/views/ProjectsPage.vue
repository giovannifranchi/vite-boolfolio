<template>
  <div class="container">
    <h1>Projects</h1>

    <div class="row gy-3">
      <div class="col col-md-4" v-for="(project, index) in projects" :key="index">
        <CardComponent :detail="project" />
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import store from "../store";
import CardComponent from "../components/utils/CardComponent.vue";

export default {
  name: "ProjectsPage",

  components: {CardComponent},

  data() {
    return {
      store,
      projects: [],
    };
  },

  methods: {
    getProjects() {
      axios
        .get(store.baseUrl + store.endpoints.projects)
        .then((response) => {
          this.projects = response.data;
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getProjects();
  },
};
</script>

<style lang="scss" scoped></style>
