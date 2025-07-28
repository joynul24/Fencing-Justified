import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="flex justify-between container">
      <p>Copyright © 2025 JF Products. All rights reserved</p>
      {/* icons */}
      <div className="flex gap-4">
        <FaFacebookF />
        <FaInstagram></FaInstagram>
        <FaYoutube></FaYoutube>
      </div>
    </footer>
  );
};

export default Footer;
