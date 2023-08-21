// 무기 정보를 담고 있는 배열
const sword = [
  // 각 강화 별 검의 강화 가격, 강화 성공 확률, 판매 가격 정의
  { upcost: 1000, upsuccess: 0.99, sellcost: 0, img: "1.png", name : "나뭇가지"}, //1강화 검 정보
  { upcost: 1500, upsuccess: 0.95, sellcost: 1000, img: "2.png", name : "목검"}, //2강화 검 정보
  { upcost: 2000, upsuccess: 0.9, sellcost: 1500, img: "3.png", name : "장미칼"}, //3강화 검 정보
  { upcost: 2500, upsuccess: 0.85, sellcost: 2000, img: "4.png", name : "프로스트 블레이드"}, //4강화 검 정보
  { upcost: 3000, upsuccess: 0.8, sellcost: 3000, img: "5.png", name : "트윈 슬래셔"}, //5강화 검 정보
  { upcost: 3500, upsuccess: 0.75, sellcost: 4000, img: "6.png", name : "용의 송곳"}, //6강화 검 정보
  { upcost: 4000, upsuccess: 0.7, sellcost: 5000, img: "7.png", name : "바나나"}, //7강화 검 정보 
  { upcost: 4500, upsuccess: 0.65, sellcost: 10000, img: "8.png", name : "VIP TeamLog Express"}, //8강화 검 정보
  { upcost: 5000, upsuccess: 0.6, sellcost: 20000, img: "9.png", name : "쉐도우 블레이드"}, //9강화 검 정보
  { upcost: 5500, upsuccess: 0.55, sellcost: 30000, img: "10.png", name : "X카츄"}, //10강화 검 정보
  { upcost: 6000, upsuccess: 0.5, sellcost: 40000, img: "11.png", name : "악마의 혀"}, //11강화 검 정보
  { upcost: 6500, upsuccess: 0.45, sellcost: 50000, img: "12.png", name : "무한검"}, //12강화 검 정보
  { upcost: 7000, upsuccess: 0.4, sellcost: 60000, img: "13.png", name : "붉은 망치"}, //13강화 검 정보
  { upcost: 7500, upsuccess: 0.35, sellcost: 80000, img: "14.png", name : "사신의 낫"}, //14강화 검 정보
  { upcost: 8000, upsuccess: 0.3, sellcost: 1000000, img: "15.png", name : "TeamLog검"}, //15강화 검 정보
];

// upcost: 강화에 필요한 비용
// upsuccess: 강화에 성공할 수 있는 확률
// sellcost: 판매해서 얻을 수 있는 금액
// img: 이미지 경로에 쓰일 이미지 이름
// name: 무기 이름

// 무기 도감 정보를 담고 있는 배열
const inventory = [];

// 강화 상태와 소지금 정보를 저장하는 변수
let enhanceLevel = 0; // 현재 무기의 강화 상태 (0강, 1강, ...)
let money = 200000; // 플레이어의 소지금

// 무기 정보를 화면에 업데이트하는 함수
function updateWeaponInfo() {
  const weapon = sword[enhanceLevel]; // 현재 강화 상태에 해당하는 무기 정보 가져오기
  document.getElementById('moneyValue').textContent = `${money.toLocaleString()} 원`; // 화면에 소지금 표시
  document.getElementById('sellCost').textContent = `${weapon.sellcost.toLocaleString()} 원`; // 화면에 판매 가격 표시
  document.getElementById('enhanceCost').textContent = `${weapon.upcost.toLocaleString()} 원`; // 화면에 강화 가격 표시
  document.getElementById('inventoryCount').textContent = `총 ${inventory.length}개`; // 화면에 보유한 무기 개수 표시

  //검 이미지, 이름 , 성공확률 표시할 요소 가져오기
  const innerBox = document.querySelector('.inner_box');
  //이미지 표시할 요소 가져오기
  const equipImg = innerBox.querySelector('img');
  //이름을 표시할 요소 가져오기
  const equipName = innerBox.querySelector('.name');
  //성공확률을 표시할 요소 가져오기
  const equipDetail = innerBox.querySelector('.detail');

  if (inventory.length <= enhanceLevel) { // 도감에 무기가 없으면
    // 보유한 무기 도감에 새로운 무기 추가
    inventory.push(weapon);
    
    // 도감의 무기를 표시
    const itemWrapper = document.querySelector('.item_wrapper'); //무기 아이템을 표시할 dom요소
    const newItem = document.createElement('div'); //새로운 무기 아이템을 추가할 dom요소
    newItem.className = 'item'; //새로운 무기 아이템의 클래스 이름
    newItem.innerHTML = `<img src="./public/images/swords/${weapon.img}" />`; //새로운 무기의 이미지 주소
    itemWrapper.appendChild(newItem); //새로운 무기 아이템을 추가
  }

  equipImg.src = `./public/images/swords/${weapon.img}`; // 무기 이미지 업데이트
  equipName.textContent = `+${enhanceLevel +1} ${weapon.name}`; // 무기 이름 업데이트
  equipDetail.textContent = `성공 확률 `+(weapon.upsuccess * 100).toFixed(0)+`%`; // 무기 강화 성공 확률 업데이트
}

// 초기 무기 정보를 표시
updateWeaponInfo();

// "판매하기" 버튼 클릭 시 호출되는 함수
function sellWeapon() {
  const weapon = sword[enhanceLevel]; // 현재 강화 상태에 해당하는 무기 정보 가져오기
  money += weapon.sellcost; // 무기를 판매하여 소지금에 판매 가격 추가
  // 판매 후 장비 초기화
  enhanceLevel = 0; // 강화 상태 초기화
  updateWeaponInfo(); // 무기 정보 화면 업데이트
}

// "강화하기" 버튼 클릭 시 호출되는 함수
function enhanceWeapon() {
  const weapon = sword[enhanceLevel]; // 현재 강화 상태에 해당하는 무기 정보 가져오기
  if (money >= weapon.upcost) { // 소지금이 강화 비용보다 크거나 같으면 강화 가능
    // 강화 성공 여부 결정
    const isSuccess = 0 < weapon.upsuccess;
    if (isSuccess) { // 강화 성공
      enhanceLevel++; // 강화 상태 업데이트
      money -= weapon.upcost; // 강화 비용 차감
    } else { // 강화 실패
      enhanceLevel = 0; // 강화 상태 초기화
      alert(`강화 실패!`); //강화 실패 알림창
    }
  } else { // 소지금 부족하여 강화 불가능
    alert('소지금이 부족합니다.'); //소지금 부족 알림창
  }
  updateWeaponInfo(); // 무기 정보 화면 업데이트

  // 보유한 무기 개수를 올바르게 업데이트합니다.
  const inventoryCount = inventory.length; //무기 목록 길이 저장
    if (inventory.length <= enhanceLevel) { //현재 무기 목록 길이와 강화단계 비교
      inventoryCount += 1; //무기 목록의 무기 개수 1 추가
    }

  document.getElementById('inventoryCount').textContent = `총 ${inventoryCount}개`; // 화면에 보유한 무기 개수 표시

}

// 초기 무기 정보를 표시
updateWeaponInfo();