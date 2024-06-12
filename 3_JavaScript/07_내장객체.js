function btn1() {
  console.log("최소값 : ", Math.min(5, 7, -1, -6));
  console.log("최대값 : ", Math.max(4, 7, 6, 8));
  console.log("절대값 : ", Math.abs(-4.56456546));
}
function btn2() {
  const number = 12.124;
  console.log("반올림 :", Math.round(number));
  console.log("버림 : ", Math.floor(number));
  console.log("올림 : ", Math.ceil(number));
}
function btn3() {
  // console.log(Math.random()); //0~1의 숫자가 랜덤으로 출력

  //1~10의 숫자를 랜덤으로 출력
  const result = Math.floor(Math.random() * 10 + 1);
  console.log(result);
}
function btn4() {
  const now = new Date();
  console.log(now);

  console.log("년 : ", now.getFullYear());
  console.log("월 : ", now.getMonth() + 1);
  console.log("일 : ", now.getDate());
  console.log("시 : ", now.getHours());
  console.log("분 : ", now.getMinutes());
  console.log("초 : ", now.getSeconds());
}
function btn5() {
  // 년, 월 , 일 ,시 ,분 ,초
  const a = new Date(2023, 12, 15, 13, 12, 54);
  console.log(a);

  const b = new Date(2024, 11, 15);
  console.log(b);
}
function btn6() {
  setTimeout(() => {
    console.log("3초 후 실행");
  }, 3000);
}
function btn7() {
  let second = 0;
  setInterval(() => {
    console.log(`${++second}초`);
  }, 1000);
}
function btn8() {
  console.log(location);
  console.log(location.href);
  console.log(location.pathname);

  location.reload();
  location.href = "https://naver.com";
}
