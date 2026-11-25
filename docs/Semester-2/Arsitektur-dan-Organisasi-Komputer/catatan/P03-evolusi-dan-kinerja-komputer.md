# P03 — Evolusi dan Kinerja Komputer

Tanggal: 2026-11-07 · Sumber: [`dPRAS_OrKom#03 Evolusi Dan Kinerja Komputer.pdf`](../materi/dPRAS_OrKom%2303%20Evolusi%20Dan%20Kinerja%20Komputer.pdf)

## Ringkasan 3 kalimat
Komputer berevolusi dalam empat generasi berdasarkan teknologi dasarnya: **tabung vakum → transistor → IC → VLSI/chip**, setiap generasi makin kecil, cepat, dan hemat listrik. Pemampatan komponen berlanjut ke ULSI dan ide WSI, hingga prosesor menjadi satu IC "otak" komputer. Prosesor Intel berkembang dari 8080 (8 bit) ke 8086, 80286, 80386 (32 bit, multitasking), 80486 (cache, pipelining), lalu keluarga Pentium (superskalar, MMX, floating point).

## Konsep kunci

### 1. Empat generasi komputer (slide 3–14)
| Generasi | Tahun | Teknologi dasar | Ciri khas |
|----------|-------|-----------------|-----------|
| 1 | 1945–1955 | **Tabung vakum (vacuum tube)** | bahasa mesin, memori **magnetic core**, ukuran sangat besar, boros listrik |
| 2 | 1955–1965 | **Transistor** | bahasa **FORTRAN, COBOL, ALGOL**, memori sekunder **magnetic tape**, lebih kecil & hemat |
| 3 | 1965–1980 | **IC (Integrated Circuit)** | monitor bisa menampilkan gambar/grafik, ada **fitur jaringan**, magnetic tape, lebih hemat |
| 4 | 1980– | **LSI/VLSI (chip)** | ribuan IC dipadatkan dalam satu keping (**chip**), lahir **komputer mikro** dengan **microprocessor** |

Jembatan keledai: **"Ta-Tra-I-Chip"** (Tabung, Transistor, IC, Chip).

### 2. Evolusi teknologi dasar (slide 15–16)
1. **Mekanik/listrik → tabung hampa**.
2. **Transistor**: semikonduktor yang berfungsi sebagai **penguat, switch, modulasi sinyal**.
3. **IC**: rangkaian terintegrasi → perpindahan data antarkomponen makin singkat → lebih cepat.
4. **Chip**: beda generasi 3 dan 4 hanya **tingkat kemampatan** komponen. Makin mampat → **biaya turun, kecepatan naik** (jarak antarkomponen dekat). Lanjutannya **ULSI** (Ultra Large-Scale Integration) dan ide ekstrem **WSI** (Wafer-Scale Integration: seluruh komputer dalam satu chip).
5. **Prosesor**: IC yang mengontrol seluruh sistem, "otak" komputer, terpasang di **socket motherboard**.

### 3. Evolusi prosesor Intel (slide 17–18, angka versi slide)
| Prosesor | Tahun (slide) | Kemajuan utama |
|----------|---------------|----------------|
| 8080 | 1972 | mikroprosesor 8 bit, bus data 8 bit, 66 instruksi |
| 8086 | 1974 | 16 bit, **cache instruksi**, 111 instruksi |
| 80286 | 1982 | pengembangan 8086, 133 instruksi |
| 80386 | 1985 | **32 bit**, mendukung **multitasking** |
| 80486 | 1989 | **cache memory** & **pipelining** instruksi, **math co-processor** |
| Pentium | 1993 | **superskalar** → eksekusi instruksi paralel |
| Pentium Pro | 1995 | superskalar lebih baik, **prediksi cabang**, analisis aliran data |
| Pentium II | 1997 | teknologi **MMX** (multimedia) |
| Pentium III | — | instruksi floating point untuk **grafis 3D** |
| Pentium 4 | — | floating point & multimedia makin canggih |

### 4. Perancangan kinerja (slide 19)
Faktor pendorong: **kecepatan mikroprosesor** dan **keseimbangan kinerja** (komponen lain seperti memori & I/O harus bisa mengimbangi kecepatan prosesor, kalau tidak prosesor menunggu).

## Istilah penting
| Istilah | Arti |
|---------|------|
| Tabung vakum | Komponen elektronik generasi 1, besar & panas |
| Transistor | Semikonduktor: penguat, switch, modulasi sinyal |
| IC | Integrated Circuit — banyak transistor dalam satu rangkaian |
| LSI / VLSI / ULSI / WSI | Tingkat integrasi: large → very large → ultra large → wafer-scale |
| Microprocessor | CPU dalam satu chip |
| Pipelining | Tahapan eksekusi instruksi dikerjakan tumpang-tindih seperti jalur perakitan |
| Superskalar | Beberapa instruksi dieksekusi paralel dalam satu siklus |
| MMX | Ekstensi instruksi multimedia Intel |
| Branch prediction | Menebak arah percabangan program agar pipeline tidak berhenti |

## Sering keluar di ujian / mudah keliru
- Pasangkan generasi ↔ teknologi ↔ ciri (mis. **FORTRAN/COBOL = generasi 2**, **fitur jaringan & grafik = generasi 3**, **microprocessor = generasi 4**).
- Generasi 3 dan 4 sama-sama IC; bedanya **kepadatan**.
- 80386 = pertama 32 bit & multitasking; 80486 = cache + pipelining + co-processor; Pentium = superskalar; Pentium II = MMX.
- **Angka di slide ada yang tidak sesuai sejarah**: 8080 rilis 1974 (yang 1972 adalah 8008), 8086 rilis 1978 dan bisa mengalamati 1 MB, 80286 mengalamati 16 MB. Untuk kuis, ikuti slide; untuk pengetahuan, ingat versi sebenarnya.

## Pertanyaan untuk dicek ke dosen
- Slide hal. 4–8, 10, 12–13 berisi gambar (tanpa teks) — apakah contoh komputer tiap generasi (ENIAC, IBM 7090, IBM 360, dsb.) perlu dihafal?
- Evolusi **PowerPC** disebut di RPS tetapi tidak ada di slide — masuk UTS atau tidak?

## Sumber
- `dPRAS_OrKom#03 Evolusi Dan Kinerja Komputer.pdf` slide 2–19 (teks: `arsip/teks-materi/dPRAS_OrKom#03 Evolusi Dan Kinerja Komputer.pdf.md`)
