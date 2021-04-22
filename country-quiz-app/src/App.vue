<template>
  <router-view/>
  <TheFooter />
</template>

<script>
import TheFooter from './components/TheFooter.vue';

export default {
  name: 'App',
  components: {
    TheFooter,
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
body {
  background-image: url('./assets/background.png');
  background-size: cover;
  background-repeat: no-repeat;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
