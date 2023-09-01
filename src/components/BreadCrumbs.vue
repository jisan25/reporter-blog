<template>
  <div class="breadcrumbs mb-4">
    <router-link to="/">Home</router-link> <span class="mx-1">/</span>
    <router-link v-if="routeName" :to="'/' + routeName">{{
      capitalizeFirstLetter(routeName)
    }}</router-link>
  </div>
</template>

<script>
import { useRoute } from "vue-router";
import { computed } from "vue";
export default {
  setup() {
    const route = useRoute();
    const routeName = computed(() => {
      return route.name;
    });
    const capitalizeFirstLetter = (text) => {
      return text.charAt(0).toUpperCase() + text.slice(1);
    };
    return { routeName, capitalizeFirstLetter };
  },
};
</script>

<style>
</style>