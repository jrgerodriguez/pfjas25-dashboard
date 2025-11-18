import connectDB from "@/app/lib/mongodb";
import Participant from "@/app/models/Participante.js";
import ParticipantesClient from "./ParticipantesClient";

export default async function ParticipantesPage() {
  await connectDB();
  const participantes = await Participant.find().lean();

  return <ParticipantesClient participantes={participantes} />;
}
