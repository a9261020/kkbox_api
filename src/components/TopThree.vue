<template>
  <div class="topthree">
    <div class="topthree-item" v-for="item in 3" :key="item">
      <img class="item-img" src="http://fakeimg.pl/1000x1000" alt />
      <div class="item-info">
        <h4 class="ds-inline-block item-rank">Rank</h4>
        <div class="ds-inline-block item-desc">
          <h4>歌名</h4>
          <p>歌手</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TopThree",
};
</script>
