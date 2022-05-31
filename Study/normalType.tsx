let car: string = 'bmw';

let age: number = 30;
let isAdult: boolean = true;
let a: number[] = [1, 2, 3];
let a2: Array<number> = [1, 2, 3];

let week1: string[] = ['mon', 'tue', 'wed'];
let week2: Array<string> = ['mon', 'tue', 'wed'];

// 튜플(Tuple)

let b: [string, number];

b = ['q', 1];
// b= [1, 'q']

b[0].toLocaleLowerCase();
// b[1].toLocaleLowerCase()

// void : 함수에서 아무것도 반환하지 않을때 사용
function sayHello(): void {
  console.log('hello');
}

// never : 에러 반환, 영원히 끝나지 않는 함수
function showError(): never {
  throw new Error();
}

function infLoop(): never {
  while (true) {
    // do something..
  }
}

// enum : 같은 값들끼리 묶었다~

enum Os {
  Window = 'win',
  Ios = 'ios',
  Android = 'and',
}

// null, nudefined

let aa: null = null;
let bb: undefined = undefined;
