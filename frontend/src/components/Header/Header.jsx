// import React from "react";
// import "./Header.css";

// const Header = () => {
//   return (
//     <div className="header">
//       <div className="header-contents">
//         <h2>Order your favourite food here</h2>
//         <p>
//           Choose from a diverse menu featuring a detectable array of dishes
//           crafted with the finest ingredients and culinary expertise. Our
//           mission is to satisfy your cravings and elevate your dining
//           experience, one delicious meal at a time.
//         </p>
//         <button>View Menu</button>
//       </div>
//     </div>
//   );
// };

// export default Header;



import React, { useState } from "react";
import "./Header.css";

const Header = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = () => {
    if (searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      onSearch(searchQuery.trim());
    }
  };

  return (
    <div className="header">
      <div className="header-container">
        <div className="header-content">
          <div className="header-text">
            <h1 className="header-title">Delicious Food Delivered to Your Doorstep</h1>
            <p className="header-description">
              Order from your favorite restaurants and enjoy fast, reliable delivery.
            </p>
          </div>
          <div className="header-search">
            <div className="search-wrapper">
              <div className="search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search for food or categories"
                className="search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyPress={handleKeyPress}
              />
              <button
                className="search-button"
                onClick={handleSearch}
                disabled={!searchQuery.trim()}
              >
                <span className="truncate">Find Food</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;