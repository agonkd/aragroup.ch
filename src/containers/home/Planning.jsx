import { Link } from "react-router-dom";

function Planning() {
  return (
    <section
      id="planning"
      aria-label="Planning"
      className="xl:px-[10vw] md:px-[4vw] xl:h-screen lg:py-56 py-16 px-8 bg-[url('../../assets/img/pics/overlay/planning.png')] bg-cover bg-top bg-no-repeat')] flex items-center"
    >
      <div className="max-w-3xl space-y-8 lg:text-xl text-lg">
        <h1 className="lg:text-6xl text-3xl font-extrabold">
          Projektierung
          <span className="block md:text-5xl text-2xl text-primary-light">
            Projektleitung
          </span>
        </h1>
        <p className="font-semibold">
          Ihr Schlüssel zum erfolgreichen Kanalmanagement
        </p>
        <p>
          Unsere Dienstleistungen im Bereich Projektierung und Projektleitung
          fungieren als Ihr verlässlicher Kompass bei allen Angelegenheiten rund
          um Kanal-TV-Untersuchungen und -sanierung. Erfahren Sie, wie wir Ihren
          Projekten eine neue Dimension verleihen können:
        </p>
        <a
          href="/projektierung"
          className="relative z-10 block w-fit bg-primary text-white py-3 px-12 rounded-lg font-semibold"
        >
          <Link to={"/projektierung"}>Mehr Lesen</Link>
        </a>
      </div>
    </section>
  );
}

export default Planning;
