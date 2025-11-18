// app/participantes/[id]/page.jsx
import connectDB from "@/app/lib/mongodb.js";
import Participant from "@/app/models/Participante";

export default async function Page({ params }) {
  await connectDB();

  const paramsCorrect = await params;

  const participante = await Participant.findById(paramsCorrect.id).lean();

  if (!participante) {
    return (
      <h1 className="text-center mt-20 text-xl font-bold text-red-500">
        Participante no encontrado
      </h1>
    );
  }

  const fechaNacimiento = participante.fechaDeNacimiento
    ? new Date(participante.fechaDeNacimiento).toLocaleDateString("es-ES")
    : "-";

    const fechaNacimientoObj = participante.fechaDeNacimiento
    ? new Date(participante.fechaDeNacimiento)
    : null;

    // Función para calcular edad
    const calcularEdad = (fecha) => {
    if (!fecha) return "-";
    const hoy = new Date();
    let edad = hoy.getFullYear() - fecha.getFullYear();
    const m = hoy.getMonth() - fecha.getMonth();
    if (m < 0 || (m === 0 && hoy.getDate() < fecha.getDate())) {
        edad--;
    }
    return edad;
    };

  return (
    <div className="min-h-screen bg-white py-10 px-4 sm:px-6 lg:px-20 font-sans">
      <div className="max-w-4xl mx-auto  shadow-lg rounded-xl p-8 font-sans">

        {/* NOMBRE */}
        <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center font-sans">
          {participante.nombres} {participante.apellidos}
        </h1>

        {/* DATOS PRINCIPALES */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">
            Fecha de Nacimiento
            </p>
            <p className="text-gray-900 text-lg">{fechaNacimiento}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">
            Edad
            </p>
            <p className="text-gray-900 text-lg">{calcularEdad(fechaNacimientoObj)}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">DUI</p>
            <p className="text-gray-900 text-lg">{participante.dui || "-"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Sexo</p>
            <p className="text-gray-900 text-lg">{participante.sexo || "-"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">
            Departamento
            </p>
            <p className="text-gray-900 text-lg">{participante.departamento || "-"}</p>
        </div>

        {/* Información destacada */}
        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Estaca</p>
            <p className="text-gray-900 text-lg">{participante.estaca || "-"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Barrio</p>
            <p className="text-gray-900 text-lg">{participante.barrio || "-"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Teléfono</p>
            <p className="text-gray-900 text-lg">{participante.telefono || "-"}</p>
        </div>

        <div className="bg-gray-100 p-4 rounded-md">
            <p className="text-xs font-bold uppercase text-gray-500 mb-1">Email</p>
            <p className="text-gray-900 text-lg">{participante.email || "-"}</p>
        </div>
        </div>

        <hr className="my-6 border-gray-300" />

        {/* INFORMACIÓN ADICIONAL */}
        <h2 className="text-sm font-bold uppercase bg-gray-200 px-4 py-2 rounded-md mb-4">
          Información Adicional
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
          <div>
            <p className="font-semibold text-gray-500 uppercase">Contacto de Emergencia</p>
            <p className="text-gray-900">{participante.contactoEmergencia || "-"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Teléfono de Emergencia</p>
            <p className="text-gray-900">{participante.telefonoContactoEmergencia || "-"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Instituto</p>
            <p className="text-gray-900">{participante.instituto || "-"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Condición Física / Médica</p>
            <p className="text-gray-900">
              {participante.condicionFisicaOMedica || "-"}{" "}
              {participante.condicionFisicaOMedicaComentario && `(${participante.condicionFisicaOMedicaComentario})`}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Alergias</p>
            <p className="text-gray-900">
              {participante.alergia || "-"} {participante.alergiaComentario && `(${participante.alergiaComentario})`}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Medicamentos</p>
            <p className="text-gray-900">
              {participante.medicamento || "-"} {participante.medicamentoComentario && `(${participante.medicamentoComentario})`}
            </p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Talla de Camisa</p>
            <p className="text-gray-900">{participante.tallaCamisa || "-"}</p>
          </div>
          <div>
            <p className="font-semibold text-gray-500 uppercase">Qué espera aprender</p>
            <p className="text-gray-900">{participante.queEsperaAprender || "-"}</p>
          </div>
          <div className="md:col-span-2">
            <p className="font-semibold text-gray-500 uppercase">Comentario del Staff</p>
            <p className="text-gray-900">{participante.comentarioStaff || "-"}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
