<template>
  <div class="chart">
    <div class="chart-list">
      <h2 class="chart-title">綜合新歌 TOP 5</h2>
      <router-link to="/1234" class="chart-list-btn">
        <a href="">完整榜單</a>
      </router-link>
    </div>
    <SongList />
    <SongList />
  </div>
</template>

<script>
import SongList from "@/components/SongList";

export default {
  components: {
    SongList,
  },
};
</script>
