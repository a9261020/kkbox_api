<template>
  <div class="chart">
    <div class="chart-list">
      <h2 class="chart-title">綜合新歌 TOP 5</h2>
      <router-link to="/1234" class="chart-list-btn">
        <a href="">完整榜單</a>
      </router-link>
    </div>
    <hr />
    <SongList />

    <h2 class="chart-title">新歌日榜</h2>
    <hr />
    <Card />

    <h2 class="chart-title">單曲日榜</h2>
    <hr />
    <Card />

    <h2 class="chart-title">曲風週榜</h2>
    <hr />
    <Card />
  </div>
</template>

<script>
import SongList from "@/components/SongList";
import Card from "@/components/Card";

export default {
  components: {
    SongList,
    Card,
  },
};
</script>
