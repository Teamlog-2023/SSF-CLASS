//if문 예제 
let club = "TeamLog";

if(club == "TeamLog") {
	console.log(`동아리가 TeamLog와 일치합니다.`);
}

//if문 실습
let number = 0;

if(number > 0) {
	console.log("양수");
}
if(number < 0) {
	console.log("음수");
}
if(number == 0) {
	console.log("0");
}


//else 예제
let club = "Layer7";

if(club == "TeamLog") {
	console.log(`동아리가 TeamLog와 일치합니다.`);
}
else {
    console.log(`동아리가 TeamLog와 일치하지 않습니다!`);
}


//else 실습
if(number >= 0) {
	console.log("양수");
}
else {
	console.log("음수");
}


//else if 예제
let club = "Layer7";

if(club == "TeamLog") {
	console.log(`동아리가 TeamLog와 일치합니다.`);
}
else if(club == "Layer7"){
    console.log(`동아리가 Layer7이랑 일치합니다.`);
}
else {
    console.log(`TeamLog와 Layer7과 일치하지 않습니다!`);
}

// 시험 점수에 따라서 등급 출력하기 진행
// 90 <= score <= 100 : A등급
// 80 <= score < 90 : B등급
// 70 <= score < 80 : C등급
// 60 <= score < 70 : D등급
// 그 외 : E등급

//else if 실습  
let score = 95;


if(score >= 90){
	console.log("A");
}
else if(score >= 80) {
	console.log("B");
}
else if(score >= 70){
	console.log("C");
}
else if(score >= 60) {
	console.log("D");
}
else {
	console.log("E");
}