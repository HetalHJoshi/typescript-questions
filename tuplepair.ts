type Zipped = Zip<[1, 2, 3], ["a", "b", "c"]>;
Expected: [
  [1, "a"],
  [2, "b"],
  [3, "c"],
];

// ans
type Zip<
  A extends any[],
  B extends any[],
  Result extends any[] = []
> = A extends [infer FirstA, ...infer RestA]
  ? B extends [infer FirstB, ...infer RestB]
    ? Zip<RestA, RestB, [...Result, [FirstA, FirstB]]>
    : Result
  : Result;
