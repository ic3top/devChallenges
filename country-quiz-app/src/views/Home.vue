<template>
  <div class="container">
    <h1>This is a country quiz app</h1>
    <h2>Please, select a quiz variant</h2>
    <nav class="navigation">
      <router-link
        title="Choose right country according to capital"
        class="navigation-button"
        to="/quiz/capital-name">
        Capital - country quiz
      </router-link>
      <router-link
        title="Choose right country according to flag"
        class="navigation-button"
        to="/quiz/flag-name">
        Flag - country quiz
      </router-link>
    </nav>
    <div class="select-wrapper">
      <label for="amountOfQuestions">Number of questions: </label>
      <select
        class="select"
        name="amountOfQuestions"
        id="amountOfQuestions"
        v-model="amount">
        <option value="4">4</option>
        <option value="8" selected>8</option>
        <option value="12">12</option>
        <option value="16">16</option>
        <option value="25">25</option>
      </select>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';

export default {
  name: 'Home',
  methods: {
    ...mapMutations(['setAmountOfQuestions']),
  },
  computed: {
    ...mapGetters(['getAmountOfQuestions']),
    amount: {
      get() {
        return this.getAmountOfQuestions;
      },
      set(value) {
        this.setAmountOfQuestions(value);
      },
    },
  },
  mounted() {

  },
};
</script>

<style scoped>
.container {
  width: 90%;
  min-height: calc(100vh - 60px);
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #F2F2F2;
}

.navigation {
  display: flex;
  flex-direction: column;
  margin-top: 5vh;
}

.navigation-button {
  padding: 10px 30px;
  border-radius: 5px;
  border: 1px solid #f0f0f0;
  background-color: unset;
  font-size: 24px;
  color: #F2F2F2;
  font-weight: 600;
  text-decoration-line: none;
  transition: background-color .3s ease-out;
}

.navigation-button:hover {
  background: #F9A826;
}

.navigation-button:last-child {
  margin-top: 3vh;
}

.select-wrapper {
  margin-top: 5vh;
}

.select {
  padding: 5px;
  margin-left: 10px;
  font-size: 18px;
}

.select:hover {
  background: lightcyan;
}
</style>
