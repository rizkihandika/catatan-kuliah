# Ringkasan Matkul — Pengantar Teknologi Komunikasi dan Informatika (P01–P06)

> Tutor: Winarsih, S.Si., MMSI · Slide & modul disusun koordinator Cian Ramadhona Hassolthine, S.Kom., M.Kom · Arsip: [../arsip/README.md](../arsip/README.md) · Transkrip: [../arsip/transkrip/](../arsip/transkrip/README.md) · Teks modul & slide: ../arsip/teks-materi/ *(ada di Edlink)*
> Catatan detail P05: [P05-jenis-data-konversi-sistem-bilangan.md](P05-jenis-data-konversi-sistem-bilangan.md) · Kisi-kisi: [../ujian/kisi-kisi-UTS.md](../ujian/kisi-kisi-UTS.md)
> **Kuis:** P01 100 · P02 100 · P03 100 · P04 100 · P05 100 · P06 belum ada kuisnya (baru materi). **Tugas Sesi 3** (studi kasus UMKM) **sudah dikumpulkan** 2026-11-10 09:47, nilai belum dirilis.
> Vicon (Zoom, Sabtu 19:00): P02 (2026-10-31, tidak ada rekaman), P04 (2026-11-14) dan P05 (2026-11-21) terekam dan ditranskrip. Semua 5 media (3 YouTube + 2 Zoom) berhasil ditranskrip.
> ⚠️ Video YouTube P01 dan P02 **tertukar isinya**: link di post P01 berisi materi *konsep TI* (isi P02), sedangkan link di post P02 berisi *sejarah TI + CBIS + manfaat/dampak TI* (isi P01 plus tambahan). Video P04 adalah klip Zenius 3 menit.

## Info penting dari Zoom/rekaman
- **Zoom tidak wajib** dan tidak memengaruhi absensi ("banyak yang kerja"). Dosen wajib Zoom minimal **7 kali**: **4 sebelum UTS** (P02, P04, P05, dan **P07**), sisanya setelah UTS. Jadwal Zoom selalu diumumkan di LMS, biasanya **Sabtu 19:00**, ±40 menit.
- **P06 tidak ada Zoom** ("minggu depan di LMS dulu"). Zoom berikutnya di **sesi 7** (diagram alur, sebelum UTS), jadi momen yang pas untuk bertanya soal kisi-kisi/bentuk UTS.
- Sudah ada **WAG kelas PTKI** (dibuat mahasiswa, dosen ikut masuk).
- **Video interaktif P04** berisi **1 soal kuis** di tengah video (tenggat sama dengan kuis P04, 2026-11-17 12:00). Progres Edlink P04 masih "dibaca 2/4", jadi cek apakah video interaktif itu sudah ditonton/dijawab.
- Contoh soal dari dosen di Zoom (gaya kuis/UTS): "**jumlah mahasiswa UNSIA 10 ribu** itu data atau informasi?" → **data** (hanya angka, tidak bisa untuk mengambil keputusan). Konversi **100₁₀ → 64₁₆** dan **79₁₀ → 4F₁₆** (lihat P04 & P05).

## Peta besar
Alurnya: **sejarah TI → apa itu TI → TI mengubah ekonomi (ekonomi digital) → bahan bakunya: data & informasi → jenis data & cara komputer merepresentasikannya (sistem bilangan) → cara mengelola data (manajemen data & database)**. P07 (RPS): **diagram alur/flowchart**, lalu **UTS di minggu ke-8** (cakupan P01–P07).

Setelah UTS (RPS): konsep sistem/SI/SIM, ancaman keamanan komputer, *cyber crime* & *cyber security*, profesi TI, etika TI, visualisasi data, industri 4.0.

Bobot (rincian RPS): UTS 25%, UAS 25%, Tugas 1 & 2 20%, tugas besar 10%, kuis 10%, kehadiran/sikap 10%. (Ringkasan di tabel RPS menulis 30/30/30/10, tidak konsisten.) Semua kuis formatnya **5 soal pilihan ganda, 30 menit**, dan dosen selalu berpesan: **baca modul dulu, baru kerjakan kuis**.

---

## P01 — Sejarah Teknologi Informasi
Sumber: `Modul PTKI 01 - Sejarah Teknologi Informasi.docx`, RPS, video YouTube di post P02 ("Materi - Sesi #2", 19 menit, Pak Catur Nugroho — nama dari transkrip otomatis)

- **Intuisi**: TI itu bukan cuma komputer. Sejak manusia menggambar di dinding gua, mereka sudah "mengolah dan menyimpan informasi". Yang berubah dari zaman ke zaman adalah **media** (dinding → tanah liat → papirus → kertas → magnetik → digital) dan **jangkauan penyebarannya**.
- **3 masa besar**:

| Masa | Rentang | Ciri |
|---|---|---|
| Pra-sejarah | … s/d 3000 SM | informasi digambar di dinding gua/tebing; untuk mengenali bentuk |
| Sejarah | 3000 SM s/d 1400-an M | dipakai kalangan atas (kepala suku) untuk upacara/ritual, belum massal |
| Modern | 1900-an dst. | komputer, transistor, internet |

- **Garis waktu penting** (versi modul — kuis mengikuti modul):

| Tahun | Peristiwa |
|---|---|
| 3000 SM | Bangsa **Sumeria**: simbol/tulisan pertama dari **piktograf** |
| 2900 SM | **Mesir Kuno**: huruf **hieroglif** |
| 500 SM | Serat **papirus** (sungai Nil) menggantikan lempeng tanah liat → cikal bakal kertas |
| 1455 | **Mesin cetak** (plat huruf besi → bingkai kayu) oleh **Johann Gutenberg** |
| 1830 | **Lady Augusta Byron (Ada Lovelace)** + **Charles Babbage**: program komputer pertama di **mesin analitikal** |
| 1837 | **Samuel Morse** (+ Cook & Wheatstone): **telegraf** & kode Morse |
| 1861 | Gambar bergerak diproyeksikan ke layar → cikal bakal film |
| 1876 | **Melvil Dewey**: sistem desimal (klasifikasi perpustakaan) |
| 1877 | **Alexander Graham Bell**: telepon; Eadweard Muybridge: fotografi kecepatan tinggi |
| 1899 | Penyimpanan di **pita magnetik** pertama |
| 1923 | **Zworykin**: tabung TV pertama |
| 1940 | PD II: dokumen militer disimpan di *magnetic tape* |
| 1945 | **Vannevar Bush**: konsep **hypertext** |
| 1946 | **ENIAC I**, komputer digital pertama |
| 1948 | **Transistor** (Bell Telephone) |
| 1957 | **Jean Hoerni**: transistor planar → jutaan transistor di satu keping silikon |
| 1962 | **Paul Baran** (RAND): jaringan terdesentralisasi untuk perang nuklir |
| 1972 | **Ray Tomlinson**: program **e-mail** pertama |
| 1973–1990 | Istilah **internet** & protokol **TCP/IP** (DARPA) |
| 1981 | NSF: backbone **CSNET** 56 Kbps |
| 1986 | IETF: server koordinasi DARPA, ARPANET, DDN, Internet Gateway |
| 1991 | Bisnis TI pertama: **CERN** memungut bayaran anggota |
| 1992 | Istilah **WWW** diperkenalkan CERN |
| 1993 | NSF membentuk **InterNIC** |
| 1994 | Internet tumbuh sangat cepat ke semua segi kehidupan |

- Tambahan dari video (tidak ada di modul): **1969** jaringan pertama menghubungkan **4 titik kampus** (UCLA, Stanford Research Institute, UC Santa Barbara, University of Utah) → cikal bakal ARPANET; **1995** perusahaan umum mulai jadi *provider* internet dengan membeli jaringan di *backbone*. Di video, masa modern = cara berkomunikasi berubah lewat media sosial.
- Modul menulis nama dengan ejaan "Augusta Lady Byron", "Zvorkyn", "Rand Paul Barand", "Melvyl Dewey". Kalau di kuis muncul ejaan modul, itu orang yang sama.
- RPS menyebut topik ini sampai "**era disruptive technology**", tapi modul berhenti di 1994. Video menutupnya dengan "akselerasi pertumbuhan perusahaan teknologi = disrupsi".

**Tambahan video P02 (setelah sejarah)** — materi ini tidak ada di modul, tapi bisa jadi pengayaan:
- **Manfaat TI**: memudahkan memperoleh informasi & berkomunikasi, peluang bisnis baru, pelayanan publik lebih baik, **telemedicine**, e-learning, lapangan kerja, mendorong demokrasi.
- **Subsistem CBIS**:

| Subsistem | Fokus |
|---|---|
| **SIA** (sistem informasi akuntansi) | data |
| **SIM** (sistem informasi manajemen) | informasi |
| **DSS** (sistem pendukung keputusan) | keputusan |
| **OA** (otomatisasi kantor, "kantor virtual") | komunikasi |
| **ES** (*expert system*, sistem pakar, pakai AI) | konsultasi |

- **Spesialis komputer**: analis sistem (analisis masalah, flowchart/DFD/UML), pengelola database, spesialis jaringan, programmer, operator.
- **Fungsi manajemen**: *planning, organizing, directing, controlling*.
- **TIK di bisnis**: contoh FedEx (*tracking* kiriman), internet banking, SMS banking, e-commerce. **TIK di pemerintahan (e-gov)**: **G2C** (ke warga, mis. kependudukan), **G2B** (ke dunia usaha, mis. izin usaha), **G2G** (antarlembaga pemerintah).
- **Dampak positif**: arus informasi cepat, akses mudah, komunikasi jarak jauh, berbagi file, pendidikan, bisnis jual-beli. **Dampak negatif**: malas bersosialisasi fisik, penipuan & kejahatan siber, *cyberbullying*, konten negatif, fitnah/pencemaran nama baik, "menjauhkan yang dekat", adiksi internet, prestasi menurun.

## P02 — Konsep Teknologi Informasi
Sumber: `Modul PTKI 02 - Pengertian Teknologi Informasi.docx`, `Salinan Sesi 2 - Pengertian Teknologi Informasi.pptx` (slide 3–12), video YouTube di post P01 ("Materi - Sesi #1", 5 menit, isinya membacakan slide ini). Vicon 2026-10-31 tidak terekam.

- **Definisi TI**: istilah untuk berbagai hal dan kemampuan yang dipakai dalam **pembentukan, penyimpanan, dan penyebaran informasi**.
- **Definisi menurut pakar** (hanya di video):
  - **Haag & Keen**: seperangkat alat yang membantu bekerja dengan informasi dan tugas pemrosesan informasi.
  - **Martin**: tidak terbatas pada teknologi komputer untuk memproses & menyimpan, tapi juga **teknologi komunikasi** untuk mengirim informasi.
  - **Williams & Sawyer**: teknologi yang menggabungkan komputasi dengan jalur komunikasi berkecepatan tinggi yang membawa data, suara, dan video.
- **Kenapa TI perlu** (4): kompleksitas tugas manajemen · pengaruh globalisasi · perlunya *response time* cepat · tekanan persaingan bisnis.
- **Sistem informasi (SI)**: sistem yang memakai teknologi komputer untuk **mengumpulkan, memproses, menyimpan, menganalisis, dan menyebarkan** informasi. Tangga konsepnya:
  - **Data** = fakta mentah.
  - **Informasi** = data yang sudah diorganisasikan sehingga punya arti.
  - **Pengetahuan** = informasi yang diproses sehingga memberi pemahaman yang bisa diterapkan.
- **CBIS** (*Computer Based Information System*): SI yang memakai **komputer + teknologi komunikasi**.
- **Keuntungan SI** (3): cepat & akurat · efisien · *real time* tanpa batas waktu, jarak, tempat.
- **Infrastruktur informasi**: hardware, software, jaringan & komunikasi, *information management personnel*, database. **Arsitektur informasi**: perencanaan kebutuhan informasi.
- **Kemampuan SI**: transaksi cepat & akurat · kapasitas simpan besar & akses cepat · komunikasi cepat.
- **Tujuan TI**: memecahkan masalah, membuka kreativitas, efektivitas, efisiensi. **Prinsip TI**: ***High-Tech-High-Touch*** (teknologi tinggi tetap harus menyentuh sisi manusia).
- **6 fungsi TI** — urutannya mengikuti "perjalanan" data:

| # | Fungsi | Artinya |
|---|---|---|
| 1 | **Capture** (menangkap) | mengambil data yang bisa dijadikan informasi |
| 2 | **Processing** (mengolah) | mengorganisasi data jadi informasi |
| 3 | **Generating** (menghasilkan) | menampilkan hasil olahan sebagai informasi |
| 4 | **Storage** (menyimpan) | menyimpan informasi |
| 5 | **Retrieval** (mencari kembali) | mencari informasi yang sudah disimpan |
| 6 | **Transmission** (transmisi) | menyebarkan informasi |

- **Keuntungan TI** (slide 12, di modul kosong): ***Consistency, Precision, Reliability, Speed***.

## P03 — Konsep Ekonomi Digital
Sumber: `Modul PTKI 03 - Konsep Ekonomi Digital.docx/.pdf`, `Salinan Sesi 3 - Konsep Ekonomi Digital.pptx` (slide 3–16), Tugas Sesi 3

- **Intuisi**: ekonomi digital = jual-beli, produksi, dan hubungan pelanggan yang **terjadi lewat teknologi digital/internet**. Toko tidak perlu gedung, perantara bisa dipotong, dan siapa pun bisa jadi penjual.
- **Definisi Amir Hartman (2000)**: *"the virtual arena in which business actually is conducted, value is created and exchanged, transactions occur, and one-to-one relationship mature by using any internet initiative as medium of exchange."*
- **Definisi umum**: kondisi ekonomi yang berbasis teknologi digital (jaringan komunikasi digital, komputer, software, TI lain).
- **12 karakteristik ekonomi digital (Don Tapscott)** — hafalkan urutannya:

| # | Karakteristik | Inti | Contoh ide (untuk UMKM) |
|---|---|---|---|
| 1 | **Knowledge** | kecerdasan SDM = penentu sukses; pengetahuan kolektif = *value*; AI membantu *knowledge leveraging* | pelatihan pemasaran digital untuk karyawan |
| 2 | **Digitization** | transformasi informasi ke format digit **0 dan 1** | katalog & nota digital |
| 3 | **Virtualization** | bisnis bisa mulai dengan perangkat sederhana, tanpa aset fisik besar, menjangkau seluruh dunia | toko online di marketplace |
| 4 | **Molecularization** | organisasi berbentuk "molekul": kecil, lincah, mudah beradaptasi | tim kecil yang cepat ganti strategi |
| 5 | **Internetworking** | tidak bisa kerja sendiri; tentukan *core activity*, kerja sama untuk *supporting activities* | kerja sama dengan ojek online & payment gateway |
| 6 | **Disintermediation** | berkurangnya perantara (*broker*) antara pemasok & pelanggan | jual langsung ke konsumen lewat WhatsApp/IG |
| 7 | **Convergence** | menyatukan 3 sektor: **computing, communications, content** | konten resep di media sosial + toko online |
| 8 | **Innovation** | keunggulan mudah ditiru → harus inovasi cepat & terus-menerus | varian rasa/kemasan baru |
| 9 | **Prosumption** | batas **produsen–konsumen** kabur; konsumen mudah jadi produsen | pelanggan jadi reseller/reviewer |
| 10 | **Immediacy** | pelanggan pilih yang **cheaper, better, faster** | pre-order & respons chat cepat |
| 11 | **Globalization** | runtuhnya batas **ruang & waktu** | kirim ke luar kota/luar negeri |
| 12 | **Discordance** | perubahan **struktur sosial & budaya** akibat pergeseran paradigma | kebiasaan belanja berpindah ke HP |

- Jembatan keledai urutan: **K-D-V-M-I-D / C-I-P-I-G-D** (2 kolom slide 4).
- **Tugas Sesi 3** (sudah dikumpulkan): UMKM makanan tradisional yang hanya punya toko fisik. Diminta menganalisis **minimal 5 karakteristik** ekonomi digital yang bisa diterapkan, beserta **contoh penerapan dan manfaat** tiap karakteristik. Kolom "contoh ide" di tabel di atas adalah pola jawaban seperti ini.

## P04 — Data dan Informasi
Sumber: `Modul PTKI 04 - Data dan Informasi.pdf` (hal. 2–3), `Salinan Sesi 4 - Data dan Informasi.pptx` (slide 3–14), video interaktif YouTube "Data dan Informasi" (klip Zenius, 4 menit), **rekaman vicon 2026-11-14** (29 menit)

- **Intuisi**: data = bahan mentah, informasi = masakan jadinya. "Persija menang" itu data. "Persija mengalahkan Persib 3–2 pukul 16:30 di Liga Indonesia" itu informasi, karena sudah lengkap, bermakna, dan bisa dipakai untuk memutuskan sesuatu.
- **Data**: fakta mentah/rincian peristiwa yang **belum diolah**, kadang belum bisa diterima akal penerima. Bentuknya angka, simbol, karakter, suara, gambar, tanda. Di ilmu komputer: segala sesuatu yang disimpan di memori menurut format tertentu.
- **Data menurut ahli**:
  - **Robert N. Anthony & John Dearden**: bentuk jamak dari **datum** (*data item*).
  - **Jogiyanto**: kenyataan yang menggambarkan kejadian dan kesatuan nyata.
  - **Slamet Riyadi**: kumpulan informasi dari pengamatan, berupa angka atau lambang.
  - **Arikunto**: semua fakta dan angka yang bisa dijadikan bahan menyusun informasi.
- **Informasi**: hasil pengolahan data yang **bisa diterima akal** penerima dan dipakai untuk **pengambilan keputusan**. Bisa berupa hasil gabungan, analisis, penyimpulan, atau keluaran SI terkomputerisasi.
- **Informasi menurut ahli**:
  - **Anton M. Moeliono**: penerangan, keterangan, pemberitahuan, kabar, berita; bahan nyata untuk dasar analisis/kesimpulan.
  - **Jonner Hasugian**: konsep universal bermuatan besar, terekam di berbagai media.
  - **Gordon B. Davis**: data yang telah diolah menjadi bentuk yang penting bagi penerima, bernilai nyata untuk keputusan sekarang/masa depan.
  - **Kusrini**: data yang sudah diolah menjadi bentuk yang berarti bagi pengguna, bermanfaat untuk pengambilan keputusan.
- **Contoh pasangan data → informasi** (slide 6, 10–12):

| Data | Informasi |
|---|---|
| Karyawan Z hanya masuk 15 hari dalam sebulan | …karena orang tuanya sakit-sakitan dan keluar-masuk rumah sakit |
| Jumlah kecelakaan di jalan raya | Kecelakaan mobil di Jl. Lintas Bypass Soekarno Hatta pukul 13:00, 4 korban satu keluarga meninggal di tempat |
| Persija menang | Persija vs Persib pukul 16:30 berakhir 3:2 untuk Persija |

- **Perbedaan data vs informasi**:

| Data | Informasi |
|---|---|
| penjelasan singkat/gagasan yang belum menjelaskan peristiwa | hasil pengolahan data |
| **tidak bisa** dipakai untuk mengambil keputusan | **bisa** dipakai untuk mengambil keputusan |
| kadang tidak bisa diterima akal penerima | berguna & bisa diterima akal |
| lingkup lebih detail & teknis (mis. "penjualan") | penjelasan siap pakai (mis. "penjualan per bulan" untuk keputusan manajemen) |

- **Contoh tambahan dosen di Zoom** — kuncinya: *bisa dipakai untuk mengambil keputusan atau tidak?*
  - "Jumlah mahasiswa UNSIA 10.000" → **data** (cuma angka). Kalau diolah jadi "angkatan 2023: 2.000, 2024: 3.000, 2025: 5.000; laki-laki 4.000, perempuan 6.000" → **informasi**. Manajemen bisa memutuskan menambah dosen/tutor karena mahasiswa terus naik, atau menggenjot promosi di wilayah yang mahasiswanya sedikit.
  - "Penjualan bulan ini 100 piece" → data. "Bulan lalu 100, bulan ini 200 piece" → informasi, sehingga manajemen menyiapkan stok ±300 bulan depan.
  - "Penjualan hari ini 50.000 piece" → data (jawaban mahasiswa, dibenarkan dosen).
  - Suhu harian Jakarta tanggal 1–8 November → data. "Suhu tertinggi November jatuh di tanggal 8 (38 °C)" → informasi.
  - "Pengguna internet Indonesia 100 juta" → data. "Mayoritas penggunaan internet untuk streaming video" → informasi.
  - Kecelakaan: kalau hanya jumlahnya, tidak bisa diputuskan apa-apa. Kalau ada lokasi, jam, jumlah korban → bisa diputuskan tindakan (mis. dibawa ke rumah sakit).
- **Video Zenius**: data = himpunan fakta yang awalnya acak, lalu dikelompokkan (data mentah/*raw data*). Contoh: nilai rata-rata tiap pelajaran di satu kelas diurutkan → "matematika paling disukai karena rata-ratanya tertinggi" = **informasi** (data yang diberi konteks dan makna).

## P05 — Jenis Data, Konversi Data & Sistem Bilangan
Sumber: `Modul PTKI 05 - Jenis data, Konversi data dan sistem bilangan.pdf` (hal. 2–6), `Salinan Sesi 5 - ….pptx` (slide 3–16), **rekaman vicon 2026-11-21** (27 menit). Catatan detail + latihan: [P05-jenis-data-konversi-sistem-bilangan.md](P05-jenis-data-konversi-sistem-bilangan.md)

- **Jenis data** (5 dasar pengelompokan, masing-masing berpasangan):

| Dasar | Jenis 1 | Jenis 2 |
|---|---|---|
| Sifat nilai | **Diskrit**: bilangan asli, hasil menghitung | **Kontinu**: ada di suatu interval ("sekitar", "kira-kira"), hasil mengukur |
| Sumber | **Internal**: dari dalam organisasi (jumlah karyawan, modal, produksi) | **Eksternal**: dari luar (daya beli masyarakat) |
| Cara memperoleh | **Primer**: dikumpulkan sendiri langsung (wawancara, observasi) | **Sekunder**: dari studi/instansi lain, dokumentasi, arsip resmi |
| Waktu pengumpulan | **Cross section**: satu titik waktu (penelitian kuesioner) | **Time series/berkala**: dari waktu ke waktu (uang beredar, harga 9 bahan pokok) |
| Bentuk | **Kualitatif**: bukan angka (suasana kerja, kualitas layanan) | **Kuantitatif**: angka (harga saham, pendapatan) |

- ⚠️ **Diskrit vs kontinu versi dosen ≠ versi buku statistik.** Modul memberi contoh diskrit "berat badan ibu-ibu PKK, nilai dolar dari waktu ke waktu", dan di Zoom dosen menambah "berat badan, tinggi badan, umur, ukuran sepatu". Kontinu menurut dosen = data yang "tidak bisa ditentukan dalam angka pasti" (kata *sekitar, kurang lebih, kira-kira*). Di statistik umum, berat & tinggi badan justru contoh **kontinu** (hasil mengukur), sedangkan diskrit = hasil **menghitung**. Untuk kuis/UTS matkul ini, kemungkinan besar kunci jawaban mengikuti **versi modul/dosen**.
- Contoh dari Zoom: data primer = kita sendiri yang interview/kuesioner; data sekunder = mis. mengambil data dari internet. *Cross section* = survei/sensus door-to-door yang diadakan di waktu tertentu lalu diulang beberapa tahun kemudian; *time series* = mis. harga emas 5 bulan terakhir. Kualitatif = jawaban kuesioner "nyaman / kurang / sangat bagus"; kuantitatif = gaji, jumlah karyawan, harga bahan pokok.
- **Tipe data primitif** (versi modul): byte 8 bit (−128…127), short 16 bit, int 32 bit, long 64 bit, char 16 bit (Unicode), float 32 bit, **double "54" bit** (standarnya 64), boolean (false = 0 / true = 1). Rinciannya di catatan P05.
- **4 sistem bilangan**:

| Sistem | Radiks | Digit | Contoh |
|---|---|---|---|
| Desimal | 10 | 0–9 | 76₁₀ |
| Biner | 2 | 0, 1 | 11001₂ |
| Oktal | 8 | 0–7 | 137₈ |
| Heksadesimal | 16 | 0–9, A–F (A=10 … F=15) | 4C₁₆ |

- **Konversi** = mengubah bentuk bilangan satu ke bilangan lain. **Intuisi**: tiap digit menyatakan "berapa banyak" pangkat radiks di posisi itu.

| Arah | Cara | Contoh langkah |
|---|---|---|
| Desimal → basis r | bagi terus dengan r, catat sisa, baca sisa **dari bawah ke atas** | 76 ÷ 16 = 4 sisa **12 (C)**; 4 ÷ 16 = 0 sisa **4** → **4C₁₆** |
| | | 32 ÷ 16 = 2 sisa **0**; 2 ÷ 16 = 0 sisa **2** → **20₁₆** |
| | | 25 → 12 s1, 6 s0, 3 s0, 1 s1, 0 s1 → **11001₂** |
| Basis r → desimal | jumlahkan digit × r^posisi (posisi paling kanan = 0) | 137₈ = 1·8² + 3·8 + 7 = 64 + 24 + 7 = **95** |
| | | 11001₂ = 16 + 8 + 0 + 0 + 1 = **25** |
| | | 4C₁₆ = 4·16 + 12 = **76** |
| Biner → oktal/heksa | kelompokkan **3 bit** (oktal) / **4 bit** (heksa) dari kanan | 1011 0110₂ → **B6₁₆**; 10 110 110₂ → **266₈** |
| Oktal/heksa → biner | tiap digit jadi 3/4 bit | 4C₁₆ → 0100 1100₂ |

- Modul menulis "76₁₀ = 4 12₁₆ atau 4C₁₆". Artinya digit bernilai 12 **wajib ditulis C**.
- **Latihan di Zoom P05** (desimal → heksa, persis gaya yang dilatih dosen):

| Soal | Langkah | Jawaban |
|---|---|---|
| 100₁₀ = …₁₆ | 100 ÷ 16 = 6 sisa **4** → 6 ÷ 16 = 0 sisa **6** | **64₁₆** |
| 79₁₀ = …₁₆ | 79 ÷ 16 = 4 sisa **15 (F)** → 4 ÷ 16 = 0 sisa **4** | **4F₁₆** |

  Dosen sempat menjawab "4E" lalu dikoreksi mahasiswa jadi **4F** (15 = F, 14 = E). Hafalkan A=10, B=11, C=12, D=13, E=14, F=15 supaya tidak terpeleset.
- Di Zoom, dosen juga membacakan tabel 0–15 (mis. 14 = 1110₂ = 16₈ = E₁₆) dan tipe data primitif ("kebetulan jurusan IF, nanti pasti belajar pemrograman").

## P06 — Manajemen Data
Sumber: `Modul PTKI 06 - Manajemen Data.pdf/.docx`, `Salinan Sesi 6 - Manajemen Data.pptx` (slide 3–19). Kuis P06 belum dirilis (sesi terjadwal 2026-11-26). Menurut dosen di Zoom P05, **P06 tidak ada Zoom**.

- **Intuisi**: data itu aset. Seperti barang di gudang, ia harus dicatat saat masuk, dicek, disimpan rapi, dirawat, dijaga, dan bisa diambil lagi saat dibutuhkan, sampai akhirnya "dipensiunkan".
- **Definisi**: istilah luas untuk semua aspek **pembuatan, penyimpanan, pengiriman, pemeliharaan, pengamanan, hingga "mempensiunkan" data**. Data disimpan dalam **file**, lalu dalam **database** (agar konsisten dan formatnya seragam). Database pun sebenarnya disimpan di satu/beberapa file, dan dikelola dengan **DBMS**.
- Manajemen data = bagian dari manajemen sumber daya informasi, memastikan data **akurat, up to date, aman, tersedia bagi user** (4 syarat).
- **7 kegiatan manajemen data**:

| # | Kegiatan | Isi |
|---|---|---|
| 1 | **Pengumpulan** | dicatat di formulir = **dokumen sumber** (input sistem) |
| 2 | **Integritas & pengujian** | dicek konsistensi & akurasinya sesuai aturan/kendala |
| 3 | **Penyimpanan** | disimpan di medium (pita/piringan magnetik) |
| 4 | **Pemeliharaan** | tambah data baru, ubah, hapus yang tak perlu → tetap mutakhir |
| 5 | **Keamanan** | cegah penghancuran, kerusakan, penyalahgunaan |
| 6 | **Organisasi** | disusun sesuai kebutuhan informasi pemakai |
| 7 | **Pengambilan** | data tersedia bagi pemakai |

- **Database**: kumpulan data yang **saling berhubungan (berelasi)**, merepresentasikan organisasi, disimpan di media eksternal, diorganisasikan agar mudah & cepat dipakai lagi, **tanpa redundansi yang tidak perlu**.
- **Tujuan database**:
  - Menghindari **redundansi** (pengulangan data).
  - Mencapai **independensi data**: struktur data bisa diubah tanpa mengubah program yang memprosesnya. Caranya: spesifikasi data ditaruh di tabel & kamus yang terpisah secara fisik dari program.
- **DBMS**: software yang menetapkan & memelihara **integritas logis antar file**. Contoh awal (relasional, untuk mainframe): **SQL/DS** & **QBE** (*Query by Example*) dari IBM, **Oracle** dari Relational Software Inc.
- **Menciptakan database** (3 langkah):
  1. **Menentukan kebutuhan data**: definisikan masalah, pemecahan, pemrosesan.
  2. **Menjelaskan data** lewat **kamus data** (ensiklopedia tiap elemen data; kertas atau file). Software-nya disebut **sistem kamus data**.
  3. **Memasukkan data** setelah **skema & subskema** dibuat: diketik ke DBMS, dibaca dari pita/piringan, atau di-scan optis.
- **Sumber data**:

| Sumber | Ciri | Contoh |
|---|---|---|
| **Internal** | sudah ada di organisasi, **bisa dikendalikan** | data pegawai, mesin, penjualan |
| **Eksternal** | dari luar sistem, **tidak bisa dikendalikan** | peraturan, harga pasar, keadaan pesaing |
| **Privat/personal** | kepakaran/naluri/pendapat user, **subjektif** | pendapat user soal variabel yang perlu |

- **Permasalahan data** (6): data tidak benar · entry tidak akurat · dikumpulkan kurang tepat · tidak tepat waktu · tidak terukur & tidak terindeks · data yang diperlukan tidak ada.
- **Kamus istilah**: data (fakta, teks, ukuran, gambar, suara, video yang bernilai informasi) · informasi (data yang diproses untuk keputusan) · database (data terorganisasi berdasarkan relasi) · **metadata** (data yang mendeskripsikan data lain).
- Catatan kecil: judul di modul P06 masih tertulis "Jenis Data, Konversi Data dan Sistem Bilangan" (salah salin dari P05), isinya tetap manajemen data.

---

## Yang perlu diingat untuk UTS
UTS di **minggu ke-8** (perkiraan 2026-12-10), cakupan **P01–P07**. Bentuknya menurut RPS bisa tes tertulis, presentasi, atau tugas. Semua kuis selama ini pilihan ganda 5 soal yang menguji **hafalan definisi dari modul**, jadi pakai istilah & contoh versi modul.
1. **Garis waktu sejarah TI**: 3 masa, plus pasangan tahun–tokoh–penemuan (Sumeria/piktograf, hieroglif, papirus, Gutenberg 1455, Babbage & Ada 1830, Morse 1837, Bell 1877, ENIAC 1946, transistor 1948, e-mail 1972, TCP/IP, WWW 1992).
2. **Definisi TI**, 4 alasan perlunya TI, tangga **data → informasi → pengetahuan**, CBIS, prinsip *High-Tech-High-Touch*, **6 fungsi TI** (capture, processing, generating, storage, retrieval, transmission), 4 keuntungan TI.
3. Definisi ekonomi digital (**Amir Hartman 2000**) dan **12 karakteristik Don Tapscott**. Harus bisa menerapkannya ke studi kasus seperti Tugas Sesi 3.
4. **Data vs informasi**: definisi, tokoh-tokohnya, dan cara membedakan lewat contoh (kuncinya: bisa dipakai untuk mengambil keputusan atau tidak).
5. **5 pasang jenis data** (diskrit/kontinu, internal/eksternal, primer/sekunder, cross section/time series, kualitatif/kuantitatif), tipe data primitif, 4 sistem bilangan + radiksnya.
6. **Konversi bilangan**, hampir pasti keluar. Latih desimal ↔ biner/oktal/heksa secara manual, terutama desimal → heksa seperti di Zoom.
7. **Manajemen data**: definisi, 4 syarat data (akurat, mutakhir, aman, tersedia), **7 kegiatan**, definisi & 2 tujuan database (redundansi, independensi data), DBMS, 3 langkah menciptakan database, 3 sumber data, 6 permasalahan data, metadata.
8. **P07 diagram alur/flowchart** (belum rilis): definisi, bagian utama pengolahan, urutan pemecahan masalah, simbol flowchart. Ikut Zoom P07 untuk info UTS.
