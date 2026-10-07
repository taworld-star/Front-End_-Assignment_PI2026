import {
  removeFavorite,
  updateFavoriteNote,
} from "@/lib/service/favoriteService";

export async function DELETE(request, { params }) {
  const { id } = await params;
  const result = await removeFavorite(id);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json({ message: result.message });
}

export async function PATCH(request, { params }) {
  const { id } = await params;
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json(
      { error: "Body request wajib berupa JSON yang valid" },
      { status: 400 }
    );
  }

  const result = await updateFavoriteNote(id, body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data);
}
