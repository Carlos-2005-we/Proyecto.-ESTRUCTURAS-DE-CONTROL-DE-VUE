<template>
  <div id="app">
    <h1>SPA - Estructuras de Control en Vue 3</h1>
    <nav>
      <router-link to="/if-else">v-if / v-else-if / v-else</router-link> |
      <router-link to="/v-show">v-show</router-link> |
      <router-link to="/v-for">v-for</router-link> |
      <router-link to="/v-bind-key">v-bind:key</router-link>
    </nav>
    <hr />
    <router-view />
  </div>
</template>

<style>
body {
  font-family: Arial, sans-serif;
  background-color: #fafafa;
}
h1 {
  text-align: center;
}
nav {
  text-align: center;
  margin: 10px 0;
}
nav a {
  margin: 0 10px;
  color: #42b983;
  text-decoration: none;
}
nav a.router-link-active {
  font-weight: bold;
  color: #1a7f5a;
}
hr {
  margin-bottom: 20px;
}
</style>
