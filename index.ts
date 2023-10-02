import { PartialDeep } from "type-fest";

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

// Utility Types
type Foo4 = ReturnType<typeof foo2>;
// Utility Types 例
// ーーーーーーー
type User = {
  name: string;
  age: number | null;
  country?: "US" | "UK" | "JP";
};

// readOnly
type readOnlyUser = Readonly<User>;

const user: PartialUser = {
  name: "みや",
};

// Partial(各プロパティをオプショナルにする)
type PartialUser = Partial<User>;
// Requier(すべてを必須とする)
type RequiredUser = Required<User>;
// Pick（オブジェクトがあった場合、必要なプロパティを選んで、新しいオブジェクト型を返す
// 例でageがない型をつくる
type PickUser = Pick<User, "name" | "country">;
// Omit（Pickの反対、いらないプロパティを選択して新しいオブジェクトを返す
type OmitUser = Omit<User, "age">;
// Extract (第一型引数と第二型引数から互換性のあるものだけを残して新しい型を生成生成するもの)
type Foo5 = Extract<string | number, string>;
// Exclude(Extractの反対、第一型引数と第二型引数の中で互換性がないもを抽出したもの)
type Foo6 = Exclude<string | number, string>;
// NonNullable(型引数で指定した型からnullとundefinedを除いたもの)
type Foo7 = NonNullable<string | null | undefined>;
// Record 第一型引数がkeyになって、第二型引数がvalueになる
type Foo8 = Record<string, number>;
const obj: Foo8 = {
  hoge: 1,
  fuga: 3,
};
// Parameters(関数の引数の型をTupleとして取得する)
function foo10(a: string, b: number[], c: boolean) {
  return;
}
type Foo9 = Parameters<typeof foo10>;
// 特殊なものを紹介
//stringのliteral Typesに対して、操作できるもの
type Foo11 = Uppercase<"hello">;
// Lowercase
type Foo12 = Lowercase<"HELLO">;
// Capitalize(先頭の文字を大文字にするもの)
type Foo13 = Capitalize<"hello">;
type Foo14 = Uncapitalize<"Hello">;
// ーーーーーーー
