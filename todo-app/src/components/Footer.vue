<template>
  <footer>
    Double click for editing <br>
    Written by <a href="https://github.com/ic3top">ic3top</a> - devChallenges.io
  </footer>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style scoped>
footer {
  width: 100%;
  padding: 1vh 0;
  font-size: .8rem;
  position: fixed;
  bottom: 0;
  left: 0;
  background: lightskyblue;
  box-shadow: 0px -5px 5px -5px rgba(34, 60, 80, 0.6);
}
a {
  color: #333;
}
</style>
