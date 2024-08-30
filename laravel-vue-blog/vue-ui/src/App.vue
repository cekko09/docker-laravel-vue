<template>
  <div id="app">
    <!-- Navigation Bar -->
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/create">Create Post</router-link>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view />
    </main>

    <!-- Footer -->
    <footer>
      <p>&copy; 2024 My Blog App</p>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
/* Styling for the main layout */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}

nav {
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-bottom: 20px;
}

nav a {
  text-decoration: none;
  color: #42b983;
}

nav a.router-link-exact-active {
  font-weight: bold;
}

main {
  margin: 20px auto;
  max-width: 800px;
  text-align: left;
}

footer {
  margin-top: 20px;
  padding: 10px;
  background-color: #f3f3f3;
}
</style>
