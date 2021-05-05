<template>
  <div class="p-xl-3 p-lg-4 p-sm-5 p-col-12 p-card p-d-flex p-flex-column p-justify-between fixed"
  >
    <template v-if="!isLoading">
      <left-header @detectLocation="detectLocation" @search="searchVisible = true" />

      <div class="main-image p-d-flex p-jc-center" v-html="getFirstDay.image"></div>

      <div class="p-d-flex p-align-end p-justify-center p-my-4 p-text-uppercase p-text-italic">
        <h2 style="font-size: 6rem">{{ roundNumber(getFirstDay.temp) }}</h2>
        <span style="color:var(--text-color-secondary); font-size: 2rem">℃</span>
      </div>

      <h1 class="p-text-center p-text-italic p-text-light" style="font-size: 3rem;">
        {{ getFirstDay.weatherName }}
      </h1>

      <div class="p-mt-5" style="color: var(--text-color-secondary); font-size: 14px">
        <div class="p-d-flex p-align-center p-justify-center p-pl-4">
          <p>Today<span class="p-px-2">|</span>{{ formatDate(getFirstDay.time) }}</p>
        </div>
        <div class="p-d-flex p-align-center p-justify-center p-py-4">
          <p><span class="pi pi-home p-pr-2"></span>{{ getFirstDay.location }}</p>
        </div>
      </div>

    </template>

    <template v-else>
      <img src="../assets/Radio-1s-237px.svg" class="p-mt-auto p-mr-auto" alt="loading">
    </template>

    <footer class="p-text-center" style="font-size: 12px; color: var(--text-color-secondary);">
      Written by <a href="https://github.com/ic3top"
                    style="letter-spacing: 1.2px;"
                    target="_blank"
      >
        @ic3top
      </a>
    </footer>

    <Sidebar v-model:visible="searchVisible" position="left" class="p-sidebar-sm">
      <sidebar-content @closeSidebar="searchVisible = false" />
    </Sidebar>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import Sidebar from 'primevue/sidebar';
import roundNumber from '@/utils/roundNumber';
import formatDate from '@/utils/formatDate';
import LeftHeader from './LeftHeader.vue';
import SidebarContent from './SidebarContent.vue';

export default {
  name: 'LeftMain',
  data() {
    return {
      searchVisible: false,
    };
  },
  components: {
    LeftHeader,
    Sidebar,
    SidebarContent,
  },
  computed: {
    ...mapGetters(['isLoading', 'getFirstDay']),
  },
  methods: {
    ...mapActions(['detectLocation']),
    formatDate,
    roundNumber,
  },
};
</script>

<style scoped>
:deep(svg) {
  max-width: 50%;
}

.main-image {
  background: linear-gradient(
    rgba(30,30,30, 0.9),
    rgba(30,30,30, 0.9)),
  url("../assets/Cloud-background.png"
  );
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
}

.fixed {
  min-height: 100vh;
  position: fixed;
}

@media screen and (max-width: 576px) {
  .fixed {
    position: unset;
  }
}
</style>
