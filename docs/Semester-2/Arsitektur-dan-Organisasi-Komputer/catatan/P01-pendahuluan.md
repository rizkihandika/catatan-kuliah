# P01 — Pendahuluan (Peta Materi & RPS)

Tanggal: 2026-10-24 · Sumber: [`dPRAS_OrKom#01 Pendahuluan.pdf`](../materi/dPRAS_OrKom%2301%20Pendahuluan.pdf)

## Ringkasan 3 kalimat
Pertemuan pertama berisi rencana pembelajaran semester: dimulai dari konsep dasar organisasi & arsitektur, lalu evolusi/kinerja, **sistem bus**, **memori internal**, memori eksternal, input/output, dukungan sistem operasi, sampai aritmatika komputer. Materi sebelum UTS: pengantar, evolusi & kinerja, bus (2 sesi), memori internal (2 sesi), memori eksternal (magnetic disk & RAID). Hampir tiap topik disertai **kuis** di Edlink.

## Konsep kunci

### 1. Peta materi per minggu (slide 2–6)
| Minggu | Topik | Isi | Tugas |
|--------|-------|-----|-------|
| 1 | Pengantar | konsep organisasi & arsitektur, struktur & fungsi komputer | — |
| 2 | Evolusi & kinerja | sejarah, perancangan kinerja, evolusi Pentium & PowerPC | kuis kinerja/Pentium |
| 3 | Sistem bus | komponen, fungsi komputer, struktur interkoneksi | kuis komponen & fungsi |
| 4 | Sistem bus II | interkoneksi bus, **PCI**, **Futurebus** | — |
| 5 | Memori internal | ikhtisar sistem memori, memori utama semikonduktor | kuis memori |
| 6 | Memori internal II | **cache memory**, organisasi DRAM lanjut | kuis memori |
| 7 | Memori eksternal | magnetic disk, **RAID** | — |
| 8 | **UTS** | | |
| 9 | Memori eksternal II | optical, pita magnetik | kuis |
| 10–11 | Input/Output | perangkat eksternal, modul I/O, interrupt-driven I/O, **DMA** | — |
| 12–13 | Dukungan OS | scheduling, manajemen memori | — |
| 14–15 | Aritmatika komputer | ALU, representasi integer & floating point | — |
| 16 | **UAS** | | |

> Urutan pertemuan di Edlink sedikit bergeser dari tabel ini: P02 = Organisasi Komputer, P03 = Evolusi & Kinerja, P04–P05 = Bus, P06 = Memori Internal.

### 2. Alur besar materi (intuisi)
```
Apa itu komputer? → Dari mana asalnya & seberapa cepat? → Bagaimana komponennya terhubung (bus)?
→ Di mana data disimpan (memori internal/eksternal)? → Bagaimana bicara dengan dunia luar (I/O)?
→ Bagaimana OS membantu? → Bagaimana CPU menghitung (aritmatika)?
```

## Istilah penting
| Istilah | Arti singkat |
|---------|--------------|
| Bus | Jalur komunikasi bersama antarkomponen |
| PCI | Peripheral Component Interconnect, standar bus |
| Cache | Memori kecil & cepat antara CPU dan memori utama |
| RAID | Redundant Array of Independent Disks |
| DMA | Direct Memory Access — transfer data I/O tanpa melibatkan CPU terus-menerus |

## Sering keluar di ujian / mudah keliru
- Cakupan UTS (perkiraan 2026-12-12): pertemuan 1–7 → konsep dasar, evolusi, bus, memori internal, (memori eksternal bila sempat dibahas di P07).

## Pertanyaan untuk dicek ke dosen
- P07 nanti membahas memori eksternal (magnetic disk & RAID) atau lanjutan memori internal (cache)? Itu menentukan cakupan UTS.

## Sumber
- `dPRAS_OrKom#01 Pendahuluan.pdf` slide 2–6 (teks: `arsip/teks-materi/dPRAS_OrKom#01 Pendahuluan.pdf.md`)
