import { NavLink } from "react-router-dom";
import { FiArrowUpRight, FiMail, FiMapPin, FiPhone, FiHeart } from "react-icons/fi";
import "./Footer.css";

const supportEmail = "support@indusandolive.com";

const Footer = () => (
  <footer className="footer-footer" id="footer">
    <div className="footer-inner">
    <div className="footer-intro">
      <div>
        <p className="footer-eyebrow">GOOD FOOD. GREAT MOMENTS.</p>
        <h2>A little flavor for your everyday.</h2>
      </div>
      <NavLink to="/menu" className="footer-menu-button">
        Explore the menu <FiArrowUpRight aria-hidden="true" />
      </NavLink>
    </div>

    <div className="footer-content">
      <div className="footer-brand">
        <NavLink to="/" className="footer-logo" aria-label="Indus & Olive home">
          <img
            src={import.meta.env.BASE_URL + "Indus&olive.png"}
            alt="Indus & Olive"
            className="footer-brand-image"
            loading="lazy"
          />
        </NavLink>
        <p className="footer-description">
          Welcome to Indus &amp; Olive. Discover delicious meals, find your
          favorites, and bring a little joy to your table.
        </p>
        <span className="footer-brand-note"><FiHeart aria-hidden="true" /> A love for food, shared with you.</span>
      </div>

      <nav className="footer-links" aria-label="Footer navigation">
        <h3>Explore</h3>
        <ul>
          <li><NavLink to="/" end>Home</NavLink></li>
          <li><NavLink to="/menu">Our menu</NavLink></li>
          <li><NavLink to="/offers">Exclusive offers</NavLink></li>
          <li><NavLink to="/contact">Contact us</NavLink></li>
        </ul>
      </nav>

      <div className="footer-contact">
        <h3>Let?s stay in touch</h3>
        <p>Questions about your order? We?re here to help.</p>
        <ul>
          <li>
            <FiMail aria-hidden="true" />
            <a href={"mailto:" + supportEmail}>
              <span className="footer-contact-label">Email support</span>
              <span>{supportEmail}</span>
            </a>
          </li>
          <li>
            <FiPhone aria-hidden="true" />
            <a href="tel:+923084900522">
              <span className="footer-contact-label">Give us a call</span>
              <span>+92 308 4900522</span>
            </a>
          </li>
          <li className="footer-location"><FiMapPin aria-hidden="true" /> Karachi, Pakistan</li>
        </ul>
      </div>
    </div>

    <div className="footer-bottom">
      <p>? {new Date().getFullYear()} Indus &amp; Olive. All rights reserved.</p>
      <NavLink to="/contact">A question? Say hello <FiArrowUpRight aria-hidden="true" /></NavLink>
    </div>
    </div>
  </footer>
);

export default Footer;
