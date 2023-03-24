const person = {
  firstName: "Matteo Antony",
  lastName: "Mistretta",
  first: {
    name: "Antony",
  },
  speak() {
    console.log("Hello, my name is " + this.firstName);
  },
};

console.log(person.firstName); // dot notation
console.log(person["firstName"]); // square bracket notation

const key = "lastName";
console.log(person[key]);

person.age = 40;
console.log(person);

person.firstName = "Luca Jonathan";
console.log(person);

person["age"] = 42;
console.log(person);

person.speak();
