import { createRouter, createWebHistory } from "vue-router";
import { getAuth, onAuthStateChanged } from "firebase/auth";

import HomeView from "../views/HomeView.vue";
import ContactView from "../views/ContactView.vue";
import PrivacyView from "../views/PrivacyView.vue";
import TermsView from "../views/TermsView.vue";
import NotFound from "../views/NotFoundView.vue";
import ArticleView from "../views/ArticleView.vue";
import categoryPostView from "../views/categoryPostView.vue";
import SearchPostView from "../views/SearchPostView.vue";

// Admin Routes

import AdminLogin from "../views/Admin/Login.vue";
import AdminHome from "@/views/Admin/Home.vue";

// Admin Category
import AdminCategory from "@/views/Admin/Category.vue";
import insertCategory from "@/views/Admin/Category/Insert.vue";
import editCategory from "@/views/Admin/Category/Edit.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/contact",
      name: "contact",
      component: ContactView,
    },
    {
      path: "/privacy",
      name: "privacy",
      component: PrivacyView,
    },
    {
      path: "/terms",
      name: "terms",
      component: TermsView,
    },
    {
      path: "/not-found",
      name: "not-found",
      component: NotFound,
    },
    {
      path: "/articles/:id",
      name: "article",
      component: ArticleView,
    },
    {
      path: "/categories/:id",
      name: "categoryPost",
      component: categoryPostView,
    },
    {
      path: "/search",
      name: "search",
      component: SearchPostView,
    },
    /*
      - Admin Routes
    */
    {
      path: "/admin/log-in",
      name: "AdminLogin",
      component: AdminLogin,
    },
    {
      path: "/admin",
      name: "adminHome",
      component: AdminHome,
      meta: {
        requiresAuth: true,
      },
    },
    // Admin Category Routes
    {
      path: "/admin/category",
      name: "adminCategory",
      component: AdminCategory,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin/category/insert",
      name: "insertCategory",
      component: insertCategory,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/admin/category/edit/:id",
      name: "editCategory",
      component: editCategory,
      meta: {
        requiresAuth: true,
      },
    },
    {
      path: "/:pathMatch(.*)",
      component: NotFound,
    },
  ],
});

const getCurrentUser = () => {
  return new Promise((resolve, reject) => {
    const removeListener = onAuthStateChanged(
      getAuth(),
      (user) => {
        removeListener();
        resolve(user);
      },
      reject
    );
  });
};

router.beforeEach(async (to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (await getCurrentUser()) {
      next();
    } else {
      alert("You don't have access");
      next("/");
    }
  } else {
    next();
  }
});

export default router;
