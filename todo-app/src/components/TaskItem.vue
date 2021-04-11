<template>
  <li
    :class="taskStyles"
    class="task"
    @dblclick="editToggle"
  >
    <input :checked="finished"
           class="complete-input"
           type="checkbox"
           @change="emitFinished">
    <div class="text">
      <p v-if="!inEdit">{{ text }}</p>
      <input v-else
             v-model="editedText"
             ref="email"
             class="edit-input"
             type="text"
             @blur="doneEdit"
             @keyup.enter="doneEdit"
             @keyup.esc="cancelEdit"
      >
    </div>
    <button class="delete-todo-btn" @click="emmitDelete">
      <img alt="close button" src="@/assets/close.svg">
    </button>
  </li>
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
  data() {
    return {
      inEdit: false,
      editedText: this.text
    };
  },
  computed: {
    taskStyles() {
      return { doneItem: this.finished };
    }
  },
  methods: {
    emitFinished() {
      this.$emit('todoFinished', { todoID: this.id });
    },
    emmitDelete() {
      this.$emit('todoDelete', this.id);
    },
    editToggle() {
      this.inEdit = !this.inEdit;
      setTimeout(this.setFocusOnInput);
    },
    doneEdit() {
      if (!this.editedText || this.editedText.length > 40) {
        this.cancelEdit();
        return;
      }
      const config = {
        text: this.editedText,
        todoID: this.id
      };
      this.$emit('editTodo', config);
      this.inEdit = false;
    },
    cancelEdit() {
      this.inEdit = false;
      this.editedText = this.text;
    },
    setFocusOnInput() {
      this.$refs.email.focus();
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
  background-color: lightgrey;
}

.doneItem:hover {
  box-shadow: 0 4px 8px 2px rgba(34, 60, 80, 0.2);
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

.edit-input {
  font-size: 16px;
  line-height: 40px;
  padding: 5px;
  text-align: center;
}

.complete-input {
  margin-right: 1rem;
  width: 18px;
  height: 18px;
}

.delete-todo-btn {
  border: none;
  display: flex;
  align-items: center;
  background-color: inherit;
  transition: all .2s ease;
}

.delete-todo-btn img {
  width: 15px;
  height: 15px;
}

.delete-todo-btn:hover {
  transform: scale(1.3);
}
</style>
