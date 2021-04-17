<template>
  <div class="block">
    <el-pagination
      :page-size="1"
      hide-on-single-page
      pager-count="4"
      layout="prev, pager, next"
      :total="total"
      :current-page="currentPage"
      @current-change="handleCurrentChange">
    </el-pagination>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'ExpandPagination',
  computed: {
    ...mapGetters(['getPagination']),
    total() {
      return this.getPagination.totalPages;
    },
    currentPage() {
      return this.getPagination.currentPage;
    },
  },
  methods: {
    ...mapActions(['changePage']),
    handleCurrentChange(current) {
      this.changePage(current);
      window.scrollTo(0, 0);
    },
  },
};
</script>

<style scoped>

</style>
