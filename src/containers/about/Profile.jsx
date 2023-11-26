function profile() {
  return (
    <section
      id="profile"
      aria-label="About the CEO"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:py-36 py-16 px-8 space-y-24"
    >
      <div className="flex lg:flex-row flex-col lg:items-center lg:gap-24 gap-8">
        <div className="w-full max-w-[500px] border border-primary-light rounded-3xl p-8 space-y-8 text-center">
          <div className="w-full aspect-square bg-gray-500 rounded-xl p-8"></div>
          <p className="text-2xl font-bold">Mohamed Amin Khancha</p>
        </div>
        <div className="max-w-3xl space-y-8 text-white lg:text-2xl text-xl">
          <h2 className="lg:text-3xl text-2xl font-bold text-primary-light ">
            Ihr Schlüssel zum Erfolg
          </h2>
          <p className="max-w-3xl">
            Herzlich Willkommen bei der ARA Group. Hier möchten wir Ihnen
            unseren Geschäsführer, Mohamed Amin Khancha, näher vorstellen und
            Einblick in unsere Leidenscha und Werte geben.
          </p>
          <p>
            Mohamed Amin Khancha ist der Gründer und Geschäsführer der ARA GROUP
            GmbH. Seine Leidenscha für die Arbeit in der Abwasser- und
            Kanalindustrie treibt uns an, jeden Tag unser Bestes zu geben.
          </p>
          <p>
            Mohamed ist ein Experte auf diesem Gebiet und ein efes Verständnis
            und bringt ein tiefes Verständnis und Engagement mit, das unsere
            Dienstleistungen auf ein höheres Niveau hebt.
          </p>
        </div>
      </div>
    </section>
  );
}

export default profile;
