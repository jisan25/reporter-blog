<template>
  <li v-for="category in categories" :key="category.id">
    <router-link
      @click="categoryArticles(category.id)"
      :to="`/categories/${category.id}`"
      >{{ category.name
      }}<span class="ml-auto"
        >({{ catPostCount(category.id) }})</span
      ></router-link
    >
  </li>
</template>

<script>
import { useHomeStore } from "../../../stores/HomeStore";

export default {
  props: ["categories", "categoryPostCount"],
  setup() {
    const HomeStore = useHomeStore();

    const catPostCount = (id) => {
      return HomeStore.categoryPostCount(id);
      // alert(id);
    };

    const categoryArticles = (id) => {
      HomeStore.getCategoyPost(id);
      HomeStore.getCategoryName(id);
      document.documentElement.scrollTop = 0;
    };

    return { catPostCount, categoryArticles };
  },
};
</script>

<style>
</style>