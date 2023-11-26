import one from "../../assets/img/pics/one.png";
import two from "../../assets/img/pics/two.png";
import three from "../../assets/img/pics/three.png";
import ellipse from "../../assets/img/icons/Ellipse3.png";

function Focus() {
  return (
    <section
      id="focus"
      aria-label="Focues"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] p-8 relative grid lg:grid-cols-2 lg:gap-8"
    >
      <div className="lg:text-xl text-lg lg:space-y-16 space-y-8 z-[999] lg:order-1 order-2">
        <h2 className="lg:text-6xl text-3xl font-bold">
          Zusammenarbeit mit unseren Kunden im Fokus
        </h2>
        <p>
          Bei der ARA Group dreht sich alles um die enge Zusammenarbeit mit
          unseren Kunden. Wir verstehen, dass erfolgreiche Projekte und
          Dienstleistungen auf einer starken Partnerschaft basieren. Unser
          Engagement für effiziente und nachhaltige Kanalisierungslösungen
          spiegelt sich in unserer engen Zusammenarbeit mit Kunden und Partnern
          wider.
        </p>
      </div>
      <div className="lg:max-w-none max-w-xl mx-auto grid grid-cols-3 gap-4 items-center lg:order-2 order-1">
        <div className="box1 aspect-[2/3]">
          <img src={one} alt="" className="w-full rounded-3xl shadow-xl" />
        </div>
        <div className="box2 aspect-[1/3] delay-500">
          <img src={three} alt="" className="w-full rounded-3xl shadow-xl" />
        </div>
        <div className="box3 aspect-[2/3]">
          <img src={two} alt="" className="w-full rounded-3xl shadow-xl" />
        </div>
      </div>
      <img src={ellipse} alt="" className="absolute right-0 animate-pulse" />
    </section>
  );
}

export default Focus;
