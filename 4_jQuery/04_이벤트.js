//1. 이벤트 연결
// one
$("#area1").one("click", () => {
  alert("처음이자 마지막으로 이벤트 핸들러 실행");
});
/* on
// $("#area2").on("mouseenter", (event) => {
//   $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
// });
// 마우스가 내려갈 떄(mouseleave)
// -> 배경 색상 : beige, 텍스트 : 마우스가 내려감
// $("#area2").on("mouseleave", (event) => {
//   $(event.target).css("background-color", "beige").text("마우스가 내려감");
// });
$("#area2").on("mouseenter mouseleave", (event) => {
  if (event.type === "mouseenter") {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  } else if (event.type === "mouseleave") {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  }
});
$("#area2").on("click", (event) => {
  $(event.target)
    .css("background-color", "white")
    .text("")
    .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
});
*/
$("#area2").on({
  mouseenter: (event) => {
    $(event.target).css("background-color", "hotpink").text("마우스가 올라감");
  },
  mouseleave: (event) => {
    $(event.target).css("background-color", "beige").text("마우스가 내려감");
  },
  click: (event) => {
    $(event.target)
      .css("background-color", "white")
      .text("")
      .off("mouseenter mouseleave"); // mouseenter, mouseleave 이벤트 제거
  },
});
// 2. 키보드 이벤트
// keydown, keypress, keyup
$("#textarea1").on({
  keydown: (e) => {
    console.log(`keydown - e.key: ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keypress: (e) => {
    console.log(`keypress - e.key: ${e.key}, e.keyCode : ${e.keyCode}`);
  },
  keyup: (e) => {
    console.log(`keyup - e.key: ${e.key}, e.keyCode : ${e.keyCode}`);
  },
});
$("#textarea2").keyup((e) => {
  let target = $(e.target);
  let length = target.val().length;
  let maxLength = parseInt($("#maxLength").text());
  if (length > maxLength) {
    target.val(target.val().substr(0, maxLength));
  } else {
    $("#counter").text(length);
  }
});

$("#userId").keyup((e) => {
  let id = $(e.target).val();
  id = e.target.value;
  const regExp = /^[a-z][a-z0-9]{3,11}$/;
  if (regExp.test(id)) {
    $("#idCheck").text("사용 가능한 아이디입니다.");
  } else if (id === "") {
    $("#idCheck").text("");
  } else {
    $("#idCheck").text("사용 불가한 아이디입니다.");
  }
});

// 3. trigger() 메서드
$("#area3").click(() => {
  let counter = $("#counter2");
  let current = parseInt(counter.text());
  counter.text(++current);
});
$("#btn").click(() => {
  $("#area3").trigger(counter);
});
