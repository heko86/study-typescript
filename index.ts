// namespaceの拡張
interface User {
  name: string;
}

namespace MyNamespace {
  export interface User {
    name: string;
  }
}
namespace MyNamespace {
  export interface User {
    age: number;
  }
}

type Foo = MyNamespace.User["age"];
