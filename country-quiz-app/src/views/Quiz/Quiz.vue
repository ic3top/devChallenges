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
    ...mapMutations(['setAllCountries', 'setFourRandomCountries', 'newGame', 'setLoadingState']),
  },
  mounted() {
    this.setLoadingState(true);
    this.newGame();
    fetch('https://restcountries.eu/rest/v2/all?fields=name;capital;alpha3Code;flag;')
      .then((response) => response.json())
      .then((data) => {
        this.setAllCountries(data);
        this.setFourRandomCountries();
        this.setLoadingState(false);
      });
  },
};
</script>

<style scoped>
.container {
  min-height: calc(100vh - 60px);
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
}

.title {
  text-align: left;
  font-size: 36px;
  color: #F2F2F2;
  text-transform: uppercase;
  margin: 40px 0 0;
}

@media screen and (max-width: 576px)  {
  .container {
    max-width: 300px;
  }
}

@media screen and (max-height: 1600px) {
  .title {
    margin-top: 15px;
    font-size: 28px;
  }
}
</style>
