<template>
  <form class="newTodo-form" @submit="onAdd">
    <input class="newTodo-input" v-model="text" placeholder="Add a new task" type="text">
    <button class="add-btn">Add task</button>
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
      if (!(this.text.length < 40)) {
        this.text = 'Too big length!'
        return;
      }
      this.addTodo(this.text);
      this.text = '';
    }
  }
};
</script>

<style scoped>
.newTodo-form {
  margin: 3vh auto 0 auto;
  display: flex;
  justify-content: center;
  max-width: 320px;
}

.newTodo-input {
  border: 1px solid #BDBDBD;
  margin-right: 20px;
  outline: 0;
  padding: 5px;
}

.newTodo-input:focus {
  outline: none !important;
  box-shadow: inset 0 0 6px 2px rgba(0, 0, 0, .2);
}

.newTodo-input::placeholder {
  color: #a3a3a3;
}

.add-btn:hover {
  background: #7b89e6;
}

.add-btn:focus {
  box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
  background: #7b89e6;
}

.add-btn {
  border: 0;
  outline: 0;
  transition: all .1s ease;
  background-color: #7f8ff4;
  border-radius: 2px;
  padding: 10px 25px;
}
.add-btn:active {
   box-shadow: inset 0 0 10px 2px rgba(0, 0, 0, .2);
}
</style>
