<template>
  <div class="chart">
    <div class="chart-list">
      <h2 class="chart-title">綜合新歌 TOP 5</h2>
      <router-link to="/" class="chart-list-btn">
        <a href>完整榜單</a>
      </router-link>
    </div>
    <hr />
    <List :newSongs="newSongs" />

    <h2 class="chart-title">新歌日榜</h2>
    <hr />
    <Card :charts="newCharts" />

    <h2 class="chart-title">單曲日榜</h2>
    <hr />
    <Card :charts="dailyCharts" />

    <h2 class="chart-title">曲風週榜</h2>
    <hr />
    <Card :charts="weeklyCharts" />
  </div>
</template>

<script>
import List from "@/components/List";
import Card from "@/components/Card";

export default {
  name: "Chart",
  computed: {
    newSongs() {
      return this.$store.state.newSongsChart.slice(0, 5);
    },
    newCharts() {
      return this.$store.state.charts.slice(1, 6);
    },
    dailyCharts() {
      return this.$store.state.charts.slice(7, 12);
    },
    weeklyCharts() {
      return this.$store.state.charts.slice(13, 18);
    },
  },
  components: {
    List,
    Card,
  },
};
</script>
