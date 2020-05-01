<template>
  <div class="card">
    <div class="card-container">
      <div class="card-item" v-for="item in 5" :key="item">
        <a href=""
          ><img class="card-img" src="http://fakeimg.pl/100x100" alt="" />
          <div class="card-category">
            {{ item }}
          </div></a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
