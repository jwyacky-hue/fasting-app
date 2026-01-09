let startTime;

function startFasting() {
  startTime = new Date();
  setInterval(updateTimer, 1000);
}

function updateTimer() {
  const now = new Date();
  const diff = now - startTime;

  const h = String(Math.floor(diff / 3600000)).padStart(2, '0');
  const m = String(Math.floor((diff % 3600000) / 60000)).padStart(2, '0');
  const s = String(Math.floor((diff % 60000) / 1000)).padStart(2, '0');

  document.getElementById('timer').textContent = `${h}:${m}:${s}`;
}
