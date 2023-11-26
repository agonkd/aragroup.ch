import eclipse from "../../assets/img/icons/half-ecl.png";

function List() {
  return (
    <section
      id="about-us"
      aria-label="About Us"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:py-36 pt-32 pb-16 px-8 flex flex-col gap-16 relative"
    >
      <div className="z-10 max-w-5xl text-xl space-y-8">
        <h3 className="text-3xl text-primary-light font-bold">
          Unsere Geschichte und unser Engagement
        </h3>
        <p>
          Herzlich willkommen bei der ARA GROUP GmbH. Hier möchten wir Ihnen
          unseren Geschäftsführer, Mohamed Amin Khancha, näher vorstellen und
          Einblick in unsere Leidenschaft und Werte geben.
          <br />
          <br />
          Mohamed Amin Khancha ist der Gründer und Geschäftsführer der ARA GROUP
          GmbH. Seine Leidenschaft für die Arbeit in der Abwasser- und
          Kanalindustrie treibt uns an, jeden Tag unser Bestes zu geben. Mohamed
          ist ein Experte auf diesem Gebiet und bringt ein tiefes Verständnis
          und Engagement mit, das unsere Dienstleistungen auf ein höheres Niveau
          hebt.
        </p>
      </div>
      <div className="z-10 max-w-5xl text-xl space-y-8">
        <h3 className="text-3xl text-primary-light font-bold">
          Was uns antreibt
        </h3>
        <p>
          Unsere Begeisterung für die Abwasser- und Kanalindustrie liegt in der
          Gewissheit, dass wir einen wichtigen Beitrag zur Umwelt und
          Gesellschaft leisten. Die Pflege und Instandhaltung dieser
          Infrastruktur ist von entscheidender Bedeutung, um Umweltauswirkungen
          zu minimieren und die Gesundheit der Gemeinschaft zu schützen.
        </p>
      </div>
      <div className="z-10 max-w-5xl text-xl space-y-8">
        <h3 className="text-3xl text-primary-light font-bold">
          Qualität und Service an erster Stelle
        </h3>
        <p>
          Bei der ARA GROUP GmbH steht Qualität an erster Stelle. Wir sind stolz
          darauf, unseren Kunden erstklassige Dienstleistungen anzubieten, die
          höchsten Standards entsprechen. Unser Team arbeitet hart daran,
          sicherzustellen, dass jedes Projekt effizient, präzise und mit einem
          Fokus auf Nachhaltigkeit durchgeführt wird.
        </p>
      </div>
      <div className="z-10 max-w-5xl text-xl space-y-8">
        <h3 className="text-3xl text-primary-light font-bold">Unsere Vision</h3>
        <p>
          Unsere Vision ist es, Vorreiter in der Abwasser- und Kanalindustrie zu
          sein und unseren Kunden zuverlässige Lösungen zu bieten. Wir sind
          bestrebt, kontinuierlich zu wachsen und unsere Dienstleistungen zu
          verbessern, um den sich ändernden Bedürfnissen unserer Kunden gerecht
          zu werden. Die ARA GROUP GmbH ist stolz darauf, eine engagierte und
          qualitätsorientierte Organisation zu sein. Wir freuen uns darauf, mit
          Ihnen zusammenzuarbeiten und Ihre Bedürfnisse in der Abwasser- und
          Kanalindustrie zu erfüllen.
        </p>
      </div>
      <img
        src={eclipse}
        alt=""
        className="absolute bottom-0 right-0 opacity-50 animate-pulse"
      />
    </section>
  );
}

export default List;
