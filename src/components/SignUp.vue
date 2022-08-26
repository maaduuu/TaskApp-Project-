<template>
 <section class="flex w-[100%] justify-around login-page bg-[url('https://cdna.artstation.com/p/assets/images/images/021/720/920/original/pixel-jeff-mario.gif?1572709433')] bg-no-repeat bg-cover  sm:bg-center h-screen ">
  
    <div class="md:flex md:w-[50%]">
  <!-- Login Container -->
  <div class="justify-center flex-col flex md:mx-auto leading-[3rem] my-[7.5rem] sm:my-[4.5rem] rounded-md bg-gray-200 bg-opacity-[66%]">
  <!-- Login Header -->
    <div class="login-header text-center flex items-center flex-col px-4 py-4 fix">
  
      
        <h1 class="text-3xl font-bold">Welcome to TaskApp</h1>
          <p class=" font-semibold">Register on TaskApp and organize your projects!</p>
          <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png" alt="logo" class=" h-16 logo-page"></a>
  
    </div>
    <!-- Catch Error -->
    
  <div v-if="errorMsg" class=" md:hidden p-4 rounded-md bg-gray-200 bg-opacity-60 shadow-lg px-4">
      <p class="text-black">{{errorMsg}} 😕</p>

    </div>

    
  <!-- Register Form -->
    <div class="login-form px-4 font-semibold">
      <form @submit.prevent="register" action="data-to-supabase">
        <label for="login">Email </label>
        <input type="email" required v-model="email" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address">
        <label for="password">Password </label>
        <input type="password" required v-model="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="*********">
        <label for="password">Confirm Password </label>
        <input type="password" required v-model="confirmPassword" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="*********">
        <button type="submit" class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 w-full mb-3">Register</button>
        <p>You already have an account? <router-link to="login" class="text-[#2D5E99] hover:bg-[#CDD4F1] hover:bg-opacity-30 hover:rounded hover:p-0.5">Login</router-link></p>
        
      </form>
      
    </div>  

  </div>

  <div v-if="errorMsg" class=" sm:hidden items-center justify-center flex md:flex-col h-20 mt-[20rem] p-4 rounded-md bg-gray-200 bg-opacity-60 shadow-lg px-4">
      <p class="text-black">{{errorMsg}} 😕</p>

    </div>
  

  

 </div>

  <!-- Container img -->
    <!-- <div class="hidden md:content md:justify-end md:items-center md:flex md:w-[50%]">
          <div class="md:h-[100%]">
            <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="h-[100%] md:object-cover" alt="">
          </div>
      
    </div>   -->
 
</section>

</template>

<script setup>
import PersonalRouter from "./PersonalRouter.vue";
import {ref} from "vue";
import {supabase} from "../supabase"
import { useRouter } from "vue-router";

// Route Variables
const route = "/auth/login";
const router = useRouter();
const buttonText = "Test the Sign In Route";

// Input Fields

const email = ref(null);
const password = ref(null);
const confirmPassword = ref(null);

// Error Message

const errorMsg = ref(null); 

// Register Function
const register = async () => {
 if (password.value === confirmPassword.value){
  try { 
    const { error } = await supabase.auth.signUp({
      email: email.value,
      password:password.value,
    });
    if (error) throw error;
  router.push ({path: 'login'})

  }
  catch(error){
    errorMsg.value = error.message;
     setTimeout(() =>{
  errorMsg.value = null;
 }, 5000);
  }
  alert ("We have sent you a mail to verificate!")
  return ;
  }
  
 errorMsg.value = "Password is not the same";
 setTimeout(() =>{
  errorMsg.value = null;
 }, 2500);
};

// Show hide password variable

// Show hide confrimPassword variable

// Router to push user once SignedUp to Log In

// Arrow function to SignUp user to supaBase with a timeOut() method for showing the error
</script>

<style></style>
