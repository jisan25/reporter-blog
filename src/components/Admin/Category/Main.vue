<template>
  <Sidebar />
  <div class="wrapper d-flex flex-column min-vh-100 bg-light">
    <Header />
    <div class="body flex-grow-1 px-3">
      <div class="container-lg">
        <!-- /.row-->
        <h1>Category</h1>
        <br />

        <div
          v-if="insertCategory"
          class="alert alert-success"
          id="insert-category"
        >
          Caregory Inserted
        </div>
        <div
          v-if="updateCategory"
          class="alert alert-success"
          id="update-category"
        >
          Caregory Updated
        </div>
        <div
          v-if="deleteCategory"
          class="alert alert-warning"
          id="delete-category"
        >
          Caregory Deleted
        </div>
        <br />
        <!-- /.card.mb-4-->
        <div class="row">
          <div class="col-lg-4">
            <button
              @click="insert"
              class="btn btn-primary float-right"
              type="button"
            >
              Insert
            </button>
            <br />
            <br />
            <br />
            <ul class="list-group mb-5">
              <li
                v-for="category in categories"
                :key="category.id"
                class="list-group-item d-flex justify-content-start align-items-center"
              >
                <div class="col-7">
                  {{ category.name }}
                  <span class="badge badge-primary mr-5">2</span>
                </div>
                <div class="col-5">
                  <router-link
                    :to="'/admin/category/edit/' + category.id"
                    class="btn btn-sm btn-secondary ml-2"
                    >Edit</router-link
                  >
                  <button
                    @click="destroy(category.id)"
                    class="btn btn-sm btn-danger ml-2"
                  >
                    Delete
                  </button>
                </div>
              </li>
            </ul>

            <!-- <br />
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
              />
            </div>
            <button class="btn btn-success" type="button">Submit</button> -->
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

import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";

import { onMounted, ref } from "vue";
import { useRouter } from "vue-router";
import { useHomeStore } from "../../../stores/HomeStore";
import { storeToRefs } from "pinia";

const categories = ref([]);
const router = useRouter();
const deleteCategory = ref(false);
const HomeStore = useHomeStore();

const { insertCategory, updateCategory } = storeToRefs(HomeStore);

const insert = () => {
  router.push({ name: "insertCategory" });
};

const destroy = (id) => {
  // document.getElementById("delete-category").style.display = "block";
  deleteDoc(doc(db, "categories", id));
  deleteCategory.value = true;

  setTimeout(() => {
    document.getElementById("delete-category").style.display = "none";
  }, 2000);
  document.getElementById("delete-category").style.display = "block";
};

onMounted(async () => {
  if (insertCategory.value) {
    setTimeout(() => {
      document.getElementById("insert-category").style.display = "none";
      insertCategory.value = false;
    }, 2000);
  }
  if (updateCategory.value) {
    setTimeout(() => {
      document.getElementById("update-category").style.display = "none";
      updateCategory.value = false;
    }, 2000);
  }

  onSnapshot(collection(db, "categories"), (querySnapshot) => {
    const fbCategories = [];
    querySnapshot.forEach((doc) => {
      const todo = {
        id: doc.id,
        name: doc.data().name,
      };
      fbCategories.push(todo);
    });
    categories.value = fbCategories;
  });
});
</script>
    
    <style scoped>
@import "@/assets/admin/main.css";
</style>