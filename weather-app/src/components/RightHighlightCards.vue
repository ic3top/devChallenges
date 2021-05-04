<template>
  <div class="p-grid p-mt-3">
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Wind status
        </template>
        <template v-slot:main>
          <span style="font-size: 5rem">{{ roundNumber(firstDay.wind.speed) }}</span>
          mph
        </template>
        <template v-slot:footer>
          <div class="p-text-light p-d-flex p-align-center p-justify-center"
               style="font-size: 1.5rem"
          >
              <span :style="`transform: rotate(${windDirection}deg)`"
                    class="pi pi-chevron-circle-down p-mr-2"
                    style="font-size: 1.8rem; color: var(--primary-color)"
              >
              </span>
            {{ firstDay.wind.directionCompass }}
          </div>
        </template>
      </right-highlight-card>
    </div>
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Humidity
        </template>
        <template v-slot:main>
          <span style="font-size: 5rem">{{ firstDay.humidity }}</span>
          %
        </template>
        <template v-slot:footer>
          <progress-bar :value="firstDay.humidity"></progress-bar>
        </template>
      </right-highlight-card>
    </div>
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Visibility
        </template>
        <template v-slot:main>
          <span style="font-size: 5rem">{{ roundNumber(firstDay.visibility) }}</span>
          miles
        </template>
      </right-highlight-card>
    </div>
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Air pressure
        </template>
        <template v-slot:main>
          <span style="font-size: 5rem">{{ roundNumber(firstDay.airPressure, 0) }}</span>
          mb
        </template>
      </right-highlight-card>
    </div>
  </div>
</template>

<script>

import ProgressBar from 'primevue/progressbar';
import RightHighlightCard from './RightHighlightCard.vue';
import roundNumber from '../utils/roundNumber';

export default {
  name: 'RightHighlightCards',
  props: {
    firstDay: {
      type: Object,
      required: true,
    },
  },
  components: {
    ProgressBar,
    RightHighlightCard,
  },
  computed: {
    windDirection() {
      return 360 - this.firstDay.wind.direction;
    },
  },
  methods: {
    roundNumber,
  },
};
</script>

<style scoped>

</style>
