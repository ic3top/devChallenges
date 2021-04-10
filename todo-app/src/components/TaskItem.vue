<template>
  <div class="task">
    <input :checked="finished" @change="emitFinished" type="checkbox">
    <div class="text" :class="taskStyles">
      <p>{{ text }}</p>
    </div>
    <button @click="emmitDelete" class="close"><img src="@/assets/close.svg" alt="close button"></button>
  </div>
</template>

<script>
export default {
  name: 'TaskItem',
  props: {
    text: {
      type: String,
      required: true
    },
    finished: {
      type: Boolean,
      default: false
    },
    id: {
      type: Number,
      required: true
    }
  },
  methods: {
    emitFinished() {
      this.$emit('todoFinished', { todoID: this.id });
    },
    emmitDelete() {
      this.$emit('todoDelete', this.id);
    }
  },
  computed: {
    taskStyles() {
      return { doneItem: this.finished };
    }
  }
};
</script>

<style scoped>
.task {
  max-width: 320px;
  padding: 10px;
  margin-top: 3vh;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  box-shadow: 0 4px 8px 2px rgba(34, 60, 80, 0.2);
  background-color: #fff;
  transition: all .3s ease;
}

.task:hover {
  box-shadow: 0 8px 12px 4px rgba(34, 60, 80, 0.2);
}

.doneItem {
  text-decoration: line-through;
}
.doneItem:after {
  position: absolute;
  content: 'Done!';
  top: -5px;
  right: -10px;
  padding: 2px 5px;
  border-radius: 5px;
  font-size: 14px;
  background-color: #00d9ff;
  color: #fff;
  transform: rotateZ(30deg);
}
input {
  margin-right: 1rem;
  width: 18px;
  height: 18px;
}

.close {
  border: none;
  display: flex;
  align-items: center;
}
.close img {
  width: 15px;
  height: 15px;
}
</style>
