<template>
  <span :class="['badge', statusClass]">{{ statusTitle }}</span>
</template>

<script>
import { computed } from "vue";
export default {
  props: ["status"],
  setup(props) {
    const statusDictionary = [
      { status: "active", class: "primary", title: "Активен" },
      { status: "cancelled", class: "danger", title: "Отменен" },
      { status: "done", class: "primary", title: "Завершен" },
      { status: "pending", class: "warning", title: "Выполняется" },
    ];

    const statusTitle = computed(() => {
      return statusDictionary[
        statusDictionary.findIndex((x) => x.status === props.status)
      ].title;
    });
    const statusClass = computed(() => {
      return statusDictionary[
        statusDictionary.findIndex((x) => x.status === props.status)
      ].class;
    });

    return {
      statusTitle,
      statusClass,
    };
  },
};
</script>

<style>
</style>