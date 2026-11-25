# P05 — Bus & Sistem Interkoneksi (Bagian II): Register, Siklus Instruksi, Interupsi

Tanggal: 2026-11-21 · Sumber: `materi/dPRAS_OrKom#05 Bus & Sistem Interkoneksi Bagian II.pdf`

## Ringkasan 3 kalimat
CPU berkomunikasi dengan memori dan I/O lewat register khusus: **MAR/MBR** untuk memori dan **I/O AR/I/O BR** untuk perangkat I/O. Setiap instruksi dijalankan lewat **siklus instruksi**: *fetch* (ambil instruksi dari memori ke IR, PC naik) → *execute* → *interrupt* (bila ada interupsi aktif). **Interupsi** membuat CPU menunda rutin utama untuk melayani modul lain, sehingga kerja CPU dengan memori/I/O yang kecepatannya berbeda menjadi efisien.

## Konsep kunci

### 1. Register penghubung (slide 3)
| Register | Fungsi |
|----------|--------|
| **MAR** (Memory Address Register) | alamat memori yang akan diakses (read/write) |
| **MBR** (Memory Buffer Register) | data yang akan ditulis ke / dibaca dari memori |
| **I/O AR** (I/O Address Register) | menunjuk perangkat I/O yang akan diakses |
| **I/O BR** (I/O Buffer Register) | data yang ditulis ke / disalin dari port I/O |
| **PC** (Program Counter) | alamat instruksi **berikutnya** |
| **IR** (Instruction Register) | instruksi yang **sedang** dijalankan |
| **AC** (Accumulator) | penyimpan hasil sementara |

Pola: **AR = alamat**, **BR = data**.

### 2. Modul I/O (slide 4)
Memindahkan data antara perangkat eksternal dan CPU, punya **buffer internal** untuk menampung data sementara.

### 3. Dua langkah instruksi & empat kategori aksi CPU (slide 4–5)
- **Fetch**: CPU membaca instruksi dari memori (operasi umum untuk setiap instruksi).
- **Execute**: CPU menjalankan instruksi (bisa melibatkan beberapa operasi).

| Kategori aksi | Contoh |
|---------------|--------|
| CPU ↔ Memori | pindah data CPU ke memori atau sebaliknya |
| CPU ↔ I/O | pindah data ke/dari dunia luar lewat modul I/O |
| Pengolahan data | operasi aritmetika/logika |
| **Control** | mengubah urutan eksekusi: instruksi di lokasi 149 menyuruh lompat ke 182 → PC di-set **182**, fetch berikutnya dari 182 (bukan 150) |

### 4. Contoh eksekusi program (slide 6–11)
Program 3 instruksi di alamat 300–302: *load AC dari 940 → tambah AC dengan isi 941 → simpan AC ke 941*. Instruksi 16 bit: **4 bit pertama = opcode**, **12 bit sisanya = alamat**.

| Tahap | Kejadian |
|-------|----------|
| 1 | PC = **300**; instruksi di 300 dimuat ke **IR** |
| 2 | 4 bit opcode → "muat AC"; 12 bit alamat → **940**; isi 940 masuk AC |
| 3 | PC naik (301), instruksi berikutnya diambil |
| 4 | isi AC lama + isi lokasi **941** → hasil disimpan di AC |
| 5 | PC naik (302), instruksi berikutnya diambil |
| 6 | isi AC disimpan ke lokasi **941** |

Ilustrasi angka (contoh klasik buku Stallings, gambar slide tidak terekstrak): isi 940 = 3, isi 941 = 2 → AC = 3 → AC = 3 + 2 = 5 → lokasi 941 = 5.

### 5. Interupsi (slide 12–13)
- **Definisi**: kondisi yang membuat CPU berhenti mengerjakan rutin utama dan **melompat ke vektor interupsi** untuk menjalankan rutin interupsi.
- Normalnya CPU mengeksekusi berurutan dari alamat 0x0000, 0x0001, … diatur **PC**; lompatan terjadi saat percabangan, pemanggilan subrutin, loop — atau interupsi.
- **Fungsi**: mengalihkan pengolahan instruksi CPU ke rutin interupsi; hampir semua modul (memori, I/O) bisa menginterupsi.
- **Tujuan**: manajemen eksekusi yang **efektif & efisien** antara CPU dan modul I/O/memori yang kecepatannya berbeda; juga **sinkronisasi** antarmodul.
- **Intuisi**: kamu sedang belajar (rutin utama), lalu bel pintu berbunyi (interupsi). Kamu tandai halaman (simpan status), buka pintu (rutin interupsi), lalu lanjut belajar dari halaman yang sama.

### 6. Siklus instruksi (slide 14)
```
     ┌──────────┐    ┌────────────┐    interrupt aktif & terjadi?
 ──▶ │  FETCH   │──▶ │  EXECUTE   │──▶ ── ya ──▶ INTERRUPT CYCLE ──┐
 ▲   └──────────┘    └────────────┘      tidak                     │
 └──────────────────────────────────────────┴──────────────────────┘
```
1. **Fetch cycle**: ambil instruksi yang akan dieksekusi.
2. **Execute cycle**: lakukan operasi sesuai **opcode**.
3. **Interrupt cycle**: bila interupsi diaktifkan dan terjadi → **simpan status proses** lalu layani interupsi.

### 7. Futurebus+ vs PCI (slide 15–16)
| PCI | Futurebus+ |
|-----|-----------|
| implementasi **murah**, butuh ruang fisik minimal | fleksibilitas tinggi, fungsionalitas luas untuk sistem **berkinerja tinggi & mahal** |

## Istilah penting
| Istilah | Arti |
|---------|------|
| Fetch | Mengambil instruksi dari memori |
| Execute | Menjalankan instruksi |
| Opcode | Bagian instruksi yang menyatakan operasi |
| Program Counter | Register berisi alamat instruksi berikutnya |
| Instruction Register | Register berisi instruksi yang sedang dijalankan |
| Interrupt | Sinyal yang menghentikan sementara rutin utama CPU |
| Vektor interupsi | Alamat rutin penanganan interupsi |
| Interrupt cycle | Tahap menyimpan status & melayani interupsi |

## Sering keluar di ujian / mudah keliru
- **MAR = alamat**, **MBR = data** (sama pola untuk I/O AR/BR).
- Siklus instruksi = **fetch → execute → interrupt** (interrupt hanya jika diaktifkan & terjadi).
- PC menyimpan alamat instruksi **berikutnya**, bukan yang sedang jalan.
- Instruksi kontrol (lompat) mengubah **PC**.
- PCI = murah/minimal; Futurebus+ = mahal/kinerja tinggi.

## Pertanyaan untuk dicek ke dosen
- Gambar contoh eksekusi (slide 6–11) tidak terbaca di ekstraksi teks — apakah nilai memori dan kode opcode-nya perlu dihafal untuk UTS?

## Sumber
- `dPRAS_OrKom#05 Bus & Sistem Interkoneksi Bagian II.pdf` slide 2–16 (teks: `arsip/teks-materi/dPRAS_OrKom#05 Bus & Sistem Interkoneksi Bagian II.pdf.md`)
