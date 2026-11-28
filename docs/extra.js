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

// Lencana sisa waktu di tabel yang kolom pertamanya "Tanggal" (YYYY-MM-DD [HH:MM], WIB).
// Dihitung di browser, jadi tetap benar walau situs terakhir dibangun beberapa hari lalu.
var DATE_CELL = /(\d{4}-\d{2}-\d{2})(?: (\d{2}:\d{2}))?/;
function sectionTitle(table) {
  var el = table.closest(".md-typeset__scrollwrap") || table;
  while ((el = el.previousElementSibling)) if (/^H[1-3]$/.test(el.tagName)) return el.textContent;
  return "";
}
function badgeDeadlines() {
  document.querySelectorAll(".md-typeset table").forEach(function (t) {
    var th = t.querySelector("thead th");
    if (!th || !/^(Tanggal|Tenggat)$/.test(th.textContent.trim())) return;
    if (/Selesai/.test(sectionTitle(t))) return;
    t.querySelectorAll("tbody tr").forEach(function (tr) {
      var td = tr.cells[0], m = td && td.textContent.match(DATE_CELL);
      if (!m) return;
      var old = td.querySelector(".dl-badge");
      if (old) old.remove();
      var due = new Date(m[1] + "T" + (m[2] || "23:59") + ":00+07:00"), ms = due - new Date();
      var days = ms / 864e5, b = document.createElement("span");
      tr.classList.remove("dl-over", "dl-urgent", "dl-week");
      if (ms <= 0) { b.textContent = "lewat"; tr.classList.add("dl-over"); }
      else if (days < 1) { b.textContent = Math.floor(ms / 36e5) + " jam lagi"; tr.classList.add("dl-urgent"); }
      else {
        b.textContent = Math.floor(days) + " hari lagi";
        tr.classList.add(days <= 2 ? "dl-urgent" : days <= 7 ? "dl-week" : "dl-later");
      }
      b.className = "dl-badge";
      td.appendChild(b);
    });
  });
}

// Sorot baris jadwal hari ini (kolom pertama "Hari").
function highlightToday() {
  var today = new Date().toLocaleDateString("id-ID", { weekday: "long", timeZone: "Asia/Jakarta" }).toLowerCase();
  document.querySelectorAll(".md-typeset table").forEach(function (t) {
    var th = t.querySelector("thead th");
    if (!th || th.textContent.trim() !== "Hari") return;
    t.querySelectorAll("tbody tr").forEach(function (tr) {
      var hit = tr.cells[0] && tr.cells[0].textContent.trim().toLowerCase() === today;
      tr.classList.toggle("today", hit);
      if (hit && !tr.cells[0].querySelector(".dl-badge")) {
        var b = document.createElement("span"); b.className = "dl-badge"; b.textContent = "hari ini";
        tr.cells[0].appendChild(b);
      }
    });
  });
}

document$.subscribe(function () { tickCountdowns(); badgeDeadlines(); highlightToday(); });
setInterval(function () { tickCountdowns(); badgeDeadlines(); }, 30000);
