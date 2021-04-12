import { createStore } from 'vuex';
import quotes from '../plugins/axios';

export default createStore({
  state: {
    RandomQuote: [{ quoteText: 'Searching...' }],
    loadingState: false,
    isExpanded: false,
    authorQuotes: [],
  },
  mutations: {
    setRandomQuote(state, quote) {
      state.loadingState = false;
      [state.RandomQuote] = quote;
    },
    setLoadingState(state, bool) {
      state.loadingState = bool;
    },
    setExpanded(state, bool) {
      state.isExpanded = bool;
    },
    setAuthorQuotes(state, quotesFromAuthor) {
      state.authorQuotes = quotesFromAuthor;
      state.loadingState = false;
    },
  },
  actions: {
    async setRandomQuote({ commit }) {
      commit('setExpanded', false);
      commit('setLoadingState', true);
      const quote = await quotes.get('quotes/random');
      commit('setRandomQuote', quote);
    },
    async setExpanded({ commit, state }, bool) {
      if (state.isExpanded) return;

      commit('setLoadingState', true);
      commit('setExpanded', bool);
      const authorQuotes = await quotes.get('quotes', {
        params: {
          author: state.RandomQuote.quoteAuthor,
          limit: 15,
        },
      });
      commit('setAuthorQuotes', authorQuotes);
    },
  },
  getters: {
    getRandomQuote(state) {
      return state.RandomQuote;
    },
    getLoadingState(state) {
      return state.loadingState;
    },
    getIsExpanded(state) {
      return state.isExpanded;
    },
    getAuthorQuotes(state) {
      return state.authorQuotes;
    },
  },
});
