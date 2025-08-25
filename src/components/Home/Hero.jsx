import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import {Link} from "react-router-dom"
export default function Hero() {
  const images = [
    "/src/assets/hero/group.jpeg",
    "/src/assets/hero/group-2.jpeg",
  ];

  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    pauseOnHover: false,
  };

  return (
    <section className="relative w-full h-screen">
      <Slider {...settings} className="h-full">
        {images.map((src, index) => (
          <div key={index} className="relative h-screen w-full">
            {/* Background Image */}
            <img
              src={src}
              alt={`Slide ${index + 1}`}
              className="w-full h-screen object-cover"
            />

            {/* Overlay content for this slide */}
            <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center text-white px-4">
              <h1 className="text-3xl md:text-5xl font-bold mb-4">
                Welcome to CSPS
              </h1>
              <p className="text-lg md:text-2xl mb-6">
                Computer Science Professional Squad - Empowering Future Tech
                Leaders
              </p>
              <Link to="/contact">
                <button className="bg-[#F2C200] text-[#1D2D5F] font-semibold px-6 py-3 rounded-xl hover:bg-yellow-500 transition">
                  Join Us
                </button>
              </Link>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
}
