// Latihan 2. Auth Guard Menggunakan Cookie
import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("token");

  if (!token) {
    // belum ada tanda login -> lempar ke halaman lain
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/favorites"], // ganti sesuai halaman yang mau dilindungi
};

