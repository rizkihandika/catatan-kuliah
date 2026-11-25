# P04 — Database dan ICT Literacy

Tanggal: 2026-11-11 · Sumber: `materi/Modul ICT Literacy_04_Database dan ICT Literacy.pdf`, `materi/Sesi 4 - Database dan ICT Literacy.pptx`, video Sesi 4 (±18 menit) & video interaktif Sesi 4 (±9 menit)

## Ringkasan 3 kalimat
Data berjenjang menjadi informasi, pengetahuan, lalu kebijaksanaan (**DIKW**), dan menyimpan data secara digital (bukan kertas) adalah bagian dari ICT literacy. **Basis data** adalah kumpulan data terintegrasi, **DBMS** adalah software yang mengelola aksesnya, dan keduanya mengatasi masalah file tradisional seperti redundansi dan ketergantungan data. Database modern punya beberapa jenis (relasional, NoSQL, in-memory, cloud) dan diakses dengan **SQL**.

## Konsep kunci

### 1. Piramida DIKW
| Level | Arti | Contoh |
|-------|------|--------|
| **Data** | fakta mentah | "Nilai UTS Budi = 55" |
| **Information** | data diolah, menjawab who/what/where/when | "Rata-rata kelas 70, Budi di bawah rata-rata" |
| **Knowledge** | informasi + pengalaman = **actionable** | "Yang jarang buka LMS nilainya cenderung rendah" |
| **Wisdom** | pemahaman tertinggi, ada **etika & moral** | memutuskan cara membantu Budi dengan bijak |

- Data → informasi (**5C**): Contextualized, Categorized, Calculated, Corrected, Condensed.
- Informasi → knowledge (**4C**): Comparison, Consequences, Connections, Conversations.

### 2. Hierarki data (kecil → besar)
**character → field → record → file (tabel) → database**
- Field = atribut entitas; record = kumpulan field satu entitas (field pertama biasanya **primary key**); file = kumpulan record sejenis.
- Istilah: enterprise, **entitas** (Mahasiswa), **atribut** (NPM, Nama), nilai data ("Sulaeman"), kunci (NPM).

### 3. Basis data vs file tradisional
**Sistem basis data = basis data + DBMS**.

| Masalah file tradisional | Solusi basis data |
|--------------------------|-------------------|
| Data redundancy → inkonsistensi | redundansi terkontrol, konsisten |
| Data tidak terintegrasi | terintegrasi & bisa dipakai bersama |
| Data dependence | **data independence** |
| Tidak ada standar/integritas | standarisasi oleh DBA, keamanan hak akses |

Kelemahan basis data: butuh spesialis, kompleks, butuh tempat besar, mahal.

### 4. Pengguna & bahasa DBMS
- Pengguna: system engineer, **DBA** (keamanan, integritas, recovery, concurrency), end user (programmer aplikasi, casual user/query, naïve user/aplikasi jadi, specialized user/AI).
- **DDL** (Data Definition Language) = mendefinisikan **struktur**; **DML** (Data Manipulation Language) = mengolah **isi** (insert, select, update, delete).
- Model data: berbasis objek (ER, OO) vs berbasis record (**relasional**, hierarki, jaringan).
- Komponen DBMS: query processor, database manager, file manager, DML preprocessor, DDL compiler, dictionary manager.

### 5. Jenis database modern (video interaktif)
| Jenis | Ciri | Contoh |
|-------|------|--------|
| Relasional | tabel (baris = record, kolom = atribut) + skema tetap | MySQL, PostgreSQL |
| NoSQL | tanpa skema tetap, data semi/tidak terstruktur | MongoDB |
| In-memory | data di RAM, sangat cepat | caching, sesi |
| Cloud | di-hosting di cloud, skalabel | Amazon RDS |

Komponen inti: tabel, **indeks** (percepat pencarian), query, skema. Database vs spreadsheet: database untuk data besar, relasi kompleks, banyak pengguna bersamaan.

## Istilah penting
| Istilah | Arti |
|---------|------|
| DBMS | Database Management System |
| Primary key | field unik pengenal record |
| DBA | Database Administrator |
| Data independence | struktur data bisa berubah tanpa mengubah program |
| SQL | bahasa query database relasional |
| ER | Entity-Relationship |

## Sering keluar di ujian / mudah keliru
- Urutan DIKW & hierarki data (character paling kecil, database paling besar).
- **DDL = struktur**, **DML = isi**.
- Knowledge = actionable information; wisdom = melibatkan etika (hanya manusia).
- Contoh ER di slide: tagihan air/listrik — customer, meter, bill, payment.

## Pertanyaan untuk dicek ke dosen
- Apakah 5C dan 4C perlu dihafal per item?

## Sumber
- `Modul ICT Literacy_04_Database dan ICT Literacy.pdf`, `Sesi 4 - Database dan ICT Literacy.pptx` (teks di `arsip/teks-materi/`)
- Transkrip `arsip/transkrip/9150440-Video-Pembelajaran-Sesi-4.md`, `9173024-Video-interaktif-sesi-4-ICT.md`
