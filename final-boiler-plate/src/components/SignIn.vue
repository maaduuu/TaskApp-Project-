<template>
<section class="flex w-[100%] justify-around login-page sm:bg-gradient-to-t from-[#F66352]">
  
    <div class="md:flex md:w-[50%]">
  <!-- Login Container -->
  <div class="justify-center align-middle h-screen flex-col flex md:w-[50%] md:mx-auto leading-[4rem]">
  <!-- Login Header -->
    <div class="login-header text-center flex items-center flex-col">
  
      <a href="#"><img src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648297523/taskApp/imgs/logo1_ryvwid.svg" alt="logo" class=" h-8 logo-page"></a>
        <h1 class="text-3xl font-bold">Bienvenido a TaskApp</h1>
          <p>Organiza tus proyectos de la forma mas comoda!</p>
  
    </div>
  <!-- Login Form -->
    <div class="login-form">
      <form action="data-to-supabase">
        <label for="login">Email </label>
        <input type="text" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="Email address">
        <label for="password">Password </label>
        <input type="password" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none" placeholder="*********">
        <button class="inline-block px-6 py-2.5 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 w-full mb-3">Inicia Sesion</button>
        <p>No tienes cuenta? <router-link to="sign-up">Registrate</router-link></p>
        
      </form>
      
    </div>   
  </div>
  

  
 
 </div>

  <!-- Container img -->
<div class="hidden md:content md:justify-end md:items-center md:flex md:w-[50%]">
      <div class="md:h-[100%]">
        <img src="https://images.unsplash.com/photo-1456324504439-367cee3b3c32?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" class="h-[100%] md:object-cover" alt="">
      </div>
   
</div>  
 
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

// Input Fields
const email = ref("");
const password = ref("");

// Error Message
const errorMsg = ref("");

//Show hide password variables
const passwordFieldType = computed(() =>
  hidePassword.value ? "password" : "text"
);
const hidePassword = ref(true);

// Router to push user once SignedIn to the HomeView
const redirect = useRouter();

// Arrow function to Signin user to supaBase
const signIn = async () => {
  try {
    // calls the user store and send the users info to backend to logIn
    await useUserStore().signIn(email.value, password.value);
    // redirects user to the homeView
    redirect.push({ path: "/" });
  } catch (error) {
    // displays error message
    errorMsg.value = `Error: ${error.message}`;
    // hides error message
    setTimeout(() => {
      errorMsg.value = null;
    }, 5000);
  }
};
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
