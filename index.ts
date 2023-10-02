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
