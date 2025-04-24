import { Link } from 'react-router-dom';

export type Category = {
  name: string;
  image: string;
};

interface Props {
  categories: Category[];
}

export default function CategoryGrid({ categories }: Props) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10 px-4">
      {categories.map((category) => (
        <Link
          key={category.name}
          to={`/catalogo?categoria=${encodeURIComponent(category.name)}`}
          className="flex flex-col items-start space-y-3 group"
        >
          {/* Título con flecha */}
          <div className="flex justify-between items-center w-full">
            <span className="text-black font-semibold text-lg">{category.name}</span>
            <span className="text-black text-xl transition-transform group-hover:translate-x-1">
              →
            </span>
          </div>

          {/* Imagen con efecto hover */}
          <div className="overflow-hidden rounded shadow-md w-full h-56">
            <img
              src={category.image}
              alt={category.name}
              className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        </Link>
      ))}
    </div>
  );
}
