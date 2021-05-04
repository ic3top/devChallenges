<template>
  <div class="p-grid p-mt-3">
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Wind status
        </template>
        <template v-slot:main>
          <Skeleton height="5rem"/>
        </template>
        <template v-slot:footer>
          <div class="p-text-light p-d-flex p-align-center p-justify-center"
               style="font-size: 1.5rem"
          >
              <span class="pi pi-chevron-circle-down p-mr-2"
                    style="font-size: 1.8rem; color: var(--primary-color)"
              ></span>
            <Skeleton width="4rem"/>
          </div>
        </template>
      </right-highlight-card>
    </div>
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Humidity
        </template>
        <template v-slot:main>
          <Skeleton height="5rem"/>
        </template>
        <template v-slot:footer>
          <progress-bar mode="indeterminate"></progress-bar>
        </template>
      </right-highlight-card>
    </div>
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Visibility
        </template>
        <template v-slot:main>
          <Skeleton height="5rem"/>
        </template>
      </right-highlight-card>
    </div>
    <div class="p-col-6">
      <right-highlight-card>
        <template v-slot:title>
          Air pressure
        </template>
        <template v-slot:main>
          <Skeleton height="5rem"/>
        </template>
      </right-highlight-card>
    </div>
  </div>
</template>

<script>
import Skeleton from 'primevue/skeleton';
import ProgressBar from 'primevue/progressbar';
import RightHighlightCard from './RightHighlightCard.vue';

export default {
  name: 'SkeletonHighlightCards',
  components: {
    RightHighlightCard,
    Skeleton,
    ProgressBar,
  },
};
</script>

<style scoped>

</style>
