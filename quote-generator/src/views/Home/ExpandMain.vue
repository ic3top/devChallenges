<template>
  <el-main>
    <el-row>
      <el-col :xl="{span: 12, offset: 6}" :sm="{span: 16, offset: 4}">
        <v-quote></v-quote>
        <expand-button :quote="getRandomQuote"></expand-button>
      </el-col>
    </el-row>
    <el-row v-if="getIsExpanded">
      <el-col>
        <h2 class="author">
          More quotes by {{ getRandomQuote.quoteAuthor }}<br>
          Total found: {{ getTotalAmountOfQuotes }}
        </h2>
      </el-col>
      <el-col v-if="getLoadingState">
        <i class="el-icon-loading"></i>
      </el-col>
      <el-col v-else
              :xl="{span: 12, offset: 6}"
              :sm="{span: 16, offset: 4}">
        <v-card :quotes-array="getAuthorQuotes"></v-card>
        <v-pagination
          @changeCurrentPage="changeCurrentPageHandler"
          class="expand-pagination">
        </v-pagination>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import VQuote from '@/components/VQuote.vue';
import VPagination from '@/components/VPagination.vue';
import ExpandButton from './ExpandButton.vue';
import VCard from './VCard.vue';

export default {
  name: 'ExpandMain',
  components: {
    VQuote,
    VPagination,
    ExpandButton,
    VCard,
  },
  computed: {
    ...mapGetters(['getLoadingState',
      'getIsExpanded',
      'getRandomQuote',
      'getAuthorQuotes',
      'getPagination',
      'getTotalAmountOfQuotes']),
  },
  methods: {
    ...mapActions(['changePageAuthorQuotes']),
    changeCurrentPageHandler(current) {
      this.changePageAuthorQuotes(current);
    },
  },
};
</script>

<style scoped>
.el-icon-loading {
  font-size: max(10vh, 10vw);
  margin-top: 10vh;
}

.expand-pagination {
  margin: 30px 0;
}

.author {
  margin: 8vh auto 0;
}
</style>
