# Transkrip — Minggu 6 Rank Matriks

- **Sumber**: https://www.youtube.com/watch?v=5mB5K7Ri97c&list=PLvOuFZ_J_esh0ri5O6yGfdvu3_upiPav9&index=6
- **Jenis**: youtube · post_id `9373825`
- **Durasi**: 07:20 · bahasa terdeteksi: id
- Transkrip otomatis (faster-whisper large-v3-turbo) — mungkin ada salah dengar istilah.

## Ringkasan detail

Video pertemuan 6 Aljabar Linear tentang **rank matriks**: definisi rank, konsep pivot (elemen eksekutor), dan dua contoh mencari rank matriks $3 \times 3$ lewat transformasi elementer baris. (Dosen menyebut "Prodi Sistem Informasi"; kemungkinan ucapan standar video yang sama dipakai lintas prodi.)

- **[00:11–01:11] Definisi rank.** Rank suatu matriks adalah **jumlah maksimum baris (atau kolom) yang tidak dapat dinolkan**. Untuk menolkan baris/kolom dilakukan satu atau serangkaian transformasi elementer pada baris atau kolom. Prosesnya diawali mencari **pivot**, yaitu elemen "eksekutor" yang dipakai menolkan elemen lain.
- **[01:11–03:20] Contoh 1.** Matriks $A$ bujur sangkar ordo 3 ($3 \times 3$). Pivot dipilih $a_{21} = -1$ (baris 2 kolom 1). Dinolkan baris 1 dan baris 3 memakai pivot:
  - $B_{12}(4)$: baris 1 ditambah $4 \times$ baris 2. Baris 1 (4, -5, 3) menjadi $(4-4,\; -5+12,\; 3+8) = (0, 7, 11)$.
  - $B_{32}(3)$: baris 3 ditambah $3 \times$ baris 2 (baris 2 = (-1, 3, 2)). Baris 3 (3, 2, -5) menjadi $(3-3,\; 2+9,\; -5+6) = (0, 11, 1)$.
  - Tidak ada baris yang dapat dinolkan lagi, sehingga **rank $A$ = 3** ($R(A) = 3$ = jumlah baris yang tidak dapat dinolkan).
- **[03:20–06:29] Contoh 2.** Matriks $3 \times 3$ lain, pivot $a_{31} = 1$ (baris 3 kolom 1); dinolkan baris 1 dan baris 2.
  - Baris 1 (4, -2, 2) $+ (-4) \times$ baris 3 (1, 2, 3) menjadi $(0, -10, -10)$, yaitu $B_{13}(-4)$.
  - Baris 2 (-1, 3, 2) $+ 1 \times$ baris 3 menjadi $(0, 5, 5)$, yaitu $B_{23}(1)$.
  - Baris 3 tetap karena menjadi pivot/eksekutor.
  - Karena (0, 5, 5) dan (0, -10, -10) sebanding, lakukan lagi $B_{12}(2)$: baris 1 ditambah $2 \times$ baris 2 menghasilkan $(0, 0, 0)$.
  - Jadi 2 baris tidak dapat dinolkan dan 1 baris menjadi nol, sehingga **rank = 2**.

**Poin penting untuk ujian:**
- Rank = jumlah maksimum baris/kolom yang tidak dapat dinolkan lewat transformasi elementer.
- Langkah mencari rank: pilih pivot (elemen tak nol), nolkan elemen lain di kolomnya dengan $B_{ij}(a)$, lanjutkan sampai tidak ada baris yang bisa dinolkan lagi, lalu hitung baris yang tidak nol.
- Pivot/baris eksekutor tidak berubah saat dipakai menolkan baris lain.
- Contoh: rank 3 (tak ada baris yang jadi nol) dan rank 2 (satu baris menjadi nol).
- Baris yang sebanding/kelipatan baris lain dapat dinolkan sehingga mengurangi rank.

**Info dari dosen:** Pertanyaan dan diskusi lewat web kuliah; kuis harus dikerjakan dan di-upload; sampai jumpa di pertemuan ke-7.

## Transkrip lengkap

**[00:11]** Assalamualaikum warahmatullahi wabarakatuh Halo rekan-rekan mahasiswa semoga kabarnya baik ya bersama lagi dengan saya Ira dalam pertemuan ke-6 mengenai rank matrix pada mata kuliah aljabar linier pada Prodi Sistem Informasi baik, kita akan bahas mengenai pengertian rank. Rank di dalam matrix adalah jumlah maksimum baris atau kolom yang tidak dapat dienolkan untuk mengenolkan suatu baris atau kolom harus dilakukan satu atau serangkaian transformasi elementer pada baris atau pada kolom. Jadi beberapa transformasi elementer bisa dilakukan atau hanya satu saja yang dilakukan pada transformasi elementer suatu matrix kita lihat contoh pengenolan diawali dengan mencari elemen eksekutor yang dinamai sebagai pivot, yaitu elemen yang menolkan elemen lain dalam suatu matrix kita ambil contoh yang pertama tentukan rank pada matrix A ya, matrix A seperti terlihat di layar ini adalah matrix A

**[01:11]** suatu matrix bujur sangkar yang berordo 3 atau yang berukuran 3x3 kita akan melakukan perhitungan mencari nilai rank pada matrix A pada contoh ini dipilih pivot yang merupakan elemen yang terdapat pada baris kedua kolom ke satu atau kita sebut sebagai A21 disini terlihat bahwa A21 adalah satu elemen pada baris kedua kolom ke satu ini adalah baris kedua kolom ke satu maka yang kita lakukan adalah mengenolkan baris 1 dan baris 3 kita akan mengenolkan baris 1 dan baris 3 dengan menggunakan pivot sama dengan min 1 yang berada pada baris 2 kolom 1 ini yang kita lakukan Karena kita akan mengenolkan 4 dan mengenolkan 3 dan kita menggunakan pivotnya adalah sama dengan min 1, maka kita akan melakukan transformasi elementer yang pertama adalah mengenolkan baris 1. Mengenolkan baris 1 dilakukan dengan transformasi elementer B124.

**[02:16]** Kemudian mengenolkan baris ketiga dilakukan dengan melakukan transformasi elementer B323. Oke, nah dengan transformasi yang pertama, kita menghasilkan satu nilai transformasi adalah seperti ini, di mana semua elemen pada baris ke satu akan ditambah dengan 4 kali elemen pada baris kedua. Seperti terlihat bahwa ini adalah hasil dari transformasi elementernya. Kemudian untuk baris ketiga dilakukan penambahan dengan sejumlah baris kedua dikalikan dengan skalar sama dengan 3. Kita lihat bahwa semua elemen di baris ketiga, yaitu 3, 2, dan min 5, ditambah dengan 3 dikali semua elemen pada baris kedua, yaitu min 1, 3, dan 2. Maka kemudian baris 1 akan menjadi 0, yaitu dari 4 ditambah min 4. Kemudian 7, yaitu hasil dari min 5 ditambah 12.

**[03:20]** Kemudian 11, yaitu hasil dari 3 ditambah 8. Kemudian baris ketiga akan menjadi 3 ditambah min 3, hasilnya adalah 0. Kemudian 2 ditambah 9, hasilnya adalah 11. Kemudian min 5 ditambah 6, hasilnya adalah 1. Baik, pada contoh ini tidak ada baris yang dapat dienolkan, sehingga dikatakan bahwa pada contoh ini ranknya adalah 3 atau RA sama dengan 3. R ini menunjukkan jumlah rank, kemudian A adalah matriks A, dan ini adalah jumlah baris yang tidak dapat dienolkan. Karena tadi kita melakukan transformasi elementernya adalah pada baris. Contoh berikutnya, kita akan melihat bahwa contoh kedua untuk matriks A yang berordo sama-sama 3, yaitu ordo 3x3 atau berukuran 3x3, maka kita akan melihat bahwa untuk menentukan rank pada matriks ini, kita akan menggunakan pivot yang berada di baris 3 kolom 1, atau kita sebut sebagai A31.

**[04:22]** Oke, apa yang harus dilakukan setelah menentukan pivot ini adalah kita akan mengenolkan baris 1 dan baris 2. Untuk mengenolkan baris 1, pivot harus dikalikan dengan min 4. Dan untuk mengenolkan baris 2, pivot harus dikalikan dengan 1, seperti terlihat pada gambar seperti ini. Oke, kita lihat ini adalah matriks yang awal tadi, maka kita memilih pivot adalah elemen yang berada di baris 3 kolom 1. Kita akan mendapatkan transformasi elementer adalah seperti ini, karena kita akan mengenolkan elemen yang berada di baris 1, ini adalah transformasi elementernya, dan kita akan mengenolkan elemen yang ada di baris 2, ini adalah transformasi elementernya. Untuk mengenolkan baris 1, kita akan menambah baris ke-1 dengan min 4 dikali elemen pada baris ke-3. Kita akan melihat bahwa semua elemen di baris ke-1, yaitu 4, min 2, dan 2, akan ditambah dengan min 4 dikali semua elemen di baris ke-3,

**[05:26]** yaitu min 4 dikali 1, min 4 dikali 2, min 4 dikali 3. Sementara untuk baris ke-2, kita akan menambah semua elemen pada baris ke-2 dengan 1 kali elemen pada baris ke-3, yaitu min 1 ditambah dengan 1 dikali 1, 3 ditambah 1 dikali 2, kemudian 2 ditambah 1 dikali 3. Untuk baris 3, dia tetap karena dia adalah sebagai pivot atau eksekutor. Maka kita akan peroleh di baris 1 nilainya adalah 0, min 10, dan min 10. Sementara di baris 2 adalah 0, 5, dan 5 dari hasil perhitungan yang tadi sudah kita lakukan. Karena antara 5 dan min 10, di sini 5 dan min 10 bisa kita nolkan, maka kita melakukan lagi transformasi yang kedua, yaitu transformasi B122. Artinya adalah kita akan menolkan elemen di baris 1 dengan menambahkan 2 kali elemen di baris 2. Maka kita akan peroleh 5 dikali 2 ditambahkan ke min 10, hasilnya adalah 0.

**[06:29]** Kemudian 2 dikali 5 ditambahkan ke min 10 juga hasilnya 0. Maka kita lihat bahwa pada baris 1, semua nilainya menjadi 0. Ya, artinya adalah bahwa ada 2 baris yang tidak dapat dinolkan, sementara ada 1 baris yang bisa dinolkan. Ini dikatakan bahwa nilai rank dari matriks ini adalah sama dengan 2. Artinya adalah 2 baris yang tidak dapat dinolkan. Baik, cukup sekian pertemuan kali ini. Jika ada pertanyaan dan ingin berdiskusi, bisa melalui web kuliah. Dan jangan lupa untuk kuis dikerjakan dan di-upload. Sampai bertemu di pertemuan ke-7. Terima kasih. Wassalamualaikum warahmatullahi wabarakatuh. Terima kasih.
