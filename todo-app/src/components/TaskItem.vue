<template>
  <div class="task">
    <input v-model="done" type="checkbox">
    <div class="text" :class="taskStyles">
      <p>{{ text }}</p>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';

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
  data() {
    return {
      done: false
    }
  },
  watch: {
    done() {
      this.setDone({ id: Number(this.id), status: this.done })
    }
  },
  computed: {
    taskStyles() {
      return { done: this.done };
    }
  },
  methods: {
    ...mapActions(['setDone'])
  }
};
</script>

<style scoped>
.task {
  max-width: 320px;
  padding: 10px;
  margin: 3vh auto;
  border-radius: 12px;
  display: flex;
  align-items: center;
  position: relative;
  box-shadow: 0 4px 8px 2px rgba(34, 60, 80, 0.2);
  background-color: #fff;
  transition: all .3s ease;
}

.task:hover {
  box-shadow: 0 8px 12px 4px rgba(34, 60, 80, 0.2);
}

.done {
  text-decoration: line-through;
}
.done:after {
  position: absolute;
  content: 'done!';
  top: -5px;
  right: -15px;
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
</style>
