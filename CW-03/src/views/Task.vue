<template>
  <div v-if="task !== undefined" class="card">
    <h2>{{ task.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :status="task.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ task.date }}</p>
    <p><strong>Описание</strong>: {{ task.description }}</p>
    <div>
      <button class="btn" @click="changeTaskStatus('pending')">
        Взять в работу
      </button>
      <button class="btn primary" @click="changeTaskStatus('done')">
        Завершить
      </button>
      <button class="btn danger" @click="changeTaskStatus('cancelled')">
        Отменить
      </button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ taskID }}</strong> нет.
  </h3>
</template>

<script>
import AppStatus from "../components/AppStatus";
import { computed } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export default {
  components: { AppStatus },
  setup() {
    const store = useStore();
    const route = useRoute();

    const taskID = computed(() => {
      return route.params.taskID;
    });

    const task = computed(() => store.getters.getTaskID(taskID.value))

    const changeTaskStatus = (status) => {
      task.value.status = status;
      store.dispatch("changeTaskStatus", task.value);
    };

    return {
      taskID,
      task,
      changeTaskStatus,
    };
  },
};
</script>

<style scoped>
</style>