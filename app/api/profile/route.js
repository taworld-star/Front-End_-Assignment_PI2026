export async function GET() {
  return Response.json({
    name: "Sustri Elina Simamora",
    role: "peserta bootcamp",
    favoriteTech: ["Python", "Flutter", "JavaScript"],
  });
}