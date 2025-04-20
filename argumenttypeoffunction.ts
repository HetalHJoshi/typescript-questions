//4) Create a generic type that extracts the argument type from a function?

type ArgumentType<Fn extends (...args: any[]) => any> = Fn extends (
  ...args: infer A
) => any
  ? A
  : never;

type Fn = (name: string, age: number) => void;
type D = ArgumentType<Fn>;
