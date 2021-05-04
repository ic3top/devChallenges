<template>
  <Card>
    <template #title>
      <h3 class="p-text-light p-text-italic p-text-center p-text-capitalize">
        <slot name="title"></slot>
      </h3>
    </template>
    <template #content>
      <p class="p-text-center p-text-italic">
        <slot name="main"></slot>
      </p>
    </template>
    <template #footer>
      <slot name="footer"></slot>
    </template>
  </Card>
</template>

<script>
import Card from 'primevue/card';
import roundNumber from '../utils/roundNumber';

export default {
  name: 'RightHighlightCard',
  props: {
  },
  components: {
    Card,
  },
  methods: {
    roundNumber,
  },
};
</script>

<style scoped>

</style>
