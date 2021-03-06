import Vue from "vue";
import Vuex from "vuex";

import qs from "querystring";
import Axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    access_token: "",
    charts: [],
    newSongsChart: [],
    songID: "",
    listID: "",
    isLoading: false,
  },
  actions: {
    getToken(context) {
      const url = `https://cors-anywhere.herokuapp.com/${process.env.VUE_APP_KKBOXAUTH}`;
      const config = {
        headers: { "content-type": "application/x-www-form-urlencoded" },
      };
      const oauth = {
        grant_type: process.env.VUE_APP_GRANTTYPE,
        client_id: process.env.VUE_APP_CLINETID,
        client_secret: process.env.VUE_APP_CLIENTSECRET,
      };
      context.dispatch("loading", true);
      Axios.post(url, qs.stringify(oauth), config).then((res) => {
        context.dispatch("loading", false);
        context.commit("SET_TOKEN", res.data.access_token);
        context.dispatch("getCharts");
        context.dispatch("getNewSongsChart");
      });
    },
    getCharts(context) {
      context.dispatch("loading", true);
      Axios.get(
        `${process.env.VUE_APP_KKBOXAPI}charts?territory=TW`,
        context.getters.getApiConfig
      ).then((res) => {
        context.dispatch("loading", false);
        context.commit("GET_CHARTS", res.data.data);
      });
    },
    getNewSongsChart(context) {
      context.dispatch("loading", true);
      Axios.get(
        `${process.env.VUE_APP_KKBOXAPI}charts/LZPhK2EyYzN15dU-PT/tracks?territory=TW&limit=5`,
        context.getters.getApiConfig
      ).then((res) => {
        context.dispatch("loading", false);
        context.commit("GET_NEWSONGS_CHART", res.data.data);
      });
    },
    playSong(context, songID) {
      context.commit("PLAY_SONG", songID);
    },
    playList(context, listID) {
      context.commit("PLAY_LIST", listID);
    },
    resetPlayer(context) {
      context.commit("RESET_PLAYER");
    },
    loading(context, status) {
      context.commit("LOADING", status);
    },
  },
  mutations: {
    SET_TOKEN(state, access_token) {
      state.access_token = access_token;
    },
    GET_CHARTS(state, charts) {
      state.charts = charts;
    },
    GET_NEWSONGS_CHART(state, newSongsChart) {
      state.newSongsChart = newSongsChart;
    },
    PLAY_SONG(state, songID) {
      state.listID = "";
      state.songID = songID;
    },
    PLAY_LIST(state, listID) {
      state.songID = "";
      state.listID = listID;
    },
    RESET_PLAYER(state) {
      state.songID = "";
      state.listID = "";
    },
    LOADING(state, status) {
      state.isLoading = status;
    },
  },
  getters: {
    getApiConfig(state) {
      return { headers: { Authorization: `Bearer ${state.access_token}` } };
    },
  },
});

export default store;
