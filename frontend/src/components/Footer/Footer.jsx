import React from "react";
import { NavLink } from "react-router-dom";
import "./Footer.css";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer-footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <div className="footer-logo">
            <svg viewBox="0 0 48 48" fill="currentColor" xmlns="http://www.w3.org/2000/svg" className="footer-logo-icon">
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
              />
            </svg>
            <h2 className="footer-logo-text">Foodie</h2>
          </div>
          <p>
            Foodie is your trusted platform for delicious, high-quality meals delivered straight to your door. We partner with top restaurants to offer a seamless dining experience, ensuring convenience and satisfaction with every order.
          </p>
          <div className="footer-address">
            <p>123 Foodie Lane, Karachi, Pakistan</p>
          </div>
          <div className="footer-social-icons">
            <a href="https://facebook.com/foodie" target="_blank" rel="noopener noreferrer">
              <FaFacebookF size={40} />
            </a>
            <a href="https://twitter.com/foodie" target="_blank" rel="noopener noreferrer">
              <FaTwitter size={40} />
            </a>
            <a href="https://linkedin.com/company/foodie" target="_blank" rel="noopener noreferrer">
              <FaLinkedinIn size={40} />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
          <h2>Company</h2>
          <ul>
            <li>
              <NavLink to="/" className="footer-nav-link">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/menu" className="footer-nav-link">
                Our Menu
              </NavLink>
            </li>
            <li>
              <NavLink to="/offers" className="footer-nav-link">
                Exclusive Offers
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" className="footer-nav-link">
                Contact Us
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="footer-content-right">
          <h2>Get in Touch</h2>
          <ul>
            <li>
              <a href="tel:+923084900522" className="footer-contact-link">
                +92-308-4900522
              </a>
            </li>
            <li>
              <a href="mailto:support@foodie.com" className="footer-contact-link">
                support@foodie.com
              </a>
            </li>
          </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">
        Copyright © 2025 Foodie. All Rights Reserved.
      </p>
    </div>
  );
};

export default Footer;