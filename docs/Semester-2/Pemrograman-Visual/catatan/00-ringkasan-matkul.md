# Ringkasan Matkul — Pemrograman Visual (P01–P05)

> Dosen: Muhammad Ikhwani Saputra · Bahasa: **Visual Basic .NET (Windows Forms, Visual Studio)** · Arsip lengkap: [../arsip/README.md](../arsip/README.md) · Teks materi: ../arsip/teks-materi/ *(ada di Edlink)*
> Belum ada vicon atau video di Edlink. Ada 4 lampiran yang **404 di server Edlink** (dua PPT RPS P01, `RPS Pemrograman Visual.docx`, `Pemograman Visual4.pptx`), jadi buka langsung di Edlink atau tanyakan ke dosen.
> Kuis: P01 (7 soal, grade 100) dan P02 (5 soal, grade 80) sudah dikerjakan. Absensi sesi 1–4 akan dicek dosen (pengumuman di post P03 & P05).
> Banyak kode di modul berupa **gambar**. Contoh kode di bawah ini buatanku sebagai ilustrasi, bukan salinan modul.

## Peta besar
Aplikasi Windows = **form** (jendela) + **control** (tombol, textbox, …) + **kode yang bereaksi pada event**. Urutan materinya: kenal VB & IDE → menyusun UI → mengenal control → prosedur/event/method → dialog. Menurut RPS, berikutnya Form dan Variable/Debug.

---

## P01 — Pengantar Pemrograman Visual
Sumber: post Edlink P01 (file PPT/RPS 404)

Isinya RPS dan latar belakang belajar pemrograman visual dengan Visual Studio. Dosen meminta membaca modul dulu, lalu vicon akan dijadwalkan. Lampiran tidak bisa diunduh, jadi isi detailnya belum ada di workspace.

## P02 — Building User Interface
Sumber: `Pemograman Visual Sesi 2.ppt`

- **Visual Basic** = bahasa untuk aplikasi Windows berbasis **GUI** dan bersifat **event-driven**: program *menunggu* kejadian dari pengguna (klik tombol, pilih menu) lalu menjalankan kode yang sesuai.
- **Struktur aplikasi**: beberapa **Form** + **Module**.
  - **Form** = jendela tempat UI.
  - **Control** = elemen grafis di form (textbox, label, scrollbar).
  - **Properties** = karakteristik objek (Name, Text/Caption, Size, BackColor).
- **Objek VB** punya 3 hal:
  - **Properti** (atribut/sifat).
  - **Metode** (aksi yang dilakukan objek).
  - **Event** (kejadian yang dialami objek).
  - Contoh untuk Form: event `Click, Load, Resize, DblClick, DragDrop`; metode `Hide, Move, Show`; properti `BackColor, Caption`.
- **Jenis kode**: *prosedur kejadian* (terikat ke objek dan event), *prosedur umum* (tidak terikat objek), *module* (kumpulan prosedur umum).
- **Menaruh control**: double-click di Toolbox, atau klik lalu drag. Banyak sekaligus: tahan **Ctrl** sambil klik berkali-kali, atau copy (**Ctrl+C / Ctrl+V**).
- **Penamaan**: hanya beri nama control yang dipakai di kode (label biasa tidak perlu), dan yang penting **konsisten**. Gaya VB: `txtFirstName`, gaya C#: `firstNameTextBox`.
- **Anchor**: membuat control ikut menyesuaikan ukuran saat form di-resize.

## P03 — Control pada VB
Sumber: `Pemograman Visual3.ppt`, `PV Modul Sesi 3.docx`

| Control | Prefix | Fungsi & properti penting |
|---|---|---|
| Label | `lbl` | teks keterangan yang tidak bisa diedit user. `Text`, `Font`, `TextAlign`, `BorderStyle` (FixedSingle/Fixed3D), `AutoSize` (False → bisa multi-baris) |
| TextBox | `txt` | input/output teks saat runtime. `Multiline`, `ScrollBars`, `PasswordChar`, `ReadOnly` (True kalau dipakai untuk output) |
| Button | `btn` | menjalankan perintah. `Text` (harus menggambarkan aksinya), `Image`, `ImageAlign`; *access key* `&Simpan` |
| ComboBox | `cbo`/`cmb` | daftar pilihan + bisa diketik. `DropDownStyle`: **DropDown** (bisa ketik), **Simple**, **DropDownList** (tidak bisa ketik) |
| ListBox | `lst` | daftar teks dipilih lewat **index 0..n-1**. `Items.Add()`, `SelectedItem`, `SelectedIndex` |
| CheckBox / RadioButton / CheckedListBox | `chk`/`rad` | pilihan ganda (bisa lebih dari satu) / pilihan tunggal |

- **4 cara menaruh control**: double-click, drag & drop, click-point-click, click-point-drag.
- **Properties window**: tekan **F4**, ada tampilan kategori atau alfabetis.
- Rename form: file `Form1.vb` diganti jadi `frmNama.vb`.
- **Form.AcceptButton** = tombol yang terpicu saat user menekan **Enter**.
- **TabIndex**: urutan fokus saat menekan Tab. Control dengan `TabIndex = 0` mendapat fokus pertama.
- Font *proportional* (Microsoft Sans Serif) vs *fixed-width* (Courier New, cocok untuk tabel). Toolbox **Auto Hide** pakai ikon push pin. Snap line / proximity line membantu merapikan posisi control.
- **Praktikum 1**: form biodata dengan `Txtnama`, `CmbJenisKelamin` & `CmbJurusan` (DropDownList), dan `BtnTampil` yang menampilkan pesan dari isian. Jalankan dengan **F5** (Start Debugging).
```vb
' Contoh ilustrasi Praktikum 1
Private Sub BtnTampil_Click(sender As Object, e As EventArgs) Handles BtnTampil.Click
    MessageBox.Show("Nama: " & Txtnama.Text & vbCrLf &
                    "Jenis kelamin: " & CmbJenisKelamin.Text & vbCrLf &
                    "Jurusan: " & CmbJurusan.Text)
End Sub
```

## P04 — Procedure, Event, dan Method
Sumber: `Sesi 4 Pemrograman Visual.pdf` (+ `Pemograman Visual4.pptx` 404)

- **Procedure (Sub)** = sub-program untuk proses yang dipakai berulang kali.
  ```vb
  [Public|Private] Sub NamaSub(argumen)
      ' kode
  End Sub
  ```
  - **Prosedur objek**: milik control + event-nya, dibuat otomatis saat control di-double-click.
  - **Prosedur bebas**: tidak terikat control, dipanggil dengan `Call NamaSub()`. Contoh: satu Sub untuk mengosongkan semua TextBox.
- **Event** = kejadian yang diterima objek. Event-nya bisa diganti lewat combobox kanan atas di jendela kode.
  - **Mouse**: `Click`, `DblClick`, `DragDrop`, `DragOver`, `MouseDown`, `MouseUp`, `MouseMove`.
  - **Keyboard**: `KeyPress` (parameternya kode ASCII), `KeyDown`, `KeyUp`.
  - **Perubahan**: `Activate`, `Deactivate`, `GotFocus`, `LostFocus`, `Load` (form dibuka), `Paint`, `Resize`, `Change`.
- **Method** = aksi bawaan objek, dipanggil dengan `Objek.Method`.
  - Untuk Form: `CenterToScreen`, `Close`, `Hide`, `Show`.
  - Untuk TextBox: `Clear`, `Focus`, `Select`.
- **Latihan**: Form Latihan-2 punya prosedur `TeksLabel` yang dipanggil di `Form_Load`, tombol List/Clear/Exit, dan aplikasi Login.
```vb
Private Sub BersihkanInput()              ' prosedur bebas
    txtNama.Clear() : txtNim.Clear()
    txtNama.Focus()
End Sub

Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
    Call BersihkanInput()
End Sub

Private Sub btnExit_Click(sender As Object, e As EventArgs) Handles btnExit.Click
    Me.Close()                             ' method Close milik form
End Sub
```

## P05 — Dialogs
Sumber: `PV5 Dialogs.pptx`, `Bab 4.pdf` (Bab 4 isinya mengulang basic control P03)

- **Dialog box** = jendela untuk tugas umum seperti buka/simpan file, cetak, pilih warna/font, atau pilih folder.
- Sebelum `ShowDialog()`, atur properti `InitialDirectory`, `Filter`, `FilterIndex`, dan `FileName`.
- Jenis dialog: **MessageBox**, **OpenFileDialog** (`ofdData`), **SaveFileDialog** (`sfdData`), **ColorDialog**, **FontDialog**, **FolderBrowserDialog**.
- Format filter: `"Text Files|*.txt|All Files|*.*"`.
```vb
Private Sub btnFileOpen_Click(sender As Object, e As EventArgs) Handles btnFileOpen.Click
    ofdData.Filter = "Text Files|*.txt|All Files|*.*"
    If ofdData.ShowDialog() = DialogResult.OK Then
        txtFileOpen.Text = ofdData.FileName    ' path file yang dipilih
    End If
End Sub

' MessageBox dengan tombol & ikon
If MessageBox.Show("Keluar?", "Konfirmasi", MessageBoxButtons.YesNo,
                   MessageBoxIcon.Question) = DialogResult.Yes Then Me.Close()
```

---

## Yang perlu diingat untuk UTS
1. Arti **event-driven** dan bedanya properti, metode, dan event (dengan contoh untuk Form).
2. Control dasar: fungsi, properti penting, **prefix nama** (btn/lbl/txt/lst/cbo/frm), dan 3 DropDownStyle ComboBox.
3. ListBox: `Items.Add`, `SelectedItem` vs `SelectedIndex`. `AcceptButton`, `TabIndex`, `ReadOnly`, `PasswordChar`.
4. Prosedur objek vs prosedur bebas (`Call`). Kategori event mouse, keyboard, dan perubahan. Method Form & TextBox.
5. Jenis dialog dan pola `If dialog.ShowDialog() = DialogResult.OK Then …`.
6. Siapkan **Visual Studio Community** (workload .NET desktop), karena UTS kemungkinan praktik membuat form.
