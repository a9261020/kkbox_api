<template>
  <div class="musicplayer">
    <i
      class="musicplayer-cancel-btn far fa-window-close"
      v-show="songID !== '' || listID !== ''"
      @click="cancel"
    ></i>
    <object
      class="kkbox-song"
      :data="setSongPlayer"
      v-show="songID !== ''"
    ></object>
    <object
      class="kkbox-list"
      :data="setListPlayer"
      v-show="listID !== ''"
    ></object>
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
      },
      setListPlayer(state) {
        return `https://widget.kkbox.com/v1/?id=${state.listID}&type=playlist&terr=TW&lang=TC&autoplay=true`;
      },
      songID(state) {
        return state.songID;
      },
      listID(state) {
        return state.listID;
      },
    }),
  },
  methods: {
    cancel() {
      this.$store.dispatch("resetPlayer");
    },
  },
};
</script>

<style></style>
