import Vue from "vue";
import VueRouter from "vue-router";

import HelloWorld from "./components/HelloWorld";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: HelloWorld,
      // component: () => import(/* webpackChunkName:"index" */ "./components/HelloWorld.vue")
    },
  ],
});

export default router;
