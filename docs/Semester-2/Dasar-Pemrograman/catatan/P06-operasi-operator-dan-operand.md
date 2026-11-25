# P06 — Operasi, Operator, dan Operand

Tanggal: 2026-11-30 · Sumber: [`Dasar Pemrograman Pertemuan 6.pdf`](../materi/Dasar%20Pemrograman%20Pertemuan%206.pdf)

## Ringkasan 3 kalimat
**Operator** adalah simbol tindakan (mis. `+`), **operand** adalah objek yang dikenai operasi (mis. `X`, `Y`), dan **operasi** adalah pemrosesan data menurut aturan tertentu (`X + Y`). Ada delapan jenis operator: aritmatika, assignment, bitwise, perbandingan, increment/decrement, logika, string, dan array. Yang sering menjebak: **urutan prioritas** (`* /` sebelum `+ -`) dan **operasi bitwise** yang bekerja per bit.

## Konsep kunci

### 1. Definisi (slide 3)
```
  X   +   Y      ← operasi penjumlahan
  │   │   │
operand │ operand
     operator
```

### 2. Operator aritmatika & prioritas (slide 5–6)
`+  -  *  /` · Prioritas: **(1) `*` atau `/`** → **(2) `+` atau `−`**; operator setingkat dikerjakan **dari kiri ke kanan**; tanda kurung paling didahulukan.

*Knowledge check* `a + b + c * d / e - f`:
1. `c * d`
2. `(c*d) / e`
3. `a + b`
4. `(a+b) + (c*d/e)`
5. `... - f`

### 3. Assignment (slide 7)
`x = 5` → operand kiri diberi nilai ekspresi kanan.

### 4. Bitwise (slide 8–11)
| Simbol | Nama | Contoh |
|--------|------|--------|
| `&` | AND | `a & b` |
| `\|` | OR | `a \| b` |
| `^` | XOR | `a ^ b` |
| `~` | NOT (komplemen) | `~a` |
| `<<` | shift left | `a << b` |
| `>>` | shift right | `a >> b` |

| A | B | ~A | A & B | A \| B | A ^ B |
|---|---|----|-------|--------|-------|
| 1 | 1 | 0 | 1 | 1 | 0 |
| 1 | 0 | 0 | 0 | 1 | 1 |
| 0 | 1 | 1 | 0 | 1 | 1 |
| 0 | 0 | 1 | 0 | 0 | 0 |

Kerjakan per bit (tulis dalam biner dulu):
```
  1 = 0001          1 = 0001          1 = 0001
& 5 = 0101        | 5 = 0101        ^ 5 = 0101
  -----------       -----------       -----------
  1 = 0001          5 = 0101          4 = 0100
```
Shift: `4 >> 1` → 0100 → 0010 = **2** (geser kanan 1 = bagi 2). `3 << 1` → 0011 → 0110 = 6 (geser kiri 1 = kali 2).

### 5. Perbandingan (slide 12)
`==  !=  <  >  <=  >=` → hasil **TRUE/FALSE**.

### 6. Increment / decrement (slide 13)
`a++` (tambah 1), `b--` (kurang 1).

### 7. Logika (slide 14)
Operand harus boolean: `!a` (NOT), `a && b` (TRUE jika **keduanya** TRUE), `a || b` (TRUE jika **salah satu** TRUE).

### 8. String (slide 15–17, notasi gaya PHP)
- `.` **concatenation**: `"Hello" . "World"`.
- `.=` **concatenating assignment**: `A = "Hello"; A .= "World"` → A berubah.

### 9. Array (slide 18–19)
- `+` **union** (gabung elemen kedua array), `==` sama, `!=` tidak sama.
- Contoh slide: `("apple","banana") + ("pear","strawberry","cherry")` → digabung.

## Istilah penting
| Istilah | Arti |
|---------|------|
| Operator | simbol tindakan |
| Operand | data yang dikenai operasi |
| Operasi | pemrosesan data dengan aturan tertentu |
| Bitwise | operasi per bit |
| XOR | eksklusif OR: 1 jika kedua bit **berbeda** |
| Concatenation | penyambungan string |
| Union | penggabungan array |

## Sering keluar di ujian / mudah keliru
- **XOR**: 1 hanya jika bit berbeda (1^1 = 0).
- `&` (bitwise, per bit) ≠ `&&` (logika, true/false); `|` ≠ `||`.
- `=` (assignment) ≠ `==` (perbandingan).
- Prioritas: `*` dan `/` dulu; operator setingkat dari kiri ke kanan.
- Contoh slide `"Hello" . "World"` ditulis menghasilkan "Hello World", padahal concatenation **tidak menambah spasi** → hasilnya `"HelloWorld"` (spasi harus disisipkan sendiri: `"Hello" . " " . "World"`).
- Notasi `.`/`.=` dan union array `+` berasal dari **PHP**; di PHP, union dengan indeks angka yang sama justru **tidak menimpa** elemen kiri (hasil nyata contoh slide: apple, banana, cherry). Untuk ujian konsep, ikuti penjelasan slide.

## Latihan cepat
(1) `6 & 3` (2) `6 | 3` (3) `6 ^ 3` (4) `8 >> 2` (5) `2 + 3 * 4 - 6 / 2`
<details><summary>Jawaban</summary>

(1) 0110 & 0011 = 0010 = **2** (2) 0111 = **7** (3) 0101 = **5** (4) 1000 → 0010 = **2** (5) 2 + 12 − 3 = **11**
</details>

## Pertanyaan untuk dicek ke dosen
- Operator string dan array memakai notasi PHP — apakah ujian akan memakai bahasa tertentu?

## Sumber
- `Dasar Pemrograman Pertemuan 6.pdf` slide 3–19 (teks: `arsip/teks-materi/Dasar Pemrograman Pertemuan 6.pdf.md`)
- Kuis Sesi #6 tenggat **2026-12-01 12:00** (lihat `deadline.md`).
