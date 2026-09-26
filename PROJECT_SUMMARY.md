# Ringkasan Project MyWebsite

## 1. Gambaran Umum

MyWebsite adalah aplikasi web modern yang dibuat dengan Next.js App Router. Project ini memiliki homepage, halaman informasi, form kontak, direktori pengguna, pencarian pengguna, fitur favorite users, serta state global menggunakan React Context.

Komponen Navbar dan Footer digunakan sebagai shell global melalui `app/layout.js`, sehingga otomatis muncul pada seluruh halaman.

## 2. Membuat Project

Project Next.js dapat dibuat dengan command berikut:

```bash
npx create-next-app@latest firstproject
```

Saat proses setup, pilihan yang sesuai dengan project ini adalah:

- JavaScript, bukan TypeScript.
- App Router.
- ESLint.
- Tailwind CSS.
- Import alias `@/*`.

Masuk ke folder project:

```bash
cd firstproject
```

Menjalankan development server:

```bash
npm run dev
```

Project dapat dibuka melalui:

```text
http://localhost:3000
```

## 3. Bahasa dan Framework

### Bahasa

- **JavaScript** digunakan untuk logic aplikasi.
- **JSX** digunakan untuk menulis struktur UI React di file `.js` dan `.jsx`.
- **CSS** digunakan melalui Tailwind CSS dan file global `app/globals.css`.

### Framework

- **Next.js 16.3.6** sebagai framework utama.
- **React 19.2.8** sebagai library UI.
- **App Router** digunakan untuk routing berbasis folder di dalam `app/`.

Contoh struktur route:

```text
app/
  page.js              -> /
  about/page.jsx       -> /about
  services/page.jsx    -> /services
  profile/page.jsx     -> /profile
  contact/page.jsx     -> /contact
  users/page.js        -> /users
  favorites/page.js    -> /favorites
```

## 4. Library dan Dependency

Dependency utama yang digunakan:

| Library | Kegunaan |
| --- | --- |
| `next` | Framework aplikasi dan routing |
| `react` | Pembuatan komponen UI |
| `react-dom` | Rendering React ke browser |
| `@base-ui/react` | Primitive komponen UI dari shadcn Base UI |
| `class-variance-authority` | Membuat variasi class pada Button |
| `cn` | Menggabungkan class CSS |
| `lucide-react` | Ikon seperti Heart, Mail, ArrowRight, dan lainnya |
| `shadcn` | CLI dan konfigurasi komponen shadcn/ui |
| `tw-animate-css` | Utility animasi tambahan untuk Tailwind CSS |
| `tailwindcss` | Utility CSS untuk styling |
| `@tailwindcss/postcss` | Integrasi Tailwind dengan PostCSS |
| `eslint` | Pemeriksaan kualitas dan kesalahan kode |
| `eslint-config-next` | Aturan ESLint khusus Next.js |

Dependency diinstall menggunakan:

```bash
npm install
```

Komponen shadcn/ui yang dibuat:

```bash
npx shadcn@latest init --defaults --force
npx shadcn@latest add button card input --yes
```

Komponen yang tersedia di `components/ui/`:

- `button.jsx`
- `card.jsx`
- `input.jsx`

## 5. Font

Project menggunakan font lokal Plus Jakarta Sans melalui `next/font/local`.

File font berada di:

```text
app/fonts/
  PlusJakartaSans-Variable.woff2
  PlusJakartaSans-Italic-Variable.woff2
```

Penggunaan font lokal membuat aplikasi tidak bergantung pada koneksi ke Google Fonts saat development atau build.

## 6. Fitur Utama

### Homepage

Homepage memiliki:

- Hero section.
- CTA menuju Services dan Contact.
- Daftar fitur layanan.
- Section ajakan untuk memulai project.

### Contact Form

Halaman Contact menggunakan `useState` untuk menyimpan:

- Nama.
- Email.
- Pesan.

Saat form dikirim:

- Data ditampilkan melalui `console.log`.
- Nama disimpan ke `UserContext`.
- Navbar menampilkan sapaan `Hi, Nama!`.

### User Directory

Halaman `/users` mengambil data dari:

```text
https://jsonplaceholder.typicode.com/users
```

Fitur yang tersedia:

- Loading state.
- Error state.
- Search berdasarkan nama.
- User card dengan nama, email, perusahaan, dan avatar initials.

### Favorite Users

Fitur Favorite menggunakan React Context melalui:

```text
context/FavoriteContext.jsx
```

Fitur ini memungkinkan pengguna untuk:

- Menambahkan user dengan ikon hati.
- Menghapus user dari favorite.
- Melihat jumlah favorite di Navbar.
- Melihat seluruh favorite di `/favorites`.

State favorite saat ini tersimpan di memory browser. Jika halaman direfresh, daftar favorite kembali kosong karena belum menggunakan database atau localStorage.

## 7. Server Component dan Client Component

Next.js App Router menggunakan Server Component secara default.

File harus diberi directive berikut apabila menggunakan interaksi browser:

```jsx
"use client";
```

Directive tersebut digunakan pada file yang menggunakan:

- `useState`.
- `useEffect`.
- `useContext`.
- Event handler seperti `onClick` dan `onSubmit`.
- `usePathname`.

Contoh Client Component pada project:

- `components/Navbar.jsx`
- `components/UserCard.jsx`
- `context/UserContext.jsx`
- `context/FavoriteContext.jsx`
- `app/contact/page.jsx`
- `app/users/page.js`
- `app/favorites/page.js`

## 8. Command Project

Menjalankan development server:

```bash
npm run dev
```

Menjalankan lint:

```bash
npm run lint
```

Membuat production build:

```bash
npm run build
```

Menjalankan hasil production build:

```bash
npm run start
```

## 9. Git, GitHub, dan GitLab

### Apa itu Git?

Git adalah version control system yang berjalan di komputer lokal. Git digunakan untuk:

- Mencatat perubahan kode.
- Membuat commit.
- Melihat riwayat project.
- Membuat branch.
- Mengembalikan perubahan jika diperlukan.

Git dapat digunakan tanpa internet.

### Apa itu GitHub?

GitHub adalah layanan online untuk menyimpan repository Git. GitHub menyediakan:

- Penyimpanan repository secara online.
- Kolaborasi.
- Pull request.
- Issue.
- Code review.
- Backup project.

### Apa itu GitLab?

GitLab adalah layanan online lain yang memiliki fungsi serupa dengan GitHub. GitLab juga menggunakan Git sebagai sistem version control, tetapi menyediakan fitur dan ekosistemnya sendiri, termasuk CI/CD yang terintegrasi.

### Perbedaan Git dan GitHub/GitLab

| Git | GitHub atau GitLab |
| --- | --- |
| Program version control lokal | Layanan repository online |
| Menyimpan commit di komputer | Menyimpan salinan repository di server |
| Bisa digunakan tanpa internet | Membutuhkan koneksi untuk push dan pull |
| Menjalankan `git add`, `git commit`, dan `git branch` | Menjalankan kolaborasi dan remote repository |

GitHub dan GitLab bukan pengganti Git. Keduanya menggunakan Git di belakang layar.

## 10. Apakah Harus Menggunakan Git Terlebih Dahulu?

Untuk menjalankan aplikasi Next.js, Git tidak wajib. Project tetap dapat dibuat dan dijalankan hanya dengan Node.js dan npm.

Namun, Git sangat disarankan sebelum project dikembangkan lebih jauh karena membantu:

- Menyimpan riwayat perubahan.
- Membuat checkpoint melalui commit.
- Menghindari kehilangan kode.
- Menghubungkan project ke GitHub atau GitLab.
- Bekerja dengan branch dan kolaborator.

Inisialisasi Git secara manual dilakukan dengan:

```bash
git init
git add .
git commit -m "Initial commit"
```

## 11. Alur Git ke GitHub

Alur umum yang digunakan:

```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/username/repository.git
git branch -M main
git push -u origin main
```

Untuk perubahan berikutnya:

```bash
git add .
git commit -m "Describe the change"
git push
```

## 12. Kenapa Commit dan Push Sempat Bermasalah?

Beberapa masalah yang terjadi bukan berasal dari kode aplikasi, tetapi dari alur Git dan terminal:

### Repository remote belum terhubung

Pada awalnya repository lokal belum memiliki remote `origin`. Akibatnya commit lokal ada, tetapi belum memiliki tujuan untuk push ke GitHub.

Remote kemudian dihubungkan dengan:

```bash
git remote add origin https://github.com/taworld-star/Front-End_-Assignment_PI2026.git
```

### Perubahan masih staged

Status `A` atau `M` pada area staged berarti file sudah masuk index Git, tetapi belum menjadi commit. File harus dilanjutkan dengan `git commit`.

### Proses Git berjalan bersamaan

Error seperti tidak dapat menulis file index dapat terjadi ketika beberapa perintah Git berjalan bersamaan atau terminal masih menjalankan proses sebelumnya. Git memakai file index untuk mencatat staging, sehingga operasi bersamaan dapat membuat proses commit atau push terlihat berhenti.

Solusinya:

1. Tunggu proses Git sebelumnya selesai.
2. Periksa status:

   ```bash
   git status
   ```

3. Pastikan tidak ada proses commit atau push lain yang masih berjalan.
4. Lakukan `git add`, `git commit`, dan `git push` satu per satu.

### Working tree belum bersih

Jika `git status` masih menampilkan modified atau untracked files, berarti belum semua perubahan masuk commit.

Status yang diharapkan setelah push berhasil:

```text
Your branch is up to date with 'origin/master'
nothing to commit, working tree clean
```

## 13. Repository Project

Repository online project:

```text
https://github.com/taworld-star/Front-End_-Assignment_PI2026
```

Branch yang digunakan adalah `master` dan terhubung ke:

```text
origin/master
```

## 14. Catatan Pengembangan

Jika ingin daftar favorite tetap ada setelah browser direfresh, state dapat dikembangkan menggunakan:

- `localStorage` untuk penyimpanan lokal browser.
- Database untuk penyimpanan permanen.
- API backend untuk sinkronisasi antar perangkat.

Untuk production, form Contact juga perlu dihubungkan ke API atau layanan email karena saat ini submit hanya mencatat data ke browser console dan mengubah state UI.
