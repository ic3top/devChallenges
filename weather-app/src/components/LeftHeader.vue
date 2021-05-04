<template>
  <div class="p-d-flex p-justify-between p-px-4 p-pt-2">
    <Button label="Search for places"
            icon="pi pi-search"
            class="p-button-outlined"
            @click="$emit('search')"
    />
    <Button class="p-button-rounded p-button-outlined"
            icon="pi pi-map-marker"
            :class="{ 'p-disabled': getLocationPermission === 'denied' }"
            @click="$emit('detectLocation')"
            v-tooltip="'Go to default location'"
    />
  </div>
</template>

<script>
import Button from 'primevue/button';
import Tooltip from 'primevue/tooltip';
import { mapGetters } from 'vuex';

export default {
  name: 'LeftHeader',
  components: {
    Button,
  },
  computed: {
    ...mapGetters(['getLocationPermission']),
  },
  directives: {
    tooltip: Tooltip,
  },
};
</script>

<style scoped>

</style>
