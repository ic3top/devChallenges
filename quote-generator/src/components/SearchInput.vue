<template>
  <form @submit.prevent="searchRequest" class="form">
    <label for="search-input" class="label-error" v-show="!valid">At least 3 characters...</label>
    <input type="search"
           class="search-input"
           id="search-input"
           name="search-input"
           placeholder="Key word"
           v-model="query"
           @input="valid = true"
           @focusout="valid = true"
           autocomplete="off"
    >
  </form>
</template>

<script>
export default {
  name: 'SearchButton',
  data() {
    return {
      query: '',
      valid: true,
    };
  },
  methods: {
    searchRequest() {
      if (this.query.length < 3) {
        this.valid = false;
        return;
      }
      this.$router.push({ name: 'Search', params: { query: this.query } });
      this.query = '';
    },
  },
};
</script>

<style scoped>
.form {
  position: relative;
}

.search-input {
  outline: none;
}
.search-input {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
.search-input::-webkit-search-decoration,
.search-input::-webkit-search-cancel-button {
  display: none;
}

.search-input {
  background: #ededed url(../assets/magnifier.png) no-repeat 7px center;
  background-size: 20px;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 70px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
}
.search-input:focus {
  width: 130px;
  background-color: #fff;
  border-color: #F7DF94;
  box-shadow: 0 0 5px #F7DF94;
}

.search-input:-moz-placeholder {
  color: #999;
}
.search-input::-webkit-input-placeholder {
  color: #999;
}
.label-error {
  position: absolute;
  bottom: -40px;
  color: rgba(255, 55, 55, .6);
}
</style>
