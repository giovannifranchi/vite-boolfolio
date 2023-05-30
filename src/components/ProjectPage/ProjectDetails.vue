<template>
  <div class="container" v-if="project">

    <img :src="project.image" :alt="project.title" v-if="project.image">

    <h1 class="my-3">{{ project.title }}</h1>

    <p>{{ project.summary }}</p>

  </div>
</template>

<script>
import axios from 'axios';



export default {
  name: "ProjectDetail",

  data() {
    return {
      project: null,
      config: {
        baseURL: "http://127.0.0.1:8000/api",
        projects: "/projects",
      },
    };
  },

  methods: {
    getProject(){
        axios.get(this.config.baseURL + this.config.projects + '/' + this.$route.params.id)
        .then((result)=>{
            this.project = result.data;
        })
        .catch((error)=>{
            if(error.response.status === 404){
              this.$router.push({name: 'not-found'});
            }
        })
    }
  },

  created(){
    this.getProject();
  }
};
</script>

<style lang="scss" scoped></style>
