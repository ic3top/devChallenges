<template>
  <div class="p-pt-5 p-grid p-jc-center">
    <Card v-for="(index) of 5"
          :key="index"
          class="p-xl-2 p-mx-3 p-px-2 p- p-mt-md-4"
          style="min-width: 180px;"
    >
      <template #title>
        <Skeleton height="2rem" />
      </template>

      <template #content>
        <Skeleton shape="circle" class="p-mx-auto" size="8rem" />
      </template>

      <template #footer>
        <div class="p-d-flex p-justify-between p-align-center">
              <Skeleton class="p-mr-1" />
              <Skeleton />
        </div>
      </template>
    </Card>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Skeleton from 'primevue/skeleton';
import Card from 'primevue/card';

export default {
  name: 'SkeletonNextDayCards',
  components: {
    Skeleton,
    Card,
  },
  computed: {
    ...mapGetters(['getNextDays']),
  },
};
</script>
