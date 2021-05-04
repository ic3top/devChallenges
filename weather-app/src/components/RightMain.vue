<template>
  <div class="p-col p-px-sm-4">
    <right-next-day-cards v-if="!isLoading" />
    <skeleton-next-day-cards v-else />
    <h2 class="p-mt-5" style="font-size: 2rem">Today`s Highlights</h2>
    <right-highlight-cards :firstDay="getFirstDay" v-if="!isLoading" />
    <skeleton-highlight-cards v-else />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import RightNextDayCards from './RightNextDayCards.vue';
import RightHighlightCards from './RightHighlightCards.vue';
import SkeletonNextDayCards from './SkeletonNextDayCards.vue';
import SkeletonHighlightCards from './SkeletonHighlightCards.vue';

export default {
  name: 'RightMain',
  components: {
    RightHighlightCards,
    RightNextDayCards,
    SkeletonNextDayCards,
    SkeletonHighlightCards,
  },
  computed: {
    ...mapGetters(['isLoading', 'getFirstDay']),
  },
  methods: {},
};
</script>
