<template>
  <div id="app">
    <Loading :active.sync="isLoading" loader="dots" color="#5f2c82"></Loading>
    <!-- bg-animation -->
    <div class="bg-animation"></div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "App",
  computed: {
    isLoading() {
      return this.$store.state.isLoading;
    }
  },
  created() {
    this.$store.dispatch("getToken");
  }
};
</script>

<style lang="scss">
@import "./assets/scss/_index.scss";
</style>
