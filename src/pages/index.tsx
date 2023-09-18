// Intersection Types
// 複数の型を1つにまとめることができるもの

type Foo = {
  a: number;
  b: string;
};
type Bar = {
  c: boolean;
};

type FooBar = Foo & Bar;

const Test: FooBar = {
  a: 1,
  b: "",
  c: true,
};

export default function Home() {
  return <div>test</div>;
}
