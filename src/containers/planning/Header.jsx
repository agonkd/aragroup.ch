import group7 from "../../assets/img/icons/Ellipse 2.png";
import hand from "../../assets/img/icons/Group.png";
import tasks from "../../assets/img/icons/Group 86.png";
import woman from "../../assets/img/icons/Group-1.png";
import man from "../../assets/img/icons/Group-2.png";
import log from "../../assets/img/icons/Group 85.png";
import grad2 from "../../assets/img/icons/Frame 136.png";
import grad3 from "../../assets/img/icons/Frame 133.png";

function Header() {
  return (
    <header
      id="planning"
      aria-label="Planning and Strategies"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:py-36 pt-48 pb-16 px-8 flex flex-col lg:gap-24 gap-16 items-center relative text-xl"
    >
      <img
        src={group7}
        alt=""
        className="absolute top-0 left-0 animate-pulse"
      />
      <div className="text-center space-y-8 mb-16">
        <h1 className="lg:text-6xl text-3xl font-extrabold">
          Projektierung
          <span className="text-primary-light"> / Projektleitung</span>
        </h1>
        <p className="text-primary-light">
          Ihr Schlüssel zum erfolgreichen Kanalmanagement
        </p>
        <p className="max-w-5xl">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
          quisquam sequi velit blanditiis fugit exercitationem omnis adipisci
          voluptates veniam dicta, voluptatibus rem porro, amet pariatur. Dolor
          esse odit est tempore.
        </p>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:gap-24 gap-8 z-10">
        <img src={hand} alt="" className="w-[100px] object-contain mb-auto" />
        <div className="space-y-4">
          <p className="flex items-center font-bold gap-4 text-primary-light text-2xl">
            <span className="w-8 h-8 text-sm rounded-full border-2 border-primary-light flex justify-center items-center">
              <span>1</span>
            </span>
            Expertise und Machbarkeitsstudien:
          </p>
          <p className="max-w-3xl">
            Lassen Sie sich von unseren Experten in die Welt der
            Kanal-TV-Untersuchungen entführen. Wir erstellen detaillierte
            Machbarkeitsstudien, die Ihnen die Gewissheit geben, dass Ihr
            Projekt auf einem soliden Fundament steht.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:gap-24 gap-8 z-10">
        <img src={tasks} alt="" className="w-[100px] object-contain mb-auto" />
        <div className="space-y-4">
          <p className="flex items-center font-bold  gap-4 text-primary-light text-2xl">
            <span className="w-8 h-8 text-sm rounded-full border-2 border-primary-light flex justify-center items-center">
              <span>2</span>
            </span>
            Transparenz bei fehlenden Arbeiten:
          </p>
          <p className="max-w-3xl">
            Bei uns erhalten Sie Klarheit. Falls zusätzliche Arbeiten
            erforderlich sind, stellen wir Ihnen verständliche Informationen zur
            Verfügung, damit Sie immer den Überblick behalten.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:gap-24 gap-8 z-10">
        <img src={woman} alt="" className="w-[100px] object-contain mb-auto" />
        <div className="space-y-4">
          <p className="flex items-center font-bold  gap-4 text-primary-light text-2xl">
            <span className="w-8 h-8 text-sm rounded-full border-2 border-primary-light flex justify-center items-center">
              <span>3</span>
            </span>
            Effiziente Ausschreibungen und Angebotsprüfung:
          </p>
          <p className="max-w-3xl">
            Unser Team übernimmt den komplexen Prozess der Ausschreibung für
            Dienstleistungen wie Kanalreinigung, TV-Untersuchungen und mehr. Wir
            sorgen dafür, dass Sie stets wettbewerbsfähige Angebote erhalten,
            die genau Ihren Bedürfnissen entsprechen.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:items-center md:gap-24 gap-8 z-10">
        <img src={man} alt="" className="w-[100px] object-contain mb-auto" />
        <div className="space-y-4">
          <p className="flex items-center font-bold  gap-4 text-primary-light text-2xl">
            <span className="w-8 h-8 text-sm rounded-full border-2 border-primary-light flex justify-center items-center">
              <span>4</span>
            </span>
            Vollumfängliche Projektleitung:
          </p>
          <p className="max-w-3xl">
            Mit unserer Projektleitung können Sie sich entspannen. Wir
            organisieren Begehungen und Besprechungen, um sicherzustellen, dass
            alles reibungslos abläuft. Während der Ausführung sind wir Ihr
            verlässliches Kontrollorgan und sorgen für höchste Standards.
          </p>
        </div>
      </div>
      <div className="flex md:flex-row flex-col md:gap-24 gap-8 z-10">
        <img src={log} alt="" className="w-[100px] object-contain mb-auto" />
        <div className="space-y-4">
          <p className="flex items-center font-bold  gap-4 text-primary-light text-2xl">
            <span className="w-8 h-8 text-sm rounded-full border-2 border-primary-light flex justify-center items-center">
              <span>5</span>
            </span>
            Einwandfreier Projektablauf garantiert:
          </p>
          <p className="max-w-3xl">
            Unsere Dienstleistungen zur Projektleitung gewährleisten einen
            nahtlosen und pünktlichen Projektablauf. Das bedeutet, dass Sie sich
            auf Ihr Kerngeschäft konzentrieren können, während wir uns um
            sämtliche Details kümmern.
            <br />
            <br />
            Tauchen Sie ein in die Welt der effizienten Kanalprojekte und
            entdecken Sie, wie unsere Expertise und Dienstleistungen Ihnen den
            Weg zu reibungslosen, kosteneffizienten und qualitativ hochwertigen
            Ergebnissen ebnen können. Ihre Zufriedenheit und der Erfolg Ihrer
            Projekte stehen bei uns an erster Stelle
          </p>
        </div>
      </div>
      <img
        src={grad2}
        alt=""
        className="absolute top-0 bottom-0 my-auto right-0 opacity-50"
      />
      <img
        src={grad3}
        alt=""
        className="absolute lg:-bottom-[10%] bottom-0 -left-[20%] opacity-50"
      />
    </header>
  );
}

export default Header;
