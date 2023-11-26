import ellipse from "../../assets/img/icons/Ellipse1.png";

function Banner() {
  return (
    <section
      id="banner"
      aria-label="Banner"
      className="bg-[url('../../assets/img/pics/overlay/Group101.png')] bg-cover bg-center xl:h-screen xl:px-[10vw] md:px-[4vw] lg:py-56 py-16 px-8 flex items-center relative"
    >
      <div className="lg:space-y-32 space-y-8 text-xl z-[999]">
        <h2 className="lg:text-5xl text-3xl font-semibold lg:text-center uppercase">
          Wir gestalten die Wasserwege der Zukunft
        </h2>
        <div className="flex lg:flex-row flex-col justify-between items-center lg:gap-32 gap-8">
          <p>
            Unsere Expertise im Kanalisierungsbereich ermöglicht es uns,
            massgeschneiderte Lösungen zu entwickeln und Herausforderungen
            gemeinsam zu meistern. Egal, wo Ihre Projekte sich befinden, wir
            sind bereit, Hand in Hand mit Ihnen zu arbeiten, um Ihre Ziele zu
            erreichen.
          </p>
          <p>
            Erfahren Sie mehr über unsere Kundenorientierung und wie wir Ihnen
            helfen können, erfolgreich zu sein. Willkommen bei der ARA Group –
            Ihrem Partner für starke Zusammenarbeit in der Kanalisierung.
          </p>
        </div>
      </div>
      <img
        src={ellipse}
        alt=""
        className="bg-opacity-30 absolute left-0 -bottom-[100%] z-10 animate-pulse"
      />
    </section>
  );
}

export default Banner;
