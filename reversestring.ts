type Rev1 = ReverseString<"abc">; // Expected: "cba"
type Rev2 = ReverseString<"TypeScript">; // Expected: "tpircSepyT"
type Rev3 = ReverseString<"x">; // Expected: "x"

type ReverseString<
  S extends string,
  Acc extends string = ""
> = S extends `${infer First}${infer Rest}`
  ? ReverseString<Rest, `${First}${Acc}`>
  : Acc;
