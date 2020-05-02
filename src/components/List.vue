<template>
  <div class="list">
    <ul>
      <li class="list-item" v-for="(song, index) in newSongs" :key="song.id">
        <div class="item-rank ds-inline-block">
          {{ index + 1 }}
        </div>
        <img class="item-img" :src="song.album.images[0].url" alt="" />
        <div class="item-info">
          <h5 class="item-songTitle">{{ song.album.name }}</h5>
          <span class="item-singer">{{ song.album.artist.name }} </span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    newSongs: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
