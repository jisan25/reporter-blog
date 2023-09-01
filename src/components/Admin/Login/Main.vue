<template>
  <div class="bg-light min-vh-100 d-flex flex-row align-items-center">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-4">
          <div class="card-group d-block d-md-flex row">
            <div class="card col-md-12 p-4 mb-0">
              <div class="card-body">
                <h1>Login</h1>
                <p class="text-medium-emphasis">Sign In to your account</p>
                <div v-if="errMsg" class="alert alert-warning" role="alert">
                  {{ errMsg }}
                </div>
                <div class="input-group mb-3">
                  <span class="input-group-text">
                    <i class="fa-solid fa-envelope"></i>
                  </span>
                  <input
                    class="form-control"
                    type="text"
                    v-model="email"
                    placeholder="Email"
                  />
                </div>
                <div class="input-group mb-4">
                  <span class="input-group-text">
                    <i class="fa-solid fa-circle"></i>
                  </span>
                  <input
                    class="form-control"
                    type="password"
                    placeholder="Password"
                    v-model="password"
                  />
                </div>
                <div class="row">
                  <div class="col-6">
                    <button
                      @click="submit"
                      class="btn btn-primary px-4"
                      type="button"
                    >
                      Login
                    </button>
                  </div>
                  <!-- <div class="col-6 text-end">
                    <button class="btn btn-link px-0" type="button">
                      Forgot password?
                    </button>
                  </div> -->
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import { signInWithEmailAndPassword, getAuth } from "firebase/auth";
import { useRouter } from "vue-router";
import { ref } from "vue";
const errMsg = ref("");
const email = ref("");
const password = ref("");

const router = useRouter();

const submit = () => {
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      router.push("/admin");
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errMsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errMsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Invalid password";
          break;
        default:
          errMsg.value = "Email or password was incorrect";
          break;
      }
    });
};
</script>
  
  <style>
</style>