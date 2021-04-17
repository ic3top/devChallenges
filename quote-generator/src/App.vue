<template>
    <el-container>
      <v-header></v-header>
      <router-view></router-view>
      <v-footer></v-footer>
    </el-container>
</template>

<script>
import VHeader from './components/VHeader.vue';
import VFooter from './components/VFooter.vue';

export default {
  name: 'App',
  components: {
    VHeader,
    VFooter,
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

</style>
