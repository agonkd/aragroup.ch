import { BsFacebook, BsInstagram, BsTwitter } from "react-icons/bs";

function Footer() {
  return (
    <footer id="footer" aria-label="Footer" className="mb-auto">
      <div className="bg-secondary">
        <div className="xl:px-[10vw] md:px-[4vw] w-full h-32 p-8 bg-[url('../../assets/img/icons/waves.png')] flex justify-end items-end">
          <ul className="flex gap-8 text-3xl">
            <li>
              <BsFacebook />
            </li>
            <li>
              <BsInstagram />
            </li>
            <li>
              <BsTwitter />
            </li>
          </ul>
        </div>
      </div>
      <div className="xl:px-[10vw] md:px-[4vw] bg-secondary-light flex justify-between items-center p-8">
        <p className="">© 2023 All rights reserved</p>
        <ul className="flex gap-8">
          <li>Terms of Service</li>
          <li>Privacy Policy</li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
