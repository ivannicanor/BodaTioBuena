import { DateTime } from "https://cdn.jsdelivr.net/npm/luxon/build/es6/luxon.min.js";

const targetDate = DateTime.local(2025, 6, 21, 19, 30); // Fecha objetivo: 21 de junio de 2025 a las 19:30

const updateCountdown = () => {
  const now = DateTime.local();
  const diff = targetDate.diff(now, ["days", "hours", "minutes", "seconds"]).toObject();

  document.getElementById("days").textContent = Math.floor(diff.days);
  document.getElementById("hours").textContent = Math.floor(diff.hours);
  document.getElementById("minutes").textContent = Math.floor(diff.minutes);
  document.getElementById("seconds").textContent = Math.floor(diff.seconds);
};

setInterval(updateCountdown, 1000);