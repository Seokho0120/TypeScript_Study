// keyof
// interface의 key값들을 유니온 형태로 받을 수 있습니다.

interface User11 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

type UserKey = keyof User11; // 'id' | 'name' | 'age' | 'gender'

const uk: UserKey = 'age';

// Partial<T>
// 모든 프로퍼티를 옵셔널로 바꿔줘서, 일부만 사용이 가능합니다.

interface User12 {
  id: number;
  name: string;
  age: number;
  gender: 'm' | 'f';
}

// 아래의 모습과 같이 모든 프로퍼티를 옵셔널로 바꿔서 일부만 사용가능하고, User12에 없는 프로퍼티를 추가할 수 없습니다.

// interface User12 {
//   id?: number;
//   name?: string;
//   age?: number;
//   gender?: 'm' | 'f';
// }

let admin: Partial<User12> = {
  id: 1,
  name: 'Bob',
  // job: '' // User12에 없는 프로퍼티를 사용할 수 없음
};

// Required<T>
// 모든 프로퍼티를 필수로 바꿔 줍니다.

interface User13 {
  id: number;
  name: string;
  age?: number;
}

let admin2: Required<User13> = {
  id: 1,
  name: 'Bob',
  age: 30, // 필수 프로퍼티가 됨
};

// ReadOnly<T>
// 읽기전용으로 바꿔줍니다. 처음 할당만 가능하고 이후 수정은 불가능합니다.

interface User14 {
  id: number;
  name: string;
  age?: number;
}

let admin3: Readonly<User14> = {
  id: 1,
  name: 'Bob',
};

// admin3.id = 4; // ReadOnly이기 때문에 수정 불가능

// Record<K, T>
// K = Key, T = Type

// // interface 사용 예시
// interface Score10 {
//   '1': 'A' | 'B' | 'C' | 'D';
//   '2': 'A' | 'B' | 'C' | 'D';
//   '3': 'A' | 'B' | 'C' | 'D';
//   '4': 'A' | 'B' | 'C' | 'D';
// }

// const score10: Score10 = {
//   1: 'A',
//   2: 'B',
//   3: 'C',
//   4: 'D',
// };

// // Record 사용 예시
// const score10: Record<'1' | '2' | '3' | '4', 'A' | 'B' | 'C' | 'D'> = {
//   1: 'A',
//   2: 'B',
//   3: 'C',
//   4: 'D',
// };

// Record 사용 리팩토링 예시
type Grade15 = '1' | '2' | '3' | '4';
type Score15 = 'A' | 'B' | 'C' | 'D' | 'F';

const score10: Record<Grade15, Score15> = {
  1: 'A',
  2: 'B',
  3: 'C',
  4: 'D',
};

// Record 사용 예시

interface User15 {
  id: number;
  name: string;
  age: number;
}

function isValid(user: User15) {
  const result: Record<keyof User15, boolean> = {
    id: user.id > 0,
    name: user.name !== '',
    age: user.age > 0,
  };
  return result;
}

// Pick<T, K>
// T 타입에서 K 프로퍼티만 골라서 사용할 수 있습니다.

interface User16 {
  id: number;
  name: string;
  age: number;
  gender: 'M' | 'F';
}

const admin16: Pick<User16, 'id' | 'name'> = {
  id: 0,
  name: 'Bob',
};

// Omit<T, K>
// 특정 프로퍼티를 제외(생략)해서 사용할 수 있습니다.

interface User17 {
  id: number;
  name: string;
  age: number;
  gender: 'M' | 'F';
}

const admin17: Omit<User17, 'age' | 'gender'> = {
  id: 0,
  name: 'Bob',
};

// Exclude<T1, T2>
// T1에서 T2를 제외하고 사용할 수 있습니다.
// T1의 타입들 중엫서 T2와 겹치는 타입을 제외 시킵니다.

type T1 = string | number | boolean;
type T2 = Exclude<T1, number | boolean>;

// NonNullable<Type>
// Null을 제외한 타입을 생성합니다.

type T11 = string | null | undefined | void;
type T22 = NonNullable<T11>;
