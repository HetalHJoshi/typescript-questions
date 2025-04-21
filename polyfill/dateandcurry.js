// How would you calculate the number of days between two dates in JavaScript?

const date1 = new Date("2025-01-01");
const date2 = new Date("2025-02-01");
const diffTime = date2 - date1;
const diffDays = diffTime / (1000 * 3600 * 24); // convert to days
console.log(diffDays);

//How would you check if a given year is a leap year in JavaScript?

function isLeapYear(year) {
  return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
}

//How do you find the first day of the month for a given date?

const date = new Date();
date.setDate(1);
console.log(date); // First day of the current month

//How do you get the last day of the month for a given date?

const date = new Date();
date.setMonth(date.getMonth() + 1);
date.setDate(0); // Last day of the current month
console.log(date);

//How would you format a date in YYYY-MM-DD format in JavaScript?

const date = new Date();
const formattedDate = date.toISOString().split("T")[0];
console.log(formattedDate); // "2025-04-21"

//How would you handle time zones when working with dates in JavaScript?

const date = new Date();
const options = {
  timeZone: "America/New_York",
  year: "numeric",
  month: "long",
  day: "numeric",
};
console.log(new Intl.DateTimeFormat("en-US", options).format(date)); // Date in New York timezone

//How do you get the difference between two dates in hours, minutes, and seconds?

const startDate = new Date("2025-04-01T10:00:00");
const endDate = new Date("2025-04-01T12:45:30");
const diff = endDate - startDate;
const hours = Math.floor(diff / (1000 * 60 * 60));
const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((diff % (1000 * 60)) / 1000);
console.log(hours, minutes, seconds);

//What is currying in JavaScript?

function add(a) {
  return function (b) {
    return a + b;
  };
}
const add5 = add(5);
console.log(add5(3)); // 8

//How would you curry a function that adds three numbers?

function add(a) {
  return function (b) {
    return function (c) {
      return a + b + c;
    };
  };
}
const result = add(1)(2)(3);
console.log(result); // 6

//How would you use currying to create a function that multiplies numbers?

function multiply(a) {
  return function (b) {
    return function (c) {
      return a * b * c;
    };
  };
}
const result = multiply(2)(3)(4);
console.log(result); // 24

//What are the advantages of currying in JavaScript?

// Partial Application: Reusing a function with some arguments pre-filled.

// Reusability: Curried functions can be reused in different contexts.

// Code Clarity: Functions are smaller and more modular.

//How would you combine multiple curried functions into a single function (compose them)?

function add(a) {
  return function (b) {
    return a + b;
  };
}

function multiply(a) {
  return function (b) {
    return a * b;
  };
}

function composedFunction(a, b) {
  return multiply(add(a)(b))(2);
}

console.log(composedFunction(3, 5)); // (3 + 5) * 2 = 16

//Can you write a curried function that checks whether a number is divisible by another?

function isDivisibleBy(a) {
  return function (b) {
    return b % a === 0;
  };
}
const isDivisibleBy3 = isDivisibleBy(3);
console.log(isDivisibleBy3(9)); // true
console.log(isDivisibleBy3(10)); // false

//How would you use currying to manage configuration settings, such as setting a default timeout or base URL?

function setConfig(baseURL) {
  return function (timeout) {
    return function (headers) {
      return {
        baseURL,
        timeout,
        headers,
      };
    };
  };
}

const config = setConfig("https://api.example.com")(5000)({
  Authorization: "Bearer token",
});
console.log(config);

//Can you use currying to debounce a function?

function debounce(func, delay) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), delay);
  };
}

const debouncedFunction = debounce(() => console.log("Executed!"), 1000);
debouncedFunction(); // Executes after 1 second delay
