



import React, { useContext, useState, useEffect } from "react";
import { assets } from "../../assets/frontend_assets/assets";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import Cookies from "js-cookie";
import "./Navbar.css";

const Navbar = ({ setShowLogin }) => {
  const location = useLocation();
  const [menu, setMenu] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const { getTotalCartAmount, token, setToken, food_list = [], setFilteredItems } = useContext(StoreContext);
  const navigate = useNavigate();

  useEffect(() => {
    const path = location.pathname;
    if (path === "/") setMenu("home");
    else if (path.startsWith("/menu")) setMenu("menu");
    else if (path.startsWith("/offers")) setMenu("offers");
    else if (path.startsWith("/contact")) setMenu("contact");
    else setMenu("");
  }, [location]);

  const logout = () => {
    Cookies.remove("token");
    setToken("");
    toast.success("Logout Successfully", {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      theme: "light",
    });
    navigate("/");
    setIsProfileDropdownOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    setIsSearchOpen(false);
    setIsProfileDropdownOpen(false);
  };

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    setIsMobileMenuOpen(false);
    setIsProfileDropdownOpen(false);
    if (!isSearchOpen) {
      setSearchQuery("");
      setSuggestions([]);
    }
  };

  const handleSearch = (e) => {
    const query = e.target.value.toLowerCase();
    setSearchQuery(query);
    if (query) {
      const filteredItems = food_list.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
      setSuggestions(filteredItems.slice(0, 5));
      if (setFilteredItems) {
        setFilteredItems(filteredItems);
      }
      navigate(`/menu?query=${encodeURIComponent(query)}`);
    } else {
      setSuggestions([]);
      if (setFilteredItems) {
        setFilteredItems(food_list);
      }
      navigate("/menu");
    }
  };

  const handleSuggestionClick = (itemName) => {
    setSearchQuery(itemName);
    const filteredItems = food_list.filter(
      (item) =>
        item.name.toLowerCase().includes(itemName.toLowerCase()) ||
        item.description.toLowerCase().includes(itemName.toLowerCase()) ||
        item.category.toLowerCase().includes(itemName.toLowerCase())
    );
    if (setFilteredItems) {
      setFilteredItems(filteredItems);
    }
    setSuggestions([]);
    setIsSearchOpen(false);
    navigate(`/menu?query=${encodeURIComponent(itemName)}`);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
    setIsMobileMenuOpen(false);
    setIsSearchOpen(false);
  };

  const menuItems = [
    { name: "home", to: "/", href: null },
    { name: "menu", to: null, href: "/menu" },
    { name: "offers", to: null, href: "/offers" },
    { name: "contact", to: null, href: "/contact" },
  ];

  return (
    <motion.header
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="navbar-navbar"
    >
      <div className="navbar-navbar-left">
        <div className="navbar-navbar-logo">
          <div className="navbar-logo-icon">
            <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                fill="currentColor"
              ></path>
            </svg>
          </div>
          <Link to="/">
            <h2 className="navbar-logo-text">Foodie</h2>
          </Link>
        </div>
        <div className="navbar-navbar-menu">
          {menuItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.href || item.to}
              onClick={() => setMenu(item.name)}
              className={`navbar-menu-item ${menu === item.name ? "navbar-active" : ""}`}
              whileHover={{ color: "#39e079" }}
              transition={{ duration: 0.2 }}
            >
              {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
            </motion.a>
          ))}
        </div>
      </div>

      <div className="navbar-navbar-right">
        <div className="navbar-search-container navbar-desktop-search">
          <div className="navbar-search-icon">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
              ></path>
            </svg>
          </div>
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearch}
            placeholder="Search products..."
            className="navbar-search-input"
          />
          <AnimatePresence>
            {suggestions.length > 0 && (
              <motion.ul
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                className="navbar-search-suggestions"
              >
                {suggestions.map((item) => (
                  <motion.li
                    key={item._id || item.name}
                    onClick={() => handleSuggestionClick(item.name)}
                    className="navbar-suggestion-item"
                    whileHover={{ backgroundColor: "#e8f2ec" }}
                  >
                    {item.name}
                  </motion.li>
                ))}
              </motion.ul>
            )}
          </AnimatePresence>
        </div>

        <div className="navbar-mobile-toggles">
          <motion.button
            className="navbar-mobile-search-toggle"
            onClick={toggleSearch}
            whileTap={{ scale: 0.95 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path
                d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
              ></path>
            </svg>
          </motion.button>
          <motion.button
            className="navbar-mobile-menu-toggle"
            onClick={toggleMobileMenu}
            whileTap={{ scale: 0.95 }}
          >
            <svg
              className="navbar-mobile-menu-icon"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d={isMobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
              />
            </svg>
          </motion.button>
        </div>

        <div className="navbar-desktop-actions">
          <div className="navbar-cart-container">
            <Link to="/cart">
              <motion.svg
                xmlns="http://www.w3.org/2000/svg"
                width="24px"
                height="24px"
                fill="currentColor"
                viewBox="0 0 256 256"
                className="navbar-cart-icon"
                whileHover={{ scale: 1.2 }}
                transition={{ duration: 0.2 }}
              >
                <path
                  d="M184,184a16,16,0,1,1-16-16A16,16,0,0,1,184,184Zm-80-16a16,16,0,1,1-16,16A16,16,0,0,1,104,168Zm136-40a8,8,0,0,1-8,8H85.67l-5.73,28.65A8,8,0,0,0,88,176H208a8,8,0,0,1,0,16H88a24,24,0,0,1-23.62-19.71L36.06,34.22A8,8,0,0,0,28.34,28H8a8,8,0,0,1,0-16H28.34a24,24,0,0,1,23.62,19.71L58.17,64H232a8,8,0,0,1,7.89,9.37l-16,80A8,8,0,0,1,240,128Z"
                ></path>
              </motion.svg>
            </Link>
            {getTotalCartAmount() > 0 && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="navbar-cart-dot"
              />
            )}
          </div>
          {token ? (
            <div className="navbar-profile-container">
              <motion.div
                className="navbar-profile-circle"
                onClick={toggleProfileDropdown}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24px"
                  height="24px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,16a88.1,88.1,0,1,1-88,88A88.1,88.1,0,0,1,128,40Zm0,144a48,48,0,1,0-48-48A48.05,48.05,0,0,0,128,184Zm0-80a32,32,0,1,1,32,32A32,32,0,0,1,128,104Z"
                  ></path>
                </svg>
              </motion.div>
              <AnimatePresence>
                {isProfileDropdownOpen && (
                  <motion.ul
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="navbar-profile-dropdown"
                  >
                    <motion.li
                      whileHover={{ backgroundColor: "#e8f2ec" }}
                      className="navbar-dropdown-item"
                    >
                      <Link to="/myorders" onClick={() => setIsProfileDropdownOpen(false)}>
                        My Orders
                      </Link>
                    </motion.li>
                    <motion.li
                      whileHover={{ backgroundColor: "#e8f2ec" }}
                      className="navbar-dropdown-item"
                      onClick={logout}
                    >
                      Logout
                    </motion.li>
                  </motion.ul>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <motion.button
              onClick={() => setShowLogin(true)}
              className="navbar-order-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="navbar-truncate">Sign In</span>
            </motion.button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.ul
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="navbar-mobile-menu"
          >
            {menuItems.map((item) => (
              <motion.li
                key={item.name}
                whileHover={{ scale: 1.05 }}
                className="navbar-mobile-menu-item"
              >
                {item.to ? (
                  <Link
                    to={item.to}
                    onClick={() => {
                      setMenu(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`navbar-mobile-menu-link ${menu === item.name ? "navbar-active" : ""}`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </Link>
                ) : (
                  <a
                    href={item.href}
                    onClick={() => {
                      setMenu(item.name);
                      setIsMobileMenuOpen(false);
                    }}
                    className={`navbar-mobile-menu-link ${menu === item.name ? "navbar-active" : ""}`}
                  >
                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                  </a>
                )}
              </motion.li>
            ))}
            <motion.li className="navbar-mobile-menu-item">
              <Link
                to="/cart"
                onClick={() => setIsMobileMenuOpen(false)}
                className="navbar-mobile-cart"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M184,184a16,16,0,1,1-16-16A16,16,0,0,1,184,184Zm-80-16a16,16,0,1,1-16,16A16,16,0,0,1,104,168Zm136-40a8,8,0,0,1-8,8H85.67l-5.73,28.65A8,8,0,0,0,88,176H208a8,8,0,0,1,0,16H88a24,24,0,0,1-23.62-19.71L36.06,34.22A8,8,0,0,0,28.34,28H8a8,8,0,0,1,0-16H28.34a24,24,0,0,1,23.62,19.71L58.17,64H232a8,8,0,0,1,7.89,9.37l-16,80A8,8,0,0,1,240,128Z"
                  ></path>
                </svg>
                Cart
              </Link>
            </motion.li>
            {token ? (
              <>
                <motion.li className="navbar-mobile-menu-item">
                  <Link
                    to="/myorders"
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="navbar-mobile-menu-link"
                  >
                    My Orders
                  </Link>
                </motion.li>
                <motion.li className="navbar-mobile-menu-item">
                  <button
                    onClick={logout}
                    className="navbar-mobile-signin navbar-logout-button"
                  >
                    Logout
                  </button>
                </motion.li>
              </>
            ) : (
              <motion.li className="navbar-mobile-menu-item">
                <button
                  onClick={() => {
                    setShowLogin(true);
                    setIsMobileMenuOpen(false);
                  }}
                  className="navbar-mobile-signin"
                >
                  Sign In
                </button>
              </motion.li>
            )}
          </motion.ul>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isSearchOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="navbar-mobile-search"
          >
            <div className="navbar-search-container">
              <div className="navbar-search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearch}
                placeholder="Search products..."
                className="navbar-search-input"
              />
              {suggestions.length > 0 && (
                <motion.ul
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="navbar-search-suggestions navbar-mobile"
                >
                  {suggestions.map((item) => (
                    <motion.li
                      key={item._id || item.name}
                      onClick={() => handleSuggestionClick(item.name)}
                      className="navbar-suggestion-item"
                      whileHover={{ backgroundColor: "#e8f2ec" }}
                    >
                      {item.name}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;