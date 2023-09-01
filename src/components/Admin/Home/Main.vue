<template>
  <Sidebar />
  <div class="wrapper d-flex flex-column min-vh-100 bg-light">
    <Header />
    <div class="body flex-grow-1 px-3">
      <div class="container-lg">
        <!-- /.row-->
        <h1>Dashboard</h1>
        <br />
        <!-- /.card.mb-4-->
        <div class="row">
          <div class="col-sm-6 col-lg-4">
            <div class="card mb-4" style="--cui-card-cap-bg: #3b5998">
              <div
                class="card-header position-relative d-flex justify-content-center align-items-center"
              >
                <div
                  class="chart-wrapper position-absolute top-0 start-0 w-100 h-100"
                >
                  <canvas id="social-box-chart-1" height="90"></canvas>
                </div>
              </div>
              <div class="card-body row text-center">
                <div class="col">
                  <div class="fs-5 fw-semibold">89k</div>
                  <div class="text-uppercase text-medium-emphasis small">
                    friends
                  </div>
                </div>
                <div class="vr"></div>
                <div class="col">
                  <div class="fs-5 fw-semibold">459</div>
                  <div class="text-uppercase text-medium-emphasis small">
                    feeds
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col-->
          <div class="col-sm-6 col-lg-4">
            <div class="card mb-4" style="--cui-card-cap-bg: #00aced">
              <div
                class="card-header position-relative d-flex justify-content-center align-items-center"
              >
                <div
                  class="chart-wrapper position-absolute top-0 start-0 w-100 h-100"
                >
                  <canvas id="social-box-chart-2" height="90"></canvas>
                </div>
              </div>
              <div class="card-body row text-center">
                <div class="col">
                  <div class="fs-5 fw-semibold">973k</div>
                  <div class="text-uppercase text-medium-emphasis small">
                    followers
                  </div>
                </div>
                <div class="vr"></div>
                <div class="col">
                  <div class="fs-5 fw-semibold">1.792</div>
                  <div class="text-uppercase text-medium-emphasis small">
                    tweets
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col-->
          <div class="col-sm-6 col-lg-4">
            <div class="card mb-4" style="--cui-card-cap-bg: #4875b4">
              <div
                class="card-header position-relative d-flex justify-content-center align-items-center"
              >
                <div
                  class="chart-wrapper position-absolute top-0 start-0 w-100 h-100"
                >
                  <canvas id="social-box-chart-3" height="90"></canvas>
                </div>
              </div>
              <div class="card-body row text-center">
                <div class="col">
                  <div class="fs-5 fw-semibold">500+</div>
                  <div class="text-uppercase text-medium-emphasis small">
                    contacts
                  </div>
                </div>
                <div class="vr"></div>
                <div class="col">
                  <div class="fs-5 fw-semibold">292</div>
                  <div class="text-uppercase text-medium-emphasis small">
                    feeds
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- /.col-->
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
// import "@/assets/admin/simple-bar.min.js";
// import "@/assets/admin/chart.min.js";
// import "@/assets/admin/coreui.charts.js";
// import "@/assets/admin/coreui-utils.js";
import "@/assets/admin/main.js";
import Header from "@/components/Admin/Partials/Header.vue";
import Footer from "@/components/Admin/Partials/Footer.vue";
import Sidebar from "@/components/Admin/Partials/Sidebar.vue";
</script>
  
  <style scoped>
@import "@/assets/admin/main.css";
</style>