import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa';

const Footer: React.FC = () => (
  <footer className="bg-black text-white shadow-md py-8">
    <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Contacto */}
      <div>
        <h3 className="text-xl font-heading mb-2">Contacto</h3>
        <ul className="space-y-2">
          <li>
            <a
              href="https://api.whatsapp.com/send?phone=5492226531764"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center hover:text-accent transition"
            >
              <FaWhatsapp className="mr-2 text-2xl" />
              +54 2226 53-1764
            </a>
          </li>
          <li>
            <a
              href="mailto:info@repuestospablo.com"
              className="flex items-center hover:text-accent transition"
            >
              <span className="mr-2 text-2xl">✉️</span>
              info@repuestospablo.com
            </a>
          </li>
        </ul>
      </div>

      {/* Síguenos */}
      <div>
        <h3 className="text-xl font-heading mb-2">Redes Sociales</h3>
        <ul className="flex space-x-4">
          <li>
            <a
              href="https://www.instagram.com/repuestos_pablo/?hl=es"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <FaInstagram className="text-2xl" />
            </a>
          </li>
          <li>
            <a
              href="https://www.facebook.com/fordpablorepuestos?locale=es_LA"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-accent transition"
            >
              <FaFacebook className="text-2xl" />
            </a>
          </li>
        </ul>
      </div>

      {/* Derechos */}
      <div className="md:text-right">
        <h3 className="text-xl font-heading mb-2">Grupo Repuestos Pablo</h3>
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Grupo Repuestos Pablo.
          <br />
          Todos los derechos reservados.
        </p>
      </div>
    </div>
  </footer>
);

export default Footer;
