import { Link } from "react-router-dom";

function Header() {
  return (
    <header
      id="dienstleistungen"
      className="bg-secondary xl:h-screen bg-[url('../../assets/img/pics/overlay/Group102.png')] bg-cover bg-center flex items-center  xl:px-[8vw] md:px-[4vw] border-secondary"
    >
      <section className="space-y-8 relative lg:py-36 pt-48 pb-16 px-8 text-xl">
        <h1 className="lg:text-6xl text-3xl font-extrabold">
          Dienstleistungen
        </h1>
        <p className="max-w-5xl">
          Erfahren Sie mehr über unsere breite Palette von Dienstleistungen, die
          auf höchste Qualität und Effizienz ausgelegt sind:
        </p>
        <a
          href="#"
          className="block w-fit bg-primary text-white py-3 px-6 rounded-lg font-semibold"
        >
          <Link to={"/contact"}>Unsere dienstleistungen</Link>
        </a>
      </section>
    </header>
  );
}

export default Header;
