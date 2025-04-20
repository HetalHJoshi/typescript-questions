type New = ExtractString<"hello" | 42 | true | "all">;

// ans
type ExtractString<T> = T extends string ? T : never;
