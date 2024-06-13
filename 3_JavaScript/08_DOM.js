function btn1() {
  console.log(document.head);
  console.log(document.body);

  // 동일한 태그가 여러 개 존재할 수 있기 때문에 배열로 리턴
  const div = document.getElementsByTagName("div");
  console.log(div);
  console.log(div[0]);
  console.log(div[1]);
}

function btn2() {
  const id = document.getElementById("testId1");
  console.log(id);
}
function btn3() {
  // 동일한 클래스 속성 값을 갖는 태그가 여러 개일 수가 있어서 배열로 리턴
  const classs = document.getElementsByClassName("testClass");
  console.log(classs);
}
function btn4() {
  // 동일한 name 속성 값을 갖는 태그가 여러개 존재할 수 있기 때문에 배열로 리턴
  const naMe = document.getElementsByName("testName");
  console.log(naMe);
}
function btn5() {
  let div = document.querySelector("#testId2");
  console.log(div);
  div = document.querySelectorAll("div");
  console.log(div);
}
function btn6() {
  const div = document.querySelectorAll(".testClass");
  div[0].textContent = "<span>안녕하세요~</span>";
  div[1].innerHTML = "<span>안녕하세요~</span>";
  console.log(div[1].innerHTML);
}
function btn7() {
  const test7 = document.querySelector("#testId2");
  test7.setAttribute("data-test", "테스트");
  test7.setAttribute("data-test", "테스트2");
  console.log(test7.getAttribute("data-test"));
}
function btn8() {
  const div = document.querySelector("#testId2");
  div.style.color = "orange";
}

const div = document.querySelector("#testId2");

function btn9() {
  div.classList.add("black");
}
function btn10() {
  div.classList.remove("black");
}
function btn11() {
  const check = div.classList.contains("black");
  if (check) {
    div.classList.remove("black");
  } else {
    div.classList.add("black");
  }
}
function btn12() {
  div.classList.toggle("black");
}
//<p>Lorem Ipsum</p>
function btn13() {
  const div = document.querySelector("#testId3");
  const p = document.createElement("p");
  p.innerHTML = "Lorem Ipsum";
  //div에서 만든 태그 추가
  div.appendChild(p);
}
function btn14() {
  const div = document.querySelector("#testId3");
  const p = document.querySelector("p");

  //div.removeChild(p);
  console.log(p.parentNode);
  p.parentNode.removeChild(p);
}
