import logo from "../../assets/img/brand/logo.png";

import { useState } from "react";
import ellipse from "../../assets/img/icons/Group 94.png";
import {
  AiFillFacebook,
  AiFillInstagram,
  AiFillTwitterCircle,
  AiFillYoutube,
} from "react-icons/ai";
import { HiLocationMarker, HiMail, HiPhone } from "react-icons/hi";

function Main() {
  const [isButtonClicked, setIsButtonClicked] = useState(false);
  const toggleModal = () => {
    setIsButtonClicked(!isButtonClicked);
  };

  return (
    <>
      <section
        id="form"
        aria-label="Contact Form"
        className="bg-secondary xl:px-[10vw] md:px-[4vw] lg:pb-56 pb-16 p-8 pt-0 relative"
      >
        <div className="grid md:grid-cols-2 md:gap-0 gap-8 text-xl">
          <form
            action=""
            id="contact-form"
            aria-label="Contact Form"
            className="flex flex-col justify-center z-10 space-y-3 bg-[#303030] md:rounded-r-none rounded-xl px-8 py-32 text-[#8D8D8D] [&>input]:placeholder:text-[#8D8D8D] [&>input]:bg-secondary-light [&>input]:w-full [&>input]:px-6 [&>input]:py-3 [&>input]:rounded-lg"
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
              type="E-Mail"
              placeholder="Email"
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
            <button
              type="button"
              className="block w-fit bg-primary text-white py-3 px-24 rounded-lg font-semibold"
              onClick={toggleModal}
            >
              Senden!
            </button>
          </form>
          <div className="lg:p-32 bg-white z-[999] text-secondary  md:rounded-l-none rounded-xl px-6 py-12 space-y-24 flex flex-col justify-center">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/maps/place/Hirsm%C3%BChleweg+16,+8158+Regensberg,+Switzerland/@47.4816582,8.4442605,17z/data=!3m1!4b1!4m6!3m5!1s0x47907311f9e86245:0x2d4f9dd9273435b3!8m2!3d47.4816546!4d8.4468354!16s%2Fg%2F11q3rftnc6?entry=ttu"
              className="block w-full aspect-video"
            >
              <img
                // src={maps}
                alt=""
                className="w-full h-full object-cover object-center bg-gray-200"
              />
            </a>
            <ul className="space-y-2">
              <li className="flex items-center gap-1">
                <HiLocationMarker className="text-2xl" />
                Hirsmühleweg 16 <br /> 8158 Regensberg
              </li>
              <li className="flex items-center gap-1">
                <HiPhone className="text-2xl" />
                <a href="">+41 78 814 84 88</a>
              </li>
              <li className="flex items-center gap-1">
                <HiMail className="text-2xl" />
                <a href="">mohamed.khancha@gmail.com</a>
              </li>
            </ul>
            <ul className="flex justify-end items-center gap-2">
              <li>
                <AiFillInstagram className="text-2xl" />
              </li>
              <li>
                <AiFillTwitterCircle className="text-2xl" />
              </li>
              <li>
                <AiFillFacebook className="text-2xl" />
              </li>
              <li>
                <AiFillYoutube className="text-2xl" />
              </li>
            </ul>
          </div>
          <img
            src={ellipse}
            alt=""
            className="absolute -bottom-[15%] -left-[15%] opacity-50 animate-pulse"
          />
        </div>
      </section>
      <div
        className={`w-fit h-fit absolute top-0 left-0 right-0 bottom-0 m-auto bg-primary-light bg-opacity-70 p-32 rounded-xl z-[999] ${
          isButtonClicked ? "block" : "hidden"
        }`}
      >
        <img src={logo} alt="ARAGROUP logo" className="lg:w-80 w-36 mx-auto" />
        <p className="lg:text-6xl text-3xl font-bold text-center">
          Ihre Anfrage wurde gesendet. <br /> Wir werden Sie in Kürze
          kontaktieren.
        </p>
      </div>
    </>
  );
}

export default Main;
