<template>
  <div class="topthree">
    <div
      class="topthree-item"
      v-for="(song, index) in list"
      :key="song.id"
      @click="playSong(song.id)"
    >
      <img class="item-img" :src="song.album.images[2].url" alt />
      <div class="item-info">
        <h4 class="ds-inline-block item-rank">
          {{ index + 1 }}
        </h4>
        <div class="ds-inline-block item-desc">
          <h5>{{ song.album.name }}</h5>
          <p>{{ song.album.artist.name }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopThree",
  props: {
    list: {
      type: Array,
    },
  },
  methods: {
    playSong(songID) {
      this.$store.dispatch("playSong", songID);
    },
  },
};
</script>
