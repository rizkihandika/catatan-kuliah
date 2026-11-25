# P03 — Flowchart

Tanggal: 2026-11-09 · Sumber: `materi/Dasar Pemrograman Pertemuan 3.pdf`, transkrip vicon/video Sesi 3 (±53 menit)

## Ringkasan 3 kalimat
Flowchart adalah representasi **grafis** dari urutan operasi dalam program atau sistem informasi, yang menunjukkan logika algoritma dan aliran kendali antar langkah. Setiap jenis langkah punya simbol baku: terminal (start/finish), input/output, proses, keputusan, panah, dan konektor. Ada tiga struktur kendali yang digambarkan flowchart: **berurutan (sequence)**, **bercabang (selection)**, dan **berulang (loop)**.

## Konsep kunci

### 1. Definisi (slide 3–4)
- **Kamus**: representasi skematis urutan operasi (manufaktur atau program).
- **Teknis**: representasi grafis urutan operasi dalam sistem informasi/program.
  - *Flowchart sistem*: aliran data dari dokumen sumber, lewat komputer, sampai ke pengguna.
  - *Flowchart program*: urutan instruksi dalam satu program/subroutine.
- Menekankan **langkah individual** dan **interkoneksinya** (aliran kendali).

### 2. Simbol dasar (slide 5 berupa gambar; dilengkapi dari penjelasan dosen & standar umum)
| Simbol | Bentuk | Fungsi |
|--------|--------|--------|
| Terminal | oval / persegi bersudut bulat | START / FINISH |
| Input/Output | jajar genjang | GET (baca), GIVE (tampilkan) |
| Proses | persegi panjang | LET (hitung/assignment) |
| Keputusan (decision) | belah ketupat (*diamond*) | kondisi, keluaran **Yes/No** |
| Flow line | panah | arah aliran |
| Konektor | lingkaran berlabel (A, B, …) | menyambung alur yang terpotong (pindah kolom/halaman) |

Kata dosen: flowchart lazimnya mengalir **ke bawah**; kalau mentok di bawah halaman tapi masih ada ruang di samping, pakai **konektor** dengan label sama (A … A) agar pembaca tahu kelanjutannya.

### 3. Struktur kendali (slide 6–14)
| Struktur | Arti | Bentuk flowchart |
|----------|------|------------------|
| **Berurutan** | instruksi dijalankan satu per satu | kotak-kotak tersusun lurus |
| **Bercabang** | memilih jalur berdasarkan kondisi | diamond dengan cabang Yes/No yang **bertemu lagi** |
| **Berulang** | ditulis sekali, dijalankan berkali-kali | panah **kembali ke atas** (ke diamond kondisi) |

```
Sequence:          Selection:                   Loop:
[START]            [GET X]                      [LET i = 1]
   │                  │                             │
[GET A]            ◇ X > 0 ? ◇               ┌──▶◇ i <= 5 ? ◇──No──▶[FINISH]
   │               Yes│     │No              │      │Yes
[LET B = A*2]   [GIVE "+"] [GIVE "-"]        │  [GIVE i]
   │                  └──┬──┘                │      │
[GIVE B]                 │                   └──[LET i = i + 1]
   │                 [FINISH]
[FINISH]
```

### 4. Latihan slide 15 (petunjuk, bukan jawaban)
Modifikasi algoritma Quotient = X / Y:
- Y = 0 dan X = 0 → "Infinite"
- Y = 0 dan X ≠ 0 → "Undefined"
- selain itu → tampilkan Quotient

Petunjuk: cek **Y = 0 dulu** (diamond pertama), lalu di cabang Yes cek X = 0 (diamond kedua) → ini pola *nested selection*.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Flowchart | diagram alir |
| Terminal | simbol awal/akhir |
| Decision | simbol keputusan (diamond) |
| Konektor | penghubung alur yang terpisah |
| Struktur kendali | blok yang menentukan arah eksekusi berikutnya |
| Sequence / selection / loop | runtunan / percabangan / perulangan |

## Sering keluar di ujian / mudah keliru
- **Input/output = jajar genjang**, **proses = persegi panjang**, **keputusan = belah ketupat** — paling sering tertukar.
- Setiap diamond punya **dua** keluaran berlabel (Yes/No, Y/N).
- Loop dikenali dari panah yang **kembali** ke langkah sebelumnya.
- Satu flowchart punya satu START dan satu FINISH (atau END).

## Pertanyaan untuk dicek ke dosen
- Simbol flowchart di slide 5 tidak terbaca (gambar) — apakah ada simbol lain yang dipakai (preparation, predefined process, document)?

## Sumber
- `Dasar Pemrograman Pertemuan 3.pdf` slide 3–15 (teks: `arsip/teks-materi/Dasar Pemrograman Pertemuan 3.pdf.md`; slide 5, 8–9, 11, 13–14 berupa gambar)
- Transkrip `arsip/transkrip/9025113-video1193849624-mp4.md` (penjelasan simbol proses, diamond, konektor)
