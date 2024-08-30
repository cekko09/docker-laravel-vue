<template>
    <div>
      <h1>Create Post</h1>
      <form @submit.prevent="createPost">
        <input type="text" v-model="post.title" placeholder="Title" required />
        <textarea v-model="post.content" placeholder="Content" required></textarea>
        <button type="submit">Create</button>
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
      createPost() {
        axios.post('http://localhost:8000/api/posts', this.post)
          .then(() => {
            this.$router.push('/');
          });
      }
    }
  };
  </script>
  