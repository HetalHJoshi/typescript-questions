const person = {
  name: "Alice",
  age: 30,
};

//   type PersonKeys = ?
let key: PersonKeys = "name"; // Valid
//   key = "email";  // Error

// ans
type PersonKeys = keyof typeof person;
