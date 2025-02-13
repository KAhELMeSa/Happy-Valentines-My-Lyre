let clickCount = 0;
const heart = document.getElementById('heart');
const message = document.getElementById('message');
const clickCountDisplay = document.getElementById('click-count');

heart.addEventListener('click', () => {
  clickCount++;
  clickCountDisplay.textContent = `Clicks: ${clickCount}`;

  if (clickCount === 1) {
    message.textContent = "Only one? 🥺";
  } else if (clickCount === 2) {
    message.textContent = "Only two? 🥹";
  } else if (clickCount === 3) {
    message.textContent = "Aww, you love me so much! 💖";
  } else if (clickCount === 5) {
    message.textContent = "You're amazing! Thank you! 😊";
  } else if (clickCount === 10) {
    message.textContent = "Wow, you really love me! 🥰";
  } else if (clickCount === 20) {
    message.textContent = "You're the best! I'm so lucky! 💕";
  } else if (clickCount === 30) {
    message.textContent = "I can't believe how much you love me! 💞";
  } else if (clickCount === 50) {
    message.textContent = "You're my everything! I love you! 💓";
  } else if (clickCount > 100) {
    message.textContent = "I LOVE YOU MY LYREEEEEEEE ♡⁠(⁠>⁠ o ⁠<⁠)⁠♡";
  }
});