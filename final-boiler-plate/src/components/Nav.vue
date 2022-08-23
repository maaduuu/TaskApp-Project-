<template>
  <div class="Nav">
    <nav class="flex ">
      <div class="md:py-5 md:px-10  logo">
        <a href="/"><img src="https://res.cloudinary.com/dnsnkrcru/image/upload/v1648481844/taskApp/imgs/logo-small_bh8xj2.svg" class="md:h-[3rem]" alt="logo"></a>
      </div>
      
      <div class="flex md:items-center md:justify-end md:w-full md:py-5 md:px-10 md:mr-16">
        <h4>Welcome back {{}}</h4>
        <div class="">
          <button @click="logout" class="ml-8 py-2 px-2 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 w-full mb-3">Log Out</button>
        </div>
      </div>
    </nav>
  </div>

</template>

<script setup>
import {supabase} from '../supabase';
import {useRouter} from 'vue-router';

//constant to save a variable that will hold the use router method
const router = useRouter();
// constant to save a variable that will get the user from store with a computed function imported from vue
const logout = async () => {
  console.log("user logout")
  await supabase.auth.signOut
  router.push({path: 'auth/login'})
}
// constant that calls user email from the useUSerStore

// constant that saves the user email and cleans out the @client from the user

// async function that calls the signOut method from the useUserStore and pushes the user back to the Auth view.
</script>

<style></style>
