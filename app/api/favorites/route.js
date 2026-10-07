import { getAllFavorites, addFavorite } from "@/lib/service/favoriteService";

export async function GET() {
  return Response.json(await getAllFavorites());
}

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

  const result = await addFavorite(body);

  if (!result.success) {
    return Response.json({ error: result.error }, { status: result.status });
  }

  return Response.json(result.data, { status: result.status });
}