<template>
  <div class="p-d-flex p-justify-between p-px-4 p-pt-2">
    <Button label="Search for places"
            icon="pi pi-search"
            class="p-button-outlined"
            @click="$emit('search')"
    />
    <Button class="p-button-rounded p-button-outlined"
            icon="pi pi-map-marker"
            @click="$emit('detectLocation')"
    />
  </div>
</template>

<script>
import Button from 'primevue/button';

export default {
  name: 'LeftHeader',
  components: {
    Button,
  },
};
</script>

<style scoped>

</style>
