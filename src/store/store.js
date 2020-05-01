import Vue from "vue";
import Vuex from "vuex";

import qs from "querystring";
import Axios from "axios";

Vue.use(Vuex);

const store = new Vuex.Store({
  state: {
    access_token: "abc",
    data: [],
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
      Axios.post(url, qs.stringify(oauth), config).then((res) => {
        context.commit("SET_TOKEN", res.data.access_token);
        context.dispatch("getData");
      });
    },
    getData(context) {
      const config = {
        headers: { Authorization: `Bearer ${context.state.access_token}` },
      };
      Axios.get("https://api.kkbox.com/v1.1/charts?territory=TW", config).then(
        (res) => {
          context.commit("GET_DATA", res.data.data);
        }
      );
    },
  },
  mutations: {
    SET_TOKEN(state, access_token) {
      state.access_token = access_token;
    },
    GET_DATA(state, data) {
      state.data = data;
    },
  },
  getters: {},
  modules: {},
});

export default store;
