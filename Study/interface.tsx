// interface
// property를 정의해서 객체를 표현하고자 할때는 interface를 사용합니다.

// let user:object;

// user ={
//     name: 'xx',
//     age: 30
// }

type Score = 'a' | 'b' | 'c' | 'd'; // type을 미리 지정해놓을 수 있음

interface User {
  name: string;
  age: number;
  gender?: string; // 만약 gender가 있다면 무조건 string or 아예 gender가 없거나
  readonly birthYear: number; // 읽기 전용 속성이라 수정할 수 없음
  [grade: number]: Score; // key: number, value: string
}

let user: User = {
  name: 'xx',
  age: 30,
  birthYear: 2000,
  1: 'a',
  2: 'b',
};

user.age = 10;
user.gender = 'male';
// user.birthYear = 1900; // readonly 읽기 전용 속성

console.log(user.age);

// interface로 함수 정의하기

interface Add {
  (num1: number, num2: number): number; // number 반환값
}

const add: Add = function (x, y) {
  return x + y;
};

add(10, 20);

interface IsAdult {
  (age: number): boolean;
}

const A: IsAdult = (age) => {
  return age > 19;
};

A(33); // true

// interface로 class 정의하기
// implements

interface Car {
  color: string;
  wheels: number;
  start(): void;
}

class Bmw implements Car {
  // color = 'red';
  color;
  wheels = 4;
  constructor(c: string) {
    this.color = c;
  }
  start() {
    console.log('go..');
  }
}

const B = new Bmw('green');
console.log(b);
B.start();

// interface는 extends (확장)이 가능합니다. -> 확장하면 이전꺼도 전부 작성해야함

interface Benz extends Car {
  door: number;
  stop(): void;
}

const benz: Benz = {
  door: 5,
  stop() {
    console.log('stop');
  },
  color: 'red',
  wheels: 5,
  start() {
    console.log('start');
  },
};

// extends를 여러개 할 수 있습니다.

interface Cars {
  color: string;
  wheels: number;
  start(): void;
}

interface Toy {
  name: string;
}

interface ToyCar extends Car, Toy {
  price: number;
}
