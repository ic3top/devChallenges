<template>
  <h2>Variants</h2>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button text="Default" /&gt;</div>
      <Button text="Default" />
    </div>
    <div class="item">
      <div class="descr">&lt;Button variant="outline" /&gt;</div>
      <Button variant="outline" text="Default" />
    </div>
    <div class="item">
      <div class="descr">&lt;Button variant="text" /&gt;</div>
      <Button variant="text" text="Default" />
    </div>
    <div class="item">
      <div class="descr">&lt;Button disabled /&gt;</div>
      <Button disabled text="Default" />
    </div>
    <div class="item">
      <div class="descr">&lt;Button disable-shadow /&gt;</div>
      <Button disable-shadow text="Default" />
    </div>
    <div class="item">
      <div class="descr">&lt;Button variant="text" disabled /&gt;</div>
      <Button variant="text" disabled text="Default" />
    </div>
  </div>
  <h2>Colors</h2>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button color="primary" text="Primary" /&gt;</div>
      <Button color="primary" text="Primary"/>
    </div>
    <div class="item">
      <div class="descr">&lt;Button color="secondary" text="Secondary" /&gt;</div>
      <Button color="secondary" text="Secondary" />
    </div>
    <div class="item">
      <div class="descr">&lt;Button color="danger" text="Danger" /&gt;</div>
      <Button color="danger" text="Danger" />
    </div>
  </div>
  <h2>Sizes</h2>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button size="sm" text="Small" /&gt;</div>
      <Button size="sm" text="Small"></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button size="md" text="Medium" /&gt;</div>
      <Button size="md" text="Medium"></Button>
    </div>
    <div class="item">
      <div class="descr" >&lt;Button size="lg" text="Large" /&gt;</div>
      <Button size="lg" text="Large"></Button>
    </div>
  </div>
  <h2>Use icons</h2>
  <p>Implemented with font awesome icons</p>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button start-icon="angry" color="danger" text="" /&gt;</div>
      <Button start-icon="angry" color="danger" text=""></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button start-icon="list" color="primary" text="" /&gt;</div>
      <Button start-icon="list" color="primary" text=""></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button start-icon="phone" variant="outline" text="" /&gt;</div>
      <Button start-icon="phone" variant="outline" text=""></Button>
    </div>

    <div class="item">
      <div class="descr">&lt;Button start-icon="coins" text="Cash" color="secondary" /&gt;</div>
      <Button start-icon="coins" text="Cash" color="secondary"></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button start-icon="shopping-cart" text="Checkout" color="primary" /&gt;</div>
      <Button start-icon="shopping-cart" text="Checkout" color="primary"></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button end-icon="hamburger" variant="outline" text="Food" /&gt;</div>
      <Button end-icon="hamburger" variant="outline" text="Food"></Button>
    </div>
  </div>
  <h2>Emits click event</h2>
  <div class="timer">
    <div class="item">
      <div class="counter">{{ counter }}</div>
      <hr>
      <Button @click="clickHandler" start-icon="clock" variant="outline" :text="text"></Button>
      <div class="descr mt-20">&lt;Button @click="clickHandler" start-icon="clock" variant="outline" text="{{ text }}" /&gt;</div>
    </div>
  </div>
</template>

<script>
import Button from "./Button";
export default {
  name: "ButtonList",
  components: {
    Button
  },
  data() {
    return {
      counter: 0,
      time: '',
      text: 'start'
    }
  },
  methods: {
    clickHandler() {
      if (this.timer) {
        clearInterval(this.timer);
        this.timer = null;
        this.text = 'start'
        return;
      }
      this.timer = setInterval(() => this.counter++, 1000);
      this.text = 'stop';
    }
  }
}
</script>

<style scoped>
.container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-gap: 1rem;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  padding-bottom: 100px;
}

.descr {
  margin-bottom: 20px;
  font-size: 14px;
  font-family: sans-serif;
  font-weight: 600;
}

.mt-20 {
  margin-top: 20px;
}

.item {
  box-shadow: 5px 3px 10px 0px rgba(34, 60, 80, 0.2);
  padding: 20px 0;
  transition: all .3s ease;
  border: 1px solid lightgrey;
  border-width: 1px 0px 0px 1px;
}

.item:hover {
  box-shadow: 5px 3px 12px 5px rgba(34, 60, 80, 0.2);
}

.timer {
  display: grid;
  margin-bottom: 50px;
  grid-template-columns: minmax(300px, 500px);
  justify-content: center;
}

.counter {
  font-size: 24px;
  margin-bottom: 20px;
}
</style>