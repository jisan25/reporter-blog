<template>
  <div class="col-lg-4">
    <div class="widget-blocks">
      <div class="row">
        <!-- author info -->
        <author-info />
        <!-- end author info -->

        <!-- recommended -->
        <div class="col-lg-12 col-md-6">
          <div class="widget">
            <h2 class="section-title mb-3">Recommended</h2>
            <div class="widget-body">
              <div class="widget-list">
                <!-- sidebar featured article -->
                <sidebar-featured-article />
                <!-- end sidebar feaured article -->

                <!-- sidebar article -->
                <router-link
                  @click="changeArticle(article.id)"
                  class="media align-items-center"
                  :to="`/articles/${article.id}`"
                  v-for="article in sidebarArticles"
                  :key="article.id"
                >
                  <sidebar-article :article="article" />
                </router-link>

                <!-- end sidebar article -->
              </div>
            </div>
          </div>
        </div>
        <!-- end recommended -->
        <!-- start categories -->
        <div class="col-lg-12 col-md-6">
          <div class="widget">
            <h2 class="section-title mb-3">Categories</h2>
            <div class="widget-body">
              <ul class="widget-list">
                <!-- sidebar categories -->
                <sidebar-categories
                  :categories="categories"
                  :categoryPostCount="categoryPostCount"
                />
                <!-- sidebar end categories -->
              </ul>
            </div>
          </div>
        </div>

        <!-- end categories -->
      </div>
    </div>
  </div>
  <!-- end col-lg-4 -->
</template>

<script>
import AuthorInfo from "./Home/MainComponents/AuthorInfo.vue";
import SidebarArticle from "./Home/MainComponents/SidebarArticle.vue";
import SidebarCategories from "./Home/MainComponents/SidebarCategories.vue";
import SidebarFeaturedArticle from "./Home/MainComponents/SidebarFeaturedArticle.vue";
import { useHomeStore } from "../stores/HomeStore";
import { storeToRefs } from "pinia";
export default {
  components: {
    SidebarFeaturedArticle,
    SidebarArticle,
    SidebarCategories,
    AuthorInfo,
  },
  setup() {
    const HomeStore = useHomeStore();
    HomeStore.getFewArticles();
    HomeStore.getCategories();

    const changeArticle = (id) => {
      HomeStore.getArticle(id);
      document.documentElement.scrollTop = 0;
    };

    const { loading, sidebarArticles, categories, categoryPostCount } =
      storeToRefs(HomeStore);
    return {
      loading,
      sidebarArticles,
      categories,
      categoryPostCount,
      changeArticle,
    };
  },
};
</script>

<style>
</style>