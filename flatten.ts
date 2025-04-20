// type Flatten= ?

type flat = Flatten<["hello", ["world", ["nested"]]]>;

// ans
type Flatten<T extends any[]> = T extends [infer First, ...infer Rest]
  ? First extends any[]
    ? [...Flatten<First>, ...Flatten<Rest>]
    : [First, ...Flatten<Rest>]
  : [];
// or
// type Flatten<T, U extends any[] = []> = T extends [infer A, ...infer B]
//     ? A extends any[] ? Flatten<[...A, ...B], U> : Flatten<B, [...U, A]> : U;
