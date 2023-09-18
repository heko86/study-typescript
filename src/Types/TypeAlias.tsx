// Map Alias
type Animals = "dog" | "cat";

type Foo = {
  [key in Animals]: number;
};
const foo: Foo = { dog: 1, cat: 2 };
