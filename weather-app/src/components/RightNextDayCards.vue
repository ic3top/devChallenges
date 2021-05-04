<template>
  <div class="p-pt-5 p-grid p-jc-center">
    <Card v-for="(day, index) of getNextDays"
          :key="day.id || index"
          class="p-xl-2 p-mx-3 p-px-2 p-mt-md-4"
          style="min-width: 180px;"
    >
      <template #title>
        <h2 class="p-text-light p-text-center"
            style="font-size: 1.6rem"
        >
          {{ formatDate(day.weather.date) }}
        </h2>
      </template>

      <template #content>
        <div v-html="day.image"></div>
      </template>

      <template #footer>
        <div class="p-d-flex p-justify-between p-align-center">
          <p>
            <span style="font-size: 1.5rem">
              {{ roundNumber(day.weather.maxTemp) }}
            </span> ℃
          </p>
          <p class="p-text-secondary">
            <span style="font-size: 1.2rem">
              {{ roundNumber(day.weather.minTemp) }}
            </span> ℃
          </p>
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from 'primevue/card';
import roundNumber from '../utils/roundNumber';
import formatDate from '../utils/formatDate';

export default {
  name: 'RightNextDayCards',
  components: {
    Card,
  },
  computed: {
    ...mapGetters(['getNextDays']),
  },
  methods: {
    roundNumber,
    formatDate,
  },
};
</script>

<style scoped>
>>> svg {
  max-height: 100px;
}
</style>
