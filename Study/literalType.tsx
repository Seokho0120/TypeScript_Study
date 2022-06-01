// Literal Types

const userName1 = 'Bob'; // 문자형 리터럴 타입 -> 정해진 값을 가진 것, 이미 'Bob'이라고 선언했기 때문에 Bob이라고 나옴
let userName2: string | number = 'Tom';

userName2 = 3;

type Job = 'police' | 'developer' | 'teacher';

interface Users {
  name: string;
  job: Job;
}

const users: Users = {
  name: 'Bob',
  job: 'teacher',
};

interface HighSchoolStudent {
  name: string;
  grade: 1 | 2 | 3; // 유니온 타입 -> |
}

// Union Types (유니온 타입) -> 1 | 2 세로줄
// 식별 가능한 유니온 타입 : 동일한 속성을 다르게 해서 구분할 수 있는 것
// or을 의미함.

interface Car {
  name: 'car';
  color: string;
  start(): void;
}

interface Mobile {
  name: 'mobile';
  color: string;
  call(): void;
}

function getGift(gift: Car | Mobile) {
  console.log(gift.color); // 둘다 color가 있기 때문에 문제 없음
  // gift.start(); // Car에만 있기 때문에 문제가 됨

  if (gift.name === 'car') {
    gift.start();
  } else {
    gift.call();
  }
}

// Intersection Types (교차 타입)
// 여러타입을 합쳐서 사용합니다. and를 의미함.
// 여러개의 타입을 하나로 합쳐주는 역할을 합니다. 그래서 필요한 모든 기능을 가진 하나의 타입이 만들어집니다.

interface Cars5 {
  naming: string;
  starts(): void;
}

interface Toy5 {
  naming: string;
  color: string;
  price: number;
}

const toyAndCar: Toy5 & Cars5 = {
  naming: '타요',
  starts() {},
  color: 'red',
  price: 1000,
};
