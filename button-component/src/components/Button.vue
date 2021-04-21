<template>
  <button :class="[variant, {disableShadow}, size , color ? `color-${color}` : '']"
          :disabled="disabled"
          @click="onClick">
    <font-awesome-icon
    :icon="['fas', `${startIcon}`]"/>
    <slot></slot>
    <font-awesome-icon
        :icon="endIcon"/>
  </button>
</template>

<script>
export default {
  name: "Button",
  props: {
    variant: {
      type: String,
      default: () => 'default'
    },
    disableShadow: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    size: {
      type: String,
      default: () => 'md'
    },
    color: {
      type: String,
    },
    startIcon: {
      type: String
    },
    endIcon: {
      type: String
    }
  },
  emits: ['click'],
  methods: {
    onClick() {
      this.$emit('click');
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@500&display=swap');

button {
  font-family: 'Noto Sans JP', sans-serif;
  border: none;
  border-radius: 6px;
  transition: all .2s ease;
}
button:disabled {
  color: #9E9E9E;
}
button:disabled:hover {
  background-color: #E0E0E0;
}

button img {
  max-height: 1.1rem;
}

.disableShadow {
  box-shadow: none!important;
}

.sm {
  padding: 6px 12px;
}
.md {
  padding: 8px 16px;
}
.lg {
  padding: 11px 22px
}


.default {
  font-size: 14px;
  font-weight: 500;
  box-shadow: 0px 2px 3px rgba(51, 51, 51, 0.2);
  background-color: #E0E0E0;
}
.default:hover, .default:focus {
  background: #AEAEAE;
}

.outline {
  border: 1px solid #3D5AFE;
  color: #3D5AFE;
  background-color: #fff;
}
.outline:hover, .outline:focus {
  background: rgba(41, 98, 255, 0.1);
}

.text {
  border: none;
  background-color: inherit;
  color: #3D5AFE;
}
.text:hover, .text:focus {
  background: rgba(41, 98, 255, 0.1);
}

.color-default {
  background-color: #E0E0E0;
}
.color-default:hover, .color-default:focus {
  background-color: #AEAEAE;
}

.color-primary {
  background-color: #2962FF;
  color: #fff;
}
.color-primary:hover, .color-primary:focus {
  background-color: #0039CB;
}

.color-secondary {
  background-color: #455A64;
  color: #fff;
}
.color-secondary:hover, .color-secondary:focus {
  background-color: #1C313A;
}

.color-danger {
  background-color: #D32F2F;
  color: #fff;
}
.color-danger:hover, .color-danger:focus {
  background-color: #9A0007;
}
</style>
