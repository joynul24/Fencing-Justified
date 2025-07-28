import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-5 px-[1rem] flex flex-col md:flex-row gap-4 md:gap-0 justify-between mx-w-7xl mx-auto">
      <p className="text-center text-gray-600">
        Copyright © {new Date().getFullYear()} JF Products. All rights reserved
      </p>
      {/* icons */}
      <div className="flex justify-center gap-4">
        <a href="">
          <FaFacebookF />
        </a>
        <a href="">
          <FaInstagram></FaInstagram>
        </a>
        <a href="">
          <FaYoutube></FaYoutube>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
