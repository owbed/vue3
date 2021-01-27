<template>
  <div>
    <div v-for="(content, index) in blockContent2" :key="index">
      <h1 v-if="content[0] === 'title'">{{ content[1] }}</h1>
      <div class="avatar" v-if="content[0] === 'avatar'">
        <img :src="content[1]" />
      </div>
      <h2 v-if="content[0] === 'subtitle'">{{ content[1] }}</h2>
      <p v-if="content[0] === 'text'">{{ content[1] }}</p>
    </div>
  </div>
</template>

<script>
export default {
  props: ["blockContent"],
  data() {
    return {
      blockContent2: this.blockContent,
    };
  },
};
</script>

<style>
</style>