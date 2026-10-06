import { favorites } from "@/lib/db";

// READ: Ambil semua data favorit
export async function GET() {
  return Response.json(favorites);
}

// CREATE: Tambahkan data favorit baru
export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body request wajib berupa JSON yang valid" },
      { status: 400 }
    );
  }

  // Validasi input
  if (!body || !body.id || !body.name) {
    return Response.json(
      { error: "id dan name wajib diisi" },
      { status: 400 }
    );
  }

  // Cek jika data sudah pernah difavoritkan
  const alreadyExists = favorites.some((favorite) => favorite.id === body.id);
  if (alreadyExists) {
    return Response.json(
      { error: "User ini sudah difavoritkan" },
      { status: 400 }
    );
  }

  favorites.push(body);
  return Response.json(body, { status: 201 });
}
