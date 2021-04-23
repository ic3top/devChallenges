<template>
  <ul class="answers">
    <li v-for="(countryObj, index) in answer"
        :key="index"
        class="answer-item">
      <button
        :class="{
              'disabled-btn': answerCompleted,
              correct: answerCompleted && getRightAnswer.name === countryObj.name,
              incorrect: answerCompleted && getRightAnswer.name !== countryObj.name
              }"
        class="answer-btn"
        @click="checkResponse(countryObj.name)">
        <span class="letter">{{ index }}.</span> {{ countryObj?.name }}
      </button>
    </li>
  </ul>
  <button
    :class="{ 'disabled-btn': !answerCompleted }"
    class="next-btn"
    @click="nextQuestion"
  >Next
  </button>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex';
import router from '@/router';

export default {
  name: 'QuizAnswers',
  data() {
    return {
      answerCompleted: false,
    };
  },
  computed: {
    ...mapGetters(['getRightAnswer']),
    ...mapState({
      answer: (state) => state.fourRandomCountries,
      currentQuestion: (state) => state.currentQuestion,
    }),
  },
  methods: {
    ...mapMutations(['increaseResult', 'increaseQuestion', 'setFourRandomCountries']),
    checkResponse(countryName) {
      if (countryName === this.getRightAnswer.name) {
        this.increaseResult();
      }
      this.answerCompleted = true;
    },
    nextQuestion() {
      this.answerCompleted = false;
      this.increaseQuestion();
      this.setFourRandomCountries();
    },
  },
  watch: {
    currentQuestion() {
      if (this.currentQuestion > 8) {
        router.push({ path: '/quiz/results' });
      }
    },
  },
};
</script>

<style scoped>
.answers {
  list-style: none;
  padding: 0;
}

.answer-item {
  margin-top: 25px;
}

.answer-btn {
  box-sizing: border-box;
  position: relative;
  width: 100%;
  padding: 15px 50px 15px 15px;
  border-radius: 12px;
  border: 2px solid rgba(96, 102, 208, 0.7);
  color: rgba(96, 102, 208, 0.8);
  font-size: 20px;
  font-weight: 600;
  text-align: left;
  transition: all .2s ease-in-out;
  cursor: pointer;
}

.answer-btn:hover {
  background: #F9A826;
  color: #FFFFFF;
  border-color: #F9A826;
}

.letter {
  font-size: 20px;
  margin-right: 10px;
}

.disabled-btn {
  opacity: 0.6;
  border: 2px solid #FFFFFF;
  pointer-events: none;
}

.incorrect {
  color: #FFF;
  background-color: #EA8282;
}

.correct {
  color: #FFF;
  background-color: #60BF88;
  opacity: 1;
}

.correct::after, .incorrect::after {
  position: absolute;
  content: '';
  width: 30px;
  height: 30px;
  right: 20px;
  top: 50%;
  transform: translateY(-50%);
  background-size: cover;
}

.correct::after {
  background-image: url('../../assets/success.svg');
}

.incorrect::after {
  background-image: url('../../assets/failure.svg');
}

.next-btn {
  display: block;
  padding: 15px 36px;
  margin: 5vh auto 0 auto;
  border-radius: 12px;
  border: none;
  background-color: #F9A826;
  color: #FFFFFF;
  font-size: 18px;
  font-weight: 700;
  cursor: pointer;
}

@media screen and (max-width: 576px) {
  .answer-btn {
    padding: 10px 25px 10px 10px;
    font-size: 18px;
    font-weight: 500;
  }

  .incorrect::after, .correct::after {
    width: 18px;
    height: 18px;
  }

  .answer-btn:hover {
    background: #FFFFFF;
    border: 2px solid rgba(96, 102, 208, 0.7);
    color: rgba(96, 102, 208, 0.8);
  }

  .incorrect:hover {
    color: #FFF;
    background-color: #EA8282;
  }

  .correct:hover {
    color: #FFF;
    background-color: #60BF88;
  }
}
</style>
