<template>
  <header class="bg-black text-white">
    <div class="container d-flex justify-content-between py-3 align-items-center">
      <div class="logo">logo</div>
      <ul class="list-unstyled d-flex gap-2 m-0 p-0 align-items-center">
        <li>
          <router-link :to="{ name: 'home' }" class="nav-link">Home</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'about' }" class="nav-link">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'projects' }" class="nav-link">Projects</router-link>
        </li>
        <!-- DropDown -->
        <li v-if="types">
          <div class="dropdown">
            <button
              class="btn btn-secondary dropdown-toggle m-0 p-0"
              type="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Types
            </button>
            <ul class="dropdown-menu">
              <li v-for="(type, index) in types" :key="index">
                <router-link :to="{ name: 'types', params: {slug: type.slug} }" class="dropdown-item">{{type.name}}</router-link>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </header>
</template>

<script>
import axios from 'axios';
import store from '../store';


export default {
  name: "AppHeader",

  data(){
    return {
      types: null,
    }
  },

  methods: {
    getTypes(){
      axios.get(store.baseUrl + store.endpoints.types)
      .then((result)=>{
        this.types = result.data;
      })
      .catch((error)=>{
        console.log(error);
      })
    }
  },

  created(){
    this.getTypes();
  }
};
</script>

<style lang="scss" scoped></style>
