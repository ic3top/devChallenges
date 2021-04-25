<template>
  <div class="card">
    <div v-if="isLoading">
      <img src="../../assets/loader.svg" alt="Loader">
    </div>
    <template v-else>
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
    </template>
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
    ...mapGetters(['getRightAnswer', 'isLoading']),
  },
};
</script>

<style scoped>
.card {
  position: relative;
  text-align: left;
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
  top: -10%;
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

@media screen and (max-width: 576px) {
  .card {
    width: 300px;
    padding: 35px 22px 22px;
  }

  .card::after {
    height: 58px;
    width: 81px;
    top: -26px;
    right: 5px;
  }

  .question {
    color: #2F527B;
    font-weight: 700;
    font-size: 20px;
  }
}
</style>
