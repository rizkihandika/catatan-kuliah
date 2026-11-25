# P05 — Variabel, Konstanta, dan Tipe Data

Sumber: [`Dasar Pemrograman Pertemuan 5.pdf`](../materi/Dasar%20Pemrograman%20Pertemuan%205.pdf) (slide 3–13), video `materi/Dasar Pemrograman - Sesi 5.mp4`. Kuis Sesi 5 tenggat 2026-11-26 12:00.

## Intuisi
Variabel = **kotak berlabel di memori**. Labelnya (nama) tetap, isinya boleh diganti kapan saja. Konstanta = kotak yang **disegel** setelah diisi sekali.

## Variabel
- Lokasi memori bernama yang nilainya bisa berubah. Punya **nama** + **nilai**.
- Harus **dideklarasikan** sebelum dipakai: deklarasi = **tipe data** + **identifier** (nama).
  ```
  num myNumber      // deklarasi
  num myAnswer
  myAnswer = myNumber * 2
  ```
- **Tipe data** menentukan: nilai apa yang bisa disimpan, cara disimpan di memori, operasi apa yang boleh.

## Aturan penamaan (slide 8–10)
- Harus **satu kata** (tanpa spasi) dan sebaiknya **bermakna**.
- Aturan detail beda tiap bahasa (boleh `-`/`_`/karakter khusus? case sensitive?).
- Latihan slide 8 (konvensi umum di buku): `hourly-wage` ✗ (dibaca pengurangan), `hourly_wage` ✓, `hourly wage` ✗ (spasi), `hourlyWage` ✓ (camelCase), `HoUrLyWaGe` ✓ tapi jelek, `hourly$` tergantung bahasa, `hourly` ✓.

## Tipe data (versi pseudocode)
| Tipe | Isi | Aritmatika? |
|------|-----|-------------|
| **num** (numerik) | angka, desimal, bertanda ± | ✓ |
| **string** | teks, karakter khusus, boleh angka | ✗ (angka di string tidak bisa dihitung) |

## Konstanta bernama
- Diberi nilai **sekali saja**; penamaan ikut aturan variabel, lazimnya HURUF_BESAR.
  ```
  num SALES_TAX = 0.06
  ```

## Knowledge check (slide 13) — mana yang SALAH?
A. Tipe data mendeskripsikan nilai yang bisa disimpan & operasinya.
B. `SET name = "Ed"` valid jika `name` string.
C. `SET salary = "12.50"` valid jika `salary` numerik.

<details><summary>Jawaban</summary>
C salah — "12.50" dalam tanda kutip adalah string, tidak bisa disimpan ke variabel numerik.
</details>

## Kaitan dengan matkul lain
- Algoritma & Pemrograman P02 (Tipe Data) membahas versi C/C++ — bandingkan `num` ≈ `int`/`float`, `string` ≈ `char[]`/`string`.
- Pengantar TKI P05 membahas ukuran bit tiap tipe primitif.
