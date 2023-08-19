// console.log(document);

// const p = document.querySelector('p');
// console.log(p)

// const p = document.getElementById('p');
// console.log(p)

// 속성 관련 메소드
// let p = document.createElement("p");
// document.body.appendChild(p);

// 속성 관련 프로퍼티
// let p = document.createElement("p");
// p.className = "teamlog";
// p.innerHTML = "Hello World";
// document.body.appendChild(p);

var count = 1;
function club() {
    let club = document.querySelector('h1');
    if (count == 1) {
        club.innerText = "Layer7";
    }
    else if (count == 2) {
        club.innerText = "Emotion";
    }
    else if (count == 3) {
        club.innerText = "Unifox";
    }
    else if (count == 4) {
        club.innerText = "Nefus";
    }
    else {
        club.innerText = "Team Log";
    }
    if (count != 5) {
        count += 1;
    }
    else {
        count = 0;
    }
}