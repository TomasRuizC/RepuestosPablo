// src/App.tsx
import { Navigate, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import SearchSection from './components/SearchSection';
import Catalog from './pages/Catalog.tsx';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';

export default function App() {
  return (
    <div className="flex flex-col h-screen font-body">
      <Header />

      {/* Barra de búsqueda debajo del header */}
      <SearchSection />

      <main className="flex-grow overflow-auto bg-neutralLight">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalogo" element={<Catalog />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>

      <Footer />
    </div>
  );
}
