<template>
  <div class="container" v-if="project">
    <img :src="project.image" :alt="project.title" v-if="project.image" />

    <h1 class="my-3">{{ project.title }}</h1>

    <p>{{ project.summary }}</p>

    <h4>Type: {{ project.type ? project.type.name : "Uknown" }}</h4>

    <hr />

    <ul v-if="project.technologies.length > 0" class="d-flex gap-3 list-unstyled">
      <li v-for="(technology, index) in project.technologies" :key="index">
        <span class="badge text-bg-warning fs-5">{{ technology.name.toUpperCase() }}</span>
      </li>
    </ul>

    <hr />

    <h2 class="mb-3">Comments:</h2>
    <ul class="list-unstyled" v-if="project.comments.length > 0">
      <li v-for="(comment, index) in project.comments">
        <h3>Author: {{ comment.author }}</h3>
        <span>{{ handleDate(comment.created_at) }}</span>
        <p>{{ comment.content }}</p>
      </li>
    </ul>
    <h5 v-else>no comments</h5>

    <h3>Leave a Comment</h3>
    <!-- Form -->
    <form @submit.prevent="leaveComment">
      <div class="mb-3">
        <label for="author" class="form-label">Author</label>
        <input type="text" class="form-control" id="author" v-model="formData.author" />
      </div>
      <div class="mb-3">
        <label for="comment" class="form-label">Comment</label>
        <textarea name="comment" id="comment" rows="3" class="w-100 form-control" v-model="formData.comment"></textarea>
      </div>
      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script>
import axios from "axios";
import store from "../../store";

export default {
  name: "ProjectDetail",

  data() {
    return {
      project: null,
      formData: {
        author: "",
        comment: "",
      },
    };
  },

  methods: {
    getProject() {
      axios
        .get(store.baseUrl + store.endpoints.projects + "/" + this.$route.params.id)
        .then((result) => {
          this.project = result.data;
        })
        .catch((error) => {
          if (error.response.status === 404) {
            this.$router.push({ name: "not-found" });
          }
        });
    },

    handleDate(_date) {
      if (_date) {
        const commentDate = new Date(_date);

        return commentDate.toLocaleString();
      }
    },

    leaveComment() {
      const data = {
        author: this.formData.author,
        content: this.formData.comment,
        project_id: this.project.id,
      };

      axios
        .post(store.baseUrl + "/comments", data)
        .then((result) => {
          console.log(result);
          if(result.status ===201){
            this.project.comments.push(result.data);
          }
          this.formData.author = "";
          this.formData.comment = "";
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },

  created() {
    this.getProject();
  },
};
</script>

<style lang="scss" scoped></style>
