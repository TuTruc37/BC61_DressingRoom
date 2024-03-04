import getData from "./../utils/callData.js";

getData();
export default function thuDo() {
  //console.log("Day la thudo arr", arr);
  let bikinitopDiv = document.querySelector(".contain .bikinitop");
  let bikinibottomDiv = document.querySelector(".contain .bikinibottom");
  let feetDiv = document.querySelector(".contain .feet");
  let handbagDiv = document.querySelector(".contain .handbag");
  let necklaceDiv = document.querySelector(".contain .necklace");
  let hairstyleDiv = document.querySelector(".contain .hairstyle");
  let backgroundDiv = document.querySelector(".contain .background");
  document.querySelector(".contain .body").style.zIndex = 1;
  bikinitopDiv.style.zIndex = 5;
  let btns = document.querySelectorAll(".clothes_content button");
  btns.forEach((btn) => {
    btn.addEventListener("click", (e) => {
      let imgSrc = e.target.dataset.img;
      let type = e.target.dataset.type;
      let element;
      switch (type) {
        case "topclothes":
          element = bikinitopDiv;

          break;
        case "botclothes":
          element = bikinibottomDiv;
          break;
        case "shoes":
          element = feetDiv;
          break;
        case "handbags":
          element = handbagDiv;
          break;
        case "necklaces":
          element = necklaceDiv;
          break;
        case "hairstyle":
          element = hairstyleDiv;
          break;
        case "background":
          element = backgroundDiv;
          break;
      }
      // console.log(imgSrc, type, 'Đay là:')
      dressing(imgSrc, element);
    });
  });
}
function dressing(imgSrc, element) {
  console.log(element);
  element.style.backgroundImage = `url(${imgSrc})`;
  element.style.backgroundSize = "contain";
  element.style.zIndex = "3";
}
