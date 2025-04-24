// src/components/SearchSection.tsx
import { useNavigate } from 'react-router-dom';
import SearchBar, { Filters } from './SearchBar';

export default function SearchSection() {
  const navigate = useNavigate();

  const handleSearch = (f: Filters) => {
    // Redirige a /catalogo con ?query=...
    navigate(`/catalogo?query=${encodeURIComponent(f.query)}`);
  };

  return (
    <section className="bg-white shadow-sm py-6">
      <div className="max-w-6xl mx-auto px-4">
        <SearchBar onSearch={handleSearch} />
      </div>
    </section>
  );
}
