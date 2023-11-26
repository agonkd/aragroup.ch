import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import ellipse from "../../assets/img/icons/Group 94.png";
import { useEffect, useState } from "react";

function Main() {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    // Add an event listener to update the window width when it changes
    window.addEventListener("resize", handleResize);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <section className="bg-secondary lg:pb-32 md:pb-24 pb-16 px-8 relative">
      <img
        src={ellipse}
        alt=""
        className="absolute -bottom-[15%] -left-[15%] opacity-50 animate-pulse"
      />{" "}
      {windowWidth > 600 ? (
        <div className="w-fit mx-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-16 md:gap-8 gap-4 [&>div]:z-10 [&>div]:max-w-[300px] sm:[&>div]:aspect-[2/3] [&>div]:bg-[#D9D9D90A] [&>div]:mx-auto">
          <div className="rounded-3xl border-2 border-primary-light lg:p-8 p-6 lg:lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
              Einfamilienhaus:
              <span className="block text-primary-light">CHF 520.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 lg:text-xl">
              <p>
                Für Einzelhausbesitzer ist eine Machbarkeitsstudie bereits zu
                einem erschwinglichen Preis erhältlich.
              </p>
              <p>
                Sie zahlen nur CHF 520.-, um sicherzustellen, dass Ihr Projekt
                auf festem Boden steht.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
              Mehrfamilienhaus:
              <span className="block text-primary-light">CHF 1330.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 lg:text-xl">
              <p>Bis 10 Wohnungen: CHF 1330.-</p>
              <p>
                Wenn Sie ein Mehrfamilienhaus mit bis zu 10 Wohnungen besitzen
                oder planen, beträgt der Preis CHF 1330.-. Das ist ein
                kostengünstiger Weg, um Ihre Vision Wirklichkeit werden zu
                lassen.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
              Ab 11 Wohnungen:
              <span className="block text-primary-light">CHF 1960.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 lg:text-xl">
              <p>
                Für grössere Mehrfamilienhäuser mit 11 oder mehr Wohnungen
                bieten wir die Machbarkeitsstudie für CHF 1960.- an.
              </p>
              <p>
                Das ist ein exzellentes Preis-Leistungs-Verhältnis für
                umfangreiche Projekte.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
              Geschäftshaus:
              <span className="block text-primary-light">CHF 2280.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 lg:text-xl">
              <p>Bis 5 Stockwerke: CHF 2280.-</p>
              <p>
                Besitzen Sie ein Geschäftshaus mit bis zu 5 Stockwerken? Unsere
                Machbarkeitsstudie erhalten Sie für CHF 2280.-, um
                sicherzustellen, dass Ihr Geschäftserfolg auf einem soliden
                Fundament steht.
              </p>
            </div>
          </div>
          <div className="rounded-3xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl md:text-2xl text-xl font-extrabold">
              Ab 6 Stockwerke:
              <span className="block text-primary-light">CHF 2870.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 lg:text-xl">
              <p>
                Für grössere Geschäftshäuser ab 6 Stockwerken bieten wir die
                Machbarkeitsstudie für CHF 2870.- an.
              </p>
              <p> Dies ist ein Investment in die Zukunft Ihres Unternehmens.</p>
            </div>
          </div>
        </div>
      ) : (
        <Swiper
          pagination={true}
          modules={[Pagination]}
          spaceBetween={32}
          centeredSlides={true}
          className="mySwiper relative z-10"
        >
          <SwiperSlide className="bg-[#D9D9D9] bg-opacity-5 w-full aspect-[2/2.5] rounded-xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl text-2xl font-extrabold relative">
              Einfamilienhaus:
              <span className="block text-primary-light">CHF 520.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 text-xl">
              <p>
                Für Einzelhausbesitzer ist eine Machbarkeitsstudie bereits zu
                einem erschwinglichen Preis erhältlich.
              </p>
              <p>
                Sie zahlen nur CHF 520.-, um sicherzustellen, dass Ihr Projekt
                auf festem Boden steht.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#D9D9D9] bg-opacity-5 w-full aspect-[2/2.5] rounded-xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl text-2xl font-extrabold">
              Mehrfamilienhaus:
              <span className="block text-primary-light">CHF 1330.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 text-xl">
              <p>Bis 10 Wohnungen: CHF 1330.-</p>
              <p>
                Wenn Sie ein Mehrfamilienhaus mit bis zu 10 Wohnungen besitzen
                oder planen, beträgt der Preis CHF 1330.-. Das ist ein
                kostengünstiger Weg, um Ihre Vision Wirklichkeit werden zu
                lassen.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#D9D9D9] bg-opacity-5 w-full aspect-[2/2.5] rounded-xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl text-2xl font-extrabold">
              Ab 11 Wohnungen:
              <span className="block text-primary-light">CHF 1960.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 text-xl">
              <p>
                Für grössere Mehrfamilienhäuser mit 11 oder mehr Wohnungen
                bieten wir die Machbarkeitsstudie für CHF 1960.- an.
              </p>
              <p>
                Das ist ein exzellentes Preis-Leistungs-Verhältnis für
                umfangreiche Projekte.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#D9D9D9] bg-opacity-5 w-full aspect-[2/2.5] rounded-xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl text-2xl font-extrabold">
              Geschäftshaus:
              <span className="block text-primary-light">CHF 2280.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 text-xl">
              <p>Bis 5 Stockwerke: CHF 2280.-</p>
              <p>
                Besitzen Sie ein Geschäftshaus mit bis zu 5 Stockwerken? Unsere
                Machbarkeitsstudie erhalten Sie für CHF 2280.-, um
                sicherzustellen, dass Ihr Geschäftserfolg auf einem soliden
                Fundament steht.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide className="bg-[#D9D9D9] bg-opacity-5 w-full aspect-[2/2.5] rounded-xl border-2 border-primary-light lg:p-8 p-6 lg:space-y-12 space-y-8 border-[#FF69004D]">
            <h3 className="lg:text-3xl text-2xl font-extrabold">
              Ab 6 Stockwerke:
              <span className="block text-primary-light">CHF 2870.</span>
            </h3>
            <div className="lg:space-y-6 space-y-4 text-xl">
              <p>
                Für grössere Geschäftshäuser ab 6 Stockwerken bieten wir die
                Machbarkeitsstudie für CHF 2870.- an.
              </p>
              <p>Dies ist ein Investment in die Zukunft Ihres Unternehmens.</p>
            </div>
          </SwiperSlide>
        </Swiper>
      )}
    </section>
  );
}

export default Main;
