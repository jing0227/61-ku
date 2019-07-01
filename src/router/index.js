import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import userLayout from "@/layouts/userLayout.vue";

Vue.use(Router);

const constantRouterMap = [
  {
    path: "/user",
    component: userLayout,
    redirect: "/user/login",
    hidden: true,
    children: [
      {
        path: "login",
        name: "login",
        component: () =>
          import(/* webpackChunkName: "user" */ "@/views/user/Login")
      }
    ]
  }
];

const router = new Router({
  routes: [
    {
      path: "/",
      name: "home",
      // meta: {
      //   // 该路由项需要权限校验
      //   requireAuth: true
      // },
      component: Home
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () =>
        import(/* webpackChunkName: "about" */ "../views/About.vue")
    },
    ...constantRouterMap
  ]
});

router.beforeEach((to, from, next) => {
  if (to.meta.requireAuth) {
    // 判断该路由是否需要登录权限
    if (localStorage.token) {
      // 获取当前的token是否存在
      console.log("token存在");
      next();
    } else {
      console.log("token不存在");
      next({
        path: "/login",
        // 将跳转的路由path作为参数，登录成功后跳转到该路由
        query: { redirect: to.fullPath }
      });
    }
  } else {
    // 如果不需要权限校验，直接进入路由界面
    next();
  }
});

export default router;
