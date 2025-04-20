type A = {
  name: string;
  address: {
    city: string;
    state: string;
  };
};

type B = {
  age: number;
  address: {
    city: string;
    country: string;
  };
};

type Merged = MergeDeep<A, B>;
// Result: {
//   name: string;
//   age: number;
//   address: {
//     city: string;
//     state: string;
//     country: string;
//   };
// }

// ans
type MergeDeep<A, B> = {
  [K in keyof A | keyof B]: K extends keyof A
    ? K extends keyof B
      ? A[K] extends object
        ? B[K] extends object
          ? MergeDeep<A[K], B[K]>
          : B[K]
        : A[K]
      : A[K]
    : K extends keyof B
    ? B[K]
    : never;
};
