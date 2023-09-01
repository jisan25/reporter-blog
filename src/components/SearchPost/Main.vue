<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="row no-gutters-lg">
          <div class="col-12">
            <h2 class="section-title">Latest Articles</h2>
          </div>
          <div class="col-lg-8 mb-5 mb-lg-0">
            <div class="row" v-if="searchArticles.length > 0">
              <!-- article -->
              <div
                class="col-md-6 mb-4"
                v-for="article in searchArticles"
                :key="article.id"
              >
                <Article :article="article" />
              </div>

              <!-- end article -->
            </div>
            <div class="row" v-else>
              <div class="col-md-12">
                <div class="alert alert-warning">
                  No Search Posts Available !
                </div>
              </div>
            </div>
            <!-- end row -->
          </div>
          <!-- end col-lg - 8 -->

          <!-- sidebar start -->
          <side-bar />
          <!-- sidebar end -->
        </div>
        <!-- end row -->
      </div>
      <!-- end container -->
    </section>
  </main>
</template>



<script>
import SideBar from "../SideBar.vue";
import Article from "../Article.vue";
import AuthorInfo from "../Home/MainComponents/AuthorInfo.vue";
import FeaturedArticle from "../Home/MainComponents/FeaturedArticle.vue";
import { storeToRefs } from "pinia";
import { useHomeStore } from "../../stores/HomeStore";

export default {
  components: {
    FeaturedArticle,
    Article,
    AuthorInfo,
    SideBar,
  },
  async setup() {
    const HomeStore = useHomeStore();

    const { searchArticles, loading } = storeToRefs(HomeStore);

    return {
      loading,
      searchArticles,
    };
  },
};
</script>

<style>
.disabled {
  pointer-events: none;
  cursor: default;
  opacity: 0.6;
}
</style>