//           0  1  2  3  4
const arr = [1, 2, 3, 4, 5];

{
  const first = arr[0];
  const second = arr[1];
  const last = arr[arr.length - 1];
  const rest = arr.slice(2);
  console.log(first, second, last, rest);
  // console.log(arr.slice(2, 4));

  arr[2] = 6;
  console.log(arr);
}

{
  // array destructuring
  const [first, second, , , last] = arr;
  console.log(first, second, last);
}

{
  // array spread operator
  const [first, second, ...rest] = arr;
  console.log(first, second, rest);
}

{
  const anotherArr = [6, 7, 8];
  // const concatenation = arr.concat(anotherArr);
  const concatenation = [...arr, 5.5, ...anotherArr, 9, 10];
  console.log(concatenation);
}

{
  const anotherArr = [6, 7, 8];
  const concatenation = [arr, 5.5, anotherArr, 9, 10];
  console.log(concatenation.flat());
}

const obj = { a: 1, b: 2, c: 3, d: 4 };

{
  const firstProperty = obj.a;
  const b = obj.b;
  console.log(firstProperty, b);
}

{
  // obj destructuring & obj spread operator
  const { a: firstProperty, b, ...rest } = obj;
  console.log(firstProperty, b, rest);
}

{
  const anotherObj = { c: 5, e: 6 };
  const merge = { ...obj, ...anotherObj };
  console.log(merge);
}

{
  // rest parameters

  console.log(sum(1, 2, 3, 4, 5));

  function sum(a, b, ...numbers) {
    let acc = 0;

    for (let i = 0; i < numbers.length; i++) {
      acc += numbers[i];
    }

    return acc;
  }
}
