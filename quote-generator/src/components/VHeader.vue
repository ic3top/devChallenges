<template>
  <el-header>
<!--    <search-button></search-button>-->
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
// import SearchButton from './SearchButton.vue';

export default {
  name: 'VHeader',
  components: {
    // SearchButton,
  },
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
  display: flex;
  justify-content: space-between;
  padding: 3vh 5vw 0;
  width: 100%;
  z-index: 99;
  position: fixed;
}
</style>
