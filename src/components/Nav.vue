<template>
  <div class="Nav">
    <nav class="flex ">
      <div class="md:py-5 md:px-10 flex logo">
        <a href="/"><img src="https://cdn-icons-png.flaticon.com/512/2098/2098402.png" class="h-[3rem] md:w-[5rem] cover" alt="logo"></a>
        <h2 class="justify-center flex items-center font-semibold ml-[1rem] text-2xl">TaskApp</h2>
      </div>
      
      <div class="flex items-center justify-end md:w-full md:py-5 md:px-10 md:mr-16 sm:ml-[9rem] sm:mt-3">
        <h4 class="sm:hidden">Welcome back {{user.email}}</h4>
        <div class="">
          <button @click="logout" class=" md:items-center ml-8 py-2 px-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 md:w-full mb-3">Log Out</button>
        </div>
      </div>
    </nav>
  </div>

</template>

<script setup>
import {supabase} from '../supabase';
import {useRouter} from 'vue-router';


const user = supabase.auth.user()
//constant to save a variable that will hold the use router method
const router = useRouter();
// constant to save a variable that will get the user from store with a computed function imported from vue
const logout = async () => {
  console.log("user logout")
  await supabase.auth.signOut()
  router.push({path: '/auth/login'})
};

// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
