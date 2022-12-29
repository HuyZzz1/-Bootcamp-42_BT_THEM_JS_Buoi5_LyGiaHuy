//BT1: Viết chương trình nhập vào thông tin của 1 cá nhân (Họ tên, tổng thu nhập năm, số người phụ thuộc). Tính và xuất thuế thu nhập cá nhân phải trả theo quy định
function calcIncomeTaxes(totalIncome, amount) {
  return totalIncome - 4e6 - amount * 16e5;
}
document.getElementById("ex1").onclick = function () {
  //Input: Tên, tổng thu nhập năm, số  người phụ thuộc
  let name = document.getElementById("name").value;
  let totalIncome = +document.getElementById("total_income").value;
  let amount = +document.getElementById("amount").value;

  //Output: Tính và xuất thuế thu nhập cá nhân
  let tax = 0;
  let incomeTaxes = calcIncomeTaxes(totalIncome, amount);

  if (totalIncome <= 0) {
    return (document.getElementById(
      "message"
    ).innerHTML = `Vui lòng nhập dữ liệu`);
  }

  if (incomeTaxes <= 6e6) {
    tax = incomeTaxes * 0.05;
  } else if (incomeTaxes <= 120e6) {
    tax = incomeTaxes * 0.1;
  } else if (incomeTaxes <= 210e6) {
    tax = incomeTaxes * 0.15;
  } else if (incomeTaxes <= 384e6) {
    tax = incomeTaxes * 0.2;
  } else if (incomeTaxes <= 624e6) {
    tax = incomeTaxes * 0.25;
  } else if (incomeTaxes <= 960e6) {
    tax = incomeTaxes * 0.3;
  } else {
    tax = incomeTaxes * 0.35;
  }

  if (tax < 0) {
    document.getElementById(
      "message"
    ).innerHTML = `Số tiền thu nhập không hợp lệ`;
  } else
    document.getElementById(
      "message"
    ).innerHTML = `Họ tên: ${name}. Thuế thu nhập cá nhân: ${tax.toLocaleString()} VND`;
};

//BT2: Viết chương trình tính hóa đơn khách hàng cho một công ty cáp
function addInput() {
  let choose = document.getElementById("choose").value;
  var showConnect = document.getElementById("connect");

  choose === "doanhnghiep"
    ? (showConnect.style.display = "block")
    : (showConnect.style.display = "none");
}

document.getElementById("ex2").onclick = function () {
  //Input:  Mã khách hàng, loại khách hàng, số kết nối, số kênh cao cấp
  let choose = document.getElementById("choose").value;
  let client = document.getElementById("client").value;
  let channel = +document.getElementById("channel").value;
  let numberConnect = +document.getElementById("number_connect").value;

  //Output: Tính tiền cáp
  let total = 0;

  if (choose === "") {
    return (document.getElementById(
      "message_2"
    ).innerHTML = `Vui lòng chọn lọai khách hàng`);
  }
  switch (choose) {
    case "nhadan":
      total = 4.5 + 20.5 + channel * 7.5;
      break;
    case "doanhnghiep":
      if (numberConnect <= 10) {
        total = 15 + 75 + 50 * channel;
      } else total = 15 + 75 + (numberConnect - 10) * 5 + 50 * channel;
      break;
    default:
      total = 0;
  }

  document.getElementById(
    "message_2"
  ).innerHTML = `Mã khách hàng: ${client}, Tiền cáp: $${total}`;
};
