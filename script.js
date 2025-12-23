function startTimer(duration, display) {
  let timer = duration;
  const interval = setInterval(() => {
    let seconds = parseInt(timer % 60, 10);
    seconds = seconds < 10 ? "0" + seconds : seconds;
    display.textContent = "0:" + seconds;

    if (--timer < 0) {
      clearInterval(interval);
      window.location.href = "https://t.me/+RUgN2zRXRXBiYjQ1";
    }
  }, 1000);
}

window.onload = () => {
  const display = document.getElementById("timer");
  startTimer(10, display);
};
