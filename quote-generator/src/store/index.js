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
    searchResults: {},
    currentQuery: '',
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
    setSearchResults(state, results) {
      state.searchResults = results;
    },
    setCurrentQuery(state, query) {
      state.currentQuery = query;
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
    async changePageAuthorQuotes({ commit, state }, page) {
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
    async getQuotesPerQuery({ commit }, query) {
      commit('setLoadingState', true);
      commit('setExpanded', false);
      commit('setCurrentQuery', query);
      const quotesResponse = await quotes.get('quotes', {
        params: {
          query,
        },
      });
      commit('setPagination', quotesResponse.pagination);
      commit('setSearchResults', quotesResponse);
      commit('setLoadingState', false);
    },
    async changePageQueryQuotes({ commit, state }, page) {
      commit('setLoadingState', true);
      const quotesResponse = await quotes.get('quotes', {
        params: {
          query: state.currentQuery,
          page,
        },
      });
      commit('setPagination', quotesResponse.pagination);
      commit('setSearchResults', quotesResponse);
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
    getSearchResults(state) {
      return state.searchResults;
    },
    getCurrentQuery(state) {
      return state.currentQuery;
    },
  },
});
