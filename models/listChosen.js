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
