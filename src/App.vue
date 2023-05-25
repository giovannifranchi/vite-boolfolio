<script>
import AppHeader from "./components/AppHeader.vue";
import AppMain from "./components/AppMain.vue";
import AppFooter from "./components/AppFooter.vue";
import axios from "axios";

export default {
  name: "App",

  components: { AppHeader, AppMain, AppFooter },

  data(){
    return {
      config: {
        baseURL: 'http://127.0.0.1:8007/api',
        projects: '/projects'
      },
      projects: [],
    }
  },

  methods: {
    getProjects(){
      axios.get(this.config.baseURL + this.config.projects)
      .then((response)=>{
        console.log(response);
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },

  created(){
    this.getProjects();
  }

};
</script>

<template>
  <div class="d-flex flex-column wrapper">
    <AppHeader />
    <AppMain />
    <AppFooter />
  </div>
</template>

<style lang="scss">
.wrapper {
  height: 100vh;
}
</style>