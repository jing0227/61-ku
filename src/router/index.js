import Vue from "vue";
import Router from "vue-router";
import Home from "../views/home";
import userLayout from "@/layouts/userLayout.vue";
import homeLayout from "@/layouts/homeLayout.vue";

Vue.use(Router);

// 通用路由
const commonRouterMap = [
  {
    // 首页
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/search",
    name: "search",
    // meta: {
    //   // 该路由项需要权限校验
    //   requireAuth: true
    // },
    // route level code-splitting
    // this generates a separate chunk (search.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "search" */ "../views/home/search.vue")
  },
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
          import(/* webpackChunkName: "login" */ "@/views/common/login")
      }
    ]
  }
];

// 活动路由
const activityRouterMap = [
  {
    path: "/activity",
    component: homeLayout,
    redirect: "/activity/index",
    hidden: true,
    children: [
      {
        path: "index",
        name: "activityIndex",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/activity/index")
      },
      {
        path: "list",
        name: "activityList",
        component: () =>
          import(/* webpackChunkName: "list" */ "@/views/activity/list")
      },
      {
        path: "detail",
        name: "activityDetail",
        component: () =>
          import(/* webpackChunkName: "detail" */ "@/views/activity/detail")
      }
    ]
  }
];

// 图片路由
const imageRouterMap = [
  {
    path: "/image",
    component: homeLayout,
    redirect: "/image/index",
    hidden: true,
    children: [
      {
        path: "index",
        name: "imageIndex",
        component: () =>
          import(/* webpackChunkName: "index" */ "@/views/image/index")
      },
      {
        path: "list",
        name: "imageList",
        component: () =>
          import(/* webpackChunkName: "list" */ "@/views/image/list")
      },
      {
        path: "detail",
        name: "imageDetail",
        component: () =>
          import(/* webpackChunkName: "detail" */ "@/views/image/detail")
      }
    ]
  }
];

// 绘本路由
const booksRouterMap = [
  {
    path: "/books",
    component: homeLayout,
    redirect: "/books/index",
    hidden: true,
    children: [
      {
        path: "list",
        name: "booksList",
        component: () =>
          import(/* webpackChunkName: "list" */ "@/views/books/list")
      },
      {
        path: "detail",
        name: "booksDetail",
        component: () =>
          import(/* webpackChunkName: "detail" */ "@/views/books/detail")
      }
    ]
  }
];

const router = new Router({
  routes: [
    ...commonRouterMap,
    ...activityRouterMap,
    ...imageRouterMap,
    ...booksRouterMap,
    { path: "*", redirect: "/user/login" }
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
