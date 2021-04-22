<template>
  <div class="container">
    <div class="card">
      <img src="../../assets/winners.svg" alt="prize">
      <h2 class="title-result">Result</h2>
      <p class="subtext">
        You got
        <span class="number-result">{{ result }}</span>
        aut of {{ amountOfQuestions }} correct answers!
        {{ $route.params.pattern }}
      </p>
      <nav class="links">
        <button
          @click="restart"
          class="restart-btn">Restart
        </button>
        <router-link
          class="restart-btn"
          to="/"
        >Home</router-link>
      </nav>
    </div>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
  name: 'QuizResults',
  data() {
    return {
      pattern: this.$route,
    };
  },
  computed: mapState({
    amountOfQuestions: (state) => state.amountOfQuestions,
    result: (state) => state.result,
  }),
  methods: {
    ...mapMutations(['newGame']),
    restart() {
      this.$router.go(-1);
      this.newGame();
    },
  },
};
</script>

<style scoped>
.container {
  min-height: calc(100vh - 30px);
  display: flex;
  align-items: center;
}
.card {
  position: relative;
  margin: 0 auto;
  width: 465px;
  padding: 68px 32px 32px;
  background-color: #F2F2F2;
  border-radius: 24px;
}

.title-result {
  font-weight: 700;
  font-size: 48px;
  color: #1D355D
}

.subtext {
  margin-top: max(5vw, 5vh);
  font-size: 24px;
}

.number-result {
  font-size: 36px;
  color: #6FCF97;
  font-weight: 700;
}

.restart-btn {
  box-sizing: border-box;
  padding: 18px 60px;
  margin: 0 10px;
  border: 2px solid #1D355D;
  border-radius: 12px;
  transition: all .2s ease-in-out;
  background: inherit;
  font-size: 18px;
  font-weight: 600;
  color: #1D355D;
  text-decoration-line: none;
  cursor: pointer;
}

.restart-btn:hover {
  background-color: #1D355D;
  color: #FFFFFF;
}

.links {
  margin-top: 40px;
}
</style>
