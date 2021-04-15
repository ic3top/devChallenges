<template>
  <div>
    <el-container>
      <el-header>
        <el-button type="info"
                   :loading="getLoadingState"
                   icon="el-icon-refresh"
                   @click="setRandomQuote">
          Roll
        </el-button>
      </el-header>
      <el-main>
        <el-row>
          <el-col :xl="{span: 12, offset: 6}" :sm="{span: 16, offset: 4}">
            <v-quote></v-quote>
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
              {{ index + 1 + (getPagination.currentPage - 1) * 10  }}) {{ quote.quoteText }}
            </el-card>
            <expand-pagination class="expand-pagination"></expand-pagination>
          </el-col>
        </el-row>
      </el-main>
      <el-footer>Random quote app - devChallenges.io
        <el-link href="https://github.com/ic3top" target="_blank">
          Written by @ic3top
        </el-link>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VQuote from './components/VQuote.vue';
import ExpandPagination from './components/ExpandPagination.vue';

export default {
  name: 'App',
  components: {
    VQuote,
    ExpandPagination,
  },
  mounted() {
    this.setRandomQuote();
  },
  computed: {
    ...mapGetters(['getLoadingState', 'getIsExpanded', 'getRandomQuote', 'getAuthorQuotes', 'getPagination', 'getTotalAmountOfQuotes']),
  },
  methods: {
    ...mapActions(['setRandomQuote']),
  },
};
</script>

<style>
body, p {
  margin: 0;
  padding: 0;
  scroll-behavior: smooth;
}

body::-webkit-scrollbar-thumb {
  background-color: #3A3A3A;
}
body::-webkit-scrollbar {
  width: .8em;
}

body::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.el-card {
  position: relative;
  font-size: max(2.5vh, 1vw);
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

</style>

<style scoped>
.el-container {
  min-height: 95vh;
  justify-content: space-between;
  margin-bottom: 5vh;
}

.el-header {
  padding: 3vh 5vw 0 0;
  width: 100%;
  text-align: right;
  z-index: 99;
  position: fixed;
}

.el-icon-loading {
  font-size: max(10vh, 10vw);
  margin-top: 10vh;
}

.el-card {
  margin-top: 1vh;
}

.author {
  margin-top: 8vh;
  text-align: left;
  position: sticky;
  top: 10px;
}

.el-footer {
  font-size: 12px;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.expand-pagination {
  margin: 30px 0;
}
</style>
