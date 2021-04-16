<template>
  <el-footer>Random quote app - devChallenges.io
    <el-link href="https://github.com/ic3top" target="_blank">
      Written by @ic3top
    </el-link>
  </el-footer>
</template>

<script>
export default {
  name: 'VFooter',
};
</script>

<style scoped>
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
