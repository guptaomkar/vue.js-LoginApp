import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAnaVKk48hLuYxhrg55hRNgWvE4i1t6HWc",
  authDomain: "vueloginapp-2ef70.firebaseapp.com",
  projectId: "vueloginapp-2ef70",
  storageBucket: "vueloginapp-2ef70.appspot.com",
  messagingSenderId: "546906757",
  appId: "1:546906757:web:3dbc6127e7f71b139abfec"
};

initializeApp(firebaseConfig);
// Initialize Firebase

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
