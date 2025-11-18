import connectDB from "@/app/lib/mongodb";

export async function GET(req) {
    try {
        await connectDB();
        return new Response(
            JSON.stringify({message: "Conexion a la base de datos exitosa ✅"}),
            {status: 200}
        );
    } catch (error) {
        console.error(error);
        return new Response(
        JSON.stringify({ message: "Error al conectar a la base de datos ❌", error: error.message }),
        { status: 500 }
        );  
    }
}