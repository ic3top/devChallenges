<template>
  <div class="btn-group">
    <button class="btn-sort" @click="showAll" :class="{ active: getCurrentSort === 'All'}">All</button>
    <button class="btn-sort" @click="showUncompleted" :class="{ active: getCurrentSort === 'Active'}">Active</button>
    <button class="btn-sort" @click="showCompleted" :class="{ active: getCurrentSort === 'Completed'}">Completed</button>
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
.btn-group {
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

.btn-sort {
  min-width: 70px;
  padding: 10px 20px;
  border-width: 0 0 2px 0;
  border-color: #87CEFA;
  background-color: inherit;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

.btn-sort:hover {
  box-shadow: 7px 9px 15px 0 rgba(34, 60, 80, 0.2);
}

.btn-sort:focus {
  outline: none;
  box-shadow: 7px 9px 15px 0 rgba(34, 60, 80, 0.2);
}

.active {
  border-bottom: 2px solid blue;
  box-shadow: 7px 9px 15px 0 rgba(34, 60, 80, 0.2);
}
</style>
