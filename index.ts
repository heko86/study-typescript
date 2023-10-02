type Props = {
  id: string;
  name: string;
  age: number;
};
// 上記TypeからStringのKeyのみ抜き出す
// T[K] extends string ? K : neverの部分がConditional Type
type Filter<T, U> = {
  [K in keyof T]: T[K] extends U ? K : never;
}[keyof T];

type StringKeys = Filter<Props, string>;
type NumberKeys = Filter<Props, number>;
type booleanKeys = Filter<Props, boolean>;

// infer
//　例えば以下メソッドの返り値を抽出したいとき、Conditional Typesとinferをあわせることで抽出できる
const foo1 = () => {
  return "";
};

type Return<T> = T extends () => infer U ? U : never;

type Foo2 = Return<typeof foo1>;

// 関数の引数だけを取得したい場合
const foo2 = (id: string, age: number) => {
  return "";
};

type Return2<T> = T extends (...args: [any, infer U, ...any[]]) => any
  ? U
  : never;

type Foo3 = Return2<typeof foo2>;
