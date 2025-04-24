import BrandSlider from '../components/BrandSlider';
import CategoryGrid, { Category } from '../components/CategoryGrid';
import HomeSlider from '../components/HomeSlider';

const categories: Category[] = [
  { name: 'Accesorios', image: '/images/categories/accesorios.jpg' },
  { name: 'Adhesivos', image: '/images/categories/adhesivos.jpg' },
  { name: 'Carrocería', image: '/images/categories/carroceria.jpg' },
  { name: 'Cerrajería', image: '/images/categories/cerrajeria.jpg' },
  { name: 'Embrague', image: '/images/categories/embrague.jpg' },
  { name: 'Encendido', image: '/images/categories/encendido.jpg' },
  { name: 'Espejos', image: '/images/categories/espejos.jpg' },
  { name: 'Faros y Ópticas', image: '/images/categories/faros.jpg' },
  { name: 'Filtros', image: '/images/categories/filtros.jpg' },
  { name: 'Frenos', image: '/images/categories/frenos.jpg' },
  { name: 'Herramientas', image: '/images/categories/herramientas.jpg' },
  { name: 'Lubricantes', image: '/images/categories/lubricantes.jpg' },
  { name: 'Motor', image: '/images/categories/motor.jpg' },
  { name: 'Suspensión', image: '/images/categories/suspension.jpg' },
];

export default function Home() {
  return (
    <main className="bg-gray-100 min-h-screen pt-16">
      <HomeSlider />
      <section className="py-10 px-4 max-w-6xl mx-auto">
        <h2 className="text-2xl font-bold mb-6 text-black">¿Que andás buscando?</h2>
        <CategoryGrid
          categories={categories}
          onSelect={function (category: string): void {
            throw new Error('Function not implemented.');
          }}
        />
      </section>
      <BrandSlider />
    </main>
  );
}
