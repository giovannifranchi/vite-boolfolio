<template>
  <div class="container" v-if="project">

    <img :src="project.image" :alt="project.title" v-if="project.image">

    <h1 class="my-3">{{ project.title }}</h1>

    <p>{{ project.summary }}</p>

  </div>
</template>

<script>
import axios from 'axios';
import store from '../../store';



export default {
  name: "ProjectDetail",

  data() {
    return {
      project: null,
    };
  },

  methods: {
    getProject(){
        axios.get(store.baseUrl + store.endpoints.projects + '/' + this.$route.params.id)
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
