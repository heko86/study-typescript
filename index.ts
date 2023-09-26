// Generics
export type User<T> = {
  name: string;
  state: T;
};

type Japanese = User<"東京都" | "大阪府">;
type American = User<"CA" | "NY">;

const user1: Japanese = {
  name: "田中",
  state: "東京都",
};
const user2: American = {
  name: "Johnny",
  state: "CA",
};
// ーーーーーー

// extendsによる型の制約、以下例だとstringと互換性のある型のみしか指定できなくなる
export type Foo<T extends string | number = string> = {
  value: T;
};

const foo1: Foo = {
  value: "number",
};
const foo2: Foo<number> = {
  value: 123,
};
// ーーーーーーーー
// 関数のGenerics
const foo = <T>(arg: T) => {
  return { value: arg };
};

// 引数の型を動的に決めれる
const foo3 = foo<string>("");
const foo4 = foo<number>(123);

// 暗黙的な型解決 引数の型を推論してくれるので、毎回型引数を指定しなくてよくなる
const foo5 = foo("");
const foo6 = foo(123);
// Nullableの可能性があるときは時は型引数を指定する
const a = "";
const foo7 = foo<string | null>(a);

// ーーーーーーーー

// extendsによる型の制約
// 重要なポイントとして、extendsがないと、argがunknowになってしまうため、以下のようなtoUpperCaseが呼べなくなる
const bar = <T extends string>(arg: T) => {
  arg.toUpperCase();
  return { value: arg };
};
