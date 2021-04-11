import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        text: 'This is a test to do',
        completed: false,
        shown: true
      }
    ],
    currentSort: 'All'
  },
  mutations: {
    addTodo(state, taskObject) {
      state.todos.push(taskObject);
    },
    editTodo(state, { text, todoID }) {
      state.todos.find(({ id }) => todoID === id).text = text;
    },
    setCompleted(state, { todoID }) {
      const current = state.todos.find(({ id }) => todoID === id).completed;
      state.todos.find(({ id }) => todoID === id).completed = !current;
    },
    showAll(state) {
      state.todos.forEach((el) => {
        // eslint-disable-next-line no-param-reassign
        el.shown = true;
      });
      state.currentSort = 'All';
    },
    showCompleted(state) {
      state.todos.forEach((el) => {
        if (el.completed) {
          // eslint-disable-next-line no-param-reassign
          el.shown = true;
          return;
        }
        // eslint-disable-next-line no-param-reassign
        el.shown = false;
      });
      state.currentSort = 'Completed'
    },
    showActive(state) {
      state.todos.forEach((el) => {
        if (!el.completed) {
          // eslint-disable-next-line no-param-reassign
          el.shown = true;
          return;
        }
        // eslint-disable-next-line no-param-reassign
        el.shown = false;
      });
      state.currentSort = 'Active';
    },
    initialiseStore(state) {
      if (localStorage.getItem('TODOS')) {
        state.todos = JSON.parse(localStorage.getItem('TODOS'));
        state.currentSort = localStorage.getItem('currentSort');
      }
    },
    deleteByID(state, todoID) {
      state.todos = state.todos.filter(({ id }) => id !== todoID);
    },
    deleteCompleted(state) {
      state.todos = state.todos.filter(({ completed }) => !completed);
    }
  },
  getters: {
    getTodos(state) {
      return state.todos.filter(({ shown }) => shown);
    },
    getById: (state) => (todoID) => state.todos.filter(({ id }) => id === todoID)[0],
    getTotal(state) {
      return state.todos.length;
    },
    getCompletedLength(state) {
      return state.todos.filter((todo) => todo.completed).length;
    },
    getCurrentSort(state) {
      return state.currentSort;
    }
  },
  actions: {
    addTodo({ commit }, text) {
      const todo = {
        id: Math.random(),
        text,
        completed: false,
        shown: true
      };
      commit('addTodo', todo);
    },
    setCompleted({ commit }, configObj) {
      commit('setCompleted', configObj);
    },
    showAll({ commit }) {
      commit('showAll');
    },
    showCompleted({ commit }) {
      commit('showCompleted');
    },
    showUncompleted({ commit }) {
      commit('showActive');
    },
    initialiseStore({ commit }) {
      commit('initialiseStore');
    },
    deleteByID({ commit }, id) {
      commit('deleteByID', id);
    },
    deleteCompleted({ commit }) {
      commit('deleteCompleted');
    }
  }
});
