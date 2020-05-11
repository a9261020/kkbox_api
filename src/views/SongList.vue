<template>
  <div class="songlist">
    <div class="songlist-title">
      <h1>{{ title }}</h1>
      <button class="songlist-btn">試聽此歌單</button>
    </div>
    <hr />
    <TopThree :list="three" />
    <List :list="rest" :start="4" />
  </div>
</template>

<script>
import List from "@/components/List";
import TopThree from "@/components/TopThree";

export default {
  name: "SongList",
  data() {
    return {
      songslist: [],
      title: ""
    };
  },
  components: {
    List,
    TopThree
  },
  methods: {
    getSongs(id) {
      this.$store.dispatch("loading", true);
      this.$http
        .get(
          `${process.env.VUE_APP_KKBOXAPI}charts/${id}/tracks?territory=TW&limit=25`,
          this.config
        )
        .then(res => {
          this.$store.dispatch("loading", false);
          this.songslist = res.data.data;
        });
    }
  },
  computed: {
    config() {
      return this.$store.getters.getApiConfig;
    },
    three() {
      return this.songslist.slice(0, 3);
    },
    rest() {
      return this.songslist.slice(3, 25);
    }
  },
  mounted() {
    this.getSongs(this.$route.query.id);
    this.title = this.$route.query.title;
  }
};
</script>
