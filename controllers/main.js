function getData() {
  var promise = axios({
    url: "./../data/Data.json",
    method: "GET",
  });
  promise
    .then((res) => {
      // console.log(res);
      renderDataPills(res.data.navPills);
      renderDatatabPanes(res.data.tabPanes);
      thuDo();
    })
    .catch((err) => {
      console.log("Error: Không tìm thấy " + err);
    });
}
getData();

function renderDataPills(arr) {
  //Một mảng gồm 7 phần tử navPills
  // console.log(arr);
  let nav_link = document.querySelectorAll(".nav-link");
  for (let i = 0; i < nav_link.length; i++) {
    let id = nav_link[i].id;
    //các nôi dung trong id ở nav link
    // console.log(id);
    let navPills = arr[i];
    document.getElementById(id).innerHTML = navPills.showName;
  }
}
function renderDatatabPanes(arr) {
  console.log(arr);
  let tab_pane = document.querySelectorAll(".tab-pane");
  for (let j = 0; j < tab_pane.length; j++) {
    let content = "";
    let id = tab_pane[j].id;
    console.log(id);
    //từng thành phần trong mảng
    for (let i = 0; i < arr.length; i++) {
      let tabPanes = arr[i];
      if (arr[i].type == id) {
        content += `<div class="clothes p-4 float-left">
               <div class="clothes_img">
                 <img src="${tabPanes.imgSrc_jpg}" alt="${tabPanes.name}" />
               </div>
              <div class="clothes_content">
                 <h4>${tabPanes.name}</h4>
                 <button class="w-100" data-img="${tabPanes.imgSrc_png}" data-type="${tabPanes.type}">Thử đồ</button>
               </div>
            </div>`;
      }
      document.getElementById(id).innerHTML = content;
    }
  }
}

function thuDo() {
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
