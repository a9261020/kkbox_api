<template>
  <div class="card">
    <div class="card-container">
      <div class="card-item" v-for="chart in charts" :key="chart.id">
        <router-link :to="`/SongList?id=${chart.id}&title=${chart.title}`"
          ><img class="card-img" :src="chart.images[0].url" alt="" />
          <div class="card-category">
            {{ chart.title }}
          </div></router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    charts: {
      type: Array,
      default() {
        return [];
      },
    },
  },
};
</script>
