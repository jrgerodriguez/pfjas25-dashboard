'use client'

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Users, FileText } from "lucide-react"; // importamos los iconos

export default function NavBar() {
  const pathname = usePathname();

  const links = [
    { name: "Participantes", href: "/", icon: <Users className="inline w-4 h-4 mr-1"/> },
    { name: "Reportes", href: "/reportes", icon: <FileText className="inline w-4 h-4 mr-1"/> },
  ];

  return (
    <nav className="bg-gray-100 shadow-md">
      <ul className="flex items-center space-x-8 px-6 py-4 text-sm font-sans">
        <p className="text-gray-800 font-bold text-[0.60rem] uppercase">
          CAMPAMENTO JAS 2025
        </p>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`
                  relative text-gray-800 font-medium
                  transition-colors duration-300
                  hover:text-blue-600
                  ${isActive ? "after:absolute after:-bottom-1 after:left-0 after:w-full after:h-0.5 after:bg-blue-600" : ""}
                `}
              >
                {link.icon} {link.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
