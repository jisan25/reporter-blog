<template>
  <main>
    <section class="py-5">
      <div class="container">
        <div class="row">
          <div class="col-lg-10 mx-auto text-center">
            <img
              loading="lazy"
              decoding="async"
              src="/images/404.png"
              alt="404"
              class="img-fluid mb-4"
              width="500"
              height="350"
            />
            <h1 class="mb-4">Page Not Found!</h1>
            <router-link to="/" class="btn btn-outline-primary"
              >Back To Home</router-link
            >
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {};
</script>

<style>
</style>