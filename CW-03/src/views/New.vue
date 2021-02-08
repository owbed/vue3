<template>
  <form class="card" @submit.prevent="submitForm">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="!isFormValid">Создать</button>
    <button class="btn" :disabled="!isFormValid" @click="changeRedirect">
      Создать и добавить ещё
    </button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default {
  setup() {
    const store = useStore();
    const router = useRouter();

    const title = ref("");
    const date = ref(null);
    const description = ref("");
    const redirect = ref(true);

    const isFormValid = computed(() => {
      return (
        title.value !== "" && date.value !== null && description.value !== ""
      );
    });

    function changeRedirect() {
      redirect.value = !redirect.value;
    }

    function setDefault() {
      title.value = "";
      date.value = null;
      description.value = "";
    }

    function submitForm() {
      const nowDate = new Date().toISOString().slice(0, 10);
      let status = "active";
      if (date.value <= nowDate) {
        status = "cancelled";
      }

      const task = {
        title: title.value,
        date: date.value,
        description: description.value,
        status: status,
      };

      if (redirect.value === true) {
        store.dispatch("createNewTask", task);
        router.push({ name: "tasks" });
      } else {
        store.dispatch("createNewTask", task);
        changeRedirect();
        setDefault();
      }
    }

    return {
      title,
      date,
      description,
      isFormValid,
      submitForm,
      changeRedirect,
    };
  },
};
</script>