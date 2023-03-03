{
  // function declaration
  // HOISTING

  console.log(sum(2, 3));

  function sum(a, b) {
    return a + b;
  }
}

{
  // function expression
  // NO HOISTING

  const sum = function (a, b) {
    return a + b;
  };

  console.log(sum(2, 3));

  // console.log(this);
  // button.onclick = function (event) {
  //   console.log(this, event);
  // };

  // button.addEventListener("click", function (event) {
  //   console.log(this, event);
  // });
}

{
  // arrow functions
  // NO HOISTING

  // const sum = (a, b) => {
  //   return a + b;
  // };

  const sum = (a, b) => a + b;

  console.log(sum(2, 3));

  // console.log(this);
  // document.querySelector("button").addEventListener("click", (event) => {
  //   console.log(this, event.target);
  // });
}
