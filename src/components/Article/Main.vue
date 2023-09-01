<template>
  <main>
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mb-5 mb-lg-0">
            <article>
              <img
                loading="lazy"
                decoding="async"
                :src="`/${article.image}`"
                alt="Post Thumbnail"
                class="w-100"
              />
              <ul class="post-meta mb-2 mt-4">
                <li>
                  <span>{{ article.date }}</span>
                </li>
              </ul>
              <h1 class="my-3">{{ article.title }}</h1>
              <ul class="post-meta mb-4">
                <li>
                  <a href="/categories/destination" v-if="article.category">{{
                    article.category.name
                  }}</a>
                </li>
              </ul>
              <div class="content text-left">
                <p>
                  {{ article.body }}
                </p>

                <hr />
              </div>
            </article>
          </div>

          <!-- sidebar start -->
          <side-bar />
          <!-- sidebar end -->
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import { useRoute } from "vue-router";
import SideBar from "../SideBar.vue";
import { useHomeStore } from "../../stores/HomeStore";
import { storeToRefs } from "pinia";
export default {
  components: { SideBar },
  setup() {
    const route = useRoute();
    const HomeStore = useHomeStore();
    HomeStore.getArticle(route.params.id);

    const { article } = storeToRefs(HomeStore);

    return { article };
  },
};
</script>

<style>
</style>