<template>
  <div>
  <nav>
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/feed">Feed</RouterLink>
    <RouterLink to="/register">Register</RouterLink>
    <RouterLink to="/login">Login</RouterLink>
    <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>

  </nav>

  <RouterView />
</div>
</template>


<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { onMounted,ref } from 'vue';
import {getAuth,onAuthStateChanged,signOut} from "firebase/auth";
import router from './router';

const isLoggedIn=ref(false);

let auth;
onMounted(()=>{
  auth=getAuth();
  onAuthStateChanged(auth,(user)=>{
    if(user){
      isLoggedIn.value=true;
    }else{
      isLoggedIn.value=false;
    }
  });
});

const handleSignOut=()=>{
    signOut(auth).then(()=>{
      router.push("/login");
    });
};

</script>

<style>
#app {
font-family: Avenir, Helvetica, Arial, sans-serif;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-align: center;
color: #2c3e50;
margin-top: 60px;
}

</style>


