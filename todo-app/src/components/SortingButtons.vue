<template>
  <div class="container">
    <button>All</button>
    <button>Active</button>
    <button>Completed</button>
  </div>
</template>

<script>
export default { name: 'SortingButtons',
  data() {
    return {};
  } };
</script>

<style scoped>
.container {
  width: 320px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

button {
  min-width: 70px;
  padding: 10px 20px;
  border: none;
  background-color: inherit;
  font-size: 14px;
  font-weight: 500;
  transition: all 0.3s ease;
}

button:hover {
  box-shadow: 7px 9px 15px 0px rgba(34, 60, 80, 0.2);
}
</style>
