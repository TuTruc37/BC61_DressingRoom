import thuDo from "../controllers/main.js";
export default function getData() {
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
