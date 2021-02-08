<template>
  <div>
    <h1 class="text-white center" v-if="tasks.length === 0">Задач пока нет</h1>
    <div v-else>
      <h3 class="text-white">Всего активных задач: {{ getActiveTasks.length }}</h3>
      <app-task v-for="task in tasks" :key="task.id" :task="task"></app-task>
    </div>
  </div>
</template>

<script>
import AppStatus from "../components/AppStatus";
import AppTask from "../components/AppTask";
import { useStore } from "vuex";
import { computed, ref } from "vue";

export default {
  components: { AppStatus, AppTask },
  setup() {
    const store = useStore();
    const tasks = computed(() => store.getters.getTasks)
    const getActiveTasks = computed(() => store.getters.getActiveTasks)

    return {
      tasks, getActiveTasks
    };
  },
};
</script>