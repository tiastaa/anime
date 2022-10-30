<template>
  <!-- <header-vue></header-vue> -->
  <router-view></router-view>
</template>

<script>
// import HeaderVue from "./components/Header.vue";

export default {
  name: "App",
  components: {
    // HeaderVue,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  padding: 0px;
  margin: 0px;
  box-sizing: border-box;
}
html {
  /* font-size: 62.5%; */
  font-size: 25px;
}
body {
  background-color: #1c1c1c;
}
</style>
