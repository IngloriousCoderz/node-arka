/*
|---> sum(2, 3)
| 5 <---------|
|
|---------> fetch(callback)
|                         |
|--> sum(2, 3)            |
| 5 <--------|            |
|                         |
| data <------------------|
|
*/

$.getJSON(
  url,
  (response) => {
    console.log(response);
  },
  (error) => {
    console.error(error);
  }
);

sum(2, 3);

button.addEventListener("click", (event) => {});

$.getJSON(
  url1,
  (response1) => {
    console.log(response1);

    $.getJSON(
      url2,
      (response2) => {
        console.log(response2);

        $.getJSON(
          url3,
          (response3) => {
            console.log(response3);
          },
          (error3) => {
            console.error(error3);
          }
        );
      },
      (error2) => {
        console.error(error2);
      }
    );
  },
  (error1) => {
    console.error(error1);
  }
);

$.getJSON(url1, handleResponse1, handleError1);

function handleResponse1(response1) {
  console.log(response1);

  $.getJSON(url2, handleResponse2, handleError2);
}

function handleError1(error1) {
  console.error(error1);
}

function handleResponse2(response2) {
  console.log(response2);

  $.getJSON(url3, handleResponse3, handleError3);
}

function handleError2(error2) {
  console.error(error2);
}

function handleResponse3(response3) {
  console.log(response3);
}

function handleError3(error3) {
  console.error(error3);
}

// const promise = $.getJSON(url);

$.getJSON(url)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.error(error);
  })
  .finally(() => {
    console.log("The end.");
  });

$.getJSON(url1)
  .then((response1) => {
    console.log(response1);
    return $.getJSON(url2);
  })
  .then((response2) => {
    console.log(response2);
    return $.getJSON(url3);
  })
  .then((response3) => {
    console.log(response3);
  })
  .catch((error) => {
    console.error(error);
  });

const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("hello!");
  }, 3000);
});

const promise = new Promise((resolve, reject) => {
  $.getJSON(
    url,
    (response) => {
      resolve(response);
    },
    (error) => {
      reject(error);
    }
  );
});
promise.then((response) => {});
promise.catch((error) => {});

const responses = [];

$.getJSON(url1, (response) => {
  responses.push(response);
});

$.getJSON(url2, (response) => {
  responses.push(response);
});

const id = setInterval(() => {
  if (responses.length === 2) {
    clearInterval(id);
  }
}, 1000);

const promise3 = Promise.all([promise1, promise2]);

promise.then(([response1, response2]) => {});

const promise3 = Promise.race([promise1, promise2]);

fetch("https://swapi.dev/api/people/1/") //
  .then((response) => response.json());

console.time();
fetch("https://swapi.dev/api/people/1/")
  .then((response) => response.json())
  .then((body) => console.log(body))
  .then(() => fetch("https://swapi.dev/api/people/2/"))
  .then((response) => response.json())
  .then((body) => console.log(body))
  .then(() => fetch("https://swapi.dev/api/people/3/"))
  .then((response) => response.json())
  .then((body) => console.log(body));
console.timeEnd();

console.time();
Promise.all([
  fetch("https://swapi.dev/api/people/1/").then((response) => response.json()),
  fetch("https://swapi.dev/api/people/2/").then((response) => response.json()),
  fetch("https://swapi.dev/api/people/3/").then((response) => response.json()),
])
  .then(([luke, c3po, r2d2]) => {
    console.log(luke, c3po, r2d2);
  })
  .catch((error) => {
    console.error(error);
  });
console.timeEnd();

const timeoutError = new Promise((resolve, reject) => {
  setTimeout(() => reject("Timeout error"), 2);
});

Promise.race([
  fetch("https://swapi.dev/api/people/1/")
    .then((response) => response.json())
    .then((body) => console.log(body)),
  timeoutError,
]);

Promise.allSettled();
