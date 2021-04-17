<template>
  <expand-main></expand-main>
</template>

<script>
import { mapActions } from 'vuex';
import ExpandMain from './ExpandMain.vue';

export default {
  name: 'Home',
  components: {
    ExpandMain,
  },
  mounted() {
    this.setRandomQuote();
  },
  methods: {
    ...mapActions(['setRandomQuote']),
  },
};
</script>

<style scoped>
.el-container {
  min-height: 95vh;
  justify-content: space-between;
  margin-bottom: 5vh;
}
</style>
