import { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <header className="bg-black text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 py-3 relative">
        {/* Logo */}
        <Link to="/" className="flex items-center space-x-2">
          <img src={logo} alt="Logo Repuestos Pablo" className="h-14 w-auto" />
        </Link>

        {/* Icono hamburguesa */}
        <button className="sm:hidden text-2xl focus:outline-none" onClick={toggleMenu}>
          {menuOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Navegación en desktop */}
        <nav className="hidden sm:flex space-x-6 text-sm sm:text-base font-medium">
          <Link to="/" className="hover:text-accent transition">
            Inicio
          </Link>
          <Link to="/catalogo" className="hover:text-accent transition">
            Catálogo
          </Link>
          <Link to="/nosotros" className="hover:text-accent transition">
            Quiénes somos
          </Link>
          <Link to="/contacto" className="hover:text-accent transition">
            Contacto
          </Link>
        </nav>

        {/* Navegación en mobile */}
        {menuOpen && (
          <nav className="absolute top-full left-0 w-full bg-black flex flex-col items-start px-6 py-4 space-y-3 sm:hidden z-10 border-t border-gray-700">
            <Link to="/" onClick={toggleMenu} className="hover:text-accent transition">
              Inicio
            </Link>
            <Link to="/catalogo" onClick={toggleMenu} className="hover:text-accent transition">
              Catálogo
            </Link>
            <Link to="/nosotros" onClick={toggleMenu} className="hover:text-accent transition">
              Quiénes somos
            </Link>
            <Link to="/contacto" onClick={toggleMenu} className="hover:text-accent transition">
              Contacto
            </Link>
          </nav>
        )}
      </div>
    </header>
  );
}
