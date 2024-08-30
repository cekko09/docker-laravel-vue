import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import CreatePost from '../views/CreatePost.vue';
import EditPost from '../views/EditPost.vue';

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/create', name: 'CreatePost', component: CreatePost },
  { path: '/edit/:id', name: 'EditPost', component: EditPost },
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;
