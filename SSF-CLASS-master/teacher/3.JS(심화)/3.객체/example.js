// 프로퍼티 예제
// const game = {
//     fps : "valorant",
//     rpg : "maplestory",
//     aos : "LeagueOfLegend"
// };

// 프로퍼티 선택 예제
// console.log(game.fps);
// console.log(game["rpg"]);
// 프로퍼티 삭제 예제
// console.log(`삭제 전 : ${game}`)
// delete game.aos;
// console.log(`삭제 후 : ${game}`);

// 메소드 예제
// const adventurer = {
//     hp : 500,
//     mp : 300,
//     info : function info() {
//         document.write(`hp : ${adventurer.hp}, mp : ${adventurer.mp}`);
//     },
//     inventory : ["lighter", "water", "sword"],
//     introduction : "짱짱 쎈 모험가"
// }

// adventurer.info();


// 배열 예제

// push 예제
// console.log(`push 전 : ${adventurer.inventory}`);
// adventurer.inventory.push("map");
// console.log(`push 후 : ${adventurer.inventory}`);

// sort 예제
// console.log(`sort 전 : ${adventurer.inventory}`);
// adventurer.inventory.sort();
// console.log(`sort 후 : ${adventurer.inventory}`);

// reverse 예제
// console.log(`reverse 전 : ${adventurer.inventory}`);
// adventurer.inventory.reverse();
// console.log(`reverse 후 : ${adventurer.inventory}`);

// length 예제
// console.log(`모험가의 인벤토리에 들어있는 아이템 개수 : ${adventurer.inventory.length}`);


// 문자열 예제

// length 예제
// console.log(`인사말의 길이 : ${adventurer.introduction.length}`);


// Math 객체

// toFixed 예제
// let height = 169.9;
// console.log(`${height}였던 키가`);
// height = height.toFixed(0);
// console.log(`${height}으로!`);

// random 예제
// let luck = Math.random();
// console.log(`오늘의 운 점수는? : ${(luck * 100).toFixed(2)}`);



// DOM

// querySelector
// const p = document.querySelector("html");
// console.log(p)

// getElementById
// const p = document.getElementById("1짱");
// console.log(p)

// 속성 관련 메소드, 프로퍼티
// let p = document.createElement("p");
// p.className = "조무래기";
// p.innerHTML = "나는 조무래기";
// document.body.appendChild(p);

// Event Handler
function change() {
    var arr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var random_image = (Math.random()*100).toFixed(0);
    document.getElementById("사진").src = `image/${arr[random_image % 26]}.jpg`;
    // document.getElementById("사진").src = `image/${arr[0]}.jpg`
    // console.log(arr[0]);
}