<template>
  <div class="container">
    <button @click="showAll" :class="{ active: getCurrentSort === 'All'}">All</button>
    <button @click="showUncompleted" :class="{ active: getCurrentSort === 'Active'}">Active</button>
    <button @click="showCompleted" :class="{ active: getCurrentSort === 'Completed'}">Completed</button>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SortingButtons',
  methods: {
    ...mapActions(['showAll', 'showCompleted', 'showUncompleted'])
  },
  computed: {
    ...mapGetters(['getCurrentSort'])
  }
};
</script>

<style scoped>
.container {
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

button {
  min-width: 70px;
  padding: 10px 20px;
  border-width: 0 0 2px 0;
  border-color: #87CEFA;
  background-color: inherit;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

button:hover {
  box-shadow: 7px 9px 15px 0 rgba(34, 60, 80, 0.2);
}
.active {
  border-bottom: 2px solid blue;
}
</style>
