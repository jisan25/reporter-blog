<template>
  <img
    loading="lazy"
    decoding="async"
    :src="'/' + article.image"
    :alt="article.title"
    class="w-100"
  />
  <div class="media-body ml-3">
    <h3 style="margin-top: -5px">{{ textShorten(article.title, 20) }}</h3>
    <p class="mb-0 small">{{ textShorten(article.body, 50) }}</p>
  </div>
</template>

<script>
export default {
  props: ["article"],
  setup() {
    const textShorten = (text, limit) => {
      return text.substring(0, limit);
    };
    return { textShorten };
  },
};
</script>

<style>
</style>