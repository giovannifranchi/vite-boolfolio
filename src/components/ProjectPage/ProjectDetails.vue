<template>
  <div class="container" v-if="project">

    <img :src="project.image" :alt="project.title" v-if="project.image">

    <h1 class="my-3">{{ project.title }}</h1>

    <p>{{ project.summary }}</p>

    <h4>Type: {{ project.type ? project.type.name : 'Uknown' }} </h4>

    <hr>

    <ul v-if="project.technologies.length > 0" class="d-flex gap-3 list-unstyled">
      <li v-for="(technology, index) in project.technologies" :key="index">
        <span class="badge text-bg-warning fs-5">{{ technology.name.toUpperCase() }}</span>
      </li>
    </ul>

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
