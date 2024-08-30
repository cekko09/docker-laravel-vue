<template>
    <div>
      <h1>Edit Post</h1>
      <form @submit.prevent="updatePost">
        <input type="text" v-model="post.title" placeholder="Title" required />
        <textarea v-model="post.content" placeholder="Content" required></textarea>
        <button type="submit">Update</button>
      </form>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        post: {
          title: '',
          content: ''
        }
      };
    },
    methods: {
      fetchPost() {
        axios.get(`http://localhost:8000/api/posts/${this.$route.params.id}`)
          .then(response => {
            this.post = response.data;
          });
      },
      updatePost() {
        axios.put(`http://localhost:8000/api/posts/${this.$route.params.id}`, this.post)
          .then(() => {
            this.$router.push('/');
          });
      }
    },
    mounted() {
      this.fetchPost();
    }
  };
  </script>
  