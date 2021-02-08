<template>
  <div>
    <div class="card">
      <h2 class="card-title">
        {{ task.title }}
        <AppStatus :status="task.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ task.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="$router.push('/task/' + task.id)">Посмотреть</button>
    </div>
  </div>
</template>

<script>
import AppStatus from './AppStatus.vue';
export default {
  components: { AppStatus },
  props: ['task'],
};
</script>

<style>
</style>