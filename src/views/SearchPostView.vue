<script setup>
import SearchPost from "@/components/SearchPostComponents.vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
</script>

<template>
  <suspense>
    <Header />
    <SearchPost />

    <Footer />
  </suspense>
</template>
