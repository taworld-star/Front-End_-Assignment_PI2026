import { favorites } from "@/lib/db";

// DELETE: Menghapus data favorit berdasarkan ID
export async function DELETE(request, { params }) {
  const { id } = await params;

  // Mencari indeks data (pastikan perbandingan tipe data sesuai)
  const index = favorites.findIndex(
    (favorite) => String(favorite.id) === String(id)
  );

  if (index === -1) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }

  favorites.splice(index, 1);
  return Response.json({ message: "Berhasil dihapus" });
}

// PATCH: Memperbarui data favorit (menambahkan/mengubah catatan 'note')
export async function PATCH(request, { params }) {
  const { id } = await params;
  const body = await request.json();

  const item = favorites.find(
    (favorite) => String(favorite.id) === String(id)
  );

  if (!item) {
    return Response.json(
      { error: "Data tidak ditemukan" },
      { status: 404 }
    );
  }

  // Mengubah/menambahkan catatan
  if (body.note !== undefined) {
    item.note = body.note;
  }

  return Response.json({
    message: "Catatan berhasil diperbarui",
    data: item,
  });
}
