<template>
  <div class="list">
    <task-item
      v-for="task in getTodos"
      :key="task.id"
      :id="task.id"
      :text="task.text"
      :finished="task.done">
    </task-item>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import TaskItem from './TaskItem.vue';

export default { name: 'TaskList',
  components: { TaskItem },
  data() {
    return {}
  },
  computed: {
    ...mapGetters(['getTodos'])
  }
};
</script>

<style scoped>
.list {
  margin-top: 5vh;
}
</style>
