# P02 — Building User Interface

Tanggal: 2026-10-28 · Sumber: [`Pemograman Visual Sesi 2.ppt`](../materi/Pemograman%20Visual%20Sesi%202.ppt)

## Ringkasan 3 kalimat
Visual Basic adalah bahasa untuk aplikasi Windows berbasis **GUI** yang bersifat **event-driven**: program menunggu kejadian dari pengguna lalu menjalankan kode yang sesuai. Aplikasi tersusun dari **Form** (jendela), **Control** (elemen UI), dan **Module**, dan setiap objek punya **properti** (sifat), **metode** (aksi), dan **event** (kejadian). Control ditaruh dari Toolbox, diberi nama yang konsisten (mis. `txtFirstName`), dan bisa diatur **Anchor**-nya agar ikut menyesuaikan saat form di-resize.

## Konsep kunci

### 1. Event-driven
**Intuisi**: seperti pelayan restoran yang menunggu panggilan — tidak berbuat apa-apa sampai ada pelanggan yang mengangkat tangan (event), lalu melayani sesuai permintaan.

### 2. Struktur aplikasi VB
| Bagian | Arti |
|--------|------|
| **Form** | jendela tempat UI |
| **Control** | elemen grafis di form (TextBox, Label, Button, ScrollBar) |
| **Properties** | karakteristik objek (Name, Text, Size, BackColor) |
| **Module** | kumpulan prosedur umum |

### 3. Properti, metode, event
| Aspek | Arti | Contoh pada Form |
|-------|------|------------------|
| **Properti** | atribut/sifat | `BackColor`, `Text` (dulu `Caption`) |
| **Metode** | aksi yang dilakukan objek | `Hide`, `Move`, `Show` |
| **Event** | kejadian yang dialami objek | `Click`, `Load`, `Resize`, `DblClick`, `DragDrop` |

Jembatan keledai: properti = **kata sifat**, metode = **kata kerja**, event = **"ketika …"**.

### 4. Jenis kode
- **Prosedur kejadian (event procedure)**: terikat ke objek + event (`btnSimpan_Click`).
- **Prosedur umum**: tidak terikat objek.
- **Module**: wadah prosedur umum.

### 5. Menaruh & menamai control
- Taruh: double-click di Toolbox, atau klik lalu drag. Banyak sekaligus: tahan **Ctrl** sambil klik, atau **Ctrl+C / Ctrl+V**.
- Beri nama hanya control yang dipakai di kode; yang penting **konsisten**.
  - Gaya VB (prefix): `txtFirstName`, `btnSimpan`, `lblJudul`.
  - Gaya C#: `firstNameTextBox`.
- **Anchor**: mengunci tepi control ke tepi form (Top, Left, Right, Bottom) sehingga control melebar/menyempit saat form di-resize.

```vb
' Contoh ilustrasi: properti & metode dipakai di kode
Private Sub Form1_Load(sender As Object, e As EventArgs) Handles MyBase.Load
    Me.Text = "Biodata Mahasiswa"     ' properti
    Me.BackColor = Color.LightYellow  ' properti
    Me.CenterToScreen()               ' metode
End Sub
```

## Istilah penting
| Istilah | Arti |
|---------|------|
| Toolbox | panel daftar control |
| Properties window | panel pengatur properti (F4) |
| Prefix | awalan nama sesuai jenis control |
| Anchor | penambat posisi control terhadap form |

## Sering keluar di ujian / mudah keliru
- Bedakan **properti / metode / event** — kuis P02 dapat 80, kemungkinan di bagian ini.
- `Load` adalah **event** (bukan metode); `Show` adalah **metode**.
- Nama control ≠ teks yang tampil (`Name` vs `Text`).

## Pertanyaan untuk dicek ke dosen
- Konvensi nama yang dipakai saat penilaian: prefix gaya VB (`txt…`) atau bebas asal konsisten?

## Sumber
- `Pemograman Visual Sesi 2.ppt` (teks: `arsip/teks-materi/Pemograman Visual Sesi 2.ppt.md`)
- Contoh kode di atas adalah ilustrasi buatan sendiri, bukan salinan slide.
