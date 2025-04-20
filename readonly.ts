// type ReadOnlyPerson = ?

// interface Person {
//   name: string;
//   age: number;
// }

// const person: Person = { name: "Alice", age: 30 };
// const readOnlyPerson: ReadOnlyPerson<Person> = person;

// readOnlyPerson.age = 31; // Error

// // ans
// type ReadOnlyPerson<T> = {
//   readonly [K in keyof T]: T[K];
// };
