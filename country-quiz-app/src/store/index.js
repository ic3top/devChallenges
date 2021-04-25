import { createStore } from 'vuex';

const randLetter = () => ['A', 'B', 'C', 'D'][Math.floor(Math.random() * (4))];

export default createStore({
  state: {
    loadingState: false,
    result: 0,
    currentQuestion: 1,
    amountOfQuestions: 8,
    fourRandomCountries: {},
    allCountries: {},
    rightAnswer: {},
  },
  mutations: {
    increaseResult(state) {
      state.result += 1;
    },
    increaseQuestion(state) {
      state.currentQuestion += 1;
    },
    newGame(state) {
      state.result = 0;
      state.currentQuestion = 1;
    },
    setLoadingState(state, bool) {
      state.loadingState = bool;
    },
    setFourRandomCountries(state) {
      const lt = ['A', 'B', 'C', 'D'];
      for (let i = 0; i < 4; i++) {
        state.fourRandomCountries[lt[i]] = state
          .allCountries[Math.floor(Math.random() * (250 - 1)) + 1];
      }
      state.rightAnswer = state.fourRandomCountries[randLetter()];
    },
    setAllCountries(state, data) {
      state.allCountries = data;
    },
    setRightAnswer(state) {
      state.rightAnswer = state.fourRandomCountries[randLetter()];
    },
    setAmountOfQuestions(state, amount) {
      state.amountOfQuestions = Number(amount);
    },
  },
  getters: {
    getRightAnswer(state) {
      return state.rightAnswer;
    },
    isLoading(state) {
      return state.loadingState;
    },
    getAmountOfQuestions(state) {
      return state.amountOfQuestions;
    },
  },
});
