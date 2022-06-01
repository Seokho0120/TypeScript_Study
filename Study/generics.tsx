// Generic
// Class, 함수, interface를 다양한 타입으로 재사용할 수 있습니다.
// 선언할때는 타입 파라미터만 정해주고, 생성하는 시점에 사용하는 타입을 결정합니다.

function gerSize<T>(ary: T[]): number {
  // <T> : 타입 파라미터, <T>는 어떤 타입을 전달받아서 이 함수에서 사용할 수 있게 합니다<div className=""></div>
  return ary.length;
}

// function gerSize(ary: number[] | string[] | boolean[] | object[]): number {
//   // 이렇게 비효율적으로 적어줘야할때 쓸 수 있는게 Generic 입니다.
//   return ary.length;
// }

const ary1 = [1, 2, 3];
gerSize<number | string>(ary1); // 여기에서 타입을 정해줍니다.

const ary2 = ['1', '2', '3'];
gerSize<string>(ary2);

const ary3 = [false, true, true];
gerSize(ary3); // 3

const ary4 = [{}, {}, { name: 'Tim' }];
gerSize(ary4); // 3

// interface에서의 사용
// generic을 활용해서 하나의 interface를 선언해서 각기 다른 모습의 객체를 사용할 수 있습니다.

interface Mobiles<T> {
  name: string;
  price: number;
  option: T;
}

// const m1: Mobiles<object> = { // 객체로 이루어져 있기 때문에 <object>로 설정
//   name: 's21',
//   price: 1000,
//   option: {
//     color: 'red',
//     coupon: false,
//   },
// };

const m1: Mobiles<{ color: string; coupon: boolean }> = {
  // 객체의 모습이 정해져있다면 하나씩 설정도 가능
  name: 's21',
  price: 1000,
  option: {
    color: 'red',
    coupon: false,
  },
};

const m2: Mobiles<string> = {
  name: 's20',
  price: 1000,
  option: 'good',
};

//

interface User10 {
  name: string;
  age: number;
}

interface Car10 {
  name: string;
  color: string;
}

interface Book10 {
  price: number;
}

const user10: User10 = { name: 'a', age: 10 };
const car10: Car10 = { name: 'BMW', color: 'red' };
const book10: Book10 = { price: 10 };

function showName<T extends { name: string }>(data: T): string {
  // name이 없거나 name이 string이 아니라면 에러 뜸
  return data.name;
}

showName(user10);
showName(car10);
// showName(book10); // name
