import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetail: React.FC = () => {
  const { id } = useParams();

  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md">
      <h1 className="text-3xl font-semibold text-black mb-4">Detalle del producto #{id}</h1>
      <p className="text-lg text-gray-800">
        Aquí irá la información completa del producto. Asegúrate de que el fondo tenga suficiente
        contraste con el texto.
      </p>
    </div>
  );
};

export default ProductDetail;
