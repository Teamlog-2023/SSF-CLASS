// 배열 메소드, 프로퍼티
let numbers = [4,3,2,1,5];

console.log(numbers);                            // 배열 보기
console.log(`length : ${numbers.length}`);       // 길이 보기

numbers.push(6);                                 // 배열에 6 추가
console.log(numbers);                            // 배열 보기
console.log(`length : ${numbers.length}`);       // 길이 보기

numbers.sort();                                  // 배열을 오름차순으로 정렬
console.log(numbers);                            // 배열 보기

numbers.reverse();                               // 배열 뒤집기
console.log(numbers);                            // 배열 보기


// Math 메소드

// toFixed() : () 안의 수만큼 소수점을 고정
let pi = 3.1415926535;
console.log(pi.toFixed(2));      // 둘째 자리까지만 출력

//random() : 0부터 1 사이의 수를 무작위로 가져옴
let number = Math.random();
console.log(number);

// Math 메소드 실습
let number = Math.random() * 10; // 무작위 수 생성
console.log(number.toFixed(0));  // 소수점 없도록 소수점 고정