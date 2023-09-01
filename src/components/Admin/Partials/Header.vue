<template>
  <header class="header header-sticky mb-4">
    <div class="container-fluid">
      <button
        class="header-toggler px-md-0 me-md-3"
        type="button"
        onclick="coreui.Sidebar.getInstance(document.querySelector('#sidebar')).toggle()"
      ></button
      ><a class="header-brand d-md-none" href="#"> </a>
      <ul class="header-nav d-none d-md-flex">
        <li class="nav-item">
          <router-link target="_blank" class="nav-link" to="/"
            >Frontend</router-link
          >
        </li>
        <li class="nav-item"><a class="nav-link" href="#">Users</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Settings</a></li>
      </ul>

      <ul class="header-nav ms-3">
        <li class="nav-item dropdown">
          <a
            class="nav-link py-0"
            data-coreui-toggle="dropdown"
            href="#"
            role="button"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <div class="avatar avatar-md">
              <img class="avatar-img" src="" alt="user@email.com" />
            </div>
          </a>
          <div class="dropdown-menu dropdown-menu-end pt-0">
            <div class="dropdown-header bg-light py-2">
              <div class="fw-semibold">Account</div>
            </div>
            <a class="dropdown-item" href="#">
              Updates<span class="badge badge-sm bg-info ms-2">42</span></a
            ><a class="dropdown-item" href="#">
              Messages<span class="badge badge-sm bg-success ms-2">42</span></a
            >
            <div class="dropdown-header bg-light py-2">
              <div class="fw-semibold">Settings</div>
            </div>
            <a class="dropdown-item" href="#"> Profile</a
            ><a class="dropdown-item" href="#"> Settings</a
            ><a @click="handleSignOut" class="dropdown-item"> Logout</a>
          </div>
        </li>
      </ul>
    </div>
    <div class="header-divider"></div>
    <div class="container-fluid">
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb my-0 ms-2">
          <li class="breadcrumb-item">
            <!-- if breadcrumb is single--><span>Home</span>
          </li>
          <li class="breadcrumb-item active"><span>Dashboard</span></li>
        </ol>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { getAuth, signOut } from "firebase/auth";
import router from "@/router";

const handleSignOut = () => {
  signOut(getAuth()).then(() => {
    router.push("/");
  });
};
</script>

<style scoped>
@import "@/assets/admin/main.css";
</style>