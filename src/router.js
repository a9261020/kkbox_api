import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: "/",
      component: () =>
        import(/* webpackChunkName:"index" */ "./views/Layout.vue"),
      children: [
        {
          path: "/",
          component: () =>
            import(/* webpackChunkName:"Chart" */ "./views/Chart.vue"),
        },
        {
          path: "/songlist",
          component: () =>
            import(/* webpackChunkName:"songlist" */ "./views/SongList.vue"),
        },
      ],
    },
  ],
});

export default router;
