# MyWebsite

MyWebsite adalah aplikasi Next.js untuk menampilkan layanan digital, direktori pengguna, dan daftar pengguna favorit. Proyek ini menggunakan App Router, Tailwind CSS, shadcn/ui, dan font lokal Plus Jakarta Sans.

## Fitur

- Homepage dengan hero section, CTA, dan daftar layanan.
- Halaman About, Services, Profile, dan Contact.
- Form Contact dengan local state React dan validasi input browser.
- Global user context untuk menampilkan sapaan nama di Navbar setelah form dikirim.
- User Directory dengan data dari JSONPlaceholder.
- Search pengguna berdasarkan nama.
- Favorite Users dengan global React Context.
- Halaman `/favorites` untuk melihat pengguna yang disimpan.
- Responsive Navbar dan Footer yang digunakan di semua halaman melalui root layout.

## Teknologi

- Next.js 16
- React 19
- Tailwind CSS 4
- shadcn/ui dengan Base UI
- Lucide React
- Plus Jakarta Sans melalui `next/font/local`

## Persiapan

Pastikan Node.js dan npm sudah terpasang, kemudian install dependency:

```bash
npm install
```

## Menjalankan Aplikasi

Jalankan development server:

```bash
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Untuk memeriksa kode:

```bash
npm run lint
```

Untuk membuat production build:

```bash
npm run build
npm run start
```

## Struktur Route

| Route | Keterangan |
| --- | --- |
| `/` | Homepage |
| `/about` | Informasi tentang website |
| `/services` | Daftar layanan |
| `/profile` | Profil tim |
| `/contact` | Form kontak |
| `/users` | Direktori dan pencarian pengguna |
| `/favorites` | Pengguna yang disimpan sebagai favorit |
| `/counter` | Latihan React `useState` |
| `/effect` | Latihan React `useEffect` |

## Struktur Utama

```text
app/
	about/
	contact/
	counter/
	effect/
	favorites/
	profile/
	services/
	users/
	fonts/
	globals.css
	layout.js
	page.js
components/
	ui/
	Footer.jsx
	Navbar.jsx
	UserCard.jsx
context/
	FavoriteContext.jsx
	UserContext.jsx
```

## State Favorit

`FavoriteProvider` berada di `app/layout.js`, sehingga `UserCard`, Navbar, dan halaman `/favorites` dapat mengakses daftar favorit yang sama. Klik ikon hati pada UserCard untuk menambah atau menghapus pengguna dari daftar tersebut.

State favorit saat ini disimpan di memory browser dan akan kembali kosong setelah halaman direfresh.
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.js`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
