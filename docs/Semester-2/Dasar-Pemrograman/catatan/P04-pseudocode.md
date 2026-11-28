# P04 — Pseudocode

Tanggal: 2026-11-16 · Sumber: [`Dasar Pemrograman Pertemuan 4.pdf`](../materi/Dasar%20Pemrograman%20Pertemuan%204.pdf)

## Ringkasan 3 kalimat
Pseudocode ("kode semu") adalah deskripsi informal tingkat tinggi dari algoritma yang memakai konvensi struktur bahasa pemrograman tetapi ditujukan untuk **dibaca manusia**. Ada lima aturan penulisan: satu pernyataan per baris, kata kunci huruf kapital, indentasi untuk hirarki, akhiri struktur multi-baris (ENDIF/ENDWHILE/ENDFOR), dan bebas dari bahasa pemrograman tertentu. Dibanding flowchart, pseudocode mudah diubah tapi tidak visual dan tidak punya standar baku.

## Konsep kunci

### 1. Definisi (slide 3)
- *Pseudo* = semu, *code* = kode.
- Deskripsi informal tingkat tinggi tentang cara kerja program, memakai struktur bahasa pemrograman, untuk dibaca **manusia**, bukan mesin.

### 2. Lima aturan penulisan (slide 4–9)
| # | Aturan | Penjelasan |
|---|--------|------------|
| 1 | Satu pernyataan per baris | tiap baris = satu aksi |
| 2 | Kata kunci huruf **KAPITAL** | GET, SET, LET, IF, ELSE, WHILE, GIVE, … |
| 3 | **Indentasi** menunjukkan hirarki | sequence: kolom sama; selection & loop: isi diindentasi, kata kuncinya tidak |
| 4 | **Akhiri** struktur multi-baris | IF … **ENDIF**, WHILE … **ENDWHILE**, FOR … **ENDFOR** |
| 5 | **Independen** bahasa | jangan pakai sintaks bahasa tertentu (`cout`, `;`, `{}`) |

Contoh aturan 1 (gaji):

| Uraian | Pseudocode |
|--------|-----------|
| Read name, hours worked, rate of pay | `GET name` · `GET hoursWorked` · `GET payRate` |
| gross = hours worked × rate of pay | `LET gross = hoursWorked * payRate` |
| Write name, hours worked, gross | `GIVE name, hoursWorked, gross` |

### 3. Pseudocode vs flowchart (slide 10)
| | Pseudocode | Flowchart |
|-|-----------|-----------|
| Kelebihan | mudah diubah, menerapkan konsep terstruktur, cukup pakai word processor | **terstandarisasi**, ada gambaran **visual** |
| Kekurangan | tidak visual, **tidak ada standar** baku (sangat variatif) | sulit dimodifikasi, elemen desain terstruktur tidak diterapkan, perlu software khusus |

### 4. Latihan slide 11–12: dari flowchart ke pseudocode
**BIG3** (bilangan terbesar dari tiga):
```
NAME: BIG3 · GIVENS: N1, N2, N3 · RESULTS: Largest
GET N1
GET N2
GET N3
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
**FARE** (harga tiket menurut umur): Age < 16 → $7; selain itu Age > 65 → $5; selain itu → $10.
```
GET Age
IF Age < 16 THEN
    LET Price = 7
ELSEIF Age > 65 THEN
    LET Price = 5
ELSE
    LET Price = 10
ENDIF
GIVE Price
```
**SORT3** (urutkan tiga bilangan): tiga perbandingan berurutan — (X1 > X2) tukar, (X2 > X3) tukar, (X1 > X2) tukar lagi — masing-masing memakai Temp. Ini ide dasar *bubble sort*.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Pseudocode | kode semu untuk manusia |
| Kata kunci | kata perintah baku (GET, LET, IF, …) |
| Indentasi | menjorok ke dalam untuk menunjukkan hirarki |
| ENDIF / ENDWHILE / ENDFOR | penutup struktur multi-baris |

## Sering keluar di ujian / mudah keliru
- Lupa **ENDIF/ENDWHILE** → melanggar aturan 4.
- Menulis `if (x == 5) {` di pseudocode → melanggar aturan 5; tulis `IF x = 5 THEN`.
- Kata kunci huruf kecil → melanggar aturan 2.
- Kelebihan flowchart = **standar & visual**; kelebihan pseudocode = **mudah diubah**.

## Pertanyaan untuk dicek ke dosen
- Pada FARE, harga untuk tepat 16 dan tepat 65 tahun masuk $10 — apakah itu memang maksud soal?

## Sumber
- `Dasar Pemrograman Pertemuan 4.pdf` slide 3–12 (teks: `arsip/teks-materi/Dasar Pemrograman Pertemuan 4.pdf.md`)
