// 객체 선언
// TeamLog라는 객체
const sunrin = {
    name : "TeamLog",
    topic : ["network", "server"],
    people : 22,
    print_name : function(str) {
        console.log(str);
    }
};

// 프로퍼티 접근법 1
// 객체.key
console.log(sunrin.name);
console.log(sunrin.topic);
console.log(sunrin.people);

// 프로퍼티 접근법 2 / 이런 것도 있다고 알아두시면 되겠습니다
// console.log(sunrin["name"]);
// console.log(sunrin['topic']);
// console.log(sunrin["people"]);

// 프로퍼티 삭제
delete sunrin.name;
console.log(sunrin);