<template>
  <div class="container">
    <ul class="list">
      <task-item
        v-for="task in getTodos"
        :key="task.id"
        :id="task.id"
        :text="task.text"
        :finished="task.completed"
        @todoFinished="finishHandler"
        @todoDelete="deleteHandler">
      </task-item>
    </ul>
    <div  v-show="getCurrentSort === 'Completed' && getTodos.length" class="delete-container">
      <button class="deleteBtn" @click="deleteCompleted">
        <img src="@/assets/trash.svg" alt="delete all button"> Delete all
      </button>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import TaskItem from './TaskItem.vue';

export default { name: 'TaskList',
  components: { TaskItem },
  computed: {
    ...mapGetters(['getTodos', 'getTotal', 'getCompletedLength', 'getCurrentSort', 'getCurrentSort']),
    totalAmount() {
      return `${this.getTotal}/${this.getCompletedLength}`;
    }
  },
  watch: {
    getTodos: {
      handler() {
        localStorage.setItem('TODOS', JSON.stringify(this.getTodos));
      },
      deep: true
    },
    getCurrentSort() {
      localStorage.setItem('currentSort', this.getCurrentSort);
    }
  },
  methods: {
    ...mapActions(['initialiseStore', 'setCompleted', 'deleteByID', 'deleteCompleted']),
    finishHandler(config) {
      this.setCompleted(config);
    },
    deleteHandler(id) {
      this.deleteByID(id);
    }
  },
  created() {
    this.initialiseStore();
  }
};
</script>

<style scoped>
.container {
  max-width: 320px;
  margin: 0 auto;
}

.total {
  margin: 2vh auto 0 auto;
  text-align: left;
  font-size: 12px;
}

.list {
  padding-bottom: 5vh;
  list-style: none;
}

.delete-container {
  width: 100%;
  padding-bottom: 5vh;
  display: flex;
  justify-content: flex-end;
}

.deleteBtn {
  background: inherit;
  border: none;
  transition: all .2s ease;
  background-color: #7f8ff4;
  display: flex;
  align-items: center;
  border-radius: 2px;
  padding: 10px 25px;
  font-size: 12px;
}

.deleteBtn:hover {
  background: #7b89e6;
}
</style>
