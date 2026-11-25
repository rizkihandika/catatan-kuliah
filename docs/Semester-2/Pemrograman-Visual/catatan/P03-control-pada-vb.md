# P03 — Control pada Visual Basic

Tanggal: 2026-11-04 · Sumber: `materi/Pemograman Visual3.ppt`, `materi/PV Modul Sesi 3.docx`, `materi/Bab 4.pdf`

## Ringkasan 3 kalimat
Control dasar Windows Forms adalah **Label** (teks tak bisa diedit), **TextBox** (input/output teks), **Button** (menjalankan perintah), **ComboBox** (daftar pilihan yang bisa diketik), **ListBox** (daftar berindeks 0..n−1), serta CheckBox/RadioButton. Tiap control diatur lewat Properties window (F4) dan diberi prefix nama (`lbl`, `txt`, `btn`, `cbo`, `lst`). Pengaturan form penting: **AcceptButton** (tombol yang terpicu Enter) dan **TabIndex** (urutan fokus saat Tab).

## Konsep kunci

### 1. Control dasar
| Control | Prefix | Fungsi | Properti penting |
|---------|--------|--------|------------------|
| Label | `lbl` | teks keterangan, **tidak bisa diedit** user | `Text`, `Font`, `TextAlign`, `BorderStyle` (FixedSingle/Fixed3D), `AutoSize` |
| TextBox | `txt` | input/output teks saat runtime | `Multiline`, `ScrollBars`, `PasswordChar`, `ReadOnly` |
| Button | `btn` | menjalankan perintah | `Text` (menggambarkan aksi), `Image`, access key `&Simpan` |
| ComboBox | `cbo`/`cmb` | daftar pilihan, bisa diketik | `DropDownStyle`, `Items` |
| ListBox | `lst` | daftar teks dipilih lewat **index 0..n−1** | `Items.Add()`, `SelectedItem`, `SelectedIndex` |
| CheckBox / RadioButton | `chk` / `rad` | pilih banyak / pilih satu | `Checked` |

### 2. ComboBox: tiga DropDownStyle
| Style | Tampilan | Bisa diketik? |
|-------|----------|---------------|
| **DropDown** | satu baris + panah | ✓ |
| **Simple** | mirip ListBox, kotak ketik di atas | ✓ (bagian atas) |
| **DropDownList** | satu baris + panah | ✗ (hanya memilih) |

Isi item: panah kecil kanan atas control → **Edit Items**, atau lewat kode `Items.Add`.

### 3. ListBox
```vb
' Contoh ilustrasi
Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    lstMatkul.Items.Add("Dasar Pemrograman")    ' index 0
    lstMatkul.Items.Add("Aljabar Linear")       ' index 1
End Sub

Private Sub lstMatkul_SelectedIndexChanged(sender As Object, e As EventArgs) _
        Handles lstMatkul.SelectedIndexChanged
    lblPilihan.Text = lstMatkul.SelectedItem.ToString() &
                      " (index " & lstMatkul.SelectedIndex & ")"
End Sub
```
`SelectedItem` = **teks** yang dipilih; `SelectedIndex` = **nomor urut** (mulai 0; −1 jika tidak ada).

### 4. Bekerja di IDE
- 4 cara menaruh control: double-click, drag & drop, click-point-click, click-point-drag.
- **F4** = Properties window (tampilan kategori atau alfabetis).
- Rename form: `Form1.vb` → `frmNama.vb`.
- Toolbox **Auto Hide** (ikon push pin); **snap line** membantu merapikan posisi.
- Font proportional (Microsoft Sans Serif) vs fixed-width (Courier New, cocok untuk tabel).

### 5. AcceptButton & TabIndex
- `Form.AcceptButton = btnLogin` → menekan **Enter** sama dengan klik btnLogin.
- **TabIndex**: urutan fokus; `TabIndex = 0` mendapat fokus pertama.

### 6. Praktikum 1 (form biodata)
`Txtnama`, `CmbJenisKelamin` & `CmbJurusan` (**DropDownList**), `BtnTampil` menampilkan isian dengan `MessageBox.Show`. Jalankan dengan **F5**.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Runtime | saat program berjalan |
| Design time | saat merancang di IDE |
| PasswordChar | karakter penyamar input (mis. `*`) |
| Access key | huruf bergaris bawah untuk Alt+huruf (`&`) |
| Index | nomor urut item, mulai 0 |

## Sering keluar di ujian / mudah keliru
- ComboBox **DropDownList** tidak bisa diketik; **DropDown** bisa.
- Index ListBox **mulai 0**.
- Label tidak bisa diedit user; untuk output yang bisa disalin tapi tak bisa diubah pakai TextBox `ReadOnly = True`.
- Prefix: `lbl`, `txt`, `btn`, `cbo`, `lst`, `chk`, `rad`, `frm`.

## Pertanyaan untuk dicek ke dosen
- Prefix ComboBox yang dipakai: `cbo` atau `cmb` (modul memakai `Cmb…`)?

## Sumber
- `Pemograman Visual3.ppt`, `PV Modul Sesi 3.docx`, `Bab 4.pdf` hal. 1–5 (teks di `arsip/teks-materi/`)
- Contoh kode adalah ilustrasi buatan sendiri.
