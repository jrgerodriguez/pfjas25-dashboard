import connectDB from "@/app/lib/mongodb";
import Participant from "@/app/models/Participante";

export async function GET(request) {
  await connectDB();

  const { searchParams } = new URL(request.url);
  const page = parseInt(searchParams.get("page") || "1");
  const limit = parseInt(searchParams.get("limit") || "20");

  const skip = (page - 1) * limit;

  const participantes = await Participant.find()
    .skip(skip)
    .limit(limit)
    .lean();

  const total = await Participant.countDocuments();

  return new Response(
    JSON.stringify({ participantes, total }),
    { status: 200, headers: { "Content-Type": "application/json" } }
  );
}
