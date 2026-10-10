import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { buildSearchUrl } from "../../utils/search.js";
import "./Header.css";

const Header = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();
  const handleSearch = (event) => {
    event.preventDefault();
    navigate(buildSearchUrl(searchQuery));
  };
  return (
    <div className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-title">Delicious Food Delivered to Your Doorstep</h1>
            <p className="header-description">Order from your favorite restaurants and enjoy fast, reliable delivery.</p>
          </div>
          <form className="header-search" role="search" aria-label="Search food" onSubmit={handleSearch}>
            <div className="search-wrapper">
              <span className="search-icon"><FiSearch aria-hidden="true" /></span>
              <input type="search" name="query" aria-label="Search dishes or categories" placeholder="Search dishes or categories..." className="search-input" value={searchQuery} onChange={(event) => setSearchQuery(event.target.value)} />
              <button type="submit" className="search-button">Find Food</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Header;
