<template>
  <div class="container">
    <div class="card-wrapper">
      <h2 class="title">Country quiz</h2>
      <quiz-card />
    </div>
  </div>
</template>

<script>
import { mapMutations } from 'vuex';
import QuizCard from '@/views/Quiz/QuizCard.vue';

export default {
  name: 'Quiz',
  components: {
    QuizCard,
  },
  methods: {
    ...mapMutations(['setAllCountries', 'setFourRandomCountries', 'newGame']),
  },
  mounted() {
    this.newGame();
    fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;alpha3Code;flag;')
      .then((response) => response.json())
      .then((data) => {
        this.setAllCountries(data);
        this.setFourRandomCountries();
      });
  },
};
</script>

<style scoped>
.container {
  min-height: calc(100vh - 30px);
  display: flex;
  justify-content: center;
  align-items: center;
}

.title {
  text-align: left;
  font-size: 36px;
  color: #F2F2F2;
  text-transform: uppercase;
  margin: 40px 0 0;
}
</style>
