import ellipse from "../../assets/img/icons/Group 94.png";

function Header() {
  return (
    <header id="dienstleistungen" className="bg-secondary flex items-center">
      <section className="space-y-8 relative xl:px-[10vw] md:px-[4vw] lg:py-36 pt-48 pb-16 px-8 text-xl">
        <h1 className="lg:text-6xl text-3xl font-extrabold max-w-5xl relative z-10">
          Kontaktieren Sie uns und starten Sie Ihr Projekt
        </h1>
        <p className="max-w-5xl relative z-10">
          Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei Ihrem nächsten
          Projekt zu helfen. Bitte nutzen Sie das untenstehende Formular, um uns
          Ihre Anfrage zu senden. Geben Sie Ihre Kontaktdaten ein und wählen Sie
          die Art Ihrer Anfrage aus den folgenden Optionen aus:
        </p>
      </section>
      <img
        src={ellipse}
        alt=""
        className="absolute bottom-0 right-0 opacity-50"
      />
    </header>
  );
}

export default Header;
