const status = 200;

if (status === 200 || status === 201 || status === 204) {
  console.log("Tutto ok.");
}

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.includes(3));

const SUCCESS_STATUSES = [200, 201, 204];

if (SUCCESS_STATUSES.includes(status)) {
  console.log("Tutto ok.");
}
