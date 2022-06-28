import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";
import { AiOutlineShopping } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p> E-Commerce App .All rights reserved 2022</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
