<template>
  <div>
    <el-container>
      <v-header></v-header>
      <expand-main></expand-main>
      <v-footer></v-footer>
    </el-container>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import VFooter from '@/components/VFooter.vue';
import ExpandMain from '@/components/ExpandMain.vue';
import VHeader from '@/components/VHeader.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    ExpandMain,
    VFooter,
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
