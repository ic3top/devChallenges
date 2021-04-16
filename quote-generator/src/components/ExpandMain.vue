<template>
  <el-main>
    <el-row>
      <el-col :xl="{span: 12, offset: 6}" :sm="{span: 16, offset: 4}">
        <v-quote></v-quote>
        <expand-button :quote="getRandomQuote"></expand-button>
      </el-col>
    </el-row>
    <el-row>
      <el-col v-if="getIsExpanded && getLoadingState">
        <i class="el-icon-loading"></i>
      </el-col>
      <el-col v-else-if="getIsExpanded"
              :xl="{span: 12, offset: 6}"
              :sm="{span: 16, offset: 4}">
        <h2 class="author">
          More quotes by {{ getRandomQuote.quoteAuthor }}<br>
          Total found: {{ getTotalAmountOfQuotes }}
        </h2>
        <el-card v-for="(quote, index) in getAuthorQuotes" :key="quote._id" shadow="hover">
          {{ index + 1 + (getPagination.currentPage - 1) * 10 }}) {{ quote.quoteText }}
        </el-card>
        <expand-pagination class="expand-pagination"></expand-pagination>
      </el-col>
    </el-row>
  </el-main>
</template>

<script>
import { mapGetters } from 'vuex';
import VQuote from '@/components/VQuote.vue';
import ExpandPagination from '@/components/ExpandPagination.vue';
import ExpandButton from './ExpandButton.vue';

export default {
  name: 'ExpandMain',
  components: {
    VQuote,
    ExpandPagination,
    ExpandButton,
  },
  computed: {
    ...mapGetters(['getLoadingState', 'getIsExpanded', 'getRandomQuote', 'getAuthorQuotes', 'getPagination', 'getTotalAmountOfQuotes']),
  },
};
</script>

<style scoped>
.el-card {
  position: relative;
  font-size: max(2.5vh, 1vw);
  margin-top: 1vh;
  text-align: left;
}

.el-card::before {
  height: 100%;
  width: 4px;
  content: '';
  position: absolute;
  left: 0;
  top: 0;
  background-color: #F7DF94;
  border-radius: 4px 0 0 4px;
}

.el-icon-loading {
  font-size: max(10vh, 10vw);
  margin-top: 10vh;
}

.expand-pagination {
  margin: 30px 0;
}

.author {
  margin-top: 8vh;
  text-align: left;
  position: sticky;
  top: 10px;
}
</style>
