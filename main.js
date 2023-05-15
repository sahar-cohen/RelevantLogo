const countdown = document.querySelector(".countdown");

const targetDate = new Date("July 15, 2023 00:00:00").getTime();

function updateCountdown() {
  const now = new Date().getTime();
  const timeRemaining = targetDate - now;

  const days = Math.floor(timeRemaining / (1000 * 60 * 60 * 24));
  const hours = Math.floor(
    (timeRemaining % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  );
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  document.getElementById("days").innerText = ימים;
  document.getElementById("hours").innerText = שעות;
  document.getElementById("minutes").innerText = דקות;
  document.getElementById("seconds").innerText = שניות;
}

updateCountdown();
setInterval(updateCountdown, 1000);
