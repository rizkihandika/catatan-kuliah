# Ringkasan Matkul — Dasar Pemrograman (P01–P06)

> Tutor: Dr. Tri Wahyu Widyaningsih ("Bu Wahyu") · Slide & video materi: Riad Sahara · Arsip: [../arsip/README.md](../arsip/README.md) · Transkrip: ../arsip/transkrip/ *(ada di Edlink)* · Teks slide: ../arsip/teks-materi/ *(ada di Edlink)*
> Catatan detail P05: [P05-variabel-konstanta-tipe-data.md](P05-variabel-konstanta-tipe-data.md)
> **Kuis:** P01 80 · P02 100 · P03 80 · P04 80 · P05 100 · **P06 belum dikerjakan (tenggat 2026-12-01 12:00)**.

## Info penting dari Zoom/rekaman
- **Bobot nilai** (Zoom P01): UTS 25%, UAS 25%, tugas 20%, tugas besar 10%, kuis 10%, kehadiran/sikap 10%.
- **Tools**: compiler online di browser atau **Dev C++**. Kuliah *full online*: Zoom tidak wajib (rekaman diunggah), tapi aktivitas di LMS wajib (absen, unduh materi, kuis).
- Dosen akan mengadakan minimal **7 kali Zoom**. **Soal UTS & UAS dibuat tutornya sendiri** (Bu Wahyu, bukan koordinator). **Kisi-kisi UTS dibahas di Zoom pertemuan 7**, jadi ingatkan dosennya. Minggu setelah P05 tidak ada Zoom.
- Dosen menyebut "bisa jadi UTS-nya adalah membuat algoritma dan project" (Zoom P03).
- Pesan dosen: jangan buru-buru ngoding atau copas dari AI/GitHub. Pahami masalahnya dulu, analisis, rancang algoritma, baru coding.

## Peta besar
Pemecahan masalah: **masalah → analisis → algoritma → coding**. Cara menuliskan algoritma ada 3: **deskripsi algoritmik (Name/Given/Result/Method)**, **flowchart**, **pseudocode**. Lalu bahan dasarnya: variabel, tipe data, operator. Setelah UTS (RPS): runtunan, percabangan, perulangan, modularisasi, fungsi.

---

## P01 — Konsep Logika dan Pemrograman
Sumber: `Dasar Pemrograman Pertemuan 1.pdf`, rekaman Zoom `video1165835247.mp4` (28 menit)

- **Terminologi**:
  - **Algoritma**: urutan langkah *logis* dan sistematis untuk memecahkan masalah.
  - **Program**: kumpulan instruksi tertulis untuk komputer.
  - **Bahasa pemrograman**, **kode sumber** (*source code*), **programmer**.
  - **Software**: kumpulan program + data terkait.
- **Paradigma**:
  - **Imperative**: menjelaskan *bagaimana* program beroperasi. Turunannya:
    - **Procedural**: program = kumpulan prosedur (C, Pascal).
    - **OOP**: objek dengan *field* + *method* (Java; C++ termasuk prosedural sekaligus OOP).
  - **Declarative**: logika tanpa aliran kendali (SQL). Turunannya:
    - **Functional**: komputasi sebagai evaluasi fungsi matematika.
    - **Logic**: berbasis logika formal (Prolog).
- **Tahap pemecahan masalah**: masalah → analisis → perancangan algoritma → implementasi (coding).
- **Model IPO** (*Input–Process–Output*): semua aplikasi intinya input → proses (algoritma) → output. Contoh dosen: prediksi ekspresi wajah. Input foto, proses algoritma, output "senyum/sedih". Kalau output salah, algoritmanya yang diperbaiki.
- **Contoh**: selesaikan ax + b = c.
  - Kalau a ≠ 0 → x = (c − b)/a.
  - Kalau a = 0 dan c − b = 0 → x tak berhingga.
  - Kalau a = 0 dan c − b ≠ 0 → x tak terdefinisi.

## P02 — Konsep Algoritma
Sumber: `Dasar Pemrograman Pertemuan 2.pdf`, video YouTube Pak Riad (36 menit), dibahas ulang di Zoom P03

- **Definisi**: langkah-langkah yang **terbatas, diskrit, tidak ambigu**, punya input & output, dan setiap instruksi selesai dalam waktu terbatas secara **deterministik**. Ilustrasinya: memasukkan gajah ke kulkas harus mengeluarkan jerapahnya dulu, karena urutan dan keadaan sebelumnya penting.
- Instruksi algoritma terbatas pada 4 fungsi: **input, simpan, proses, output**.

| Fungsi | Kata kunci |
|---|---|
| Input | `Get` |
| Simpan | `Given` / `Result` / `Intermediate` / `Set` |
| Proses aritmetika | `Let` (assignment) |
| Ulang | `Loop` / `While` |
| Cabang | `If` |
| Output | `Give` |

- **Deskripsi algoritma**: **Name**, **Givens** (input, "diketahui"), **Results** (output), **Intermediates** (variabel sementara), **Definition**: `Result := Name(Given)`, lalu **Method** (langkah-langkahnya).
- **Assignment ≠ persamaan matematika**:
  - Kanan dievaluasi dulu, hasilnya disimpan ke variabel di kiri.
  - `Let A = B` ≠ `Let B = A`.
  - `Let A = A + 3` valid (nilai baru = nilai lama + 3). Dosen menyebutnya **variabel counter** karena dipakai di loop.
  - `A + 5 = 3` tidak bermakna, karena kiri harus nama variabel.
- **Contoh**: SUM3, Division, SumTimes, AVG3, **Swap** (pakai `Temp` sebagai intermediate), AddXY (`Let X = X + Y`).
```
NAME: Swap   GIVENS: X, Y   RESULTS: X, Y   INTERMEDIATES: Temp
METHOD:  Get X ; Get Y
         Let Temp = X      ' simpan X sementara
         Let X = Y
         Let Y = Temp
         Give X ; Give Y
```
- **Menelusuri (tracing)**: beri nomor tiap baris, buat tabel dengan satu kolom per variabel, isi nilai setelah tiap instruksi. Contoh AVG3(24, 31, 35) → Sum 90, Average 30. Swap(25, 88) → X = 88, Y = 25.
- Tambahan dosen di Zoom: algoritma terbaik adalah yang paling **cepat** menyelesaikan masalah, bukan yang kodenya paling pendek. Ada juga beda *compiler* (diterjemahkan sekaligus) vs *interpreter* (per baris), serta *white box* vs *black box testing*.

## P03 — Flowchart
Sumber: `Dasar Pemrograman Pertemuan 3.pdf`, rekaman Zoom `video1193849624.mp4` (53 menit)

- **Flowchart** = representasi grafis urutan operasi. Gunanya untuk komunikasi lintas tim/latar belakang (orang awam tidak membaca kode).
- **Simbol dasar**:

| Simbol | Bentuk | Arti |
|---|---|---|
| Terminator | oval | mulai/selesai (wajib ada) |
| Proses | persegi panjang | perhitungan/assignment |
| Decision | belah ketupat | pilihan **Yes/No** |
| Input/Output | jajar genjang | Get/Give |
| Predefined process | persegi bergaris | subrutin/modul (fungsi) |
| Connector | lingkaran | sambungan ke bagian lain halaman |
| Flow line | panah | arah alur |

- **3 struktur kendali**: **berurutan** (sequence), **bercabang** (if-else), **berulang** (loop). Kata dosen, "struktur kontrol di program itu hanya looping dan if".
- **Contoh**: rata-rata nilai < 50 → *fail*, selain itu lulus. Loop `i = 0; while i ≠ N: i = i + 1`. Rata-rata 10 bilangan dengan `sum = sum + x`.
- **Latihan**: modifikasi Division. Kalau Y = 0 dan X = 0 → "Infinite", kalau Y = 0 dan X ≠ 0 → "Undefined", selain itu tampilkan hasil. Lalu buat flowchart-nya.

## P04 — Pseudocode
Sumber: `Dasar Pemrograman Pertemuan 4.pdf`

- **Pseudocode** = deskripsi informal tingkat tinggi yang memakai konvensi struktur bahasa pemrograman, tapi untuk dibaca **manusia**.
- **5 aturan penulisan**:
  1. Satu pernyataan per baris.
  2. **Kata kunci HURUF KAPITAL** (GET, SET, LET, IF, ELSE, WHILE, GIVE).
  3. **Indentasi** menunjukkan hirarki (isi IF/WHILE menjorok).
  4. Akhiri struktur multi-baris: `ENDIF`, `ENDWHILE`, `ENDFOR`.
  5. Independen dari bahasa pemrograman tertentu.
- **Pseudocode vs flowchart**:

| | Pseudocode | Flowchart |
|---|---|---|
| (+) | mudah diubah, terstruktur, cukup pakai word processor | terstandarisasi, visual |
| (−) | tidak visual, tidak ada standar baku | sulit dimodifikasi, butuh software khusus |

- **Latihan** (ubah flowchart → pseudocode):
  - **BIG3**: cari terbesar dari 3 bilangan.
  - **FARE**: umur < 16 atau > 65 → tarif murah.
  - **SORT3**: urutkan 3 bilangan dengan swap memakai Temp.
```
GET N1, N2, N3            ' BIG3
IF N1 > N2 THEN
    LET Largest = N1
ELSE
    LET Largest = N2
ENDIF
IF N3 > Largest THEN
    LET Largest = N3
ENDIF
GIVE Largest
```

## P05 — Variabel, Konstanta, dan Tipe Data
Sumber: `Dasar Pemrograman Pertemuan 5.pdf`, rekaman `Dasar Pemrograman - Sesi 5.mp4` (22 menit). Detail lengkap ada di [catatan P05](P05-variabel-konstanta-tipe-data.md).

- **Variabel** = lokasi memori bernama yang nilainya bisa berubah. Harus **dideklarasikan** (tipe data + identifier) sebelum dipakai.
- **Penamaan**: satu kata tanpa spasi dan **bermakna** (`gaji`, `usia`, bukan `a`, `b`).
  - Valid: `hourly_wage`, `hourlyWage`, `HoUrLyWaGe` (di bahasa *case-sensitive* dianggap variabel berbeda).
  - Tidak valid: `hourly-wage` (minus dianggap operator), `hourly wage` (spasi), `hourly$` (simbol bisa jadi keyword).
- **Tipe**: **numerik** (bisa dihitung: bulat, negatif, desimal) vs **string** (teks; angka di dalam string tidak bisa dihitung, `"5" + "6"` = `"56"` → *concat*).
- **Konstanta** = nilainya sudah ada sejak sebelum program dijalankan dan hanya ditugaskan sekali: `num SALES_TAX = 0.06`.
- **Two truths & a lie**: yang **salah** adalah `SET salary = "12.50"` untuk variabel numerik (karena itu string).
- Tracing loop di Zoom: N = 3, `i` dari 0 sampai `while i ≠ N`, loop berhenti saat i = 3.

## P06 — Operasi, Operator, dan Operand
Sumber: `Dasar Pemrograman Pertemuan 6.pdf` (belajar mandiri, tidak ada Zoom; kuis tenggat 2026-12-01)

- **Operator** = simbol aksi. **Operan** = objek yang dioperasikan. **Operasi** = pemrosesan menurut aturan. Contoh: `X + Y` → operator `+`, operan X dan Y.

| Jenis | Operator | Catatan |
|---|---|---|
| Aritmatika | `+ - * /` | prioritas: `* /` dulu, baru `+ -` |
| Assignment | `=` | kiri diberi nilai ekspresi kanan |
| Bitwise | `& \| ^ ~ << >>` | per bit: `1 & 5 = 1`, `0 \| 5 = 5`, `1 ^ 5 = 4`, `4 >> 1 = 2` |
| Perbandingan | `== != < > <= >=` | hasil TRUE/FALSE |
| Inc/Dec | `++ --` | tambah/kurang 1 |
| Logika | `! && \|\|` | operan boolean |
| String | `.` (concat), `.=` | `"Hello" . "World"` (gaya PHP) |
| Array | `+` (union), `==`, `!=` | gabung elemen dua array |

- Knowledge check: `a + b + c * d / e - f` → kerjakan `c * d` dulu, lalu `/ e`, baru `+` dan `-` dari kiri ke kanan.
- Bitwise: tulis dalam biner 4 bit dulu (5 = 0101), lalu operasikan per bit.

---

## Yang perlu diingat untuk UTS
1. Terminologi, paradigma (beserta contoh bahasanya), tahap pemecahan masalah, model IPO.
2. Ciri algoritma, kata kunci Get/Let/Give, struktur **Name–Given–Result–Intermediate–Definition–Method**, **tracing table**.
3. Assignment vs persamaan matematika (`A = A + 3`).
4. Simbol flowchart, 3 struktur kendali, mampu menggambar flowchart dari soal.
5. 5 aturan pseudocode, pseudocode vs flowchart.
6. Aturan penamaan variabel, numerik vs string, konstanta.
7. Jenis operator, prioritas aritmatika, dan operasi bitwise.
8. Kemungkinan bentuk UTS: **membuat algoritma/flowchart/pseudocode dari kasus**. Tunggu kisi-kisi di Zoom P07.
