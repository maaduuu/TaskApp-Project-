<template>

    <div class="container px-4 mx-auto bg-[#E7ECF0]">
      <div class="max-w-4xl mx-auto text-center mb">   
  
              <!-- Status MSG -->
            <div v-if="statusMsg || errorMsg" class="mb-10 p-4 bg-grey-300 rounded-md">
              <p class="text-at-light-green"> {{statusMsg}} </p> 
              <p class="text-red-500">{{errorMsg}} </p>
            </div>

              <span class=" inline-block px-2 mb-2 mt-2 text-xs leading-5 text-white bg-red-500 font-medium rounded-full shadow-sm"> TASK </span>

            <!-- Create -->
            <div class="p-8 flex items-start rounded-md shadow-lg bg-[#f3f4f6]">

            <!-- Form -->
            <form @submit.prevent="addEvent" class="flex flex-col gap-y-4 w-full">


                
                <h1 class="mb-4 text-4xl md:text-5xl leading-tight font-bold">Add a new Task</h1>

                 <p class="font-semibold">Welcome to App, are you ready to organize your life?</p>
                 <p>Today is: </p>
                 
                 <!-- Event Title -->
                 <div class="flex flex-col">


                  <input type="text" required class="p-3 text-gray-500 focus:outline-none rounded-md mb-4 shadow-lg " id="event-title" v-model="eventTitle" placeholder="Add the title of the Event">
                                   
                  <input type="text" class="p-3 text-gray-500 focus:outline-none rounded-md mb-4 shadow-lg" id="event-info" v-model="eventInfo" placeholder="Add info about Event">

                  <button type="submit" class="inline-block p-3 bg-red-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-300 w-full mb-3">Add new Task</button>
                 </div>


            </form>
              
              <hr>
            
            </div>
            
      </div>
        
        
        
    </div>
    
      
    

</template>

<script setup>
import {ref} from "vue";
import { supabase } from "../supabase";
import { useUserStore } from "../stores/user";




const eventTitle = ref("");
const eventInfo = ref("");


// constant to save a variable that define the custom event that will be emitted to the homeView

// // constant to save a variable that holds the value of the title input field of the new task

// // constant to save a variable that holds the value of the description input field of the new task

// constant to save a variable that holds an initial false boolean value for the errorMessage container that is conditionally displayed depending if the input field is empty
const statusMsg = ref(null);
// const constant to save a variable that holds the value of the error message
const errorMsg = ref(null);



// arrow function to call the form holding the task title and task description that uses a conditional to first checks if the task title is empty, if true the error message is displayed through the errorMessage container and sets a timeOut method that hides the error after some time. Else, its emmits a custom event to the home view with the task title and task description; clears the task title and task description input fields.
const addEvent = async () =>{
  try{ 
console.log(useUserStore().user)

       const { error } = await supabase
  .from('tasks')
  .insert([{
          user_id: useUserStore().user.id,
          eventTitle: eventTitle.value,
          is_complete: false,
          eventInfo: eventInfo.value,
        }
        
        ])
    if (error) throw error;
    statusMsg.value = 'Succes: Event add!';
    eventTitle.value = null;
    eventInfo.value = null;

setTimeout(() =>{
      statusMsg.value = false;
    },5000);

  }

  catch(error) {
    errorMsg.value = `Error: ${error.message}`;
    setTimeout(() =>{
      errorMsg.value = false;
    },5000);
  }
};




// const data = ref([]);
// const dataLoaded = ref(null);

// // get data

// const getData = async() => {
//   try{
//     const {data: tasks, error} = await supabase.from(tasks)
//     .select('eventTitle, eventInfo');
//     if (error) throw error;
//     data.value = tasks;
//     dataLoaded.value = true;
//     console.log(data.value);
//   }
//   catch(error) {
//     console.warn(error.message)

//   }
//   getData();
// }


</script>

<style></style>
