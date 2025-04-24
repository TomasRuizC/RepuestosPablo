// src/components/BrandSlider.tsx
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

const brands = [
  { name: 'Bosch', image: '/images/brands/bosch.png' },
  { name: 'VTH', image: '/images/brands/vth.png' },
  { name: 'Valeo', image: '/images/brands/valeo.png' },
  { name: 'Cauplas', image: '/images/brands/cauplas.png' },
  { name: 'NGK', image: '/images/brands/ngk.png' },
  { name: 'Gates', image: '/images/brands/gates.png' },
  { name: 'Fram', image: '/images/brands/fram.png' },
  { name: 'Calorstat', image: '/images/brands/calorstat.png' },
  { name: 'Dolz', image: '/images/brands/dolz.png' },
  { name: 'SKF', image: '/images/brands/skf.png' },
  { name: 'Hutchinson', image: '/images/brands/hutchinson.png' },
  { name: 'SNR', image: '/images/brands/snr.png' },
  // Agregá más marcas si querés
];

export default function BrandSlider() {
  return (
    <section className="bg-neutral-100 py-12 w-full">
      <h2 className="text-2xl md:text-3xl font-semibold text-center mb-14 text-gray-800">
        Los mejores repuestos, de las mejores marcas
      </h2>
      <Swiper
        slidesPerView={4}
        spaceBetween={40}
        loop={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full"
        breakpoints={{
          320: { slidesPerView: 2 },
          640: { slidesPerView: 3 },
          1024: { slidesPerView: 4 },
        }}
      >
        {brands.map((brand) => (
          <SwiperSlide key={brand.name} className="flex justify-center items-center">
            <img
              src={brand.image}
              alt={brand.name}
              className="h-16 object-contain transition duration-300"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}
