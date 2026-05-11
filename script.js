// DARK MODE TOGGLE
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// SIMPLE DASHBOARD CHART (FAKE DATA)
const canvas = document.getElementById("chart");
const ctx = canvas.getContext("2d");

const data = [50, 80, 30, 120, 90, 60];

function drawChart() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "#3b82f6";

  data.forEach((val, i) => {
    ctx.fillRect(i * 60 + 20, canvas.height - val, 40, val);
  });
}

drawChart();
