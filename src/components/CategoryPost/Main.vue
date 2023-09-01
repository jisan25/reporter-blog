<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-12">
            <div class="breadcrumbs mb-4">
              <router-link to="/">Home</router-link>
              <span class="mx-1">/</span>
              <router-link to="/">Articles</router-link>
              <span class="mx-1">/</span>
              <a href="#!">{{ capitalizeFirstLetter(category) }}</a>
            </div>
            <h1 class="mb-4 border-bottom border-primary d-inline-block">
              {{ capitalizeFirstLetter(category) }}
            </h1>
          </div>
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="row">
              <div
                class="col-md-6 mb-4"
                v-for="article in categoryArticles"
                :key="article.id"
              >
                <Article :article="article" />
                <!-- article -->
              </div>
              <div
                v-if="categoryArticles.length == 0"
                class="alert alert-warning col-md-12"
              >
                No Posts Available
              </div>
            </div>
          </div>

          <!-- sidbebar -->
          <side-bar />
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { storeToRefs } from "pinia";
import { useRoute } from "vue-router";
import { useHomeStore } from "../../stores/HomeStore";
import SideBar from "../SideBar.vue";
import Article from "../Article.vue";
export default {
  components: { SideBar, Article },
  setup() {
    const route = useRoute();

    const textShorten = (text) => {
      return text.substring(0, 150);
    };
    const capitalizeFirstLetter = (text = "") => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };

    const homeStore = useHomeStore();

    homeStore.getCategoyPost(route.params.id);
    homeStore.getCategoryName(route.params.id);

    const { categoryArticles, category } = storeToRefs(homeStore);

    return {
      categoryArticles,
      textShorten,
      category,
      capitalizeFirstLetter,
    };
  },
};
</script>

<style>
</style>