<template>
  <el-card v-for="(quote, index) in quotesArray" :key="quote._id" shadow="hover">
    {{ index + 1 + (getPagination.currentPage - 1) * 10 }})
    <p class="text" v-html="getText(quote.quoteText)"></p>
  </el-card>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'VCard',
  props: {
    quotesArray: {
      type: Array,
      default: () => ([]),
    },
  },
  computed: {
    ...mapGetters(['getPagination', 'getIsExpanded', 'getCurrentQuery']),
  },
  methods: {
    getText(text) {
      if (!this.getIsExpanded) {
        const template = this.getCurrentQuery;
        return text.replace(new RegExp(`${template}`, 'igm'), `<span style="background-color: #F7DF94;">${template}</span>`);
      }
      return text;
    },
  },
};
</script>

<style scoped>
.text {
  display: inline;
}
</style>
