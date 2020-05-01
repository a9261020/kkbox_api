<template>
  <div class="song-list">
    <ul>
      <li class="song-list-item" v-for="item in 5" :key="item">
        <div class="item-rank ds-inline-block">
          {{ item }}
        </div>
        <img class="item-img" src="http://fakeimg.pl/200x200" alt="" />
        <div class="item-info">
          <h5 class="item-songTitle">Change</h5>
          <span class="item-singer">瘦子</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
