const UnionTypes = () => {
  // UnionTypes
  type Foo = {
    a: number;
    b: string;
  };

  type Bar = {
    a: string;
    c: boolean;
  };

  type FooBar = Foo | Bar;

  // FooかBarのどちらかを満たせればOK
  const test: FooBar = {
    a: 1,
    b: "",
    c: true,
  };

  // 型の絞り込み(if文を使うことで、型を絞り込み、aをnumberとして扱えるようになる)
  if ("b" in test) {
    // a をnumberとして使う
    test.a.toFixed;
  } else {
    // b　をstringとして使う
    test.a.toString();
  }
  return;
};

export default UnionTypes;
