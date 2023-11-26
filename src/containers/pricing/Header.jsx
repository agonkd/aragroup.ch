import ellipse from "../../assets/img/icons/Group 94.png";

function Header() {
  return (
    <header id="dienstleistungen" className="bg-secondary flex items-center">
      <section className="space-y-8 relative xl:px-[10vw] md:px-[4vw] lg:py-36 pt-48 pb-16 px-8 text-xl text-center mx-auto">
        <h1 className="lg:text-6xl text-3xl font-extrabold relative z-10">
          Machbarkeitsstudie
        </h1>
        <p className="text-primary-light relative z-10">
          Machbarkeitsstudie Erarbeiten - Ihre Investition in kluge
          Entscheidungen
        </p>
        <p className="max-w-5xl relative z-10">
          Eine Machbarkeitsstudie ist der Schlüssel zu erfolgreichen
          Bauprojekten. Wir bieten massgeschneiderte Studien für
          unterschiedliche Gebäudetypen, damit Sie stets die beste Grundlage für
          Ihre Entscheidungen haben. Sehen Sie, wie einfach Sie Ihre Kosten
          kalkulieren können:
        </p>
        <img
          src={ellipse}
          alt=""
          className="absolute bottom-0 right-0 opacity-50 animate-pulse"
        />
      </section>
    </header>
  );
}

export default Header;
