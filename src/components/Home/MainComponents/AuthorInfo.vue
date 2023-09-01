<template>
  <div class="col-lg-12" v-if="routeName !== 'about'">
    <div class="widget">
      <div class="widget-body">
        <img
          loading="lazy"
          decoding="async"
          src="/images/author.jpg"
          alt="About Me"
          class="w-100 author-thumb-sm d-block"
        />
        <h2 class="widget-title my-3">Hootan Safiyari</h2>
        <p class="mb-3 pb-2">
          Hello, I’m Hootan Safiyari. A Content writter, Developer and Story
          teller. Working as a Content writter at CoolTech Agency. Quam nihil …
        </p>
        <router-link to="/about" class="btn btn-sm btn-outline-primary"
          >Know More</router-link
        >
      </div>
    </div>
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
    return { routeName };
  },
};
</script>

<style>
</style>