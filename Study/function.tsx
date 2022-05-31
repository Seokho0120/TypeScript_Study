// 함수 정의하는 방법
// interface와 함께 많이 사용함

function add2(num1: number, num2: number): number {
  return num1 + num2;
  // console.log(num1 + num2); -> void 라고 입력해주면 됨
}

function isAdult2(age: number): boolean {
  return age > 19;
}

function hello(name?: string) {
  // name은 있어도 되고, 없어도 되는 '선택적 매개변수' 라고 부름
  return `Hello, ${name || 'world'}`;
}

function hello2(name = 'world') {
  return `Hello, ${name}`;
}

const result = hello();
const result2 = hello('Sam');
// const result3 = hello(123);

function helloo(name: string, age?: number): string {
  // age은 있어도 되고, 없어도 되는 '선택적 매개변수' 라고 부름
  // name은 꼭 있어야하는 '필수 매개변수' 라고 부름
  // 선택적 매개변수가 필수 매개변수보다 앞에 오면 에러가 발생함

  if (age !== undefined) {
    return `Hello, ${name}. You are ${age}.`;
  } else {
    return `Hello, ${name}`;
  }
}

console.log(helloo('Sam'));
console.log(helloo('Sam', 30));

function add3(...nums: number[]) {
  return nums.reduce((result, num) => result + num, 0);
}

add3(1, 2, 3); // 6
add3(1, 2, 3, 4, 5, 6, 7, 8, 9, 10); // 55

interface Users {
  name: string;
}

const Tom: Users = { name: 'Tom' };

function showName(this: Users, age: number, gender: 'm' | 'f') {
  console.log(this.name, age, gender);
}

const bbb = showName.bind(Tom);
bbb(30, 'm');

interface Users2 {
  name: string;
  age: number;
}

// 함수 오버로딩
// 동일한 함수지만 매개변수의 타입 혹은 개수에 따라 다른 방식으로 동작해야 한다면 오버로딩을 사용할 수 있습니다.

function join(name: string, age: number): Users2;
function join(name: string, age: string): string;
function join(name: string, age: number | string): Users2 | string {
  if (typeof age === 'number') {
    return {
      name,
      age,
    };
  } else {
    return '나이는 숫자로 입력해주세요!';
  }
}

const sam: Users2 = join('Sam', 30);
const jane: string = join('jane', '30');
