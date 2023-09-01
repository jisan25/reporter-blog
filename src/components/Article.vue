<template>
  <article class="card article-card article-card-sm h-100">
    <router-link @click="scrollToTop" :to="`/articles/${article.id}`">
      <div class="card-image">
        <div class="post-info">
          <span class="text-uppercase mr-1">{{ article.date }}</span>
          <span class="text-uppercase">{{ article.read_time }}</span>
        </div>
        <img
          loading="lazy"
          decoding="async"
          :src="'/' + article.image"
          :alt="article.title"
          class="w-100"
        />
      </div>
    </router-link>
    <div class="card-body px-0 pb-0">
      <ul class="post-meta mb-2">
        <li class="mr-1 font-weight-bold">
          <a v-if="routeName == 'home'" href="#!">{{
            article.category.name
          }}</a>
          <a style="cursor: default" v-else>{{ category }}</a>
        </li>
      </ul>
      <h2>
        <router-link
          @click="scrollToTop"
          class="post-title"
          :to="`/articles/${article.id}`"
          >{{ article.title }}</router-link
        >
      </h2>
      <p class="card-text">
        {{ textShorten(article.body) }}
      </p>
      <div class="content">
        <router-link
          @click="scrollToTop"
          class="read-more-btn"
          :to="`/articles/${article.id}`"
          >Read Full Article</router-link
        >
      </div>
    </div>
  </article>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";
import { useHomeStore } from "../stores/HomeStore";
import { storeToRefs } from "pinia";
export default {
  props: ["article"],
  setup() {
    const route = useRoute();
    const routeName = computed(() => {
      return route.name;
    });
    const homeStore = useHomeStore();

    if (routeName == "categoryPost") {
      homeStore.getCategoryName(route.params.id);
    }

    const textShorten = (text) => {
      return text.substring(0, 150);
    };
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    };
    const { category } = storeToRefs(homeStore);
    return { textShorten, scrollToTop, routeName, category };
  },
};
</script>

<style></style>
