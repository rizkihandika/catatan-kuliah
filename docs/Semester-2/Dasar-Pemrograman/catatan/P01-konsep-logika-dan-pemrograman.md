# P01 — Konsep Logika dan Pemrograman (Pendahuluan)

Tanggal: 2026-10-26 · Sumber: [`Dasar Pemrograman Pertemuan 1.pdf`](../materi/Dasar%20Pemrograman%20Pertemuan%201.pdf)

## Ringkasan 3 kalimat
Dasar Pemrograman membangun logika pemrograman dan pemecahan masalah sederhana, dengan pokok bahasan: penulisan algoritma, flowchart, penamaan & tipe data, operasi & operator, struktur dasar (runtunan, pemilihan, perulangan), dan subprogram. Algoritma adalah urutan langkah logis untuk memecahkan masalah secara sistematis, tetapi ia hanya **satu tahap** dari pemecahan masalah: masalah → analisis → perancangan algoritma → implementasi. Paradigma bahasa pemrograman terbagi menjadi **imperative** (procedural, OOP) dan **declarative** (functional, logic).

## Konsep kunci

### 1. Terminologi (slide 10–11)
| Istilah | Definisi |
|---------|----------|
| Algoritma | urutan langkah logis pengambilan keputusan untuk memecahkan masalah secara sistematis |
| Program | kumpulan instruksi tertulis untuk melakukan tugas tertentu dengan komputer |
| Bahasa pemrograman | bahasa untuk menulis program |
| Kode sumber (source code) | kumpulan instruksi yang ditulis dalam bahasa pemrograman |
| Programmer | orang yang menulis program |
| Software | kumpulan program **dan data terkait** |

### 2. Paradigma bahasa pemrograman (slide 12–14)
| Kelompok | Paradigma | Ciri |
|----------|-----------|------|
| **Imperative** — fokus **bagaimana** program beroperasi | Procedural | program = satu/lebih prosedur (mis. C, Pascal) |
| | Object-oriented | program berisi **object** dengan *data field* + prosedur (**method**) (mis. Java, C++) |
| **Declarative** — mengungkapkan logika **tanpa** menjelaskan aliran kendali | Functional | komputasi = evaluasi **fungsi matematika** (mis. Haskell) |
| | Logic | berdasarkan **logika formal** (mis. Prolog) |

**Intuisi**: imperative = memberi resep langkah demi langkah ("panaskan wajan, masukkan telur"); declarative = menyebut hasil yang diinginkan ("aku mau telur dadar") dan membiarkan sistem mencari caranya (contoh sehari-hari: SQL).

### 3. Tahap pemecahan masalah (slide 16–17)
1. **Masalah** → 2. **Analisis masalah** → 3. **Perancangan algoritma** → 4. **Implementasi (coding)**

### 4. Model IPO (slide 18)
**Input → Process → Output**: algoritma bertugas memproses seluruh input menjadi output.

### 5. Contoh: menyelesaikan ax + b = c (slide 19–20)
**Analisis**: output = x; input = a, b, c; proses:

| Kondisi | Hasil |
|---------|-------|
| a = 0 dan c − b = 0 | x **tak berhingga** (semua x memenuhi) |
| a = 0 dan c − b ≠ 0 | x **tak terdefinisi** (tidak ada solusi) |
| a ≠ 0 | x = (c − b) / a |

**Algoritma**:
```
1. Dapatkan nilai a
2. Dapatkan nilai b
3. Dapatkan nilai c
4. Jika a ≠ 0 maka x = (c − b) / a
   Jika tidak:
       Jika c − b = 0 maka tampilkan "x tak berhingga"
       Jika tidak maka tampilkan "x tak terdefinisi"
```
Pelajaran: analisis dulu **kasus khusus** (pembagian dengan nol) sebelum menulis rumus.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Paradigma | gaya/cara berpikir dalam memprogram |
| Imperative | memberi perintah langkah demi langkah |
| Declarative | menyatakan apa yang diinginkan, bukan caranya |
| IPO | Input-Process-Output |
| Method | prosedur milik sebuah object |

## Sering keluar di ujian / mudah keliru
- OOP dan procedural termasuk **imperative**; functional dan logic termasuk **declarative**.
- Software = program **+ data terkait** (bukan hanya program).
- Algoritma hanya **salah satu tahap**; sebelum itu ada analisis masalah.
- Bedakan "tak berhingga" (a = 0, c = b) dan "tak terdefinisi" (a = 0, c ≠ b).

## Pertanyaan untuk dicek ke dosen
- Slide menyebut dosen Syahid Abdullah, sedangkan pengampu di Edlink Dr. Tri Wahyu Widyaningsih — materi tetap dari slide Riad Sahara?

## Sumber
- `Dasar Pemrograman Pertemuan 1.pdf` slide 2–20 (teks: `arsip/teks-materi/Dasar Pemrograman Pertemuan 1.pdf.md`)
- Transkrip video `arsip/transkrip/8800906-video1165835247-mp4.md` (belum dibaca penuh)
