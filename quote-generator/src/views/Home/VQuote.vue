<template>
  <el-card shadow="always">
    <p class="quote">
      {{ getRandomQuote.quoteText }}
    </p>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VQuote',
  components: {
  },
  computed: {
    ...mapGetters(['getRandomQuote']),
  },
};
</script>

<style scoped>

.quote {
  display: flex;
  position: relative;
  align-items: center;
  min-height: 20vh;
  font-size: max(3.5vh, 1vw);
  font-weight: 500;
}

</style>
