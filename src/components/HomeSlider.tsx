// src/components/HomeSlider.tsx
import { Autoplay, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// importa el bundle de CSS como ya lo habíamos hecho
import 'swiper/css';
import 'swiper/css/pagination';

const slides = [
  { id: 1, img: '/images/slide1.jpg', alt: 'Repuestos originales' },
  { id: 2, img: '/images/slide2.jpg', alt: 'Entrega rápida' },
  { id: 3, img: '/images/slide3.jpg', alt: 'Catálogo completo' },
];

export default function HomeSlider() {
  return (
    <div className="w-full max-w-6xl mx-auto mt-6">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        loop
        className="rounded-lg overflow-hidden"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {/* Ajustamos la altura del contenedor */}
            <div className="w-full h-80 md:h-96 lg:h-[500px]">
              <img src={slide.img} alt={slide.alt} className="w-full h-full object-cover" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
