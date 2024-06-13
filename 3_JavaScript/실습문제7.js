window.addEventListener("DOMContentLoaded", function () {
  const imgBox = document.querySelectorAll(".imgBox img");
  const spann = this.document.querySelector("#click span");
  let count = 0;
  function clickHandler() {
    const random = [
      Math.floor(Math.random() * 3) + 1,
      Math.floor(Math.random() * 3) + 1,
      Math.floor(Math.random() * 3) + 1,
    ];
    for (let i = 0; i < imgBox.length; i++) {
      imgBox[i].setAttribute("src", `../resources/family${random[i]}.jpg`);
    }
    spann.innerHTML = ++count;
    if (random[0] === random[1] && random[1] == random[2]) {
      cong.innerHTML = "축하합니다 다시하기를 눌러주세요";
      click.setAttribute("disabled", "disabled");
    }
  }
  function resetHandler() {
    for (let i = 0; i < imgBox.length; i++) {
      imgBox[i].setAttribute("src", `../resources/family${i + 1}.jpg`);
    }
    click.removeAttribute("disabled");
    cong.innerHTML = "";
    count = 0;
    spann.innerHTML = "";
  }
  click.addEventListener("click", clickHandler);

  reset.addEventListener("click", resetHandler);
  console.log(imgBox.length);
});
