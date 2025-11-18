import Image from "next/image"

export default function Reportes() {
    return (
        <div className="px-4 py-8 flex justify-center font-sans">
            <div className="w-[95%] mx-auto flex flex-col items-center">
                <h1 className="text-2xl mb-4 text-center font-semibold">Sitio en Construccion</h1>
                <Image
                    src="/images/construction.jpg"
                    alt="Sitio en construccion"
                    width={500}
                    height={200}
                />
            </div>
        </div>
    )
}
