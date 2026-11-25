# PV Modul Sesi 3.docx

Sumber: [`materi/PV Modul Sesi 3.docx`](../../materi/PV%20Modul%20Sesi%203.docx) — teks hasil ekstraksi otomatis.

### Modul Sesi 3

APLIKASI SEDERHANA DENGAN BASIC CONTROL (BAGIAN 1)

#### POKOK BAHASAN:

Fungsi dasar Basic Control: Label, TextBox, ComboBox, ListBox, Button.

#### TUJUAN BELAJAR:

- Memahami fungsi dasar basic control.

- Membuat aplikasi sederhana dengan basic control.

#### Label

Label dapat menampilkan judul, text, penjelasan di sebelah textbox, tetapi tidak mengijinkan user mengedit secara langsung seperti pada Textbox. Properti yang sering digunakan dalam Label antara lain:

- Font

Menentukan	bentuk	font	seperti	Times	New Roman, Calibri juga besaran dari Font tersebut/size.

- TextAlign

Letak perataan dari teks, melalui kombinasi left, center, right, top dan middle.

- Text

Isi dari Label berupa teks.

- BorderStyle

Bentuk dari keliling label dalam bentuk FixedSingle atau Fixed3D.

Gambar 3.1. Posisi Label dalam Toolbox (Kiri) dan Property dari Label (Kanan)

#### Text Box

Gambar 3.2 Text Box dalam Toolbox

Komponen Text Box memungkinkan memasukkan teks pada form saat runtime. Secara default, dibutuhkan satu baris teks, namun, kita dapat membuatnya menerima beberapa baris teks dan bahkan menambahkan scroll di dalamnya.

#### Combo Box

Kontrol yang sama kegunaanya dengan listbox, perbedaanya adalah user dapat mengisikan nilai baru pada combobox tersebut.

Macam-macam Combo Box:

- Drop-Down: yang ditampilkan satu baris saja. Kotak ini akan terbuka jika user menekan tanda panah pada pojok kanan kotak kombo. Dan user dapat diinput nilai ke dalam kotak kombo tersebut.

- Simpel Combo: kotak ini mirip seperti daftar list box, user hanya bisa mengetik di bagian atas combo box saja.

- Drop Down List: ditampilkan satu baris saja, sama seperti Drop-Down, namun kotak tidak bisa diinput

Gambar 3.3 Combo Box dalam Toolbox

Untuk menambah data pada combo box tersebut, klik panah kecil atas kanan combobox lalu pilih Edit item, dan data dapat diisi

Gambar 3.4 Pengisian List Data Combo Box

#### List Box

Listbox merupakan input control terdiri atas elemen yang merupakan sebuah daftar teks yang dapat dipilih berdasarkan index dimulai dari 0 sampai maksimum jumlah index dikurangi 1. Untuk mengaktifkan Listbox, tarik icon Listbox dari Toolbox dan letakkan pada form.

Inisialisasi Listbox dapat dilakukan pada saat Form ditampilkan, yaitu pada event Form_Load(). Metode Add() digunakan untuk menambah elemen pada Class Lisbox.Items. Untuk membaca baris teks yang dipilih, gunakan properti SelectedItem dan untuk mengetahui index aktual, gunakan SelectedIndex.

Gambar 3.5 Listbox dalam Toolbox

Untuk menambah data dalam List Box, caranya sama seperti kita menambah data pada combobox yakni dengan mengklik tombol panah kecil kanan atas pada listbox tersebut, klik Edit Item dan isikan data-datanya.

#### Button

Button merupakan kontrol yang dipakai sebagai tombol untuk melakukan sebuah proses ataupun mengeksekusi perintah tertentu seperti Exit, Close, Open, Apply, dan sebagainya.

Gambar 3.6 Button dalam Toolbox

#### Membuat Aplikasi sederhana Praktikum 1

- Buka	LatihanProject_1	yang	sudah	dibuat	pada praktikum sebelumnya

- Pada form childForm tambahkan control-control berikut ini ke dalam Form Design

- Desain tampilan yang dihasilkan adalah sebagai berikut.

- Sisipkan kode berikut pada btntampilkan.

- Jalankan aplikasi dengan menekan tombol F5 atau melalui ikon Start Debugging di toolbar, atau melalui menu Debug > Start Debugging

- Jika berhasil, maka program akan dijalankan, dan setelah melakukan pengisian pada txtnama maupun memilih pada cbojeniskelamin dan cbofakultas kemudian klik btntampilkan maka akan muncul pesan sesuai dengan apa yang telah diisikan.

- Hasil tampilan pada program tersebut.



| No | Object | Property | Nilai |

| 1 | Label | Text | Nama |

| 2 | Label | Text | Jenis Kelamin |

| 3 | Label | Text | Jurusan |

| 4 | TextBox | Name | Txtnama |

| 4 | TextBox | Text | (dikosongkan) |

| 5 | ComboBox | Name | CmbJenisKelamin |

| 5 | ComboBox | Items | Laki-Laki Perempuan |

| 5 | ComboBox | DropDownStyle | DropDownList |

| 6 | ComboBox | Name | CmbJurusan |

| 6 | ComboBox | Items | Manajemen Informatika |



| No | Object | Property | Nilai |

|  |  |  | Teknik Komputer Teknik Elektro Akuntansi Teknik Sipil |

|  |  | DropDownStyle | DropDownList |

| 7 | Button | Name | BtnTampil |

| 7 | Button | Text | Tampilkan Pesan |
