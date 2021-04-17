<template>
  <div class="block">
    <el-pagination
      :small="isSmall"
      :page-size="1"
      hide-on-single-page
      :pager-count="5"
      layout="prev, pager, next"
      :total="total"
      :current-page="currentPage"
      @current-change="emitCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VPagination',
  computed: {
    ...mapGetters(['getPagination']),
    total() {
      return this.getPagination.totalPages;
    },
    currentPage() {
      return this.getPagination.currentPage;
    },
    isSmall() {
      return window.innerWidth < 576;
    },
  },
  methods: {
    emitCurrentChange(current) {
      this.$emit('changeCurrentPage', current);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>

</style>
