<template>
  <div class="sidebar sidebar-dark sidebar-fixed" id="sidebar">
    <div class="sidebar-brand d-none d-md-flex"></div>
    <ul class="sidebar-nav" data-coreui="navigation" data-simplebar="">
      <li class="nav-item">
        <router-link class="nav-link" to="/admin">
          Dashboard<span class="badge badge-sm bg-info ms-auto">NEW</span>
        </router-link>
      </li>
      <li class="nav-title">Blog Management</li>
      <li class="nav-item">
        <router-link class="nav-link" to="/admin/category">
          Category
        </router-link>
      </li>

      <li class="nav-title">Components</li>
      <li class="nav-group">
        <a class="nav-link nav-group-toggle" @click="showDropDown" href="#">
          Base</a
        >
        <ul class="nav-group-items" id="dropdown-items">
          <li class="nav-item">
            <a class="nav-link" href="base/accordion.html"
              ><span class="nav-icon"></span> Accordion</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="base/breadcrumb.html"
              ><span class="nav-icon"></span> Breadcrumb</a
            >
          </li>
          <li class="nav-item">
            <a class="nav-link" href="base/cards.html"
              ><span class="nav-icon"></span> Cards</a
            >
          </li>
        </ul>
      </li>

      <li class="nav-divider"></li>
    </ul>
  </div>
</template>

<script setup>
import "@/assets/admin/coreui.bundle.min.js";
// import "@/assets/admin/simple-bar.min.js";
// import "@/assets/admin/chart.min.js";
// import "@/assets/admin/coreui.charts.js";
// import "@/assets/admin/coreui-utils.js";
import "@/assets/admin/main.js";
import { onMounted, ref } from "vue";

let dropdown = ref(false);

const showDropDown = () => {
  dropdown.value = !dropdown.value;
  if (dropdown.value) {
    document.getElementById("dropdown-items").style.display = "block";
  } else {
    document.getElementById("dropdown-items").style.display = "none";
  }
};
onMounted(() => {});

// } else {
// document.getElementsByClassName(".nav-group-items").style.display = "none";
// }
</script>

<style scoped>
@import "@/assets/admin/main.css";
</style>