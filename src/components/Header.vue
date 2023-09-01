<template>
  <header class="navigation" v-if="routeName !== 'login'">
    <div class="container">
      <nav class="navbar navbar-expand-lg navbar-light px-0">
        <router-link @click="Home" class="navbar-brand order-1 py-0" to="/">
          <img
            loading="prelaod"
            decoding="async"
            class="img-fluid"
            src="/images/logo.png"
            alt="Reporter Hugo"
          />
        </router-link>
        <div class="navbar-actions order-3 ml-0 ml-md-4">
          <button
            aria-label="navbar toggler"
            class="navbar-toggler border-0"
            type="button"
            data-toggle="collapse"
            data-target="#navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
        </div>
        <form
          @submit.prevent="submit"
          class="search order-lg-3 order-md-2 order-3 ml-auto"
        >
          <input
            id="search-query"
            name="s"
            type="search"
            placeholder="Search..."
            autocomplete="off"
            v-model="searchText"
          />
        </form>
        <div
          class="collapse navbar-collapse text-center order-lg-2 order-4"
          id="navigation"
        >
          <ul class="navbar-nav mx-auto mt-3 mt-lg-0">
            <li class="nav-item">
              <router-link class="nav-link" to="/about">About Me</router-link>
            </li>
            <li class="nav-item dropdown">
              <a
                class="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                Articles
              </a>
              <div class="dropdown-menu">
                <router-link
                  @click="changeCategoryArticles(category.id)"
                  v-for="category in fewCategories"
                  :key="category.id"
                  class="dropdown-item"
                  :to="'/categories/' + category.id"
                  >{{ capitalizeFirstLetter(category.name) }}</router-link
                >
              </div>
            </li>
            <li class="nav-item">
              <router-link class="nav-link" to="/contact">Contact</router-link>
            </li>
            <li v-if="!isLoggedIn" class="nav-item">
              <router-link class="nav-link" to="/admin/log-in"
                >Log In</router-link
              >
            </li>
            <li v-else class="nav-item">
              <router-link class="nav-link" to="/admin">Dashboard</router-link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { storeToRefs } from "pinia";
import { RouterLink } from "vue-router";
import { useHomeStore } from "../stores/HomeStore";
import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";

import { useRoute } from "vue-router";
import { computed } from "vue";

export default {
  setup() {
    const isLoggedIn = ref(false);
    let auth;

    onMounted(() => {
      auth = getAuth();
      onAuthStateChanged(auth, (user) => {
        if (user) {
          isLoggedIn.value = true;
          console.log(isLoggedIn.value);
        } else {
          isLoggedIn.value = false;
        }
      });
    });

    const route = useRoute();
    const routeName = computed(() => {
      return route.name;
    });

    const router = useRouter();
    let searchText = ref("");
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    const HomeStore = useHomeStore();
    HomeStore.getFewCategories();
    const { fewCategories, articles } = storeToRefs(HomeStore);
    const changeCategoryArticles = (id) => {
      HomeStore.getCategoyPost(id);
      HomeStore.getCategoryName(id);
    };
    const Home = () => {
      HomeStore.getArticles(5, 1);
      let pages = document.getElementsByClassName("page-item");
      Array.from(pages).forEach((pageName) => {
        pageName.classList.remove("active");
        // pageName[0].classList.add("active");
      });
      document.getElementById("page-1").classList.add("active");
      document.getElementById("nextButton").classList.remove("disabled");
    };
    const submit = () => {
      HomeStore.getSearchArticles(searchText.value);
      searchText.value = "";
      router.push("/search");
    };
    return {
      fewCategories,
      capitalizeFirstLetter,
      changeCategoryArticles,
      Home,
      searchText,
      submit,
      articles,
      routeName,
      isLoggedIn,
    };
  },
};
</script>

   <style scoped>
</style>
   