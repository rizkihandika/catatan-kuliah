# Ringkasan Matkul — Arsitektur dan Organisasi Komputer (P01–P06)

> Dosen: Dr. Dwi Prasetyo · Arsip lengkap: [../arsip/README.md](../arsip/README.md) · Teks materi: ../arsip/teks-materi/ *(ada di Edlink)*
> Kelas ini sejauh ini hanya berisi **post materi PDF** (tanpa kuis, tugas, vicon, atau video di Edlink). Banyak slide berupa gambar, jadi diagram (bus, siklus instruksi, organisasi DRAM) sebaiknya dilihat langsung di PDF-nya.

## Peta besar
Arsitektur dan organisasi komputer itu ibarat **denah rumah** dan **bahan bangunannya**. Pertemuan berjalan dari luar ke dalam: definisi & struktur komputer → sejarah/evolusi → **bus** (jalan penghubung) → siklus instruksi & interupsi → **memori internal**. Setelah UTS (RPS): memori eksternal (disk, RAID, optik), I/O (interrupt-driven, DMA), dukungan OS (scheduling, manajemen memori), aritmatika komputer (integer & floating point).

---

## P01 — Pendahuluan (rencana semester)
Sumber: `dPRAS_OrKom#01 Pendahuluan.pdf`

Isinya peta RPS, urutan topiknya: konsep dasar & struktur/fungsi komputer → evolusi & kinerja (Pentium, PowerPC) → sistem bus (PCI, Futurebus) → memori internal (semikonduktor, cache, DRAM lanjut) → **UTS** → memori eksternal (magnetic disk, RAID, optik, pita) → I/O (perangkat eksternal, modul I/O, interrupt-driven I/O, DMA) → dukungan OS (scheduling, manajemen memori) → aritmatika komputer (ALU, integer, floating-point) → **UAS**. Kuis direncanakan untuk evolusi Pentium, komponen & fungsi komputer, kinerja memori, dan memori eksternal.

## P02 — Organisasi Komputer
Sumber: `dPRAS_OrKom#02 Organisasi Komputer.pdf`

- **Komputer** (Blissmer; Long & Long; OED): mesin elektronik untuk menghitung dan memproses data menjadi informasi. Butuh 3 elemen: **hardware, software, brainware**.
- **5 unit fungsional dasar**: masukan, memori, aritmetika & logika, keluaran, kontrol.
- **Arsitektur** = atribut yang terlihat oleh *programmer* (set instruksi, aritmetika, mekanisme I/O). **Organisasi** = implementasinya (teknologi hardware, antarmuka, teknologi memori, sinyal kontrol).
  - Arsitektur bisa bertahan lama dan tetap sama, sedangkan organisasi berubah mengikuti teknologi.
- **Struktur top level** (4): **CPU** (pengontrol + pengolah), **memori utama** (penyimpan), **I/O** (pindah data ke luar), **system interconnection** (penghubung ketiganya).
- **Struktur CPU** (4): **Control Unit**, **ALU**, **Register** (penyimpan internal CPU), **CPU interconnection**.
- **4 fungsi dasar**: *data processing*, *data storage*, *data movement* (lewat I/O/peripheral; jarak jauh disebut komunikasi data), *control*.
- Diagram fungsi: *Data Movement Apparatus*, *Data Storage Facility*, *Data Processing Facility*, *Control Mechanism*. Contoh alur pengolahan: Control ambil data dari Storage → Processing → hasil disimpan lagi ke Storage.

## P03 — Evolusi dan Kinerja Komputer
Sumber: `dPRAS_OrKom#03 Evolusi Dan Kinerja Komputer.pdf`

| Generasi | Teknologi | Ciri |
|---|---|---|
| 1 (1945–1955) | Tabung vakum | bahasa mesin, memori *magnetic core*, besar, boros listrik |
| 2 (1955–1965) | Transistor | FORTRAN/COBOL/ALGOL, memori sekunder *magnetic tape*, lebih kecil & hemat |
| 3 (1965–1980) | IC | monitor bisa menampilkan grafik, fitur jaringan, lebih hemat |
| 4 (1980–) | LSI/VLSI (chip) | mikroprosesor, memori semikonduktor |

- Tahap pemampatan berikutnya: **ULSI**, lalu ide **WSI** (seluruh komputer dalam satu wafer). Makin rapat komponennya, makin murah dan makin cepat karena jarak antarkomponen pendek.
- **Evolusi Intel (versi slide)**: 8080 (1972, 8-bit) → 8086 (16-bit, cache instruksi) → 80286 (1982, 1 MB) → 80386 (1985, 32-bit, multitasking) → 80486 (1989, cache + *pipelining*, *math co-processor*) → Pentium (1993, **superskalar**) → Pentium Pro (1995, prediksi cabang, analisis aliran data) → Pentium II (1997, MMX multimedia) → Pentium III (floating point untuk 3D) → Pentium 4.
- **Faktor perancangan kinerja**: kecepatan mikroprosesor dan **keseimbangan kinerja** (prosesor cepat percuma kalau memori/bus lambat).

## P04 — Bus & Sistem Interkoneksi
Sumber: `dPRAS_OrKom#04 Bus & Sistem Interkoneksi.pdf`

- **Intuisi**: bus adalah jalan raya bersama antara CPU, memori, dan I/O.
- **3 bus dasar**:
  - **Data bus**: *bi-directional*. Lebarnya menentukan berapa bit yang diangkut sekali jalan, dan dipakai untuk mengklasifikasikan prosesor (8/16/32/64-bit).
  - **Address bus**: *uni-directional* dari CPU. Tiap komponen punya alamat **unik**, dan lebar bus menentukan berapa banyak lokasi yang bisa dialamati (n jalur → 2ⁿ alamat).
  - **Control bus**: membawa sinyal kontrol, yaitu Memory Read/Write, I/O Read/Write, Transfer ACK, Bus Request/Grant, Interrupt Request/ACK, Reset, Clock.
- **Jenis transfer**: CPU↔Memori, CPU↔I/O, I/O↔Memori (**DMA**). Jenis interkoneksi: CPU, memori, I/O.
- **Kelemahan bus tunggal**: terlalu banyak perangkat menimbulkan *propagation delay* dan *bottleneck*.
- **Traditional bus (ISA)**: *single bus*, perangkat cepat dan lambat berbagi *expansion bus* yang sama sehingga lambat (era IBM PC 8088). **High-speed bus (PCI)**: *multi bus*, perangkat cepat (video, grafis, LAN, SCSI) di high-speed bus dan yang lambat (modem, fax, serial) di expansion bus, sehingga beban bus sistem lebih ringan.
- **Elemen desain bus**:
  - **Jenis**: *dedicated* (jalur data & alamat terpisah, mahal, cepat) vs *multiplexed* (digabung, murah, lambat).
  - **Arbitrasi**: tersentralisasi atau terdistribusi.
  - **Timing**: *synchronous* atau *asynchronous*.
  - **Lebar**: lebar alamat dan lebar data.
  - **Tipe transfer**: write, read, read-modify-write, read-after-write, block.
- **PCI** (Peripheral Component Interconnect): dari Intel (*public domain*), 32/64-bit, 50 jalur wajib + jalur opsional (interrupt, cache support, ekstensi 64-bit, JTAG untuk testing).

## P05 — Bus & Sistem Interkoneksi II (Siklus Instruksi & Interupsi)
Sumber: `dPRAS_OrKom#05 Bus & Sistem Interkoneksi Bagian II.pdf`

- **Register penting**:
  - **MAR**: alamat memori yang diakses.
  - **MBR**: data yang ditulis ke atau dibaca dari memori.
  - **I/O AR**: perangkat I/O yang dituju.
  - **I/O BR**: data ke/dari port.
  - **PC**: alamat instruksi berikutnya.
  - **IR**: instruksi yang sedang dikerjakan.
  - **AC**: akumulator.
- **Modul I/O** punya *buffer* internal untuk menampung data sementara.
- **Siklus dasar**: **fetch** (baca instruksi dari memori) → **execute**. Aksi saat eksekusi ada 4 kategori: CPU↔Memori, CPU↔I/O, pengolahan data (aritmetika/logika), dan *control* (mengubah urutan eksekusi, mis. PC di-set ke 182, bukan 150).
- **Contoh eksekusi (PC = 300)**: instruksi 16-bit = 4 bit **opcode** + 12 bit **alamat**.
  1. Instruksi di alamat 300 dimuat ke IR.
  2. Opcode "load AC" mengambil isi alamat 940 ke AC.
  3. PC naik ke instruksi berikutnya.
  4. "add": AC + isi alamat 941, hasilnya disimpan di AC.
  5. PC naik lagi.
  6. "store": AC disimpan ke alamat 941.
- **Interupsi** = CPU menghentikan rutin utama, melompat ke *vektor interupsi*, menjalankan rutin interupsi, lalu kembali. Tujuannya efisiensi dan sinkronisasi, karena kecepatan CPU dan modul I/O berbeda.
- **Siklus instruksi lengkap**: **fetch → execute → interrupt** (kalau ada interupsi aktif, simpan status lalu layani).
- **PCI vs Futurebus+**: PCI untuk implementasi murah dan ringkas, Futurebus+ untuk sistem kinerja tinggi yang mahal dan fleksibel.

## P06 — Memory Internal
Sumber: `dPRAS_OrKom#06 Memory Internal.pdf`

- **Hirarki memori** (atas → bawah): register → cache → main memory → disk cache → magnetic disk → magnetic tape / optical disc. Makin ke bawah: **makin murah per bit, makin besar, makin lambat, makin jarang diakses CPU**.
- **Lokasi**: processor memory (register), main/internal (RAM), external (HDD, RAID, CD, tape). **Fisik**: semikonduktor (RAM, ROM, EEPROM, Flash), magnetik, optik.
- **4 metode akses**:

| Metode | Cara | Contoh | Kecepatan |
|---|---|---|---|
| Sequential | berurutan satu per satu | magnetic tape | sangat lambat |
| Direct | langsung ke track/sector | hard disk, disket | sedang |
| Random | lewat *address decoder* | RAM | cepat |
| Associative | bandingkan isi dengan *key* | cache | sangat cepat |

- **Volatile** (mati listrik → data hilang, mis. RAM) vs **non-volatile** (EPROM, EEPROM, Flash). **Erasable** (EPROM dengan sinar UV; EEPROM & Flash dengan listrik) vs **non-erasable** (ROM, PROM, sekali pakai).
- **SRAM vs DRAM**:

| | SRAM | DRAM |
|---|---|---|
| Komponen | transistor (flip-flop) | kapasitor + transistor |
| Refresh | tidak perlu | **perlu refresh cycle** |
| Kecepatan | sangat cepat | lebih lambat |
| Kapasitas/kerapatan | kecil | besar |
| Harga per byte | mahal | murah |
| Pemakaian | cache, sistem kecil/cepat | memori utama, sistem besar |

- **ROM**: non-volatile, berisi program tetap (microprogramming, library subroutine, program sistem, tabel fungsi, **POST** = inisialisasi + diagnostik saat boot). Keluarganya: ROM → EPROM → EEPROM → Flash.
- **Sel memori**: unit terkecil yang menyimpan 1 bit, dibangun dari *flip-flop*, dengan 3 sinyal: **R/W**, **Select**, **Data in/out**.
- **Error pada RAM**: *hard failure* (rusak fisik permanen) vs *soft error* (acak dan tidak merusak, mis. catu daya tidak stabil) yang ditangani dengan *error correction*.

---

## Yang perlu diingat untuk UTS
1. Beda **arsitektur vs organisasi**, plus contohnya.
2. 4 struktur top level, 4 komponen CPU, dan 4 fungsi dasar komputer.
3. Ciri tiap **generasi** dan urutan evolusi Intel (8080 → Pentium 4) beserta fitur kuncinya (32-bit/multitasking, pipelining, superskalar, MMX).
4. **Data/address/control bus** (arah dan fungsinya), ISA vs PCI, dan elemen desain bus (dedicated vs multiplexed).
5. Register MAR/MBR/PC/IR/AC, siklus **fetch–execute–interrupt**, dan contoh eksekusi PC = 300.
6. Hirarki memori, 4 metode akses, volatile/erasable, **SRAM vs DRAM**, dan keluarga ROM.
