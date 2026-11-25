# P02 — Organisasi Komputer: Pengertian, Struktur & Fungsi

Tanggal: 2026-10-31 · Sumber: [`dPRAS_OrKom#02 Organisasi Komputer.pdf`](../materi/dPRAS_OrKom%2302%20Organisasi%20Komputer.pdf)

## Ringkasan 3 kalimat
Komputer adalah mesin elektronik untuk memproses data menjadi informasi, yang butuh tiga elemen: *hardware*, *software*, dan *brainware*. **Arsitektur** adalah atribut yang terlihat programmer (set instruksi, mekanisme I/O) dan bisa bertahan lama, sedangkan **organisasi** adalah implementasi fisiknya (teknologi hardware, sinyal kontrol) yang berubah mengikuti teknologi. Struktur top level komputer terdiri dari **CPU, memori utama, I/O, dan system interconnection**, dengan empat fungsi dasar: **pengolahan, penyimpanan, pemindahan data, dan kontrol**.

## Konsep kunci

### 1. Pengertian komputer menurut ahli (slide 3–4)
| Tokoh | Inti definisi |
|-------|---------------|
| Robert H. Blissmer | perangkat elektronik yang menerima input, memproses, menyimpan, dan menghasilkan output berupa informasi |
| Larry Long & Nancy Long | alat hitung elektronik yang menginterpretasikan & mengerjakan perintah program (input, output, perhitungan, operasi logika) |
| Oxford English Dictionary | perangkat untuk menghitung atau mengendalikan operasi yang dinyatakan dalam bentuk numerik atau logika |

Kesimpulan: fungsi utama = **perhitungan**; butuh **hardware + software + brainware**; output bisa analog maupun digital.

### 2. Lima unit fungsional dasar (slide 5)
**Masukan (input) · Memori · Aritmetika & logika (ALU) · Keluaran (output) · Kontrol**

### 3. Arsitektur vs organisasi (slide 6–7) — paling sering ditanya
| Aspek | Arsitektur | Organisasi |
|-------|-----------|------------|
| Definisi | konsep/perencanaan struktur operasi dasar sistem komputer | rangkaian komponen fungsional yang saling terhubung sebagai **implementasi** arsitektur |
| Sudut pandang | atribut yang terlihat **programmer** | unit pelaksana & interkoneksinya (tak terlihat programmer) |
| Contoh | set instruksi, aritmetika yang digunakan, mekanisme I/O | teknologi hardware, perangkat antarmuka, teknologi memori, sinyal kontrol |
| Umur | bisa dipakai **sangat lama** | **berubah** mengikuti perkembangan teknologi |

**Intuisi**: arsitektur = denah rumah (jumlah kamar, letak pintu); organisasi = bahan bangunan & cara membangunnya. Denah sama bisa dibangun dengan bata atau beton. Contoh nyata: arsitektur x86 dipakai puluhan tahun, organisasi prosesornya terus berganti.

### 4. Struktur top level (slide 8–9)
| Komponen | Fungsi |
|----------|--------|
| **CPU** (prosesor) | mengontrol operasi komputer & pusat pengolahan |
| **Memori utama** | menyimpan data |
| **I/O** | memindahkan data ke/dari lingkungan luar |
| **System interconnection** | menghubungkan CPU, memori, I/O (mis. bus) |

### 5. Struktur di dalam CPU (slide 10)
| Komponen | Fungsi |
|----------|--------|
| **Control Unit (CU)** | mengontrol operasi CPU & komputer secara keseluruhan |
| **ALU** | melakukan fungsi pengolahan data (aritmetika & logika) |
| **Register** | penyimpan internal CPU (paling cepat) |
| **CPU interconnection** | menghubungkan bagian-bagian CPU |

### 6. Empat fungsi dasar komputer (slide 11–13)
| Fungsi | Penjelasan | "Alat" di diagram fungsi |
|--------|-----------|--------------------------|
| Data processing | mengolah data | Data Processing Facility |
| Data storage | menyimpan data (sementara/jangka panjang) | Data Storage Facility |
| Data movement | memindah data lewat *interface*/I/O ke **peripheral**; jarak jauh = **komunikasi data** | Data Movement Apparatus |
| Control | mengendalikan internal & peralatan lain | Control Mechanism |

### 7. Alur operasi (slide 14–16)
- **Pengolahan (1)**: Storage → (Control) → Processing → hasil kembali ke Storage.
- **Pengolahan (2)**: Data Movement → (Control) → Processing → Storage (dan sebaliknya Storage → Processing → Data Movement).
- **Penyimpanan**: Data Movement → (Control) → "save" ke Storage; sebaliknya Storage → "write" ke Data Movement.
- Pola umumnya: **Control selalu jadi perantara**.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Brainware | Manusia yang mengoperasikan komputer |
| Arsitektur komputer | Atribut sistem yang terlihat programmer |
| Organisasi komputer | Implementasi fisik arsitektur |
| Peripheral | Perangkat luar yang terhubung lewat I/O |
| Control Unit | Pengendali operasi CPU |
| ALU | Unit aritmetika & logika |
| Register | Memori internal CPU |
| System interconnection | Penghubung CPU–memori–I/O |

## Sering keluar di ujian / mudah keliru
- Membedakan contoh arsitektur vs organisasi: **set instruksi = arsitektur**, **teknologi memori/sinyal kontrol = organisasi**.
- Struktur top level (4: CPU, memori, I/O, interkoneksi) ≠ struktur CPU (4: CU, ALU, register, CPU interconnection) ≠ unit fungsional dasar (5: input, memori, ALU, output, kontrol).
- Fungsi dasar ada **4**: processing, storage, movement, control.

## Pertanyaan untuk dicek ke dosen
- Apakah definisi para ahli (Blissmer, Long & Long, OED) perlu dihafal nama tokohnya untuk UTS?

## Sumber
- `dPRAS_OrKom#02 Organisasi Komputer.pdf` slide 2–16 (teks: `arsip/teks-materi/dPRAS_OrKom#02 Organisasi Komputer.pdf.md`)
