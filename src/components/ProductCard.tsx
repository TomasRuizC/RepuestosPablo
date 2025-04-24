import React from 'react';
import { Link } from 'react-router-dom';

export interface Product {
  id: number;
  name: string;
  price: number;
  stock: number;
  image: string;
}

interface ProductCardProps {
  product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => (
  <Link to={`/product/${product.id}`} className="block">
    <div className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition">
      <img src={product.image} alt={product.name} className="h-40 w-full object-contain mb-2" />
      <h2 className="font-semibold text-lg">{product.name}</h2>
      <p className="text-red-600 font-bold">${product.price.toFixed(2)}</p>
      {product.stock > 0 ? (
        <p className="text-green-600 text-sm">En stock: {product.stock}</p>
      ) : (
        <p className="text-gray-500 text-sm">Agotado</p>
      )}
    </div>
  </Link>
);

export default ProductCard;
