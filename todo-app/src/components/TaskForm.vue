<template>
  <form @submit="onAdd">
    <input v-model="text" placeholder="Add a new task" type="text">
    <button>Add task</button>
  </form>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  name: 'TaskForm',
  data() {
    return { text: '' };
  },
  methods: {
    ...mapActions(['addTodo']),
    onAdd(e) {
      e.preventDefault();
      if (this.text) {
        this.addTodo(this.text);
        this.text = '';
      }
    }
  }
};
</script>

<style scoped>
form {
  margin: 3vh auto 0 auto;
  display: flex;
  justify-content: center;
  max-width: 320px;
}

input {
  border: 1px solid #BDBDBD;
  margin-right: 20px;
  outline: 0;
  padding: 5px;
}

input:focus {
  outline: none !important;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, .2);
}

input::placeholder {
  color: #a3a3a3;
}

button:hover {
  background: #7b89e6;
}

button {
  border: 0;
  outline: 0;
  transition: all .1s ease;
  background-color: #7f8ff4;
  border-radius: 2px;
  padding: 10px 25px;
}
button:active {
   box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
}
</style>
