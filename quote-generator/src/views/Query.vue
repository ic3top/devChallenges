<template>
  <el-main>
    <el-row>
      <el-col>
        <h2 class="query">
          Your query: '{{ query }}'<br>
          Total found: {{ getSearchResults.totalQuotes }}
        </h2>
      </el-col>
      <el-col v-if="getLoadingState">
        <i class="el-icon-loading"></i>
      </el-col>
      <el-col v-else-if="getSearchResults.totalQuotes === 0" class="find-error">
        <img class="find-error-img" src="../assets/found.jpg">
        Sorry... we didn't find anything on your request.
      </el-col>
      <el-col v-else
              :xl="{span: 12, offset: 6}"
              :sm="{span: 16, offset: 4}">
        <v-card :quotes-array="getSearchResults.data"></v-card>
        <v-pagination @changeCurrentPage="changeCurrentPageHandler"
                      class="pagination">
        </v-pagination>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VCard from '@/components/VCard.vue';
import VPagination from '../components/VPagination.vue';

export default {
  name: 'Query',
  components: {
    VCard,
    VPagination,
  },
  props: {
    query: {
      type: String,
      required: true,
    },
  },
  mounted() {
    this.getQuotesPerQuery(this.query);
  },
  methods: {
    ...mapActions(['getQuotesPerQuery', 'changePageQueryQuotes']),
    changeCurrentPageHandler(current) {
      this.changePageQueryQuotes(current);
    },
  },
  computed: {
    ...mapGetters(['getSearchResults', 'getLoadingState']),
  },
  watch: {
    query() {
      this.getQuotesPerQuery(this.query);
    },
  },
};
</script>

<style scoped>
.el-icon-loading {
  font-size: max(10vh, 10vw);
  margin-top: 30vh;
}

.query {
  margin-top: 10vh;
}

.find-error {
  font-size: max(5vh, 1vw);
  margin-top: 3vh;
}

.find-error-img {
  height: 60vh;
  display: block;
  margin: 10px auto 5vh;
}

.pagination {
  margin-top: 5vh;
}

.el-main {
  margin-bottom: 60px;
}
</style>
