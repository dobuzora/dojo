<template>
  <div class="hello">
    <p>{{ value }}</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "HelloWorld",
  props: {
    value: {
      type: String,
      default: "Hello World!"
    }
  }
});
</script>

<style scoped>

</style>
