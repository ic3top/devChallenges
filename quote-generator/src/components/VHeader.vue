<template>
  <el-header>
    <el-button type="info"
               :loading="getLoadingState"
               icon="el-icon-refresh"
               @click="setRandomQuote">
      Roll
    </el-button>
  </el-header>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'VHeader',
  computed: {
    ...mapGetters(['getLoadingState']),
  },
  methods: {
    ...mapActions(['setRandomQuote']),
  },
};
</script>

<style scoped>
.el-header {
  padding: 3vh 5vw 0 0;
  width: 100%;
  text-align: right;
  z-index: 99;
  position: fixed;
}
</style>
