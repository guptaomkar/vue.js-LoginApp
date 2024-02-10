<template>

  <h1>Login Account</h1>
  <p><input type="text" placeholder="Email" v-model="email" /></p>
  <p><input type="password" placeholder="Password" v-model="password" /></p>
  <p v-if="errmsg">{{ errmsg }}</p>
  <p><button @click="login">Submit</button></p>

</template>

<script setup>

import { ref } from "vue";
import { getAuth, signInWithEmailAndPassword} from "firebase/auth";
import { useRouter } from 'vue-router';
const email = ref("");
const password = ref("");
const errmsg = ref("");
const router = useRouter();
const login = () => {
  // need .value because ref()
  signInWithEmailAndPassword(getAuth(), email.value, password.value)
    .then((data) => {
      console.log("Successfully Logged In!");
      router.push('/feed')
    })
    .catch((error) => {
      console.log(error.code);
      switch (error.code) {
        case "auth/invalid-email":
          errmsg.value = "Invalid email";
          break;
        case "auth/user-not-found":
          errmsg.value = "No account with that email was found";
          break;
        case "auth/wrong-password":
          errMsg.value = "Incorrect password";
          break;
        default:
          errmsg.value = "Email or password was incorrect";
          break;

      }});

}

</script>
