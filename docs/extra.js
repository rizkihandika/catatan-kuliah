// Hitung mundur tenggat: <... class="countdown" data-deadline="ISO"><span class="countdown-left"></span></...>
function tickCountdowns() {
  document.querySelectorAll(".countdown[data-deadline]").forEach(function (el) {
    var out = el.querySelector(".countdown-left");
    if (!out) return;
    var ms = new Date(el.dataset.deadline) - new Date();
    if (ms <= 0) { out.textContent = "⛔ tenggat sudah lewat"; el.classList.add("over"); return; }
    var d = Math.floor(ms / 864e5), h = Math.floor(ms / 36e5) % 24, m = Math.floor(ms / 6e4) % 60;
    out.textContent = "⏳ sisa " + (d ? d + " hari " : "") + h + " jam " + m + " menit";
    el.classList.toggle("soon", ms < 2 * 864e5);
  });
}
document$.subscribe(function () { tickCountdowns(); });
setInterval(tickCountdowns, 30000);
