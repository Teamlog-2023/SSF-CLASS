//document 출력 해보기
// console.log(document);

//querySelector
// const p = document.querySelector("p");
// console.log(p)

//getElementById
// const p = document.getElementById("p");
// console.log(p);

// 속성 관련 메소드
// let p = document.createElement("p");
// document.body.appendChild(p);

// 복습
// let p = document._____________("p");     // 태그 생성!
// p._________ = "teamlog";                 // 클래스 이름 설정!
// p._________ = "Hello World";             // 내부 문자열 설정! // innerHTML 말고 다른 메소드로 설정하기!
// document.body.___________(p);            // 태그 추가!


// 이벤트 핸들러 예제
// function convert() {
//     let name = document.getElementById("club");
//     name.textContent = "TeamLog";
// }

// function paint() {
//     let name = document.getElementById("club");
//     name.style = "color:yellow";
// }
// function recover() {
//     let name = document.getElementById("club");
//     name.style = "color:red";
// }


// 최종 실습!
// let sword = 0;
// function change() {
//     if (sword == 15) {
//         alert("검을 전부 소유함!");
//     }
//     else {
//         sword_image = document._____________("img");     // 태그 생성
//         sword_image.___ = `./img/${sword += 1}.png`;     // 소스 접근
//         sword_image._____ = "200";                       // 크기 접근
//         document.body.___________(sword_image);          // 태그 추가
//     }
// }