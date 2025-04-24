import React, { useState } from 'react';

export interface Filters {
  query: string; // Usamos "query" para unificar la búsqueda por oem o descripción
}

interface SearchBarProps {
  onSearch: (filters: Filters) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [filters, setFilters] = useState<Filters>({
    query: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFilters({ query: e.target.value });
  };

  const submit = () => onSearch(filters);

  return (
    <div className="bg-white p-4 rounded-lg shadow-md mb-6">
      <div className="flex items-center space-x-4">
        <input
          type="text"
          name="query"
          value={filters.query}
          onChange={handleChange}
          placeholder="Código OEM o Descripción"
          className="p-2 border rounded w-full"
        />
        <button
          onClick={submit}
          className="p-2 bg-primary text-white rounded hover:bg-primary/90 transition"
        >
          Buscar
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
