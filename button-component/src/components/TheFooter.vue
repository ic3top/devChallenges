<template>
  <footer>
    Created by <a href="https://github.com/ic3top">@ic3top</a> - devChallenges.io
  </footer>
</template>

<script>
export default {
  name: "Footer"
}
</script>

<style scoped>
footer {
  padding: 10px 0;
  position: fixed;
  background-color: #fff;
  box-shadow: 1px -10px 15px 0px rgba(34, 60, 80, 0.2);
  bottom: 0;
  left: 0;
  width: 100%;
}

footer a {
  color: darkblue;
  font-weight: 700;
}
</style>