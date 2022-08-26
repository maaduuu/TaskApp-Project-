<template>
  <div class="container px-4 bg-gray-100 flex-col flex sm:w-[60%] rounded md:w-[25%] mt-3 mx-auto">
    <h1 class="bg-gray-200 rounded shadow-md ml-2 p-[0.4rem] mt-2">{{ task.eventTitle }}</h1>
    <p class="bg-gray-200 rounded shadow-md ml-2 p-[0.4rem] mt-2">{{ task.eventInfo }}</p>
    <!-- <p class="rounded shadow-md ml-2 p-[0.4rem] mt-2 w-[3rem]">{{ task.is_complete }}</p> -->
    <div v-if="editDialog">
      <input class="bg-gray-200 rounded shadow-md ml-2 p-[0.4rem] mt-4 mb-3" type="text" placeholder="Edit Title" v-model="newTitle" />
      <input  class="bg-gray-200 rounded shadow-md ml-2 p-[0.4rem]" type="text" placeholder="Edit Info" v-model="newDescription" />

      <button class="rounded shadow-md ml-2 p-[0.4rem] mb-3" @click.prevent="editTask">Save</button>
    </div>

    <div class="flex">
    <button class="rounded shadow-md ml-2 p-[0.4rem] mb-3 w-[5rem] mt-2 font-semibold" @click="deleteTask">Delete</button>

    <button class="rounded shadow-md ml-2 p-[0.4rem] mb-3 w-[5rem] mt-2 font-semibold" @click="toggleDialog">Edit</button>

    <button
    :class="[task.is_complete ? 'bg-red-500' : 'bg-green-500']" class="rounded shadow-md ml-2 p-[0.4rem] mb-3 mt-2 w-[8rem] font-semibold"
     @click="completeTask">{{task.is_complete ? 'Uncomplete 😐' : 'Complete!'}}</button>
    </div>
   
    
  </div>
</template>

<script setup>
import { ref } from "vue";

const editDialog = ref(false);

const newTitle = ref("");
const newDescription = ref("");

const props = defineProps(["task"]);

const toggleDialog = () => {
  editDialog.value = !editDialog.value;
  newTitle.value = props.task.eventTitle;
  newDescription.value = props.task.eventInfo;
};

const emit = defineEmits(["delete", "editTask", "complete"]);

const deleteTask = () => {
  emit("delete", props.task);
};

const completeTask = () => {
  console.log("¨Clicked")
  emit("complete", props.task);
};

 
const editTask = () => {
  const newInfo = {
    taskId : props.task,
    newTitle : newTitle.value,
    newDescription : newDescription.value,
  }
  emit("editTask", newInfo);
  editDialog.value = false;
  newTitle.value = ""
  newDescription.value = ""

};

// useUserStore().fetchUser()
</script>


<style>
</style>

<!-- 
**Hints**
1. ref() or reactive() can be used here to store the following, think if you want to store them either individually or like an object, up to you.
2. Data properties need here are the following: a boolean to store a false**Important variable, a string to store an error, a string to store the value of the task that the user can edit, an initial false boolean to hide the inputFIeld used to edit the new task detail or details[this is in reference of the task title and the task description].
3. Store the custom emit events that will be used to call the functions of the homeView for editing, deleting and toggling the status[completed, not complted] of the taskItem.
4. Function to handle the error with the data properties used to control the error and the the boolean controlling the boolean empty variable.
5. Function to handle the edit dialogue where the inputField is displayed and the string used to store the value of the inputField will be used here to save the value as a prop on this function.
6. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the toggle completion of the task on the homeview.
7. Function to edit the task information that you decided that the user can edit. This function's body takes in a conditional that first checks if the value of the task [either title and description or just title] is empty which if true it runs the function used to handle the error on hint4. Else, the conditional sets the first mentioned boolean data property on hint2 back to its inital boolean value to hide the error message and repeat the same for the data property mentioned 4th on hint2; a constant that stores an object that holds the oldValue from the prop item and the value of the task coming from the data property mentioned 3rd on hint2; a custom event emit() that takes 2 parameters a name for the custom event and the value from the object used on this part of the conditional and lastly this part of the conditional sets the value of input field to an empty string to clear it from the ui. 
8. Function to emmit a custom event emit() that takes 2 parameters a name for the custom event and the value that will be send via the prop to the parent component. This function can control the removal of  the task on the homeview.
-->
