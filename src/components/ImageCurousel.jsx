import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const slides = [
  {
    image: "/carousel/car1.jpg",
    title: "Smart QR For Every Car",
    subtitle: "Anyone can contact you instantly."
  },
  {
    image: "/carousel/bike1.jpg",
    title: "Perfect For Bikes",
    subtitle: "Premium waterproof QR stickers."
  },
  {
    image: "/carousel/multi.jpg",
    title: "Smart QR For Your Belongings",
    subtitle: "Anyone can contact you instantly."
  },
  {
    image: "/carousel/scan.jpg",
    title: "Scan & Connect",
    subtitle: "No App Required."
  },
  {
    image: "/carousel/tag.jpg", 
    title: "Premium QR Sticker",
    subtitle: "High-quality UV printed tags."
  },
  {
    image: "/carousel/package.jpg",
    title: "Fast Delivery",
    subtitle: "Delivered safely to your doorstep."
  }
];

export default function ImageCarousel() {
  return (
    <section className="py-20 bg-gradient-to-br from-black via-indigo-900 to-purple-900">

      <div className="max-w-7xl mx-auto px-6">

        <div className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Experience
            <span className="text-orange-500"> OwnTag</span>
          </h2>

          <p className="text-gray-300 mt-4 text-lg">
            Smart Vehicle Identity For Every Vehicle
          </p>

        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3500,
            disableOnInteraction: false
          }}
          loop={true}
          spaceBetween={30}
          breakpoints={{
            320: {
              slidesPerView: 1
            },
            768: {
              slidesPerView: 2
            },
            1200: {
              slidesPerView: 3
            }
          }}
        >

          {slides.map((slide, index) => (

            <SwiperSlide key={index}>

              <div className="group bg-white/10 backdrop-blur-xl rounded-3xl overflow-hidden border border-white/10 shadow-xl hover:scale-105 transition duration-500">

                <div className="overflow-hidden">

                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-72 object-cover group-hover:scale-110 transition duration-700"
                  />

                </div>

                <div className="p-6">

                  <h3 className="text-white text-2xl font-bold">
                    {slide.title}
                  </h3>

                  <p className="text-gray-300 mt-3">
                    {slide.subtitle}
                  </p>

                </div>

              </div>

            </SwiperSlide>

          ))}

        </Swiper>

      </div>

    </section>
  );
}