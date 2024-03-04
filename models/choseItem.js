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
