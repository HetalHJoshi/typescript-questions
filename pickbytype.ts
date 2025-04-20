type Person1 = {
  name: string;
  name1: string;
  age: number;
  isActive: boolean;
};

type StringProperties = PickByType<Person, string>; // op { name: string, name1: string }
type BooleanProperties = PickByType<Person, boolean>; // op { isActive: boolean }

// ans
type PickByType<T, U> = {
  [V in keyof T as T[V] extends U ? V : never]: T[V];
};
