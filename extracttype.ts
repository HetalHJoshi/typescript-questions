// type ExtractType = ?

// type Person = { name: "Alice"; age: 30 };
// type ExtractedType = ExtractType<Person>;

// const extracted: ExtractedType = "Alice";  // Valid
// const invalidExtracted: ExtractedType = 25; // Error

// // ans
// type ExtractType<T> = T extends { name: infer U } ? U : never;
// // or
// type ExtractType<T> = {
//   [K in keyof T]: K extends "name" ? T[K] : never;
// }[keyof T];
