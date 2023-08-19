// 프로퍼티 예제
// const game = {
//     fps : "valorant",
//     rpg : "maplestory",
//     aos : "LeagueOfLegend"
// };

// 프로퍼티 선택 예제
// document.write(`${game.fps}<br>`);
// document.write(`${game["rpg"]}<br>`);
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
var press = document.querySelector("html");
press.addEventListener("keypress", type);
function type(e) {
    if (e.key == "a") {
        document.getElementById("사진").src = "image/a.jpg";
    }
    else if (e.key == "b") {
        document.getElementById("사진").src = "image/b.jpg";
    }
    else if (e.key == "c") {
        document.getElementById("사진").src = "image/c.jpg";
    }
    else if (e.key == "d") {
        document.getElementById("사진").src = "image/d.jpg";
    }
    else if (e.key == "e") {
        document.getElementById("사진").src = "image/e.jpg";
    }
    else if (e.key == "f") {
        document.getElementById("사진").src = "image/f.jpg";
    }
    else if (e.key == "g") {
        document.getElementById("사진").src = "image/g.jpg";
    }
    else if (e.key == "h") {
        document.getElementById("사진").src = "image/h.jpg";
    }
    else if (e.key == "i") {
        document.getElementById("사진").src = "image/i.jpg";
    }
    else if (e.key == "j") {
        document.getElementById("사진").src = "image/j.jpg";
    }
    else if (e.key == "k") {
        document.getElementById("사진").src = "image/k.jpg";
    }
    else if (e.key == "l") {
        document.getElementById("사진").src = "image/l.jpg";
    }
    else if (e.key == "m") {
        document.getElementById("사진").src = "image/m.jpg";
    }
    else if (e.key == "n") {
        document.getElementById("사진").src = "image/n.jpg";
    }
    else if (e.key == "o") {
        document.getElementById("사진").src = "image/o.jpg";
    }
    else if (e.key == "p") {
        document.getElementById("사진").src = "image/p.jpg";
    }
    else if (e.key == "q") {
        document.getElementById("사진").src = "image/q.jpg";
    }
    else if (e.key == "r") {
        document.getElementById("사진").src = "image/r.jpg";
    }
    else if (e.key == "s") {
        document.getElementById("사진").src = "image/s.jpg";
    }
    else if (e.key == "t") {
        document.getElementById("사진").src = "image/t.jpg";
    }
    else if (e.key == "u") {
        document.getElementById("사진").src = "image/u.jpg";
    }
    else if (e.key == "v") {
        document.getElementById("사진").src = "image/v.jpg";
    }
    else if (e.key == "w") {
        document.getElementById("사진").src = "image/w.jpg";
    }
    else if (e.key == "x") {
        document.getElementById("사진").src = "image/x.jpg";
    }
    else if (e.key == "y") {
        document.getElementById("사진").src = "image/y.jpg";
    }
    else if (e.key == "z") {
        document.getElementById("사진").src = "image/z.jpg";
    }
    else {
        document.getElementById("사진").src = "image/no_image.jpg";
    }
}