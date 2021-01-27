<template>
  <form class="card card-w30" @submit.prevent="submitBlock">
    <div class="form-control">
      <label for="type">Тип блока</label>
      <select id="type" v-model="blockType">
        <option value="title">Заголовок</option>
        <option value="subtitle">Подзаголовок</option>
        <option value="avatar">Аватар</option>
        <option value="text">Текст</option>
      </select>
    </div>

    <div class="form-control">
      <label for="value">Значение</label>
      <textarea id="value" v-model="blockValue" rows="3"></textarea>
    </div>

    <button
      type="submit"
      class="btn primary"
      @click="add"
      :disabled="!disabledButton"
    >
      Добавить
    </button>
  </form>
</template>

<script>
export default {
  emits: ["add-block"],
  data() {
    return {
      blockType: "title",
      blockValue: "",
    };
  },
  methods: {
    add() {
      this.$emit("add-block", this.blockType, this.blockValue);
      this.blockType = "title";
      this.blockValue = "";
    },
    submitBlock() {
      console.log(this.blockValue, this.blockType);
    },
  },
  computed: {
    disabledButton() {
      return this.blockValue.length > 3;
    },
  },
};
</script>

<style>
</style>