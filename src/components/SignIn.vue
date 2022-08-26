<template>
<section class="flex w-[100%] justify-around login-page bg-[url('https://cdna.artstation.com/p/assets/images/images/021/720/920/original/pixel-jeff-mario.gif?1572709433')] bg-no-repeat bg-cover  sm:bg-center h-screen">
  
    <div class="md:flex md:w-[50%]">
  <!-- Login Container -->
  <div class="justify-center flex-col flex md:mx-auto leading-[3rem] my-[7.5rem] sm:mx-4 sm:my-[4.5rem] rounded-md bg-gray-200 bg-opacity-[66%]">
  <!-- Login Header -->
    <div class="login-header text-center flex items-center flex-col px-4 py-4">
  
      
        <h1 class="text-3xl font-bold ">Welcome to TaskApp</h1>
      <p class="sm:leading-[2rem] sm:text-[0.9rem] font-semibold">Organize your projects in the most comfortable way!</p>
      <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png" alt="logo" class="cover h-16"></a>
          
  
    </div>
      <!-- Catch Error -->

    <div v-if="errorMsg" class=" md:hidden p-4 rounded-md bg-gray-200 bg-opacity-60 shadow-lg px-4">
      <p class="text-black">{{errorMsg}} 😕</p>

    </div>

  <!-- Login Form -->
    <div class="login-form px-4 font-semibold">
      <form @submit.prevent="signIn">
        <label for="login">Email </label>
        <input type="email" v-model="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address">
        <label for="password">Password </label>
        <input type="password" v-model="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="*********">
        <button type="submit" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 w-full mb-3">Login</button>
        <p>No tienes cuenta? <router-link to="sign-up" class="text-[#2D5E99] hover:bg-[#CDD4F1] hover:bg-opacity-30 hover:rounded hover:p-0.5">Register</router-link></p>
        
      </form>
      
    </div>   
  </div>
  
  <div v-if="errorMsg" class=" sm:hidden items-center justify-center flex md:flex-col h-20 mt-[20rem] p-4 rounded-md bg-gray-200 bg-opacity-60 shadow-lg px-4">
      <p class="text-black">{{errorMsg}} 😕</p>

    </div>
  
  

  
 
 </div>

  <!-- Container img -->
<!-- <div class="hidden md:invisible md:justify-end md:items-center md:flex md:w-[50%]">
      <div class="md:h-[100%]">
        <img src="https://cdnb.artstation.com/p/assets/images/images/024/538/827/original/pixel-jeff-clipa-s.gif?1582740711" class="h-[100%] md:object-cover" alt="">
      </div>
   
</div>   -->
 
</section>
</template>

<script setup>
import { ref, computed } from "vue";
import { supabase } from "../supabase";
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";
import { storeToRefs } from "pinia";



// Route Variables
const route = "/auth/sign-up";
const buttonText = "Test the Sign Up Route";
const redirect = useRouter();

// Input Fields

const email = ref("");
const password = ref("");

// Error Message

const errorMsg = ref("");  

// Login Function

const signIn = async () => {
  try {
      await useUserStore().signIn(email.value, password.value)
      redirect.push({path: "/"})

  } catch (error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() =>{
  errorMsg.value = null;
 }, 2500);
  }
}

// const signIn = async () => {
//   console.log('funciona')
//   try {
//     const {error} = await supabase.auth.signIn({
//       email: email.value,
//       password: password.value,
//     });
//     if (error) throw error;
//     redirect.push({path: "/"})
// };


// Show hide password variables
// const passwordFieldType = computed(() =>
  // hidePassword.value ? "password" : "text"
// );
// const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView


// // Arrow function to Signin user to supaBase
// const signIn = async () => {
//   try {
//     // calls the user store and send the users info to backend to logIn
//    const { error } = await useUserStore().signIn(email.value, password.value);
//     // redirects user to the homeView
//     redirect.push({ path: "/" });
//   } catch (error) {
//     // displays error message
//     errorMsg.value = `Error: ${error.message}`;
//     // hides error message
//     setTimeout(() => {
//       errorMsg.value = null;
//     }, 5000);
//   }
// };
</script>

<style>
.wu-text {
  color: black;
}

.form {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
}
.input {
  color: black;
  margin-bottom: 1rem;
}
.button {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 10px 10px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
}
</style>
