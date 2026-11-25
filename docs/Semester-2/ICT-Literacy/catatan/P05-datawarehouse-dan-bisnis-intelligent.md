# P05 — Data Warehouse dan Business Intelligence

Tanggal: 2026-11-18 · Sumber: `materi/Modul ICT Literacy_05_Data Warehouse dan Business Intelligence.pdf`, video "Video Datawarehouse" (±24 menit, lebih lengkap dari modul)

## Ringkasan 3 kalimat
**Data warehouse (DW)** adalah sistem untuk mengarsipkan dan menganalisis **data historis** dari banyak sumber dalam satu format, dengan 4 karakteristik Inmon: subject-oriented, integrated, time-variant, non-volatile. Data mengalir **source → ETL → ODS/staging → DW → data mart** lalu dipakai untuk analitik dan laporan. **Business Intelligence (BI)** mengolah isi DW menjadi ringkasan, OLAP, laporan, dan dashboard untuk meningkatkan kualitas keputusan bisnis.

## Konsep kunci

### 1. Intuisi
- Database operasional = **buku kas harian** (terus berubah).
- Data warehouse = **gudang arsip** historis untuk analisis.
- BI = **dashboard** yang membuat isi gudang mudah dibaca manajemen.

### 2. Data warehouse
- Mulai dipakai **1980-an** bersama **DSS** (Decision Support System).
- **5 fungsi**: bantu pengambilan keputusan, akses cepat, konsistensi data, ROI optimal, historical intelligence (tren & forecasting).

**4 karakteristik (Inmon)** — sering keluar:
| Karakteristik | Arti |
|---------------|------|
| **Subject-oriented** | disusun per subjek (pelanggan, produk, penjualan), bukan per aplikasi |
| **Integrated** | data berbagai sumber di-extract, transform, integrasi |
| **Time-variant** | menyimpan data **historis** sesuai waktunya |
| **Non-volatile** | tidak berubah-ubah; hanya **ditambah** |

### 3. Arsitektur
```
Data source ──ETL──► ODS / staging ──► Data warehouse ──► Data mart ──► Analitik, laporan, data mining
(ERP, CRM, csv)      (gabung, bersihkan)  (bersih, terkonsolidasi)  (per fungsi bisnis)
```
| Komponen | Fungsi |
|----------|--------|
| ETL | **extract, transform, load** → format seragam, konsisten |
| ODS | operational data store, refresh **real-time** |
| Staging | area sementara untuk membersihkan data |
| DW | repositori bersih, update **batch** terjadwal |
| Data mart | potongan DW per fungsi bisnis (finance, HR) |

**ODS vs DW**: ODS real-time & terbaru; DW batch & historis.

### 4. Pemodelan multidimensi
**Star schema**: **tabel fakta** di tengah (mis. penjualan) dikelilingi **tabel dimensi** (produk, tanggal, salesperson, customer).

### 5. Business Intelligence
- Istilah dipopulerkan **Howard Dresner (Gartner), 1989**.
- Sistem untuk **mengumpulkan → mengolah → menampilkan ringkasan** data historis & terkini, untuk mengukur, menganalisis, memonitor.
- Komponen: data integration tool (ETL), DW, **OLAP** (slicing, dicing, drill up, drill down, pivoting), reporting tool, **dashboard** interaktif.

### 6. Contoh pemanfaatan
- **Walmart**: rantai pasok & optimasi produk.
- **Amazon**: sistem rekomendasi, one-click, prediksi permintaan.
- **Kepolisian**: prediksi kejahatan & peta hotspot.
- Studi kasus kampus: SIAKAD + keuangan + presensi + LMS → DW → dashboard deteksi dini mahasiswa berisiko.

## Istilah penting
| Istilah | Arti |
|---------|------|
| DSS | Decision Support System |
| ETL | Extract, Transform, Load |
| ODS | Operational Data Store |
| Data mart | subset DW per bagian |
| OLAP | Online Analytical Processing |
| Drill down / up | masuk ke detail / naik ke ringkasan |
| Slice / dice | potong data di satu dimensi / beberapa dimensi |

## Sering keluar di ujian / mudah keliru
- **4 karakteristik Inmon** — jangan tertukar "non-volatile" (tetap) dengan "time-variant" (historis).
- DW = historis & batch; database operasional = transaksi terkini.
- Star schema: **fakta di tengah, dimensi di sekeliling**.
- BI dipopulerkan **Howard Dresner, 1989**.

## Pertanyaan untuk dicek ke dosen
- Slide yang dibahas di video tidak diunggah ke LMS — boleh dibagikan?

## Sumber
- `Modul ICT Literacy_05_Data Warehouse dan Business Intelligence.pdf` (teks di `arsip/teks-materi/`)
- Transkrip `arsip/transkrip/9260296-Video-Datawarehouse.md`
