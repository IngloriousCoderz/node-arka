const numbers = [1, 2, 3, 4, 5];

const square = (num) => num ** 2;
const isEven = (num) => num % 2 === 0;
const sum = (num1, num2) => num1 + num2;

numbers.forEach((item, index, arr) => {
  console.log(item, index, arr);
});

// squares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25]
{
  const squares = []; // init
  numbers.forEach((item) => {
    squares.push(item ** 2); // acc
  });
  console.log(squares); // return
}

{
  const squares = numbers.map((item) => {
    return item ** 2;
  });
  console.log(squares);
}

{
  const squares = numbers.map((item) => item ** 2);
  console.log(squares);
}

{
  const squares = numbers.map(square);
  console.log(squares);
}

// evens: [1, 2, 3, 4, 5] -> [2, 4]
{
  const evens = []; // init
  numbers.forEach((item) => {
    if (item % 2 === 0) {
      evens.push(item); // acc
    }
  });
  console.log(evens); // return
}

{
  const evens = numbers.filter((item) => {
    return item % 2 === 0;
  });
  console.log(evens);
}

{
  const evens = numbers.filter((item) => item % 2 === 0);
  console.log(evens);
}

{
  const evens = numbers.filter(isEven);
  console.log(evens);
}

// even: [1, 2, 3, 4, 5] -> 2

{
  let even = undefined; // init
  numbers.forEach((item) => {
    if (isEven(item) && even == null) {
      even = item; // acc
    }
  });
  console.log(even); // return
}

{
  let even = undefined;
  for (const item of numbers) {
    if (isEven(item)) {
      even = item;
      break;
    }
  }
  console.log(even);
}

{
  let even = undefined;
  for (let i = 0; i < numbers.length && even == null; i++) {
    const item = numbers[i];
    if (isEven(item)) {
      even = item;
    }
  }
  console.log(even);
}

{
  const even = numbers.find(isEven);
  console.log(even);
}

// evenIndex: [1, 2, 3, 4, 5] -> 1

{
  const evenIndex = numbers.findIndex(isEven);
  console.log(evenIndex);
}

// hasEvens: [1, 2, 3, 4, 5] -> true

{
  const hasEvens = numbers.some(isEven);
  console.log(hasEvens);
}

// allEvens: [1, 2, 3, 4, 5]: -> false

{
  const allEvens = numbers.every(isEven);
  console.log(allEvens);
}

// sum: [1, 2, 3, 4, 5] -> 15

{
  let acc = 0; // init
  numbers.forEach((item) => {
    acc += item; // acc
  });
  console.log(acc); // return
}

{
  let [acc] = numbers;
  for (let i = 1; i < numbers.length; i++) {
    acc += numbers[i];
  }
  console.log(acc);
}

{
  const result = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  }, 0);
  console.log(result);
}

{
  const result = numbers.reduce((acc, item) => {
    acc += item;
    return acc;
  });
  console.log(result);
}

{
  const result = numbers.reduce(sum);
  console.log(result);
}

// sumSquareEvens: [1, 2, 3, 4, 5] -> [2, 4] -> [4, 16] -> 20

{
  function sumSquareEvens(numbers) {
    let acc = 0;
    for (const item of numbers) {
      if (isEven(item)) {
        acc += square(item);
      }
    }
    return acc;
  }

  console.log(sumSquareEvens(numbers));
}

{
  function sumSquareEvens(numbers) {
    return numbers //
      .filter(isEven)
      .map(square)
      .reduce(sum);
  }

  console.log(sumSquareEvens(numbers));
}

// sumEvenSquares: [1, 2, 3, 4, 5] -> [1, 4, 9, 16, 25] -> [4, 16] -> 20

{
  function sumEvenSquares(numbers) {
    let acc = 0;
    for (const item of numbers) {
      const squared = square(item);
      if (isEven(squared)) {
        acc += squared;
      }
    }
    return acc;
  }

  console.log(sumEvenSquares(numbers));
}

{
  function sumEvenSquares(numbers) {
    return numbers //
      .map(square)
      .filter(isEven)
      .reduce(sum);
  }

  console.log(sumEvenSquares(numbers));
}
