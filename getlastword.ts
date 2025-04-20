type L1 = GetLastWord<"This is car">; // "car"
type L2 = GetLastWord<"Hello hi">; // "hi"

// ans
type GetLastWord<T extends string> = T extends `${infer A} ${infer B}`
  ? GetLastWord<B>
  : T;
