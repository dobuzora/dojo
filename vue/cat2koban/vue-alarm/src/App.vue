<template>
  <div id="app">
    <HelloWorld value="Hello Vue.js"></HelloWorld>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import AtomButton from "./components/AtomButton.vue";

export default Vue.extend({
  name: "App",
  components: {
    AtomButton
  }
});
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  display: flex;
}
body {
  color: #dddddd;
  background-color: #333333;
}
</style>
