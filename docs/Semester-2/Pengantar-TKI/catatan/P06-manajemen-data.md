# P06 — Manajemen Data

Tanggal: 2026-11-26 · Sumber: `materi/Modul PTKI 06 - Manajemen Data.pdf/.docx`, [`Salinan Sesi 6 - Manajemen Data.pptx`](../materi/Salinan%20Sesi%206%20-%20Manajemen%20Data.pptx)

## Ringkasan 3 kalimat
Manajemen data mencakup semua aspek **pembuatan, penyimpanan, pengiriman, pemeliharaan, pengamanan, hingga "mempensiunkan" data**, agar data **akurat, mutakhir, aman, dan tersedia** bagi pengguna. Kegiatannya ada tujuh: pengumpulan, integritas & pengujian, penyimpanan, pemeliharaan, keamanan, organisasi, dan pengambilan. Data disimpan dalam **database** (kumpulan data berelasi tanpa redundansi yang tidak perlu) yang dikelola **DBMS**, dengan tujuan menghindari redundansi dan mencapai independensi data.

## Konsep kunci

### 1. Intuisi
Data = barang di gudang: dicatat saat masuk, dicek, disimpan rapi, dirawat, dijaga, bisa diambil lagi, lalu suatu saat "dipensiunkan".

### 2. Empat syarat data
**akurat · up to date · aman · tersedia bagi user**

### 3. Tujuh kegiatan manajemen data
| # | Kegiatan | Isi |
|---|----------|-----|
| 1 | Pengumpulan | dicatat di formulir = **dokumen sumber** |
| 2 | Integritas & pengujian | cek konsistensi & akurasi |
| 3 | Penyimpanan | di medium (pita/piringan magnetik) |
| 4 | Pemeliharaan | tambah, ubah, hapus → tetap mutakhir |
| 5 | Keamanan | cegah kerusakan & penyalahgunaan |
| 6 | Organisasi | disusun sesuai kebutuhan pemakai |
| 7 | Pengambilan | data tersedia bagi pemakai |

### 4. Database & DBMS
- **Database**: kumpulan data **saling berelasi**, disimpan di media eksternal, mudah & cepat dipakai, **tanpa redundansi yang tidak perlu**.
- **Tujuan**: (1) hindari **redundansi**, (2) capai **independensi data** (struktur data bisa diubah tanpa mengubah program; spesifikasi data dipisah di kamus data).
- **DBMS**: software yang menjaga **integritas logis antar file**. Contoh awal: SQL/DS & **QBE** (IBM), **Oracle**.

### 5. Tiga langkah menciptakan database
1. **Menentukan kebutuhan data** (definisi masalah, pemecahan, pemrosesan).
2. **Menjelaskan data** lewat **kamus data** (ensiklopedia tiap elemen data).
3. **Memasukkan data** setelah **skema & subskema** dibuat.

### 6. Sumber data
| Sumber | Ciri | Contoh |
|--------|------|--------|
| Internal | ada di organisasi, **bisa dikendalikan** | data pegawai, penjualan |
| Eksternal | dari luar, **tidak bisa dikendalikan** | peraturan, harga pasar, pesaing |
| Privat/personal | kepakaran/pendapat user, **subjektif** | pendapat user tentang variabel penting |

### 7. Enam permasalahan data
data tidak benar · entry tidak akurat · pengumpulan kurang tepat · tidak tepat waktu · tidak terukur & tidak terindeks · data yang diperlukan tidak ada.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Dokumen sumber | formulir pencatat data awal |
| Redundansi | pengulangan data yang tidak perlu |
| Independensi data | struktur data terpisah dari program |
| Kamus data | deskripsi setiap elemen data |
| Skema / subskema | struktur database keseluruhan / sebagian |
| Metadata | data tentang data |

## Sering keluar di ujian / mudah keliru
- **7 kegiatan** (urutan: kumpul → uji → simpan → pelihara → amankan → organisasi → ambil).
- **2 tujuan database**: redundansi & independensi data.
- Internal = bisa dikendalikan; eksternal = tidak; privat = subjektif.
- Judul modul P06 masih tertulis "Jenis Data, Konversi…" (salah salin dari P05); isinya manajemen data.

## Pertanyaan untuk dicek ke dosen
- Kuis P06 kapan dirilis? (P06 tanpa Zoom; Zoom berikutnya P07, sebelum UTS.)

## Sumber
- `Modul PTKI 06 - Manajemen Data.pdf`, `Salinan Sesi 6 - Manajemen Data.pptx` slide 3–19 (teks di `arsip/teks-materi/`)
