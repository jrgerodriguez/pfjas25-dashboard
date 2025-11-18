"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function ParticipantesClient({ participantes }) {
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState(participantes);

  useEffect(() => {
    const data = participantes.filter(
      (p) =>
        p.nombres?.toLowerCase().includes(search.toLowerCase()) ||
        p.apellidos?.toLowerCase().includes(search.toLowerCase()) ||
        p.estaca?.toLowerCase().includes(search.toLowerCase()) ||
        p.barrio?.toLowerCase().includes(search.toLowerCase()) ||
        p.email?.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(data);
  }, [search, participantes]);

  return (
    <div className="px-4 py-8 flex justify-center font-sans">
      <div className="w-[95%] mx-auto">
        <h1 className="text-2xl mb-4 text-center font-semibold">Participantes</h1>

        <input
          type="text"
          placeholder="Buscar participantes..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full mb-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />

        {/* Tabla Desktop */}
        <div className="hidden md:block overflow-x-auto">
          <table className="min-w-full bg-white rounded-lg shadow-sm overflow-hidden">
            <thead className="bg-gray-100">
              <tr>
                <th className="px-5 py-3 text-left font-semibold text-gray-600 text-md uppercase">Nombres</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-600 text-md uppercase">Apellidos</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-600 text-md uppercase">Estaca</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-600 text-md uppercase">Barrio</th>
                <th className="px-5 py-3 text-left font-semibold text-gray-600 text-md uppercase">Email</th>
                <th className="px-5 py-3 text-center font-semibold text-gray-600 text-md uppercase">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((p) => (
                <tr key={p._id} className="border-b last:border-none hover:bg-gray-50 transition-colors">
                  <td className="px-5 py-3 text-gray-700 text-sm">{p.nombres}</td>
                  <td className="px-5 py-3 text-gray-700 text-sm">{p.apellidos}</td>
                  <td className="px-5 py-3 text-gray-700 text-sm">{p.estaca}</td>
                  <td className="px-5 py-3 text-gray-700 text-sm">{p.barrio}</td>
                  <td className="px-5 py-3 text-gray-700 text-sm">{p.email}</td>
                  <td className="px-5 py-3 text-center">
                    <Link
                      href={`/participantes/${p._id}`}
                      className="w-9 h-9 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center transition-colors"
                    >
                      <ArrowUpRight size={20} />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Tarjetas Mobile */}
        <div className="md:hidden space-y-4">
          {filtered.map((p) => (
            <div key={p._id} className="bg-white rounded-lg shadow-sm p-4 flex justify-between items-center">
              <div>
                <p className="text-gray-700 font-medium">{p.nombres} {p.apellidos}</p>
                <p className="text-gray-500 text-sm">{p.estaca} • {p.barrio}</p>
              </div>
              <Link
                href={`/participantes/${p._id}`}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-md flex items-center justify-center transition-colors"
              >
                <ArrowUpRight size={18} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
