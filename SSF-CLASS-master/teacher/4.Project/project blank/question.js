const sword = [
  { upcost: 1000, upsuccess: 0.99, sellcost: 0, img: "1.png", name : "나뭇가지"}, //다른 검의 정보들을 참고해 빈칸을 채워보세요!
  { upcost: 1500, upsuccess: 0.95, sellcost: 1000, img: "2.png", name : "목검"}, 
  { upcost: 2000, upsuccess: ______, sellcost: 1500, img: "3.png", name : "장미칼"}, 
  { upcost: 2500, upsuccess: 0.85, sellcost: 2000, img: "4.png", name : "프로스트 블레이드"}, 
  { upcost: 3000, upsuccess: 0.8, sellcost: ______, img: "5.png", name : "트윈 슬래셔"}, 
  { upcost: ______, upsuccess: 0.75, sellcost: 4000, img: "6.png", name : "용의 송곳"}, 
	{ upcost: 4000, upsuccess: 0.7, sellcost: 5000, img: "7.png", name : "바나나"},
  { upcost: 4500, upsuccess: 0.65, sellcost: 10000, img: "8.png", name : "VIP TeamLog Express"}, 
  { upcost: 5000, upsuccess: 0.6, sellcost: ______, img: "9.png", name : "쉐도우 블레이드"}, 
  { upcost: 5500, upsuccess: 0.55, sellcost: 30000, img: "10.png", name : "X카츄"}, 
  { upcost: ______, upsuccess: 0.5, sellcost: 40000, img: "11.png", name : "악마의 혀"}, 
  { upcost: 6500, upsuccess: 0.45, sellcost: 50000, img: "12.png", name : "무한검"},
  { upcost: 7000, upsuccess: ______, sellcost: 60000, img: "13.png", name : "붉은 망치"}, 
  { upcost: 7500, upsuccess: 0.35, sellcost: 80000, img: "14.png", name : "사신의 낫"}, 
  { upcost: 8000, upsuccess: 0.3, sellcost: 1000000, img: "15.png", name : "TeamLog검"}, 
];

const inventory = ______; //빈 배열은 어떻게 선언할까요?

______ enhanceLevel = 0; //값이 변할 수 있는 변수는 어떻게 선언할까요?
______ money = 200000;

function updateWeaponInfo() { 
  const weapon = sword[______]; //sword 배열의 인덱스를 어떤 값으로 해야 할까요?
  document.getElementById('______').textContent = `${money} 원`; //원하는 값을 나타내기 위해 HTML 문서에서 각각 어떤 id를 가진 요소를 불러와야 할까요?
  document.getElementById('______').textContent = `${weapon.sellcost} 원`;
  document.getElementById('______').textContent = `${weapon.upcost} 원`; 
  document.getElementById('______').textContent = `총 ${inventory.length}개`;

  const innerBox = document.______('.inner_box'); //HTML 문서에서 속성을 참조해 요소를 가져오려면 어떻게 할까요?
  const equipImg = innerBox.______('img');
  const equipName = innerBox.______('.name');
  const equipDetail = innerBox.______('______'); //HTML 문서에서 성공확률을 표시할 요소는 무엇일까요?

  if (inventory.length <= enhanceLevel) { 
    inventory.______(weapon); //배열에 값을 추가하려면 어떻게 할끼요?

    const itemWrapper = document.querySelector('.item_wrapper'); 
    const newItem = document.______('div'); //새로운 요소를 추가하려면 어떻게 하나요?
    newItem.className = 'item';

    newItem.innerHTML = `<img src="./public/images/swords/${______}" />`; //검의 이미지 경로를 설정하려면 어떻게 할까요?
    itemWrapper.______(newItem); //하위 요소로 추가하려면 어떻게 하나요?
  }

  equipImg.src = `./public/images/swords/${______}`; //이미지 경로에 어떤 변수가 들어갈까요?
  equipName.textContent = `+${enhanceLevel +1} ${______}`; //무기 이름에 어떤 변수가 들어갈까요?
  equipDetail.______ = `성공 확률 `+(weapon.upsuccess * 100).______+`%`; //요소의 무엇을 정의하는 걸까요?
}

updateWeaponInfo();

function sellWeapon() {
  const weapon = sword[enhanceLevel];
  money += ______; //소지금에 어떤 값을 더해야 할까요?
  ______ = 0; //무기를 판매하면 어떤 값을 초기화해야 할까요?
  updateWeaponInfo();
}

function enhanceWeapon() {
  const weapon = sword[enhanceLevel];
  if (money >= weapon.upcost) {
    const isSuccess = Math.random() < _______; //생성된 강화 확률과 어떤 값을 비교해야 할까요?
    if (______) {  //조건문의 인수로 어떤 값이 들어가야 할까요?
      enhanceLevel += 1;
      money -= __________; //소지금에 어떤 값만큼 빼야 할까요? 
    } else { 
      enhanceLevel = 0; 
      ______(`강화 실패!`); //알림창을 띄우려면 어떤 메소드를 써야 할까요?
    }
  } else {
    ______('소지금이 부족합니다.');
  }
  ______(); //변경된 정보들을 업데이트 하려면 어떤 함수를 호출해야 할까요?

  const inventoryCount = inventory.length;
  if (inventory.length <= ______) { //무기 목록의 길이와 어떤 값을 비교해야 할까요?
    inventoryCount += 1;
  }

  document.getElementById('inventoryCount').textContent = `총 ${______}개`; //무기 도감의 무기 개수는 어떤 값으로 나타낼까요?
}

updateWeaponInfo();
