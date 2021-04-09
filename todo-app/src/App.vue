<template>
  <h1># todo</h1>
  <sorting-buttons></sorting-buttons>
  <div class="divider"></div>
  <task-form></task-form>
  <task-list></task-list>
</template>

<script>
import SortingButtons from './components/SortingButtons.vue';
import TaskForm from './components/TaskForm.vue';
import TaskList from './components/TaskList.vue';

export default { name: 'App',
  components: { SortingButtons,
    TaskForm,
    TaskList } };
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500;600;700&display=swap');
body {
  background-color: lightskyblue;
  font-family: 'Montserrat', sans-serif;
}
.divider {
  border: 1px solid #BDBDBD;
  border-width: 1px 0 0 0;
  max-width: 500px;
  margin: 15px auto 0 auto;
}
button, input {
  font-family: inherit;
}
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
