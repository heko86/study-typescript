export type User = {
  name: string;
} & OptionalPersonalData;

const foo = {
  height: 100,
  weight: 48,
};

type PersonalData = {
  height: number;
  weight: number;
  realName: string;
  //   [K in keyof typeof foo]?: number;
};

type OptionalPersonalData = {
  [K in keyof PersonalData]?: PersonalData[K];
  //   height: number;
  //   weight: number;
};
type RequiredPersonalData = {
  //必須にする　-?
  [K in keyof PersonalData]-?: PersonalData[K];
};
const user: User = {
  name: "miya",
  height: 162,
  weight: 50,
};
