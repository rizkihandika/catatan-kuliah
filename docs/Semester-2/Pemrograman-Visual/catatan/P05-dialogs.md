# P05 — Dialogs

Tanggal: 2026-11-18 · Sumber: [`PV5 Dialogs.pptx`](../materi/PV5%20Dialogs.pptx), [`Bab 4.pdf`](../materi/Bab%204.pdf) (Bab 4 mengulang basic control P03)

## Ringkasan 3 kalimat
**Dialog box** adalah jendela untuk tugas umum seperti membuka/menyimpan file, mencetak, memilih warna, font, atau folder. Jenisnya: **MessageBox**, **OpenFileDialog**, **SaveFileDialog**, **ColorDialog**, **FontDialog**, dan **FolderBrowserDialog**. Sebelum memanggil `ShowDialog()`, atur properti seperti `InitialDirectory`, `Filter`, `FilterIndex`, dan `FileName`, lalu periksa apakah hasilnya `DialogResult.OK`.

## Konsep kunci

### 1. Jenis dialog
| Dialog | Fungsi | Prefix nama |
|--------|--------|-------------|
| **MessageBox** | pesan/konfirmasi (dipanggil lewat kode, bukan control di Toolbox) | — |
| **OpenFileDialog** | memilih file untuk dibuka | `ofd` (mis. `ofdData`) |
| **SaveFileDialog** | memilih lokasi & nama file simpan | `sfd` (mis. `sfdData`) |
| **ColorDialog** | memilih warna | `cd` / `dlgColor` |
| **FontDialog** | memilih font | `fd` / `dlgFont` |
| **FolderBrowserDialog** | memilih folder | `fbd` |

### 2. Properti yang diatur sebelum `ShowDialog()`
| Properti | Fungsi |
|----------|--------|
| `InitialDirectory` | folder awal yang dibuka |
| `Filter` | jenis file yang ditampilkan |
| `FilterIndex` | filter mana yang aktif pertama (mulai 1) |
| `FileName` | nama file awal / hasil pilihan |

Format **Filter**: pasangan `Deskripsi|pola`, dipisah `|`:
```
Text Files|*.txt|All Files|*.*
```

### 3. Pola umum (ilustrasi)
```vb
' Rancangan form (slide 8): ofdData, sfdData, txtFileOpen, txtFileSave, btnFileOpen, btnFileSave
Private Sub btnFileOpen_Click(sender As Object, e As EventArgs) Handles btnFileOpen.Click
    ofdData.InitialDirectory = "C:\"
    ofdData.Filter = "Text Files|*.txt|All Files|*.*"
    ofdData.FilterIndex = 1
    If ofdData.ShowDialog() = DialogResult.OK Then   ' user menekan Open
        txtFileOpen.Text = ofdData.FileName           ' path lengkap file
    End If
End Sub

Private Sub btnFileSave_Click(sender As Object, e As EventArgs) Handles btnFileSave.Click
    sfdData.Filter = "Text Files|*.txt"
    If sfdData.ShowDialog() = DialogResult.OK Then
        txtFileSave.Text = sfdData.FileName
    End If
End Sub
```

### 4. MessageBox
```vb
MessageBox.Show("Data tersimpan")                       ' paling sederhana
If MessageBox.Show("Keluar dari aplikasi?", "Konfirmasi",
                   MessageBoxButtons.YesNo,
                   MessageBoxIcon.Question) = DialogResult.Yes Then
    Me.Close()
End If
```
| Parameter | Contoh nilai |
|-----------|--------------|
| teks | `"Keluar?"` |
| judul (caption) | `"Konfirmasi"` |
| tombol | `OK`, `OKCancel`, `YesNo`, `YesNoCancel`, `RetryCancel` |
| ikon | `Information`, `Question`, `Warning`, `Error` |
| hasil | `DialogResult.OK`, `.Yes`, `.No`, `.Cancel` |

### 5. Color & Font dialog (ilustrasi)
```vb
If dlgColor.ShowDialog() = DialogResult.OK Then lblJudul.ForeColor = dlgColor.Color
If dlgFont.ShowDialog() = DialogResult.OK Then lblJudul.Font = dlgFont.Font
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Dialog box | jendela interaksi untuk tugas umum |
| Modal | jendela yang harus ditutup dulu sebelum kembali ke form (`ShowDialog`) |
| DialogResult | nilai tombol yang ditekan user |
| Filter | penyaring jenis file |

## Sering keluar di ujian / mudah keliru
- Pola wajib: `If dialog.ShowDialog() = DialogResult.OK Then …` — kalau user menekan Cancel, jangan proses.
- Format filter memakai **`|`**, bukan koma.
- OpenFileDialog/SaveFileDialog **hanya memilih path**; membaca/menulis isi file butuh kode lain.
- `FilterIndex` dimulai dari **1**, bukan 0.

## Pertanyaan untuk dicek ke dosen
- Slide 9–12 berjudul "Scroll Bars" tapi isinya tentang filter & SaveFileDialog — ada materi ScrollBar yang terlewat?

## Sumber
- `PV5 Dialogs.pptx` slide 2–12 (teks: `arsip/teks-materi/PV5 Dialogs.pptx.md`; slide MessageBox berupa gambar)
- Contoh kode adalah ilustrasi buatan sendiri.
