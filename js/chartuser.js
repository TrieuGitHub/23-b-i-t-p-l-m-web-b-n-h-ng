const ctx2 = document.getElementById("chart-2").getContext("2d");
const myChart2 = new Chart(ctx2, {
  type: "bar",
  data: {
    labels: [
      "T1", "T2", "T3", "T4", "T5", "T6",
      "T7", "T8", "T9", "T10", "T11", "T12"
    ],
    datasets: [
      {
        label: "Số lượng đăng kí mới",
        data: [
          80, 120, 250, 400, 150, 280,
  90, 110, 200, 300, 350, 120
        ],
        backgroundColor: [
          "rgba(75, 192, 192, 1)"
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
const ctx3 = document.getElementById("chart-3").getContext("2d");
const myChart3 = new Chart(ctx3, {
  type: "bar",
  data: {
    labels: [
      "thaihien99", "vantuan00", "myhuong7749", "hoasenhong404", "umboumbo11"
    ],
    datasets: [
      {
        label: "Khách phát sinh doanh thu nhiều nhất",
        data: [
          6900000, 4900000, 7100000, 3100000, 2900000
        ],
        backgroundColor: [
          "rgba(38, 255, 19, 0.8)"
        ],
      },
    ],
  },
  options: {
    responsive: true,
  },
});
