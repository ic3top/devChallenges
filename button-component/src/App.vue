<template>
  <h1>Buttons</h1>
  <ButtonList></ButtonList>
  <Footer></Footer>
</template>

<script>
import ButtonList from "./components/ButtonList";
import Footer from "./components/Footer";

export default {
  name: 'App',
  components: {
    ButtonList,
    Footer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
