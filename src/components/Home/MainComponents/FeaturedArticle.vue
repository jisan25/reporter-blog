<template>
  <article
    class="card article-card"
    v-for="article in featuredArticle"
    :key="article.id"
  >
    <router-link :to="`/articles/${article.id}`">
      <div class="card-image">
        <div class="post-info">
          <span class="text-uppercase mr-1">{{ article.date }}</span>
          <span class="text-uppercase">{{ article.read_time }}</span>
        </div>
        <img
          loading="lazy"
          decoding="async"
          :src="article.image"
          :alt="article.title"
          class="w-100"
        />
      </div>
    </router-link>
    <div class="card-body px-0 pb-1">
      <ul class="post-meta mb-2">
        <li class="mr-1 font-weight-bold">
          <a href="#!">{{ article.category.name }}</a>
        </li>
      </ul>
      <h2 class="h1">
        <router-link class="post-title" :to="`/articles/${article.id}`">{{
          article.title
        }}</router-link>
      </h2>
      <p class="card-text">
        {{ textShorten(article.body) }}
      </p>
      <div class="content">
        <router-link class="read-more-btn" :to="`/articles/${article.id}`"
          >Read Full Article</router-link
        >
      </div>
    </div>
  </article>
</template>

<script>
export default {
  props: ["featuredArticle"],
  setup() {
    const textShorten = (text) => {
      return text.substring(0, 150);
    };
    return { textShorten };
  },
};
</script>

<style>
</style>