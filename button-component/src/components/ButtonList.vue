<template>
  <h2>Variants</h2>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button&gt;Default&lt;/Button&gt;</div>
      <Button text="Default">Default</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button variant="outline"&gt;</div>
      <Button variant="outline">Outline</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button variant="text" /&gt;</div>
      <Button variant="text">Some text</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button disabled&gt;</div>
      <Button disabled>I`ll be back</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button disable-shadow&gt;</div>
      <Button disable-shadow>Without shadow</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button variant="text" disabled /&gt;</div>
      <Button variant="text" disabled>Exit</Button>
    </div>
  </div>
  <h2>Colors</h2>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button color="primary"&gt;</div>
      <Button color="primary">Primary color</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button color="secondary"&gt;</div>
      <Button color="secondary">Secondary color</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button color="danger"&gt;</div>
      <Button color="danger">Danger color</Button>
    </div>
  </div>
  <h2>Sizes</h2>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button size="sm"&gt;</div>
      <Button size="sm" text="Small">I'm small</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button size="md"&gt;</div>
      <Button size="md" text="Medium">I'm medium</Button>
    </div>
    <div class="item">
      <div class="descr" >&lt;Button size="lg"&gt;</div>
      <Button size="lg" text="Large">I'm large</Button>
    </div>
  </div>
  <h2>Use icons</h2>
  <p>Implemented with font awesome icons</p>
  <div class="container">
    <div class="item">
      <div class="descr">&lt;Button start-icon="angry" color="danger"&gt;</div>
      <Button start-icon="angry" color="danger"></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button start-icon="list" color="primary"&gt;</div>
      <Button start-icon="list" color="primary"></Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button start-icon="phone" variant="outline"&gt;</div>
      <Button start-icon="phone" variant="outline"></Button>
    </div>

    <div class="item">
      <div class="descr">&lt;Button start-icon="coins" color="secondary"&gt;</div>
      <Button start-icon="coins" text="Cash" color="secondary"> Withdraw</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button start-icon="shopping-cart" color="primary"&gt;</div>
      <Button start-icon="shopping-cart" color="primary"> Checkout</Button>
    </div>
    <div class="item">
      <div class="descr">&lt;Button end-icon="hamburger" variant="outline"&gt;</div>
      <Button end-icon="hamburger" variant="outline">Food </Button>
    </div>
  </div>
  <h2>Emits click event</h2>
  <div class="timer">
    <div class="item">
      <div class="counter">{{ counter }}</div>
      <hr>
      <Button @click="clickHandler" start-icon="hand-pointer" variant="outline"> Click!</Button>
      <div class="descr mt-20">&lt;Button @click="clickHandler" start-icon="hand-pointer" variant="outline"&gt;</div>
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
    }
  },
  methods: {
    clickHandler() {
      this.counter++;
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
