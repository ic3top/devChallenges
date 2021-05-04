<template>
  <div v-if="!isLoading" class="p-mr-5" style="margin-left: 7vw">
    <right-next-day-cards/>
    <h2 class="p-mt-5" style="font-size: 2rem">Today`s Highlights</h2>
    <div class="p-grid p-mt-3">
      <div class="p-col-6">
        <right-highlight-card>
          <template v-slot:title>
            Wind status
          </template>
          <template v-slot:main>
            <span style="font-size: 5rem">{{ roundNumber(getFirstDay.wind.speed) }}</span>
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
              {{ getFirstDay.wind.directionCompass }}
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
            <span style="font-size: 5rem">{{ getFirstDay.humidity }}</span>
            %
          </template>
          <template v-slot:footer>
            <progress-bar :value="getFirstDay.humidity"></progress-bar>
          </template>
        </right-highlight-card>
      </div>
      <div class="p-col-6">
        <right-highlight-card>
          <template v-slot:title>
            Visibility
          </template>
          <template v-slot:main>
            <span style="font-size: 5rem">{{ roundNumber(getFirstDay.visibility) }}</span>
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
            <span style="font-size: 5rem">{{ roundNumber(getFirstDay.airPressure, 0) }}</span>
            mb
          </template>
        </right-highlight-card>
      </div>
    </div>
  </div>
  <div v-else>
    <!--    TODO: loader skeleton -->
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import ProgressBar from 'primevue/progressbar';
import RightNextDayCards from './RightNextDayCards.vue';
import RightHighlightCard from './RightHighlightCard.vue';
import roundNumber from '../utils/roundNumber';

export default {
  name: 'RightMain',
  components: {
    ProgressBar,
    RightNextDayCards,
    RightHighlightCard,
  },
  computed: {
    ...mapGetters(['isLoading', 'getFirstDay']),
    windDirection() {
      return 360 - this.getFirstDay.wind.direction;
    },
  },
  methods: {
    roundNumber,
  },
};
</script>

<style scoped>

</style>
