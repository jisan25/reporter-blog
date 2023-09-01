<template>
  <Sidebar />
  <div class="wrapper d-flex flex-column min-vh-100 bg-light">
    <Header />
    <div class="body flex-grow-1 px-3">
      <div class="container-lg">
        <!-- /.row-->
        <h1>Edit Category</h1>
        <br />
        <!-- /.card.mb-4-->
        <div class="row">
          <div class="col-lg-4">
            <button
              @click="goBack"
              class="btn btn-primary float-right"
              type="button"
            >
              Go Back
            </button>
            <br />
            <br />
            <br />

            <div class="mb-3">
              <label class="form-label" for="exampleFormControlInput1"
                >Name</label
              >
              <input
                class="form-control"
                id="category_name"
                type="text"
                placeholder="category name"
                v-model="category_name"
              />
            </div>
            <button @click="submit" class="btn btn-success" type="button">
              Submit
            </button>
          </div>
        </div>
        <!-- /.row-->

        <!-- /.row-->
      </div>
    </div>
    <!-- footer -->
    <Footer />
  </div>
</template>
      
      
      
      <script setup>
import "@/assets/admin/coreui.bundle.min.js";
import "@/assets/admin/main.js";
import Header from "@/components/Admin/Partials/Header.vue";
import Footer from "@/components/Admin/Partials/Footer.vue";
import Sidebar from "@/components/Admin/Partials/Sidebar.vue";
import { db } from "@/main.js";
import { useHomeStore } from "../../../stores/HomeStore";

import { doc, onSnapshot, updateDoc } from "firebase/firestore";

import { useRouter, useRoute } from "vue-router";
import { onMounted, ref } from "vue";
import { storeToRefs } from "pinia";

const router = useRouter();
const route = useRoute();
const category_name = ref("");

const categoryRef = doc(db, "categories", route.params.id);

const HomeStore = useHomeStore();

const { updateCategory } = storeToRefs(HomeStore);

const goBack = () => {
  router.push({ name: "adminCategory" });
};
onMounted(() => {
  // alert(route.params.id);

  const id = route.params.id;

  onSnapshot(doc(db, "categories", id), (doc) => {
    category_name.value = doc.data().name;
  });
});
const submit = () => {
  updateDoc(categoryRef, {
    name: category_name.value,
  });

  category_name.value = "";
  updateCategory.value = true;
  router.push({ name: "adminCategory" });
};
</script>
      
<style scoped>
@import "@/assets/admin/main.css";
</style>