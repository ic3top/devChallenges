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
            <h2 class="author">More quotes by {{ getRandomQuote.quoteAuthor }}</h2>
            <el-card v-for="(quote) in getAuthorQuotes" :key="quote._id" shadow="hover">
              {{ quote.quoteText }}
            </el-card>
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

export default {
  name: 'App',
  components: {
    VQuote,
  },
  mounted() {
    this.setRandomQuote();
  },
  computed: {
    ...mapGetters(['getLoadingState', 'getIsExpanded', 'getRandomQuote', 'getAuthorQuotes']),
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
  font-size: 2.5vh;
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
  min-height: 100vh;
  justify-content: space-between;
  margin-bottom: 5vh;
}

.el-header {
  padding: 3vh 5vw 0 0;
  width: 100%;
  text-align: right;
  z-index: 9999;
  position: fixed;
}

.el-icon-loading {
  font-size: 10vh;
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
</style>
