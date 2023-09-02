//함수 파트 두 번째 예제입니다.
//매개변수와 반환값이 있는 함수를 설명합니다.
//간단한 사칙연산 함수들을 만들어봅니다.

function plus(a,b) {
    return a + b; // a+b를 반환해보세요.
}
function minus(a,b) {
    return a - b; // a-b를 반환해보세요.
}
function multiply(a,b) {
    return a * b; // a*b를 반환해보세요.
}

function divide(a,b) {
    return a / b; // a/b를 반환해보세요.
}

let plus_num = plus(5,5); // plus 함수를 호출해보세요.
let minus_num = minus(5,5); // minus 함수를 호출해보세요.
let multiply_num = multiply(5,5); // multiple 함수를 호출해보세요.
let divide_num = divide(5,5); // divide 함수를 호출해보세요.

console.log(`plus : ${plus_num}`);
console.log(`minus : ${minus_num}`);
console.log(`multiply : ${multiply_num}`);
console.log(`divide : ${divide_num}`);