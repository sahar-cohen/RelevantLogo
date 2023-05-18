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

  document.getElementById("שניות").innerText = seconds;
  document.getElementById("דקות").innerText = minutes;
  document.getElementById("שעות").innerText = hours;
  document.getElementById("ימים").innerText = days;
}

updateCountdown();
setInterval(updateCountdown, 1000);

// Theme switching code
let isDay = true;

function setWebsiteTheme() {
  const body = document.body; // Use body directly
  // Clear any previous theme classes
  body.className = "";

  // Switch between day and night every 30 seconds
  if (isDay) {
    body.classList.add("night");
  } else {
    body.classList.add("day");
  }

  // Flip the isDay flag for the next run
  isDay = !isDay;
}

// Call the function once at the start to set the initial theme
setWebsiteTheme();

// Then call the function every 30 seconds to check and update the theme
setInterval(setWebsiteTheme, 1000 * 30);
