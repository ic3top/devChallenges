<template>
  <div class="card">
        <h3
          v-if="pattern.includes('capital')"
          class="question">
          {{ getRightAnswer?.capital }} is the capital of:
        </h3>
        <div v-else class="flag-question">
          <img class="flag"
               :src="getRightAnswer?.flag"
               alt="Flag of some country"
          >
          <h3 class="question">Which country does this flag belong to?  </h3>
        </div>
        <quiz-answers />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import QuizAnswers from '@/views/Quiz/QuizAnswers.vue';

export default {
  name: 'QuizCard',
  components: {
    QuizAnswers,
  },
  data() {
    return {
      pattern: this.$route.params.pattern.split('-'),
      answerCompleted: false,
    };
  },
  computed: {
    ...mapGetters(['getRightAnswer']),
  },
};
</script>

<style scoped>
.card {
  position: relative;
  width: 465px;
  margin-top: 20px;
  padding: 68px 32px 32px;
  background-color: #F2F2F2;
  border-radius: 24px;
}

.card::after {
  content: '';
  position: absolute;
  background-image: url('../../assets/adventure.svg');
  background-repeat: no-repeat;
  background-size: cover;
  height: 116px;
  width: 162px;
  right: 0;
  top: -15%;
}

.question {
  color: #2F527B;
  font-weight: 700;
  font-size: 24px;
}

.flag-question {
  text-align: left;
}

.flag {
  height: 80px;
  margin-bottom: 3vh;
}
</style>
