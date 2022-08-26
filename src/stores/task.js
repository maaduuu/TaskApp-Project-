import { defineStore } from "pinia";
import { supabase } from "../supabase";
import { useUserStore } from "./user";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: null,
  }),
  actions: {
    async fetchTasks() {
      const { data: tasks } = await supabase
        .from("tasks")
        .select("*")
        .order("id", { ascending: false });
      this.tasks = tasks;
      return this.tasks;
    },
    // New code
    async addTask(eventTitle, eventInfo) {
      console.log(useUserStore().user.id);
      const { data, error } = await supabase.from("tasks").insert([
        {
          user_id: useUserStore().user.id,
          eventTitle: eventTitle,
          is_complete: false,
          eventInfo: eventInfo,
        },
      ]);
    },

    async delete(id) {
      const { data, error } = await supabase
        .from("tasks")
        .delete()
        .match({ id: id });
    },

    async edit(eventTitle, eventInfo, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ eventTitle: eventTitle, eventInfo: eventInfo })
        .match({ id: id });
    },

    async completeTask(bol, id) {
      const { data, error } = await supabase
        .from("tasks")
        .update({ is_complete: bol })
        .match({ id: id });
    },
  },
});
