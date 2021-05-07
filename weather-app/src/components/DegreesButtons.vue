<template>
  <div class="degrees-buttons">
    <Button v-if="getCurrentDegrees === 'F'"
            :loading="isLoading"
            class="p-button-rounded"
            @click="setNewDegrees"
    >
      <img v-if="!isLoading" src="../assets/celsius.svg" alt="celsius" class="w-20">
      <i v-else class="pi pi-spin pi-spinner"></i>
    </Button>
    <Button v-else
            class="p-button-rounded"
            @click="setNewDegrees"
    >
      <img v-if="!isLoading" src="../assets/fahrenheit.svg" alt="fahrenheit" class="w-20">
      <i v-else class="pi pi-spin pi-spinner"></i>
    </Button>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from 'vuex';
import Button from 'primevue/button';

export default {
  name: 'DegreesButtons',
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['getCurrentDegrees', 'isLoading']),
  },
  methods: {
    ...mapMutations(['setNewDegrees']),
  },
};
</script>

<style scoped>
.degrees-buttons {
  position: fixed;
  right: 20px;
  top: 15px;
}

.w-20 {
  width: 20px;
}

@media screen and (max-width: 576px) {
  .degrees-buttons {
    top: 98%;
    transform: translateY(-100%);
  }
}
</style>
