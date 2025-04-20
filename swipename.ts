type SwapName<T extends string> = T extends `${infer First} ${infer Last}`
  ? `${Last} ${First}`
  : T;

type S1 = SwapName<"John Doe">; // "Doe John"
type S2 = SwapName<"Alice Johnson">; // "Johnson Alice"
