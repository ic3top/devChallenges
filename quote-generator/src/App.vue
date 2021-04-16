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
import VFooter from './components/VFooter.vue';
import ExpandMain from './components/ExpandMain.vue';
import VHeader from './components/VHeader.vue';

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

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

</style>

<style scoped>
.el-container {
  min-height: 95vh;
  justify-content: space-between;
  margin-bottom: 5vh;
}
</style>
