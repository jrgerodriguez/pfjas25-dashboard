export default function Loading() {
  return (
    <div className="w-full flex flex-col justify-center items-center p-10">
      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin mb-4"></div>
      
      {/* Texto */}
      <p className="text-xl text-gray-700">Cargando...</p>
    </div>
  );
}
