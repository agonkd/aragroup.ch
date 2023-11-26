import { useEffect, useState } from "react";
import eclipse from "../../assets/img/icons/half-ecl.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

function Pricing() {
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
    <section
      id="pricing"
      aria-label="Pricing"
      className="bg-secondary bg-cover bg-center xl:px-[10vw] md:px-[5vw] lg:py-32 md:py-24 pt-16 px-8 md:space-y-32 space-y-16 relative"
    >
      <div className="w-full space-y-8 lg:text-xl text-lg flex flex-col items-center text-center">
        <h1 className="md:text-6xl text-3xl font-extrabold z-[999]">
          Machbarkeitsstudie erarbeiten
          <span className="block md:text-5xl text-2xl text-primary-light">
            Ihre Investition in kluge Entscheidungen
          </span>
        </h1>
        <p className="max-w-5xl z-[999]">
          Eine Machbarkeitsstudie ist der Schlüssel zu erfolgreichen
          Bauprojekten. Wir bieten massgeschneiderte Studien für
          unterschiedliche Gebäudetypen, damit Sie stets die beste Grundlage für
          Ihre Entscheidungen haben. Sehen Sie, wie einfach Sie Ihre Kosten
          kalkulieren können:
        </p>
      </div>
      {/*  */}
      {windowWidth > 600 ? (
        <div className="w-fit mx-auto grid lg:grid-cols-3 grid-cols-2 lg:gap-16 md:gap-8 gap-4 [&>div]:z-[999] [&>div]:max-w-[300px] sm:[&>div]:aspect-[2/3] [&>div]:bg-[#D9D9D90A] [&>div]:mx-auto">
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
      <img
        src={eclipse}
        alt=""
        className="absolute right-0 -bottom-[50%] -z-1 animate-pulse"
      />
    </section>
  );
}

export default Pricing;
