<template>
  <el-card shadow="always">
    <p class="quote">
      {{ getRandomQuote.quoteText }}
    </p>
    <expand-button :quote="getRandomQuote"></expand-button>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex';
import ExpandButton from './ExpandButton.vue';

export default {
  name: 'VQuote',
  components: {
    ExpandButton,
  },
  computed: {
    ...mapGetters(['getRandomQuote']),
  },
};
</script>

<style scoped>

.quote {
  font-size: max(3.5vh, 1vw);
  font-weight: 500;
  padding: 20px;
  min-height: 20vh;
  text-align: left;
}

</style>
