// 1.
type A2 = { name: string; age: number };
type B2 = { age: string; address: string };
type Merged2 = Merge<A, B>;
// Merged should be: { name: string; age: string; address: string }
// ans
type Merge<A, B> = {
  [K in keyof A | keyof B]: K extends keyof B
    ? B[K]
    : K extends keyof A
    ? A[K]
    : never;
};
///////////////////////////////////////////////////////////////////////////////////////////////

// 2. Array to Object
const keys = ["name", "age"];
type Person7 = ArrayToObject<typeof keys, string>;
const person7: Person7 = {
  name: "John",
  age: "30",
};
// ans
type ArrayToObject<T extends string[], U> = {
  [K in T[number]]: U;
};

///////////////////////////////////////////////////////////////////////////////////////////////////////

// 3. Conditional Required
type Person9 = { name?: string; age?: number };
type UpdatedPerson = ConditionalRequired<Person, "name">;
// { name: string; age?: number }

//ans
type ConditionalRequired<T, K extends keyof T> = Omit<T, K> &
  Required<Pick<T, K>>;

//////////////////////////////////////////////////////////////////////////////////////////////////

// 4.
type Test1 = IfElse<true, "Yes", "No">; // "Yes"
type Test2 = IfElse<false, "Yes", "No">; // "No"
// ans
type IfElse<T, U, V> = T extends true ? U : V;

//////////////////////////////////////////////////////////////////////////////////////////////////////

// 5. Exclude undefined
type WithoutUndefined = ExcludeUndefined<string | undefined | number>;
// string | number
// ans
type ExcludeUndefined<T> = T extends undefined ? never : T;

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// 6. Create compose function
const double = (x: number) => x * 2;
const addFive = (x: number) => x + 5;
const composed = compose(double, addFive);
console.log(composed(3)); // 16 (double(addFive(3)) = double(8) = 16)
// ans
function compose<A, B, C>(f: (x: B) => C, g: (x: A) => B): (x: A) => C {
  return (x: A) => f(g(x));
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////

// 7. Write a generic type AsyncReturnType<T> that extracts the return type of an asynchronous function (i.e., a function that returns a Promise).
async function fetchData(url: string): Promise<string> {
  return "data";
}
type FetchDataReturnType = AsyncReturnType<typeof fetchData>; // string
// ans
type AsyncReturnType<T extends (...args: any[]) => Promise<any>> = T extends (
  ...args: any[]
) => Promise<infer R>
  ? R
  : never;

//////////////////////////////////////////////////////////////////////////////////////

// 8. Write a generic type DeepPartial<T> that makes every property of an object T optional, and also makes nested properties optional recursively.
// type Person16 = {
//   name: string;
//   address: {
//     street: string;
//     city: string;
//   };
// };
// const partialPerson: DeepPartial<Person> = {
//   name: "John",
//   address: {
//     street: "Main St",
//   },
// };

//ans
type DeepPartial<T> = T extends object
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : T;
