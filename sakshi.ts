// // ✅ 1. Function that throws an exception when a condition is not met
// function checkCondition(value: number): void {
//   if (value < 10) {
//     throw new Error("Value is less than 10");
//   }
//   console.log("Value is greater than or equal to 10");
// }

// try {
//   checkCondition(5); // Will throw an error
// } catch (error: any) {
//   console.error("Error:", error.message);
// }

// // ✅ 2. Type conversion using type assertions and parseInt()
// let str: string = "123";
// let num: number = parseInt(str); // Conversion using parseInt
// console.log(`Converted number: ${num}`);

// let unknownValue: any = "456";
// let anotherNum: number = parseInt(unknownValue as string); // Type assertion
// console.log(`Asserted number: ${anotherNum}`);

// // ✅ 3. Function combine with boolean and number using union return type
// function combine(input1: boolean, input2: number): boolean | number {
//   if (input1) {
//     return input2 * 2;
//   }
//   return input1;
// }

// console.log(combine(true, 5)); // Output: 10
// console.log(combine(false, 5)); // Output: false

// // ✅ 4. Type guard: check if input is string or number
// function checkType(value: string | number): void {
//   if (typeof value === "string") {
//     console.log(`It's a string: ${value}`);
//   } else if (typeof value === "number") {
//     console.log(`It's a number: ${value}`);
//   }
// }

// checkType("Hello"); // Output: It's a string: Hello
// checkType(42); // Output: It's a number: 42

// // ✅ 5. Animal class and Tiger subclass
// class Animal {
//   name: string;
//   species: string;

//   constructor(name: string, species: string) {
//     this.name = name;
//     this.species = species;
//   }
// }

// class Tiger extends Animal {
//   constructor(name: string) {
//     super(name, "Tiger");
//   }

//   roar(): void {
//     console.log(`${this.name} is roaring!`);
//   }
// }

// const myTiger = new Tiger("Sheru");
// myTiger.roar(); // Output: Sheru is roaring!

// ✅ 1. ConstructorParameters<T>
// type MyConstructor = new (x: number, y: string) => {};
// type ConstructorParameters<T extends new (...args: any) => any> =
//   T extends new (...args: infer P) => any ? P : never;

// type Params = ConstructorParameters<MyConstructor>; // [x: number, y: string]

// // ✅ 2. StringToTuple<T>
// type StringToTuple<T extends string, Result extends string[] = []> =
//   T extends `${infer First}${infer Rest}` ? StringToTuple<Rest, [...Result, First]> : Result;

// type StrTuple = StringToTuple<"abc">; // ['a', 'b', 'c']

// // ✅ 3. LengthOfString<T>
// type LengthOfString<T extends string> = StringToTuple<T>['length'];

// type L1 = LengthOfString<"hello">; // 5

// // ✅ 4. LargerThan<A, B>
// type NumToTuple<N extends number, R extends any[] = []> =
//   R['length'] extends N ? R : NumToTuple<N, [any, ...R]>;

// type LargerThan<A extends number, B extends number> =
//   NumToTuple<B> extends [...NumToTuple<A>, ...infer _Rest] ? false : true;

// type C1 = LargerThan<5, 3>; // true
// type C2 = LargerThan<2, 4>; // false

// // ✅ 5. FirstItem<T>
// type FirstItem<T extends any[]> = T extends [infer First, ...any[]] ? First : never;

// type First = FirstItem<[1, 2, 3]>; // 1

// // ✅ 6. LastChar<T>
// type LastChar<T extends string> = T extends `${infer _}${infer Rest}`
//   ? Rest extends "" ? T : LastChar<Rest>
//   : T;

// type Last = LastChar<"Type">; // "e"

// // ✅ 7. FirstChar<T>
// type FirstChar<T extends string> = T extends `${infer First}${infer _}` ? First : never;

// type FirstC = FirstChar<"Type">; // "T"

// // ✅ 8. Flat<T> — one-level flattening
// type Flat<T extends any[]> = T extends [infer First, ...infer Rest]
//   ? First extends any[] ? [...First, ...Flat<Rest>] : [First, ...Flat<Rest>]
//   : [];

// type Flattened = Flat<[1, 2, [3, 4], 5]>; // [1, 2, 3, 4, 5]

// // ✅ 9. IsNever<T>
// type IsNever<T> = [T] extends [never] ? true : false;

// type TestNever1 = IsNever<never>; // true
// type TestNever2 = IsNever<string>; // false

// // ✅ 10. IsEmptyType<T>
// type IsEmptyType<T> = keyof T extends never ? true : false;

// type TestEmpty1 = IsEmptyType<{}>; // true
// type TestEmpty2 = IsEmptyType<{ a: number }>; // false

// // ✅ 11. ReverseTuple<T>
// type ReverseTuple<T extends any[], R extends any[] = []> =
//   T extends [infer First, ...infer Rest] ? ReverseTuple<Rest, [First, ...R]> : R;

// type Reversed = ReverseTuple<[1, 2, 3]>; // [3, 2, 1]
