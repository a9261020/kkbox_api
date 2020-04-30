import Vue from "vue";
import VueRouter from "vue-router";

import Layout from "./views/Layout";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: Layout,
      // component: () => import(/* webpackChunkName:"index" */ "./components/HelloWorld.vue")
    },
  ],
});

export default router;
