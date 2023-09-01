<template>
  <footer class="bg-dark mt-5" v-if="routeName !== 'login'">
    <div class="container section">
      <div class="row">
        <div class="col-lg-10 mx-auto text-center">
          <router-link class="d-inline-block mb-4 pb-2" to="/">
            <img
              loading="prelaod"
              decoding="async"
              class="img-fluid"
              src="/images/logo-white.png"
              alt="Reporter Hugo"
            />
          </router-link>
          <ul class="p-0 d-flex navbar-footer mb-0 list-unstyled">
            <li class="nav-item my-0">
              <router-link @click="scrollToTop" class="nav-link" to="/about"
                >About</router-link
              >
            </li>
            <li class="nav-item my-0">
              <router-link @click="scrollToTop" class="nav-link" to="/privacy"
                >Privacy Policy</router-link
              >
            </li>
            <li class="nav-item my-0">
              <router-link @click="scrollToTop" class="nav-link" to="/terms"
                >Terms Conditions</router-link
              >
            </li>
            <li class="nav-item my-0">
              <router-link @click="scrollToTop" class="nav-link" to="/not-found"
                >404 Page</router-link
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="copyright bg-dark content">
      Designed &amp; Developed By
      <a href="https://themefisher.com/">Themefisher</a>
    </div>
  </footer>
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
    const scrollToTop = () => {
      document.documentElement.scrollTop = 0;
    };
    return { scrollToTop, routeName };
  },
};
</script>

<style>
</style>