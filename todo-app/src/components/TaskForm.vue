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
  margin-top: 3vh;
  display: flex;
  justify-content: center;
}

input {
  border-radius: 12px;
  border: 1px solid #BDBDBD;
  padding: 10px;
  margin-right: 20px;
}

input:focus {
  outline: none !important;
  box-shadow: 0 0 10px #719ECE;
}

button {
  min-width: 50px;
  padding: 10px 20px;
  font-size: 14px;
  border: none;
  background-color: #fff;
  transition: all 0.3s ease;
  border-radius: 12px;
}

button:hover {
  box-shadow: 2px 7px 15px rgba(127, 177, 243, 0.4);
}
</style>
