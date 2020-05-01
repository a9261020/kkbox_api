<template>
  <div id="app">
    <!-- bg-animation -->
    <div class="bg-animation"></div>
    <router-view />
  </div>
</template>

<script>
import qs from "querystring";

export default {
  name: "App",
  data() {
    return {
      access_token: "",
      search: {
        q: "jay",
        type: "artist",
        territory: "TW",
      },
      data: {},
    };
  },
  components: {},
  methods: {
    getToken() {
      this.$store.dispatch("getToken");
    },
    getMusic() {
      const config = {
        headers: { Authorization: `Bearer ${this.access_token}` },
      };
      this.$http
        .get(
          `${process.env.VUE_APP_KKBOXAPI}search?${qs.stringify(this.search)}`,
          config
        )
        .then((res) => {
          this.data = res.data.artists.data;
        });
    },
  },
  created() {
    this.getToken();
  },
};
</script>

<style lang="scss">
@import "./assets/scss/_index.scss";
</style>
