import hand from "../../assets/img/icons/hand.png";
import graph from "../../assets/img/icons/graph.png";
import log from "../../assets/img/icons/log.png";
import ellipse from "../../assets/img/icons/Ellipse3.png";

function Quotes() {
  return (
    <section
      id="quotes"
      aria-label="Quotes"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:py-56 py-16 px-8 sm:flex grid grid-cols-3 sm:gap-8 justify-between items-center uppercase relative"
    >
      <div className="sm:w-full w-3/4 md:space-y-24 space-y-8 ml-auto">
        <div className="aspect-square flex justify-center items-center">
          <img src={graph} alt="" />
        </div>
        <p className="md:text-2xl md:font-extrabold font-bold text-xs text-primary-light text-center">
          Technisches Know HOW
        </p>
      </div>
      <div className="sm:w-full w-3/4 md:space-y-24 space-y-8 mx-[auto]">
        <div className="aspect-square flex justify-center items-center">
          <img src={log} alt="" />
        </div>
        <p className="md:text-2xl md:font-extrabold font-bold text-xs text-primary-light text-center">
          Modernste Technologie
        </p>
      </div>
      <div className="sm:w-full w-3/4 md:space-y-24 space-y-8">
        <div className="aspect-square flex justify-center items-center">
          <img src={hand} alt="" />
        </div>
        <p className="md:text-2xl md:font-extrabold font-bold text-xs text-primary-light text-center">
          Umweltbewusst
        </p>
      </div>
      <img src={ellipse} alt="" className="absolute left-0 animate-pulse" />
    </section>
  );
}

export default Quotes;
