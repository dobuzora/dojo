<template>
  <button class="atom-button" @click="onClick"><slot></slot></button>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "AtomButton",
  methods: {
    onClick() {
      this.$emit("click");
    }
  }
});
</script>

<style scoped>
.atom-button {
  background-color: #00bfff;
}
</style>
