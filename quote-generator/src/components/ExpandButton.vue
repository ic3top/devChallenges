<template>
  <button ref="buttonExpand"
          class="details"
          @click="expandQuotesHandler"
          @keyup.enter="expandQuotesHandler"
          :class="{ disabled: getIsExpanded }">
    <span class="author">{{ quote.quoteAuthor }}</span>
    <span class="genre">{{ quote.quoteGenre }}</span>
  </button>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ExpandButton',
  props: {
    quote: {
      type: Object,
      required: true,
    },
  },
  methods: {
    ...mapActions(['expandQuotes']),
    expandQuotesHandler() {
      this.expandQuotes(true);
      this.$refs.buttonExpand.blur();
    },
  },
  computed: {
    ...mapGetters(['getIsExpanded', 'getPagination']),
  },
};
</script>

<style scoped>
.details {
  display: block;
  position: relative;
  width: 100%;
  border: 3px solid #333333;
  border-radius: 5px;
  outline: none;
  background-color: #333333;
  padding: 2.4vw 0 1.4vw 2vw;
  text-align: left;
}

.details::after {
  content: '⇒';
  color: white;
  position: absolute;
  font-size: max(5vh, 3vw);
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  transition: all .2s ease;
}

.details:focus {
  border: 3px solid #F7DF94;
  background-color: #3A3A3A;
}

.details:hover::after {
  right: 10px;
}

.details:hover {
  background-color: #3A3A3A;
}

.author {
  display: block;
  color: #ffffff;
  font-weight: 700;
  font-size: max(2vh, 1vw);
}

.genre {
  color: #828282;
  font-weight: 500;
  font-size: max(1.4vh, 0.7vw);
}

.disabled {
  background-color: #4a4949;
}

.disabled:hover {
  background-color: #4a4949;
}

.disabled::after {
  right: 10px;
}
</style>
