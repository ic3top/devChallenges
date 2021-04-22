<template>
<footer class="footer">
  Written by <a href="https://github.com/ic3top">@ic3top</a>
</footer>
</template>

<script>
export default {
  name: 'TheFooter',
};
</script>

<style scoped>
.footer {
  line-height: 30px;
  text-align: center;
  background: rgb(82,86,161);
  background: radial-gradient(circle, rgba(82,86,161,1) 28%,
                                      rgba(92,98,193,0.7651435574229692) 64%);
  color: #f0f0f0;
}

.footer a {
  color: #FFF;
  text-decoration-line: none;
}

.footer a:hover {
  text-decoration-line: underline;
  color: lightskyblue;
}
</style>
