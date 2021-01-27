<template>
  <div>
    <div class="container column">
      <app-input @add-block="addBlock" />

      <div class="card card-w70">
        <app-block :blockContent="blockContent" />
      </div>
    </div>

    <!-- comments -->
    <div class="container">
      <p>
        <button class="btn primary" @click="loadPeople">
          Загрузить комментарии
        </button>
      </p>

      <div class="card" v-if="comments.length !== 0 && !loading">
        <h2>Комментарии</h2>
        <!-- <app-comments :comments="comments" /> -->
        <ul class="list">
          <li
            class="list-item"
            v-for="comment in comments"
            :key="comment['id']"
          >
            <div>
              <p>
                <strong>{{ comment["email"] }}</strong>
              </p>
              <small>{{ comment["body"] }}</small>
            </div>
          </li>
        </ul>
      </div>
      <div v-if="loading" class="loader"></div>
    </div>
  </div>
</template>

<script>
import AppBlock from "./AppBlock.vue";
import AppInput from "./AppInput.vue";
import axios from "axios";
import AppComments from "../../08-vue-http/src/AppComments.vue";

export default {
  data() {
    return {
      blockContent: [],
      loading: false,
      comments: [],
    };
  },
  components: { AppInput, AppBlock, AppComments },
  methods: {
    addBlock(blockType, blockValue) {
      this.blockContent.push([blockType, blockValue]);
    },
    loadPeople() {
      this.loading = true;
      setTimeout(async () => {
        const { data } = await axios.get(
          "https://jsonplaceholder.typicode.com/comments?_limit=42"
        );
        this.comments = data;
        this.loading = false;
      }, 500);
    },
  },
};
// https://jsonplaceholder.typicode.com/comments?_limit=42
</script>

<style>
.avatar {
  display: flex;
  justify-content: center;
}

.avatar img {
  width: 150px;
  height: auto;
  border-radius: 50%;
}
</style>
