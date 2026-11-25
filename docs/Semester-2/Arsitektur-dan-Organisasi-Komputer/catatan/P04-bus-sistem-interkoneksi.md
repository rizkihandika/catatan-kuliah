# P04 — Bus & Sistem Interkoneksi

Tanggal: 2026-11-14 · Sumber: [`dPRAS_OrKom#04 Bus & Sistem Interkoneksi.pdf`](../materi/dPRAS_OrKom%2304%20Bus%20%26%20Sistem%20Interkoneksi.pdf)

## Ringkasan 3 kalimat
**Bus** adalah saluran bersama yang menghubungkan microprocessor dengan komponen pendukungnya, terdiri dari tiga bus dasar: **data bus** (dua arah), **address bus** (satu arah), dan **control bus**. Kalau terlalu banyak perangkat menempel di satu bus, muncul *propagation delay* dan *bottleneck*, sehingga arsitektur berkembang dari **traditional bus (ISA, bus tunggal)** ke **high speed bus (PCI, multi bus)**. Perancangan bus ditentukan oleh jenis (dedicated/multiplexed), metode arbitrasi, timing, lebar bus, dan tipe transfer data.

## Konsep kunci

### 1. Tiga bus dasar (slide 2–4)
**Intuisi**: bus = jalan raya; data bus = truk barang, address bus = alamat tujuan di paket, control bus = rambu lalu lintas.

| Bus | Arah | Fungsi | Lebarnya menentukan… |
|-----|------|--------|----------------------|
| **Data bus** | **bi-directional** | mengangkut data antara CPU dan komponen | jumlah bit yang diambil per satuan waktu; dipakai sebagai **taksonomi** CPU (CPU "16 bit", "32 bit") |
| **Address bus** | **uni-directional** (CPU → komponen) | membawa alamat; tiap komponen harus punya alamat **unik** | jumlah komponen/lokasi yang bisa dialamati |
| **Control bus** | (slide: uni-directional) | membawa sinyal kontrol antar bagian | — |

Tambahan (bukan dari slide): n jalur address bus → **2ⁿ** alamat. Contoh 16 jalur → 2¹⁶ = 65.536 lokasi (64 K); 20 jalur → 1 M.

Sinyal di control bus: **Memory Write, Memory Read, I/O Write, I/O Read, Transfer ACK, Bus Request, Bus Grant, Interrupt Request, Interrupt ACK, Reset, Clock**.

### 2. Struktur interkoneksi (slide 5–7)
Kumpulan lintasan yang menghubungkan modul CPU, memori, I/O.
| 3 jenis transfer data | 3 jenis interkoneksi |
|-----------------------|----------------------|
| CPU ↔ Memori | CPU interconnection |
| CPU ↔ I/O | Memory interconnection |
| I/O ↔ Memori (**DMA**) | I/O interconnection |

### 3. Kelemahan bus sistem (slide 8)
Banyak perangkat I/O/memori di satu data bus → kinerja turun karena:
- **Propagation delay** (sinyal butuh waktu merambat; makin panjang/banyak, makin lambat)
- **Bottleneck** (antrean pemakaian bus)

### 4. Traditional bus vs high speed bus (slide 8–12)
| Aspek | Traditional bus (**ISA**) | High speed bus (**PCI**) |
|-------|---------------------------|--------------------------|
| Struktur | **bus tunggal** (single bus) | **bus ganda** (multi bus) |
| Peripheral cepat & lambat | digabung di **expansion bus yang sama** | dipisah: cepat (video, graphic, LAN, SCSI) di **high speed bus**, lambat (modem, fax, serial) di **expansion bus** |
| Beban bus sistem | sangat berat → lambat | lebih ringan → lebih cepat |
| Era | IBM-PC 8088, tahun 80-an | lebih baru |
| Penghubung | expansion bus interface | **cache/bridge** |

### 5. Elemen perancangan bus (slide 13–14)
| Elemen | Pilihan |
|--------|---------|
| 1. Jenis bus | **Dedicated**: jalur data & alamat terpisah, mahal, cepat · **Multiplexed**: jalur data & alamat digabung, murah, lambat |
| 2. Metode arbitrasi | tersentralisasi · terdistribusi |
| 3. Timing | synchronous · asynchronous |
| 4. Lebar bus | address · data |
| 5. Tipe transfer data | write · read · read-modify-write · read-after-write · block |

### 6. Bus PCI (slide 15)
- **Peripheral Component Interconnect**, dikeluarkan **Intel** sebagai *public domain*.
- **32 atau 64 bit**, **50 jalur** (wajib).
- Jalur opsional: interrupt lines (tidak di-share), cache support, **64-bit bus extension** (32 jalur tambahan, *time multiplexed*, 2 jalur untuk menyepakati transfer 64 bit), **JTAG/boundary scan** (untuk pengujian).

## Istilah penting
| Istilah | Arti |
|---------|------|
| Bus | Saluran bersama penghubung CPU dengan komponen lain |
| Bi-directional / uni-directional | Dua arah / satu arah |
| Propagation delay | Waktu tunda perambatan sinyal |
| Bottleneck | Hambatan karena satu jalur jadi rebutan |
| ISA | Industry Standard Architecture (bus tradisional) |
| PCI | Peripheral Component Interconnect (bus kecepatan tinggi) |
| Bridge | Penghubung antarbus berbeda kecepatan |
| Arbitrasi | Cara menentukan siapa yang boleh memakai bus |
| DMA | Direct Memory Access — transfer I/O ↔ memori tanpa CPU |

## Sering keluar di ujian / mudah keliru
- **Data bus = dua arah**, **address bus = satu arah**.
- Lebar **data bus** → taksonomi CPU (8/16/32/64 bit); lebar **address bus** → kapasitas pengalamatan.
- Dedicated = **mahal & cepat**; multiplexed = **murah & lambat**.
- ISA = single bus; PCI = multi bus.
- Transfer I/O ↔ memori = operasi **DMA**.

## Pertanyaan untuk dicek ke dosen
- Slide menyebut control bus "uni-directional", padahal sinyal seperti Bus Request/Interrupt Request berasal dari perangkat ke CPU. Untuk ujian, jawabannya tetap mengikuti slide?

## Sumber
- `dPRAS_OrKom#04 Bus & Sistem Interkoneksi.pdf` slide 2–15 (teks: `arsip/teks-materi/dPRAS_OrKom#04 Bus & Sistem Interkoneksi.pdf.md`)
