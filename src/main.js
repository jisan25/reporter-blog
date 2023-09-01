import "./assets/main.css";
import "./assets/jquery.min.js";
import "./assets/script.js";

import "./assets/bootstrap.min.js";

import { createApp } from "vue";
import { createPinia } from "pinia";

import App from "./App.vue";
import router from "./router";

/* 
- Firebase Config
*/

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCwUb1CxiuXOF3JiWPJMpR87-Hctsv3DME",
  authDomain: "vue-firebase-auth-36327.firebaseapp.com",
  projectId: "vue-firebase-auth-36327",
  storageBucket: "vue-firebase-auth-36327.appspot.com",
  messagingSenderId: "1036922316020",
  appId: "1:1036922316020:web:f2ceb03c712dd0011caaa1",
};

// Initialize Firebase
const fireApp = initializeApp(firebaseConfig);
const db = getFirestore(fireApp);

/* 
- End Firebase Config
*/

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount("#app");

export { db };
