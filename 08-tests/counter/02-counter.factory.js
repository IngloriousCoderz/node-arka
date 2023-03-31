function createCounter() {
  const counter = {
    value: 0,

    increment() {
      this.value++;
    },

    decrement() {
      this.value--;
    },
  };

  return counter;
}

module.exports = createCounter;
