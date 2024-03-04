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
      thuDo(res.data.tabPanes);
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
                 <button class="w-100">Thử đồ</button>
               </div>
            </div>`;
      }
      document.getElementById(id).innerHTML = content;
    }
  }
}

function thuDo(arr) {
  console.log(arr);
  let bikinitopDiv = document.querySelector(".contain .bikinitop");
  let bikinibottomDiv = document.querySelector(".contain .bikinibottom");
  let feetDiv = document.querySelector(".contain .feet");
  let handbagDiv = document.querySelector(".contain .handbag");
  let necklaceDiv = document.querySelector(".contain .necklace");
  let hairstyleDiv = document.querySelector(".contain .hairstyle");
  let backgroundDiv = document.querySelector(".contain .background");
  document.querySelector(".contain .body").style.zIndex = 1;
  let currentTab = "bikinitop";
  for (var i = 0; i < arr.length; i++) {
    let getImg = arr[i].imgSrc_png;
    console.log(getImg);
    let buttons = document.querySelectorAll(".clothes_content button");
    buttons[i].addEventListener("click", function () {
      if (currentTab === "bikinitop") {
        bikinitopDiv.style.backgroundImage = `url('${getImg}')`;
        bikinitopDiv.style.backgroundSize = "contain";
        bikinitopDiv.style.zIndex = "3";
        bikinitopDiv.style.display = "block";
        currentTab = "bikinibottom";
      } else if (currentTab === "bikinibottom") {
        bikinibottomDiv.style.backgroundImage = `url('${getImg}')`;
        bikinibottomDiv.style.backgroundSize = "contain";
        bikinibottomDiv.style.zIndex = "2";
        bikinibottomDiv.style.display = "block";
        currentTab = "feet";
      } else if (currentTab === "feet") {
        feetDiv.style.backgroundImage = `url('${getImg}')`;
        feetDiv.style.backgroundSize = "contain";
        feetDiv.style.zIndex = "1";
        feetDiv.style.display = "block";
        currentTab = "handbag";
      } else if (currentTab === "handbag") {
        handbagDiv.style.backgroundImage = `url('${getImg}')`;
        handbagDiv.style.backgroundSize = "contain";
        handbagDiv.style.zIndex = "3";
        handbagDiv.style.display = "block";
        currentTab = "necklace";
      } else if (currentTab === "necklace") {
        necklaceDiv.style.backgroundImage = `url('${getImg}')`;
        necklaceDiv.style.backgroundSize = "contain";
        necklaceDiv.style.zIndex = "4";
        necklaceDiv.style.display = "block";
        currentTab = "hairstyle";
      } else if (currentTab === "hairstyle") {
        hairstyleDiv.style.backgroundImage = `url('${getImg}')`;
        hairstyleDiv.style.backgroundSize = "auto";
        hairstyleDiv.style.zIndex = "3";
        hairstyleDiv.style.display = "block";
        hairstyleDiv.style.backgroundRepeat = "no-repeat";
        currentTab = "background";
      } else if (currentTab === "background") {
        backgroundDiv.style.backgroundImage = `url('${getImg}')`;
        backgroundDiv.style.backgroundSize = "contain";
        backgroundDiv.style.zIndex = "0";
        backgroundDiv.style.display = "block";
        currentTab = "bikinitop";
      }
    });
  }
}
