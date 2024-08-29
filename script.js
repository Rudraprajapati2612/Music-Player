function startMusic() {
  const bars = document.querySelectorAll(".bar");
  bars.forEach((bar) => {
    bar.style.animationPlayState = "running";
  });
}
