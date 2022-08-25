<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter } from "vue-router";
import { useUserStore } from "./stores/user.js";
import { ref } from "vue";
import {supabase} from './supabase';
import store from './stores/index'
const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);



const appReady = ref("");

const users = supabase.auth.user();

if (!users) {
  appReady.value = true;
}


supabase.auth.onAuthStateChange((_, session) => {
  store.methods.setUser(session);
  appReady.value = true;
  
});

// onMounted(async () => {
//   const appReady = ref(null);
//   try {
//     await userStore.fetchUser(); // here we call fetch user
//     if (!user.value) {
//       // redirect them to logout if the user is not there
//       appReady.value = true;
//       router.push({ path: "/auth/login" });
//     } else {
//       // continue to dashboard
//       // router.push({ path: "/" });
//     }
//   } catch (e) {
//     console.log(e);
//   }
// });
</script>

<template>
  <div class="h-screen">
    <div>
      
    </div>
    <router-view />
  </div>
</template>

<style></style>
