<template>
  <div class="songlist">
    <div class="songlist-title">
      <h1>綜合新歌即時榜</h1>
      <button class="songlist-btn">試聽此歌單</button>
    </div>
    <hr />
    <TopThree />
    <List />
  </div>
</template>

<script>
import List from "@/components/List";
import TopThree from "@/components/TopThree";

export default {
  name: "SongList",
  components: {
    List,
    TopThree
  }
};
</script>
