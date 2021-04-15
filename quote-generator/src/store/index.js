import { createStore } from 'vuex';
import quotes from '../plugins/axios';

export default createStore({
  // TODO: create a single authorQuotesObject that will contain all of the properties.
  // This will increase the number unnecessary mutation and getters.
  state: {
    RandomQuote: [{ quoteText: 'Searching...' }],
    loadingState: false,
    isExpanded: false,
    authorQuotes: [],
    totalAmountOfQuotes: 0,
    pagination: {},
  },
  mutations: {
    setRandomQuote(state, quote) {
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
    },
    setPagination(state, pagObject) {
      state.pagination = pagObject;
    },
    setTotalAmountOfQuotes(state, amount) {
      state.totalAmountOfQuotes = amount;
    },
  },
  actions: {
    async setRandomQuote({ commit }) {
      commit('setLoadingState', true);
      commit('setExpanded', false);
      const quote = await quotes.get('quotes/random');
      commit('setRandomQuote', quote.data);
      commit('setLoadingState', false);
    },
    async expandQuotes({ commit, state }, bool) {
      if (state.isExpanded) return;

      commit('setLoadingState', true);
      commit('setExpanded', bool);
      const authorQuotes = await quotes.get('quotes', {
        params: {
          author: state.RandomQuote.quoteAuthor,
          page: 1,
        },
      });
      commit('setPagination', authorQuotes.pagination);
      commit('setAuthorQuotes', authorQuotes.data);
      commit('setTotalAmountOfQuotes', authorQuotes.totalQuotes);
      commit('setLoadingState', false);
    },
    async changePage({ commit, state }, page) {
      commit('setLoadingState', true);
      const authorQuotes = await quotes.get('quotes', {
        params: {
          author: state.RandomQuote.quoteAuthor,
          page,
        },
      });
      commit('setPagination', authorQuotes.pagination);
      commit('setAuthorQuotes', authorQuotes.data);
      commit('setLoadingState', false);
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
    getPagination(state) {
      return state.pagination;
    },
    getTotalAmountOfQuotes(state) {
      return state.totalAmountOfQuotes;
    },
  },
});
