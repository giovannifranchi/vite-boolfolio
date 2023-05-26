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
import CardComponent from "../components/utils/CardComponent.vue";

export default {
  name: "ProjectsPage",

  components: {CardComponent},

  data() {
    return {
      config: {
        baseURL: "http://127.0.0.1:8000/api",
        projects: "/projects",
      },
      projects: [],
    };
  },

  methods: {
    getProjects() {
      axios
        .get(this.config.baseURL + this.config.projects)
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
