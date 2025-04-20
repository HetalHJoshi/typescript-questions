type Person = {
  name: string;
  age: number;
  isActive: boolean;
};

type WithoutString = ExcludeByType<Person, string>; // { age: number; isActive: boolean }

// ans
type ExcludeByType<T, U> = {
  [K in keyof T as T[K] extends U ? never : K]: T[K];
};
