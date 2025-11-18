// app/page.jsx
import connectDB from "@/app/lib/mongodb";
import Participant from "@/app/models/Participante.js";
import ParticipantesClient from "./ParticipantesClient.js";

export default async function Page() {
  await connectDB();
  const participantes = await Participant.find().lean();

  // Convertir _id a string para Next.js
  const participantesString = participantes.map((p) => ({
    ...p,
    _id: p._id.toString(),
  }));

  return <ParticipantesClient participantes={participantesString} />;
}
