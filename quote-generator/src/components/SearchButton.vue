<template>
  <form>
    <input type="search" placeholder="Search">
  </form>
</template>

<script>
export default {
  name: 'SearchButton',
};
</script>

<style scoped>

input {
  outline: none;
}
input[type=search] {
  -webkit-appearance: textfield;
  -webkit-box-sizing: content-box;
  font-family: inherit;
  font-size: 100%;
}
input::-webkit-search-decoration,
input::-webkit-search-cancel-button {
  display: none;
}

input[type=search] {
  background: #ededed url(https://static.tumblr.com/ftv85bp/MIXmud4tx/search-icon.png) no-repeat 9px center;
  border: solid 1px #ccc;
  padding: 9px 10px 9px 32px;
  width: 55px;

  -webkit-border-radius: 10em;
  -moz-border-radius: 10em;
  border-radius: 10em;

  -webkit-transition: all .5s;
  -moz-transition: all .5s;
  transition: all .5s;
}
input[type=search]:focus {
  width: 130px;
  background-color: #fff;
  border-color: #F7DF94;
  box-shadow: 0 0 5px #F7DF94;
}

input:-moz-placeholder {
  color: #999;
}
input::-webkit-input-placeholder {
  color: #999;
}
</style>
