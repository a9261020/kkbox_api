<template>
  <div id="app">
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
      const url = `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_KKBOXAUTH}`;
      const config = {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      };
      const oauth = {
        grant_type: process.env.VUE_APP_GRANTTYPE,
        client_id: process.env.VUE_APP_CLINETID,
        client_secret: process.env.VUE_APP_CLIENTSECRET,
      };
      this.$http.post(url, qs.stringify(oauth), config).then((res) => {
        this.access_token = res.data.access_token;
      });
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
@import "./assets/scss/index.scss";
</style>
