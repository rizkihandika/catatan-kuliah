# P02 — Konsep Algoritma dan Pemrograman

Tanggal: 2026-11-02 · Sumber: [`Dasar Pemrograman Pertemuan 2.pdf`](../materi/Dasar%20Pemrograman%20Pertemuan%202.pdf)

## Ringkasan 3 kalimat
Algoritma adalah urutan langkah yang **terbatas, diskrit, tidak ambigu**, punya input dan output, dan setiap langkahnya selesai dalam waktu terbatas secara deterministik. Instruksi algoritma dibatasi pada empat fungsi komputer: **input (GET), penyimpanan, proses (LET, loop, IF), output (GIVE)**, dan ditulis dengan format deskripsi **Name, Given, Result, Intermediate, Definition, Method**. Algoritma diuji dengan **penelusuran (tracing)**: tabel nilai setiap variabel setelah tiap baris dieksekusi.

## Konsep kunci

### 1. Pemanasan: jerapah & gajah di kulkas (slide 4–7)
"Masukkan gajah ke kulkas" → buka kulkas, **keluarkan jerapah dulu**, masukkan gajah, tutup. Pelajaran: algoritma harus memperhatikan **keadaan (state) sebelumnya**.

### 2. Definisi & ciri algoritma (slide 8–10)
- Langkah **terbatas** (finite), **diskrit**, instruksi **tidak ambigu**.
- Punya **input** dan diharapkan menghasilkan **output**.
- Tiap instruksi selesai dalam waktu terbatas secara **deterministik** (input sama → hasil sama).

### 3. Representasi algoritmik (slide 11–12)
| Fungsi | Perintah | Keterangan |
|--------|----------|------------|
| Input | **GET** | ambil nilai dari pengguna |
| Storage | Given / Result / Intermediates / Set | menyimpan informasi |
| Process | **LET** (assignment), **Loop**, **IF** | hitung, ulang, percabangan |
| Output | **GIVE** | tampilkan nilai |

### 4. Format deskripsi algoritma (slide 13–14, 27)
| Bagian | Isi |
|--------|-----|
| **Name** | nama formal algoritma |
| **Givens** | nama nilai yang diberikan (input) |
| **Results** | nama nilai yang dihasilkan (output) |
| **Intermediates** | variabel perantara (sementara) |
| **Definition** | `Result := Name(Given)` |
| **Method** | langkah-langkah instruksi |

```
NAME        : AVG3
GIVENS      : Num1, Num2, Num3
RESULTS     : Sum, Average
DEFINITION  : Sum & Average := AVG3(Num1, Num2, Num3)
METHOD      :
    Get Num1
    Get Num2
    Get Num3
    Let Sum = Num1 + Num2 + Num3
    Let Average = Sum / 3
    Give Sum
    Give Average
```

### 5. Assignment: matematika vs computer science (slide 15–17)
- `Let X = 5Y + 16` → (1) **evaluasi ruas kanan**, (2) **simpan** hasil ke sel memori variabel kiri.
- Ruas kiri **harus nama variabel**: `Let A + 5 = 3` tidak bermakna.
- `Let A = A + 3` sah: A baru = A lama + 3 (di matematika kalimat ini salah).
- `Let A = B` ≠ `Let B = A` (arah penting).
- Relasi `B = A + 1` hanya benar **sesaat** setelah instruksi itu dijalankan:
```
A = 5
B = A + 1     ← sekarang B = 6, relasi benar
A = 2         ← B tetap 6, relasi B = A + 1 tidak lagi benar
```

### 6. Intermediate: algoritma tukar (slide 24–25)
```
NAME: Swap · GIVENS: X, Y · RESULTS: X, Y · INTERMEDIATES: Temp
Get X; Get Y
Let Temp = X
Let X = Y
Let Y = Temp
Give X; Give Y
```

### 7. Menelusuri algoritma (slide 28–32)
Langkah: (1) beri nomor tiap instruksi, (2) buat tabel: kolom baris + semua variabel, (3) isi nilai yang **berubah** saja per baris.

Penelusuran Swap dengan X = 25, Y = 88:

| Line | X | Y | Temp |
|------|---|---|------|
| 1 Get X | 25 | | |
| 2 Get Y | | 88 | |
| 3 Let Temp = X | | | 25 |
| 4 Let X = Y | 88 | | |
| 5 Let Y = Temp | | 25 | |
| 6 Give X | output 88 | | |
| 7 Give Y | | output 25 | |

## Istilah penting
| Istilah | Arti |
|---------|------|
| Deterministik | hasil selalu sama untuk input yang sama |
| Ambigu | bermakna ganda |
| Given / Result | input / output algoritma |
| Intermediate | variabel bantu sementara |
| Assignment | pemberian nilai ke variabel |
| Tracing | menelusuri nilai variabel baris demi baris |

## Sering keluar di ujian / mudah keliru
- Assignment dieksekusi **kanan dulu**, baru disimpan ke kiri.
- Algoritma tukar butuh **intermediate** (Temp); tanpa itu nilai hilang.
- Pada tabel penelusuran, isi hanya kolom yang **berubah** di baris tersebut.
- Format Definition: `Result := Name(Given)`.

## Latihan cepat (evaluasi slide 33)
Tulis algoritma rata-rata 5 bilangan dan telusuri dengan 1, 3, 5, 7, 9.
<details><summary>Jawaban</summary>

Sum = 25, Average = 5. Method: Get N1..N5 → Let Sum = N1+N2+N3+N4+N5 → Let Average = Sum / 5 → Give Average.
</details>

## Pertanyaan untuk dicek ke dosen
- Di UTS, apakah format NAME/GIVENS/RESULTS/DEFINITION wajib ditulis lengkap?

## Sumber
- `Dasar Pemrograman Pertemuan 2.pdf` slide 4–33 (teks: `arsip/teks-materi/Dasar Pemrograman Pertemuan 2.pdf.md`)
- Transkrip video `arsip/transkrip/8891894-Konsep-Algortima-Pemrograman.md` (belum dibaca penuh)
