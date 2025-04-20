type A1 = IsString<"Hey">;

// ans
type IsString<T> = T extends string ? "yes" : "no";
