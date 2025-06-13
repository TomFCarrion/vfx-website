"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import Image from "next/image";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";

// Project data structure
type Project = {
  id: string;
  title: string;
  posterUrl: string;
  videoUrl: string;
};

// Projects data with local image paths
const projects: Project[] = [
  {
    id: "secuestro",
    title: "Secuestro del Vuelo 601",
    posterUrl: "/images/secuestro-poster.webp",
    videoUrl: "https://www.youtube.com/embed/0veEBtSKANI",
  },
  {
    id: "titans",
    title: "Titans",
    posterUrl: "/images/titans-poster.webp",
    videoUrl: "https://www.youtube.com/embed/G2dpMCxjHpU",
  },
  {
    id: "recruit",
    title: "The Recruit",
    posterUrl: "/images/recruit-poster.webp",
    videoUrl: "https://www.youtube.com/embed/Hywe0zDSSSE",
  },
  {
    id: "barrabrava",
    title: "Barrabrava",
    posterUrl: "/images/barrabrava-poster.webp",
    videoUrl: "https://www.youtube.com/embed/yeUW6cW-FZA",
  },
  {
    id: "santaevita",
    title: "Santa Evita",
    posterUrl: "/images/santaevita-poster.webp",
    videoUrl: "https://www.youtube.com/embed/ZSZVPd8s7Fs",
  },
  {
    id: "entrelazados",
    title: "Entrelazados",
    posterUrl: "/images/entrelazados-poster.webp",
    videoUrl: "https://www.youtube.com/embed/dFtsDuykYko",
  },
  {
    id: "soygeorgina",
    title: "Soy Georgina",
    posterUrl: "/images/soygeorgina-poster.webp",
    videoUrl: "https://www.youtube.com/embed/dFtsDuykYko",
  },
  {
    id: "campamentoconmama",
    title: "Campamento con Mamá",
    posterUrl: "/images/campamentoconmama-poster.webp",
    videoUrl: "https://www.youtube.com/embed/dFtsDuykYko",
  },
  {
    id: "lanochesinmi",
    title: "La Noche Sin Milagros",
    posterUrl: "/images/lanochesinmi-poster.webp",
    videoUrl: "https://www.youtube.com/embed/dFtsDuykYko",
  },
];

export default function MovieSwiper() {
  return (
    <section className="py-20 px-8 sm:px-16 bg-black">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">Projects</h2>

        <div className="relative max-w-3xl mx-auto overflow-hidden p-2">
          <Swiper
            effect={"coverflow"}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            spaceBetween={-10}
            loop={true}
            navigation={true}
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true,
            }}
            modules={[EffectCoverflow, Navigation]}
            className="max-w-5xl mx-auto h-fit"
          >
            {projects.map((project) => (
              <SwiperSlide key={project.id}>
                <div className="relative aspect-[2/3] mx-0">
                  <div className="relative w-full h-full group overflow-hidden shadow-xl">
                    <Image
                      src={project.posterUrl}
                      alt={project.title}
                      quality={100}
                      fill
                      className="object-cover transition-all duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      priority
                    />
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
