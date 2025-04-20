type Test = [string, number, boolean];
type UnionTest = TupleToUnion<Test>; // string | number | boolean

// ans
type TupleToUnion<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First | TupleToUnion<Rest>
  : never;
