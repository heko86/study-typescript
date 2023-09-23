// typeof、keyofのユースケース
export const obj1 = {
  foo: "foo",
  bar: "bar",
};

const obj2: typeof obj1 = {
  foo: "aaa",
  bar: "bbb",
};

export function double(x: number | string) {
  if (typeof x === "string") {
    return Number(x) * 2;
  }
  return x * 2;
}

export const Obj = {
  foo: "foo",
  111: "bar",
};
function test(x: keyof typeof Obj) {
  return;
}

type Key = keyof typeof Obj;
