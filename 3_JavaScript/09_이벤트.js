//DOMcontentLoaded : DOM 구조가 로드되고 실행!

window.addEventListener("DOMContentLoaded", function () {
  const h1 = document.querySelector("h1"); //html의 h1 태그를 가져옴
  /*h1.onclick = function () {
      h1.style.backgroundColor = "purple";
    };  => 클릭 시 기능 작동*/
  /*h1.onmouseenter = function () {
      h1.style.backgroundColor = "yellow";
    }; => 해당 영역에 마우스를 갖다대면 작동*/
  h1.onmouseleave = function () {
    h1.style.backgroundColor = "red";
  }; // 해당 영역을 벗어나면 작동(우선적으로 해당 영역에 마우스가 한 번 가야함)
  /*h1.addEventListener(이벤트 명, 이벤트 객체(함수를 주로 사용)) {}
      addEventListener만 기억해도 무방하다.*/
  h1.addEventListener("click", function () {
    h1.style.backgroundColor = "white";
  });
  /*const img = document.querySelectorAll(".container img");
  for (const item of img) {
    item.addEventListener("click", function (e) {
      console.log(e.currentTarget);
      e.currentTarget.style.display = "none";
    });
  }*/

  const container = document.querySelector(".container");

  function removeHandler(e) {
    if (e.target !== e.currentTarget) {
      e.target.style.display = "none";
    }
  }

  /* container.addEventListener("click", function (e) {
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target !== e.currentTarget) {
      e.target.style.display = "none";
    }
  });*/
  container.addEventListener("click", removeHandler);
});
