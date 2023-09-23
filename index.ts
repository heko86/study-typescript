export type User = {
  name: string;
  age: number;
  [key: string]: string | number;
};

const user: User = {
  name: "miya",
  account: "miya_it",
  age: 20,
};
