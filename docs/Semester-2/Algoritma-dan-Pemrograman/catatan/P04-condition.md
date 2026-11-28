# P04 — Condition (Percabangan)

Tanggal: 2026-11-12 · Sumber utama: [`AP.04 - Modul PDF - Condition.pdf`](../materi/AP.04%20-%20Modul%20PDF%20-%20Condition.pdf)

## Ringkasan 3 kalimat
*Condition* (struktur **selection**) membuat program memilih jalur berdasarkan ekspresi yang bernilai `true` atau `false`. Ekspresinya dibangun dari operator relasional (`== != < > <= >=`) dan digabung dengan operator logika (`&& || !`). Bentuknya ada lima: `if`, `if-else`, `if–else if–else` (rentang bertingkat), *nested if* (syarat di dalam syarat), dan `switch-case` (satu variabel vs beberapa nilai tetap).

## Konsep kunci

### 1. Tiga struktur kendali (hal. 3)
| Struktur | Arti | Contoh sehari-hari | Kata kunci pseudocode |
|----------|------|--------------------|-----------------------|
| Sequence | berurutan | rendam → kucek → bilas | GET, LET, GIVE |
| **Selection** | memilih satu jalur | hujan → payung, tidak → topi | IF, ELSEIF, ELSE, SWITCH |
| Loop | mengulang | isi bak selama belum penuh | WHILE, FOR |

### 2. Ekspresi kondisi (hal. 4–5)
- Hasilnya hanya `true`/`false`, bisa disimpan di `bool`. Saat di-`cout`, **true tampil 1, false tampil 0**.
```cpp
int nilai = 75;
bool lulus = (nilai >= 60);
cout << lulus;   // 1
```
- Pseudocode ↔ C++: `=` → `==`, `<>` → `!=`, `AND` → `&&`, `OR` → `||`, `NOT` → `!`, `MOD` → `%`.
- **Prioritas**: relasional dulu, lalu `!` → `&&` → `||`. Pakai kurung agar jelas.
- **Rentang**: "0 sampai 100" ditulis `nilai >= 0 && nilai <= 100`, **bukan** `0 <= nilai <= 100`.

### 3. Lima bentuk condition
| Bentuk | Kapan dipakai | Contoh |
|--------|---------------|--------|
| `if` | ada aksi tambahan hanya jika syarat benar | saldo kurang → peringatan |
| `if-else` | dua pilihan, **tepat satu** pasti jalan | ≥ 60 LULUS, selain itu TIDAK LULUS |
| `if – else if – else` | banyak pilihan pada **rentang** nilai | grade A/B/C/D, diskon bertingkat |
| nested if | syarat kedua baru dicek setelah syarat pertama benar | cek segitiga valid → baru cek jenisnya |
| `switch-case` | satu variabel (int/char) dibanding **nilai tetap** | menu 1–4 |

```cpp
// if - else if - else: mulai dari batas TERTINGGI
if (total >= 500000)      persen = 20;
else if (total >= 200000) persen = 10;
else if (total >= 100000) persen = 5;
else                      persen = 0;
```
C++ memeriksa dari atas; begitu satu benar, sisanya **dilewati**.

### 4. `switch-case` (hal. 8–9)
```cpp
switch (hari) {
    case 1: case 2: case 3: case 4: case 5:
        cout << "Hari kerja"; break;     // fall-through disengaja
    case 6: case 7:
        cout << "Akhir pekan"; break;
    default:
        cout << "Hari tidak valid";      // opsional, mirip else
}
```
- `break` menghentikan switch. **Tanpa `break` → fall-through** ke case berikutnya.
- Nilai `case` harus **konstanta** (`case 1:`, `case 'A':`); rentang seperti `nilai >= 60` tidak bisa → pakai `if`.

### 5. Operator ternary (hal. 9)
`kondisi ? nilaiBenar : nilaiSalah` — ringkasan if-else yang memilih satu nilai.
```cpp
string hasil = (nilai >= 60) ? "LULUS" : "TIDAK LULUS";
```

### 6. Flowchart percabangan (hal. 10)
1. Setiap pemeriksaan kondisi pakai **belah ketupat**.
2. Kedua panah keluar diberi label **Ya** dan **Tidak**.
3. Semua cabang **bertemu kembali** sebelum FINISH.
4. Kondisi ditulis dengan operator pseudocode (`=`, `<>`, `AND`, `OR`).

### 7. Contoh kasus penting
**Tahun kabisat** (operator logika + kurung):
```cpp
if ((tahun % 4 == 0 && tahun % 100 != 0) || tahun % 400 == 0)
```

| tahun | %4==0 | %100!=0 | AND | %400==0 | hasil |
|-------|-------|---------|-----|---------|-------|
| 2024 | B | B | B | S | kabisat |
| 2023 | S | B | S | S | bukan |
| 1900 | B | S | S | S | bukan |
| 2000 | B | S | S | B | kabisat |

**Jenis segitiga** (nested if): cek `a+b>c && a+c>b && b+c>a` dulu; di dalamnya cek **sama sisi lebih dulu** (karena sama sisi juga memenuhi syarat sama kaki), lalu sama kaki, lalu sembarang. Data `1 2 3` → bukan segitiga (1+2 = 3, tidak lebih besar).

### 8. Uji dengan data batas
Selalu uji **tepat di batas** dan satu di bawahnya: nilai 60 → LULUS, 59 → TIDAK LULUS; total 100000 → 5%, 99999 → 0%.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Condition / percabangan | Struktur selection: memilih jalur berdasarkan kondisi |
| Ekspresi kondisi | Ekspresi yang hasilnya true/false |
| Operator relasional | Pembanding dua nilai |
| Operator logika | Penggabung kondisi (AND, OR, NOT) |
| Nested if | if di dalam blok if/else lain |
| Fall-through | Eksekusi berlanjut ke case berikutnya karena tak ada `break` |
| `default` | Jalur cadangan switch jika tidak ada case cocok |
| Ternary | Operator `? :` |
| Dry run | Uji coba logika di kertas langkah demi langkah |

## Sering keluar di ujian / mudah keliru (hal. 22)
| Salah | Benar |
|-------|-------|
| `if (nilai = 60)` — ini **mengisi**, bukan membandingkan | `if (nilai == 60)` |
| `if (x > 5);` — titik koma bikin blok if kosong | `if (x > 5) { ... }` |
| `if (x > 0) a = 1; b = 2;` — `b = 2` **selalu** jalan | bungkus dengan `{ }` |
| `if (n >= 55)` sebelum `else if (n >= 85)` — nilai 90 masuk blok pertama | mulai dari batas tertinggi |
| case tanpa `break` | akhiri tiap case dengan `break;` |
| `0 < x < 10` | `x > 0 && x < 10` |
| Pseudocode memakai sintaks C++ (`if (x == 5) {`) | `IF x = 5 THEN` |

Cek pemahaman dari modul (kunci): `(7 > 3) && (2 > 5)` → **false**; total Rp250.000 → **10%**; ELSEIF ↔ `else if`; lupa `break` → **lanjut ke case berikutnya** (bukan error kompilasi).

## Pertanyaan untuk dicek ke dosen
- Di UTS, apakah soal flowchart/pseudocode harus mengikuti "5 aturan penulisan pseudocode" persis seperti modul (GET/LET/GIVE)?
- Apakah `string` dan `#include <string>` boleh dipakai di jawaban praktik?

## Sumber
- `AP.04 - Modul PDF - Condition.pdf` hal. 2–30 (teks: `arsip/teks-materi/AP.04 - Modul PDF - Condition.pdf.md`)
- Slide `AP.04 - Modul PPT - Condition.pdf` adalah versi ringkas modul yang sama (belum dibandingkan per slide).
- Kuis Sesi #4: 10 soal / 30 menit — sudah dikerjakan (grade 90).
