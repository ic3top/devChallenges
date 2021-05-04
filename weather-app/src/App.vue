<template>
  <div class="p-grid p-reset">
    <left-main />
    <div class="p-xl-3 p-lg-4 p-sm-5 p-col-12"></div>
    <right-main />
  </div>

</template>

<script>
import { mapActions } from 'vuex';
import RightMain from './components/RightMain.vue';
import LeftMain from './components/LeftMain.vue';

export default {
  name: 'App',
  components: {
    LeftMain,
    RightMain,
  },
  created() {
    this.handlePermission();
    this.detectLocation();
  },
  methods: {
    ...mapActions(['detectLocation', 'handlePermission']),
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
  min-height: 100vh;
}

@media screen and (max-width: 992px) {
  html {
    font-size: 12px;
  }
}
</style>
