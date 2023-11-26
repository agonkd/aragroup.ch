function Header() {
  return (
    <section
      id="about-us"
      aria-label="About Us"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:py-36 pt-48 pb-16 px-8 bg-[url('../../assets/img/pics/overlay/Frame89.png')] bg-cover bg-center flex items-center relative"
    >
      <div className="max-w-6xl space-y-8 text-xl z-10">
        <h1 className="lg:text-6xl text-3xl font-extrabold">
          Willkommen bei der
          <span className="block text-primary-light">ARA GROUP GmbH</span>
        </h1>
        <p>
          Unsere Leidenschaft gilt der Pflege und Instandhaltung von Abwasser-
          und Kanalsystemen, um die Umwelt zu schützen und die Lebensqualität in
          Gemeinschaften zu verbessern. Wir freuen uns darauf, mit Ihnen
          zusammenzuarbeiten und gemeinsam Projekte umzusetzen, die unsere
          Umwelt und unsere Gesellschaft positiv beeinflussen.
        </p>
        <p>
          Wir schätzen jeden Kunden und Interessenten und freuen uns auf
          mögliches Zusammenarbeiten. Wenn Sie ein Projekt in Angriff nehmen
          möchten oder Fragen haben, zögern Sie nicht, uns zu kontaktieren. Ihre
          Vision und Bedürfnisse stehen im Mittelpunkt unserer Bemühungen.
        </p>
        <p>
          Vielen Dank, dass Sie sich die Zeit genommen haben, unsere Website zu
          besuchen. Wir sind bereit, die Ärmel hochzukrempeln und an Lösungen zu
          arbeiten, die einen Unterschied machen.
        </p>
        <br />
      </div>
      <div className="bg-secondary absolute top-0 left-0 w-full h-full opacity-50"></div>
    </section>
  );
}

export default Header;
