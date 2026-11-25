# P04 — Procedure, Event, dan Method

Tanggal: 2026-11-11 · Sumber: `materi/Sesi 4 Pemrograman Visual.pdf` (`Pemograman Visual4.pptx` 404 di Edlink)

## Ringkasan 3 kalimat
**Prosedur (Sub)** adalah sub-program untuk proses yang dipakai berulang, terbagi menjadi **prosedur objek** (terikat control + event, dibuat otomatis saat double-click) dan **prosedur bebas** (berdiri sendiri, dipanggil dengan `Call`). **Event** adalah kejadian yang diterima objek, dikelompokkan menjadi event mouse, keyboard, dan perubahan. **Method** adalah aksi bawaan objek yang dipanggil dengan `Objek.Method`, misalnya `Close`/`Show` pada Form dan `Clear`/`Focus` pada TextBox.

## Konsep kunci

### 1. Prosedur
```vb
[Public | Private] Sub NamaSub(argumen)
    ' kode prosedur
End Sub
```
| Jenis | Ciri | Cara dibuat/dipanggil |
|-------|------|-----------------------|
| **Prosedur objek** | milik control & event-nya (mis. `btnSimpan_Click`) | double-click control → kerangka otomatis |
| **Prosedur bebas** | tidak terikat control; kumpulan perintah | ditulis sendiri, dipanggil `Call NamaSub()` |

**Intuisi**: prosedur bebas = "tombol makro" — sekali dibuat, dipakai di banyak tempat (mis. mengosongkan semua TextBox).

```vb
' Ilustrasi
Private Sub BersihkanInput()                 ' prosedur bebas
    txtNama.Clear() : txtNim.Clear()
    txtNama.Focus()
End Sub

Private Sub btnClear_Click(sender As Object, e As EventArgs) Handles btnClear.Click
    Call BersihkanInput()                     ' prosedur objek memanggil prosedur bebas
End Sub
```

### 2. Event
Ganti event lewat **combobox kanan atas** jendela kode.

| Kelompok | Event | Terjadi ketika… |
|----------|-------|-----------------|
| **Mouse** | Click | tombol kiri ditekan & dilepas cepat |
| | DblClick | klik dua kali |
| | DragDrop | objek diseret lalu dilepas |
| | DragOver | sedang diseret (ubah tampilan pointer) |
| | MouseDown / MouseUp | tombol ditekan-tahan / dilepas |
| | MouseMove | mouse bergerak tanpa menekan |
| **Keyboard** | KeyPress | tombol ditekan (parameter **kode ASCII**) |
| | KeyDown / KeyUp | tombol ditekan-tahan / dilepas |
| **Perubahan** | Activate / Deactivate | form jadi aktif / pindah ke form lain |
| | GotFocus / LostFocus | objek mendapat / kehilangan fokus |
| | **Load** | form dibuka/dipanggil |
| | Paint | form perlu digambar ulang |
| | Resize | ukuran form diubah |
| | Change | isi control diubah |

### 3. Method
Ketik nama objek + `.` → IntelliSense menampilkan daftar method.

| Objek | Method | Efek |
|-------|--------|------|
| Form | `CenterToScreen` | form di tengah layar |
| | `Close` | menutup form |
| | `Hide` | menyembunyikan form |
| | `Show` | menampilkan form (form lain tetap bisa diakses) |
| TextBox | `Clear` | mengosongkan teks |
| | `Focus` / `Select` | memindahkan kursor ke TextBox |

### 4. Latihan modul
- **Latihan-1 (Form Latihan-2)**: prosedur bebas `TeksLabel` mengisi teks semua label, dipanggil di event `Load`; tombol **List** menampilkan isian, **Clear** mengosongkan, **Exit** menutup form.
- **Latihan-2**: aplikasi **Login**.

```vb
' Ilustrasi pola login sederhana
Private Sub btnLogin_Click(sender As Object, e As EventArgs) Handles btnLogin.Click
    If txtUser.Text = "admin" And txtPass.Text = "1234" Then
        MessageBox.Show("Login berhasil")
    Else
        MessageBox.Show("Username/password salah")
        txtPass.Clear() : txtPass.Focus()
    End If
End Sub
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Sub | prosedur (tidak mengembalikan nilai) |
| Handles | kata kunci yang mengikat Sub ke event control |
| Call | memanggil prosedur |
| IntelliSense | daftar saran otomatis di editor |
| Fokus | control yang sedang menerima input keyboard |

## Sering keluar di ujian / mudah keliru
- **Load** = event (form dibuka); **Show** = method.
- KeyPress membawa **kode ASCII**; KeyDown/KeyUp untuk tekan-tahan/lepas.
- Prosedur bebas dipanggil dengan **`Call`**; prosedur objek dipicu event.
- `Close` menutup, `Hide` hanya menyembunyikan.

## Pertanyaan untuk dicek ke dosen
- Kode latihan di modul berupa gambar — boleh dibagikan file proyeknya?

## Sumber
- `Sesi 4 Pemrograman Visual.pdf` hal. 1–11 (teks: `arsip/teks-materi/Sesi 4 Pemrograman Visual.pdf.md`)
- Contoh kode adalah ilustrasi buatan sendiri (kode modul berupa gambar).
