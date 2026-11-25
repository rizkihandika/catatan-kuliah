# P06 — Memory Internal

Tanggal: 2026-11-28 · Sumber: `materi/dPRAS_OrKom#06 Memory Internal.pdf`

## Ringkasan 3 kalimat
Memori disusun dalam **hirarki**: makin ke bawah (register → cache → main memory → disk → tape/optical) makin **murah per bit, besar, lambat, dan jarang diakses CPU**. Memori dibedakan menurut lokasi, bahan fisik, metode akses (sequential, direct, random, associative), serta sifat volatile/non-volatile dan erasable/non-erasable. Memori internal utama adalah **RAM** (SRAM cepat & mahal tanpa refresh; DRAM murah & padat tapi butuh refresh) dan **ROM** (non-volatile, berisi program tetap seperti POST).

## Konsep kunci

### 1. Hirarki memori (slide 2–4)
```
        ▲  Register            ← tercepat, termahal, terkecil (8–128 bit), paling sering diakses
        │  Cache
        │  Main memory (RAM)
        │  Disk cache
        │  Magnetic disk
        │  Magnetic tape / Optical disc   ← terlambat, termurah, terbesar (GB), jarang diakses
```
| Makin ke bawah | |
|----------------|-|
| Harga per bit | makin **murah** |
| Kapasitas | makin **besar** |
| Kecepatan akses | makin **lambat** |
| Frekuensi akses CPU | makin **jarang** |

### 2. Klasifikasi memori (slide 5)
| Dasar | Jenis | Contoh |
|-------|-------|--------|
| Peran | Main/internal memory | RAM |
| | Secondary/external memory | hard disk, RAID, magnetic tape |
| Lokasi | Processor memory | register |
| | Main memory | RAM |
| | External memory | hard disk, RAID, CD-ROM, tape |
| Fisik | Semikonduktor | RAM, ROM, EEPROM, flash |
| | Magnetik | hard disk, disket, tape |
| | Optik | CD-R, CD-RW, DVD |

### 3. Empat metode akses (slide 6–7)
| Metode | Cara | Kecepatan | Contoh |
|--------|------|-----------|--------|
| **Sequential** | berurutan satu per satu | sangat lambat | magnetic tape |
| **Direct** | langsung ke posisi **track & sector** | lebih cepat dari sequential | hard disk, disket |
| **Random** | lewat **address decoder** | cepat | RAM |
| **Associative** | membandingkan **isi** dengan **key** (bukan alamat) | sangat cepat | cache memory |

**Intuisi**: sequential = kaset (harus diputar maju), direct = piringan hitam (taruh jarum di jalur), random = loker bernomor, associative = mencari teman di kerumunan berdasarkan wajah, bukan nomor kursi.

### 4. Karakteristik fisik (slide 8–9)
| Sifat | Arti | Contoh |
|-------|------|--------|
| **Volatile** | listrik mati → data **hilang** | RAM (EDO-RAM, SDRAM, DDR) |
| **Non-volatile** | listrik mati → data **tetap** | EPROM, EEPROM, flash |
| **Erasable** | bisa dihapus & diisi ulang | EPROM (sinar **UV**), EEPROM (**listrik**), flash (listrik) |
| **Non-erasable** | sekali tulis, salah isi → buang | ROM, PROM |

### 5. RAM: SRAM vs DRAM (slide 10–14)
RAM = memori baca/tulis, isinya bisa di-update kapan saja, **volatile**, menyimpan data/instruksi selama pemrosesan.

| Aspek | **SRAM** (Static) | **DRAM** (Dynamic) |
|-------|------------------|-------------------|
| Komponen | transistor (slide: bipolar) / flip-flop | **kapasitor** + transistor sebagai switch |
| Refresh | **tidak perlu** | **perlu refresh cycle** (muatan kapasitor bocor) |
| Daya | relatif besar | relatif kecil |
| Kerapatan / kapasitas | kecil | besar |
| Harga per byte | mahal | murah |
| Kecepatan | **sangat tinggi** | lebih lambat |
| Cocok untuk | sistem kecil / butuh kecepatan (mis. **cache**) | sistem besar (mis. **memori utama**) |

Struktur sel DRAM: **address line** (memilih sel) + **storage capacitor** (menyimpan muatan = data) + **transistor** (switch pengisi kapasitor).

### 6. ROM (slide 16–17)
- Berisi program **tetap**, non-volatile.
- Aplikasi: **microprogramming**, library subroutine, program sistem, tabel fungsi.
- **POST** (Power-On Self Test): program inisialisasi + diagnostik standar saat komputer dinyalakan.
- Masalah ROM: biaya penyisipan data tinggi; satu bit salah → ROM tak bisa dipakai → lahir ROM yang bisa diprogram/dihapus.
- Keluarga: **ROM → EPROM → EEPROM → Flash**.

### 7. Sel memori (slide 18–19)
- Elemen terkecil memori, menyimpan **1 bit** (0/1), dibangun dari **flip-flop** (bistable multivibrator), bisa baca/tulis.
- Tiga sinyal: **R/W** (kendali baca/tulis), **Select** (memilih sel), **Data in/out**.

### 8. Error pada RAM (slide 20)
| Jenis | Sifat | Penyebab |
|-------|-------|----------|
| **Kegagalan berat** (hard failure) | kerusakan fisik **permanen**, sel tak bisa dipakai | rusak fisik |
| **Kegagalan ringan** (soft error) | **acak & tidak merusak**, mengubah isi sel | mis. catu daya tidak stabil |

## Istilah penting
| Istilah | Arti |
|---------|------|
| Hirarki memori | Susunan memori menurut kecepatan, kapasitas, harga |
| Address decoder | Rangkaian penerjemah alamat ke sel memori |
| Volatile | Data hilang saat listrik mati |
| SRAM / DRAM | RAM statis (flip-flop) / dinamis (kapasitor) |
| Refresh | Pengisian ulang muatan kapasitor DRAM secara berkala |
| EPROM / EEPROM | ROM yang bisa dihapus dengan UV / listrik |
| POST | Program uji diri saat komputer dinyalakan |
| Flip-flop | Rangkaian bistabil penyimpan 1 bit |

## Sering keluar di ujian / mudah keliru
- Arah sifat hirarki: makin **bawah** = murah, besar, **lambat**, jarang diakses.
- Cache memakai **associative access**; RAM = random; hard disk = direct; tape = sequential.
- **SRAM tanpa refresh & cepat & mahal** vs **DRAM butuh refresh & murah & padat** — sering dibalik.
- EPROM dihapus **sinar UV**, EEPROM & flash dihapus **listrik**.
- ROM & PROM = non-erasable.
- Slide 14 berjudul "SRAM (= Dynamic RAM)" — itu salah ketik; isinya struktur **DRAM** (kapasitor).

## Pertanyaan untuk dicek ke dosen
- Slide menyebut SRAM dari "transistor bipolar"; sumber lain menyebut flip-flop MOSFET. Jawaban UTS mengikuti slide?
- Diagram organisasi memori 16 Mbit (slide 15) tidak terbaca — perlu dipelajari detailnya?

## Sumber
- `dPRAS_OrKom#06 Memory Internal.pdf` slide 2–20 (teks: `arsip/teks-materi/dPRAS_OrKom#06 Memory Internal.pdf.md`)
