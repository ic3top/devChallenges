import { createStore } from 'vuex';

export default createStore({
  state: {
    todos: [
      {
        id: 1,
        text: 'To do my HW',
        done: false,
        shown: true
      }
    ]
  },
  mutations: {
    addTodo(state, taskObject) {
      state.todos.push(taskObject);
    },
    setDone(state, todoID, status) {
      state.todos.find(({ id }) => todoID === id).done = status;
    }
  },
  getters: {
    getTodos(state) {
      return state.todos;
    }
  },
  actions: {
    addTodo(context, text) {
      const todo = {
        id: Math.random(),
        text,
        done: false,
        shown: true
      };
      context.commit('addTodo', todo);
    },
    setDone(context, { id, status }) {
      console.log(id, status);
      context.commit('setDone', id, status);
    }
  }
});
