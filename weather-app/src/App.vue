<template>
  <div class="p-grid p-reset">
    <div class="p-col-3 p-card p-d-flex p-flex-column p-justify-between"
         style="height: 100vh"
    >
      <template v-if="!isLoading">
        <left-header />

        <div class="main-image p-d-flex p-jc-center" v-html="getFirstDay.image"></div>

        <div class="p-d-flex p-align-end p-justify-center p-my-4 p-text-uppercase p-text-italic">
          <h2 style="font-size: 6rem">{{ roundNumber(getFirstDay.temp) }}</h2>
          <span style="color:var(--text-color-secondary); font-size: 2rem">℃</span>
        </div>

        <h1 class="p-text-center p-text-italic p-text-light" style="font-size: 3rem;">
          {{ getFirstDay.weatherName }}
        </h1>

        <div style="color: var(--text-color-secondary); font-size: 0.8rem">
          <div class="p-d-flex p-align-center p-justify-center p-pl-4">
            <p>Today<span class="p-px-2">|</span>{{ formatDate(getFirstDay.time) }}</p>
          </div>
          <div class="p-d-flex p-align-center p-justify-center p-py-4">
            <p><span class="pi pi-home p-pr-2"></span>{{ getFirstDay.location }}</p>
          </div>
        </div>

      </template>

      <template v-else>
        <img src="./assets/Radio-1s-237px.svg" class="p-mt-auto p-mr-auto" alt="loading">
      </template>

    </div>
    <div class="p-col">
      <right-main />
    </div>
  </div>

</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import roundNumber from './utils/roundNumber';
import formatDate from './utils/formatDate';
import LeftHeader from './components/LeftHeader.vue';
import RightMain from './components/RightMain.vue';

export default {
  name: 'App',
  components: {
    LeftHeader,
    RightMain,
  },
  created() {
    this.detectLocation();
  },
  computed: {
    ...mapGetters(['getFirstDay', 'isLoading']),
  },
  methods: {
    ...mapActions(['detectLocation']),
    formatDate,
    roundNumber,
  },
};
</script>

<style>
* {
  padding: 0;
  margin: 0;
}

#app {
  font-family: var(--font-family);
  color: var(--text-color);
  background-color: var(--indigo-900);
  height: 100vh;
}
</style>

<style scoped>
>>> svg {
  max-width: 250px;
}

.main-image {
  /*background-image: url("./assets/Cloud-background.png");*/
  background: linear-gradient(
    rgba(30,30,30, 0.9),
    rgba(30,30,30, 0.9)),
  url("./assets/Cloud-background.png"
  );
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}
</style>
