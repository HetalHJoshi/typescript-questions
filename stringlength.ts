type L1 = StringLength<"hello">; // Expected: 5
type L2 = StringLength<"abc">; // Expected: 3
type L3 = StringLength<"">; // Expected: 0

type StringLength<
  S extends string,
  Acc extends any[] = []
> = S extends `${infer First}${infer Rest}`
  ? StringLength<Rest, [First, ...Acc]>
  : Acc["length"];
