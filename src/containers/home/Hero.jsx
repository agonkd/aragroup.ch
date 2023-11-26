import { Link } from "react-router-dom";

function Hero() {
  return (
    <header
      id="hero"
      aria-label="Hero Section"
      className="xl:px-[10vw] md:px-[4vw] xl:h-screen lg:py-56 pt-48 pb-16 px-8 bg-[url('../../assets/img/pics/overlay/hero.png')] bg-cover bg-bottom bg-no-repeat')] flex items-center"
    >
      <div className="max-w-3xl space-y-8 lg:text-xl text-lg">
        <h1 className="lg:text-6xl text-3xl font-extrabold">
          Willkommen bei der
          <span className="block text-primary-light">ARA GROUP GmbH</span>
        </h1>
        <p>
          Wir heissen Sie herzlich auf unserer Website willkommen! Bei der ARA
          GROUP GmbH sind wir stolz darauf, in der Abwasser- und Kanalindustrie
          tätig zu sein und Lösungen für die Herausforderungen unserer Kunden
          anzubieten.
        </p>
        <a
          href="/uber"
          className="block w-fit bg-primary text-white py-3 px-6 rounded-lg font-semibold"
        >
          <Link to={"/uber"}>Unsere Dienstleistungen</Link>
        </a>
      </div>
    </header>
  );
}

export default Hero;
