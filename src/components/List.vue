<template>
  <div class="list">
    <ul>
      <li class="list-item" v-for="(song, index) in list" :key="song.id">
        <div class="item-rank ds-inline-block">
          {{ index + start }}
        </div>
        <img class="item-img" :src="song.album.images[0].url" alt="" />
        <div class="item-info">
          <h5 class="item-songTitle">{{ song.album.name }}</h5>
          <p class="item-singer">{{ song.album.artist.name }}</p>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "List",
  props: {
    list: {
      type: Array,
      default() {
        return [];
      },
    },
    start: {
      type: Number,
      default: 1,
    },
  },
};
</script>
