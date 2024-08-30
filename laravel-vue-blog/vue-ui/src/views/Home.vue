<template>
    <div>
      <h1>Posts</h1>
      <router-link to="/create">Create New Post</router-link>
      <ul>
        <li v-for="post in posts" :key="post.id">
          <h2>{{ post.title }}</h2>
          <p>{{ post.content }}</p>
          <router-link :to="{ name: 'EditPost', params: { id: post.id } }">Edit</router-link>
          <button @click="deletePost(post.id)">Delete</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        posts: []
      };
    },
    methods: {
      fetchPosts() {
        axios.get('http://localhost:8000/api/posts')
          .then(response => {
            this.posts = response.data;
          });
      },
      deletePost(id) {
        axios.delete(`http://localhost:8000/api/posts/${id}`)
          .then(() => {
            this.fetchPosts();
          });
      }
    },
    mounted() {
      this.fetchPosts();
    }
  };
  </script>
  