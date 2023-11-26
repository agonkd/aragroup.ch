function Form() {
  return (
    <section
      id="form"
      aria-label="Contact Form"
      className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:pb-56 py-16 p-8 lg:grid grid-cols-2 gap-32 lg:space-y-0 space-y-16"
    >
      <div className="text-xl space-y-8 flex flex-col justify-center relative z-10">
        <h2 className="lg:text-5xl text-3xl font-bold">
          Kontaktieren Sie untenstehende
          <span className="block lg:mt-8">und starten Sie Ihr Projekt</span>
        </h2>
        <p>
          Wir freuen uns darauf, von Ihnen zu hören und Ihnen bei Ihrem nächsten
          Projekt zu helfen. Bitte nutzen Sie das untenstehende Formular, um uns
          Ihre Anfrage zu senden.
        </p>
        <p>
          Geben Sie Ihre Kontaktdaten ein und wählen Sie die Art Ihrer Anfrage
          aus den folgenden Optionen aus.
        </p>
      </div>
      <form
        action=""
        id="contact-form"
        aria-label="contact-form"
        className="text-xl space-y-4 relative z-10"
      >
        <input
          type="text"
          placeholder="Name"
          className="w-full py-4 px-6 rounded-xl bg-secondary-light placeholder:text-[#8D8D8D]"
        />
        <input
          type="text"
          placeholder="Vorname"
          className="w-full py-4 px-6 rounded-xl bg-secondary-light placeholder:text-[#8D8D8D]"
        />
        <input
          type="text"
          placeholder="Telefonnummer"
          className="w-full py-4 px-6 rounded-xl bg-secondary-light placeholder:text-[#8D8D8D]"
        />
        <select className="w-full py-4 px-6 rounded-xl bg-secondary-light text-[#8D8D8D]">
          <option value="" className="text-[#8D8D8D]">
            Art Ihrer Anfrage
          </option>
          <option value="">Angebot</option>
          <option value="">Anfrage</option>
          <option value="">Analyse</option>
        </select>
        <textarea
          name=""
          id=""
          rows="5"
          placeholder="Nachricht"
          className="w-full py-4 px-6 rounded-xl bg-secondary-light placeholder:text-[#8D8D8D]"
        ></textarea>
        <br />
        <button className="block w-fit bg-primary text-white py-3 px-24 rounded-lg font-semibold">
          Senden!
        </button>
      </form>
    </section>
  );
}

export default Form;
