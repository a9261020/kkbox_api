<template>
  <div class="musicplayer">
    <!-- <object
      data="https://widget.kkbox.com/v1/?id=WoEw7TlT7FdqPXCMA5&type=song&terr=TW&lang=TC"
      width="300"
      height="100"
      type
    ></object>-->
    <object :data="setSongPlayer" width="300" height="100" type></object>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "MusicPlayer",
  computed: {
    ...mapState({
      setSongPlayer(state) {
        return `https://widget.kkbox.com/v1/?id=${state.songID}&type=song&terr=TW&lang=TC&autoplay=true`;
      }
    })
  }
};
</script>

<style>
</style>