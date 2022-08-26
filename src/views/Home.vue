<template>
 <nav>
    <div>
      <Nav />
    </div>
  </nav>

<div class="bg-[url('https://cdnb.artstation.com/p/assets/images/images/016/788/959/original/pixel-jeff-sunday-mood.gif?1553487997')] bg-no-repeat bg-cover h-screen sm:bg-center sm:h-screen">

  <section>
    <div>
      <NewTask @addEvent="addEvent" />

      <TaskItem
        v-for="task in tasks"
        :task="task"
        :key="task.id"
        @delete="deleteTask"
        @editTask="editTask"
        @complete="completeTask"
      />
    </div>


<footer class="md:justify-center md:flex md:p-6 md: mt-3">
    <div>
      <Footer />
    </div>
  </footer>

  </section>


</div>

 
</template>

<script setup>
import Nav from "../components/Nav.vue";
import NewTask from "../components/NewTask.vue";
import TaskItem from "../components/TaskItem.vue";
import Footer from "../components/Footer.vue";
import { useTaskStore } from "../stores/task";
import { ref } from "vue";

const tasks = ref([]);

const refresh = async () => {
  tasks.value = await useTaskStore().fetchTasks();
  tasks.value.forEach((task) => console.log(task));
};

refresh();

const addEvent = async (eventTitle, eventInfo) => {
  await useTaskStore().addTask(eventTitle, eventInfo);
  refresh();
};

const deleteTask = async (task) => {
  await useTaskStore().delete(task.id);
  refresh();
};

const editTask = async (task) => {
  const newTitle = task.newTitle;
  const newDescription = task.newDescription;
  const taskId = task.taskId.id;

  await useTaskStore().edit(newTitle, newDescription, taskId);
  refresh();
};


const completeTask = async (task) => {

  const completeStatus = !task.is_complete;
  const taskId = task.id;
  await useTaskStore().completeTask(completeStatus, taskId);
  refresh();
}
</script>

<style>

</style>

<!-- 
**Hints**
1. ref() is used here!
2. (NewTask, TaskItem, Footer, Nav) components are used here! 
3. Tasks are going to be contained in an array here!
4. An async function is needed to get all of the tasks stored within the supabase database, this async function's body will contain the tasks value which be use to store the fetchTasks method which lives inside the userTaskStore. This function needs to be called within the setUp script in order to run within the first instance of this component lifecycle.
5. NewTask component will receive a customEvent on this instance of the homeView that will fire the add-to-do function
6. add-to-do function will receive 2 params/arguments that will tak a taskTitle and a taskDescription and the body of this async function will call the taskStore that calls the addTask function from the store that pushes the info of the task to the backEnd. This is possible by passing the 2 param/arguments that will be passed by the user from the inputs within the NewTask Component. 
7. TaskItem component will loop through the tasks-array that will print an individual instance of an individual TaskItem component. TaskItem will receive 3 customEvents on this instance of the homeView. 1 customEvent for toggling the task to show either a text or an icon to display if the task is completed or not completed. 1 customEevent for removing/deleting the task out of the array. 1 customEvent for editing the task title and description. This function needs to call the function mentioned on hint4.
7.1-customEvent will fire an async function that will take in 1 param/argument. On the body of this function the param/argument will be used to define 2 constants. 1 of this constants will take care of setting the boolean value to the opposite of the value that checks wether this task is_complete. 1 of this constants will take of calling the id of this specific task in order to call the right id. 
7.2-customEvent will fire an asynf function that will take in 1 param/argument. This async function's body will be used to call the deleteTaskmethod which will take the param/argument's id in order to delete the task. This function needs to call the function mentioned on hint4. 
7.3-customEvent will fire an async function that will take in 1 param/argument. this async function's body will be used to take in 2 constants. 1 constant will take in the param/argument newValue. 1 constant will be used to get the param/argument oldValue id. These 2 constants will be sent to the backend via the useTaskStore which holds an editTask method. This function needs to call the function mentioned on hint4.
-->
