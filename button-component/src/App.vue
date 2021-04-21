<template>
  <h1>Buttons</h1>
  <ButtonList></ButtonList>
  <TheFooter></TheFooter>
</template>

<script>
import ButtonList from "./components/ButtonList";
import TheFooter from "./components/TheFooter";

export default {
  name: 'App',
  components: {
    ButtonList,
    TheFooter
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
