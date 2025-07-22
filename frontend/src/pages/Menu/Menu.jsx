// import React, { useState } from 'react';
// import './Menu.css';

// const MenuPage = () => {
//   const [activeTab, setActiveTab] = useState('featured');
//   const [searchQuery, setSearchQuery] = useState('');

//   // Sample menu data
//   const menuCategories = [
//     {
//       id: 'featured',
//       name: 'Featured',
//       items: [
//         {
//           id: 1,
//           name: 'Spicy Chicken Sandwich',
//           description: 'Crispy chicken, spicy mayo, lettuce, tomato',
//           price: 9.99,
//           image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//         },
//         {
//           id: 2,
//           name: 'Classic Cheeseburger',
//           description: 'Beef patty, cheddar cheese, lettuce, tomato, onion',
//           price: 8.99,
//           image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//         }
//       ]
//     },
//     {
//       id: 'popular',
//       name: 'Popular',
//       items: [
//         {
//           id: 3,
//           name: 'Golden Fries',
//           description: 'Crispy golden fries with sea salt',
//           price: 3.99,
//           image: 'https://images.unsplash.com/photo-1541592106381-b31e9677c0e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//         },
//         {
//           id: 4,
//           name: 'Creamy Milkshake',
//           description: 'Vanilla, chocolate, or strawberry',
//           price: 4.99,
//           image: 'https://images.unsplash.com/photo-1505576399279-565b52d4ac71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//         }
//       ]
//     },
//     {
//       id: 'new',
//       name: 'New',
//       items: [
//         {
//           id: 5,
//           name: 'Avocado Toast',
//           description: 'Toasted bread, mashed avocado, everything bagel seasoning',
//           price: 7.99,
//           image: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//         },
//         {
//           id: 6,
//           name: 'Iced Coffee',
//           description: 'Cold brew coffee with milk and ice',
//           price: 3.49,
//           image: 'https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
//         }
//       ]
//     }
//   ];

//   const filteredItems = menuCategories
//     .find(category => category.id === activeTab)?.items
//     .filter(item => 
//       item.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
//       item.description.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || [];

//   return (
//     <div className="foodie-menu-page">
//       <main className="foodie-menu-main">
//         <div className="foodie-menu-container">
//           <div className="foodie-menu-header-section">
//             <div className="foodie-menu-title">
//               <h1 className="foodie-menu-title-text">Our Menu</h1>
//               <p className="foodie-menu-subtitle">Explore our delicious offerings</p>
//             </div>
//           </div>

//           <div className="foodie-menu-tabs">
//             <div className="foodie-tabs-container">
//               {menuCategories.map(category => (
//                 <button
//                   key={category.id}
//                   className={`foodie-tab-button ${activeTab === category.id ? 'foodie-tab-active' : ''}`}
//                   onClick={() => setActiveTab(category.id)}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="foodie-menu-items">
//             <h2 className="foodie-category-title">
//               {menuCategories.find(c => c.id === activeTab)?.name} Items
//             </h2>
            
//             {filteredItems.length === 0 ? (
//               <div className="foodie-no-results">
//                 <p>No items found matching your search.</p>
//               </div>
//             ) : (
//               <div className="foodie-items-grid">
//                 {filteredItems.map(item => (
//                   <div key={item.id} className="foodie-menu-item">
//                     <div className="foodie-item-info">
//                       <h3 className="foodie-item-name">{item.name}</h3>
//                       <p className="foodie-item-description">{item.description}</p>
//                       <button className="foodie-price-button">
//                         ${item.price.toFixed(2)}
//                       </button>
//                     </div>
//                     <div 
//                       className="foodie-item-image"
//                       style={{ backgroundImage: `url(${item.image})` }}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MenuPage;









// import React, { useState, useContext, useEffect } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import "./Menu.css";

// const MenuPage = () => {
//   const { food_list, url } = useContext(StoreContext);
//   const [activeTab, setActiveTab] = useState("featured");
//   const [searchQuery, setSearchQuery] = useState("");
//   const navigate = useNavigate();

//   // Dynamically generate categories based on food_list
//   const [menuCategories, setMenuCategories] = useState([
//     { id: "featured", name: "Featured", items: [] },
//     { id: "popular", name: "Popular", items: [] },
//     { id: "new", name: "New", items: [] },
//   ]);

//   useEffect(() => {
//     const oneWeekAgo = new Date(Date.now() - 7 * 24 * 60 * 60 * 1000);
//     const updatedCategories = [
//       {
//         id: "featured",
//         name: "Featured",
//         items: food_list.filter((item) => item.isFeatured).slice(0, 10),
//       },
//       {
//         id: "popular",
//         name: "Popular",
//         items: food_list.filter((item) => item.isPopular).slice(0, 10),
//       },
//       {
//         id: "new",
//         name: "New",
//         items: food_list
//           .filter((item) => new Date(item.createdAt) > oneWeekAgo)
//           .slice(0, 10),
//       },
//     ];
//     setMenuCategories(updatedCategories);

//     // Set "New" tab as active if there are new items
//     if (updatedCategories.find((cat) => cat.id === "new")?.items.length > 0) {
//       setActiveTab("new");
//     }
//   }, [food_list]);

//   const filteredItems = menuCategories
//     .find((category) => category.id === activeTab)?.items
//     .filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || [];

//   const handleItemClick = (itemId) => {
//     navigate(`/product/${itemId}`);
//   };

//   return (
//     <div className="foodie-menu-page">
//       <main className="foodie-menu-main">
//         <div className="foodie-menu-container">
//           <div className="foodie-menu-header-section">
//             <div className="foodie-menu-title">
//               <h1 className="foodie-menu-title-text">Our Menu</h1>
//               <p className="foodie-menu-subtitle">Explore our delicious offerings</p>
//             </div>
//             <div className="foodie-search-container">
//               <input
//                 type="text"
//                 className="foodie-search-input"
//                 placeholder="Search menu items..."
//                 value={searchQuery}
//                 onChange={(e) => setSearchQuery(e.target.value)}
//               />
//             </div>
//           </div>

//           <div className="foodie-menu-tabs">
//             <div className="foodie-tabs-container">
//               {menuCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   className={`foodie-tab-button ${activeTab === category.id ? "foodie-tab-active" : ""}`}
//                   onClick={() => setActiveTab(category.id)}
//                   disabled={category.items.length === 0}
//                 >
//                   {category.name}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="foodie-menu-items">
//             <h2 className="foodie-category-title">
//               {menuCategories.find((c) => c.id === activeTab)?.name} Items
//             </h2>
//             {filteredItems.length === 0 ? (
//               <div className="foodie-no-results">
//                 <p>No items found matching your search.</p>
//               </div>
//             ) : (
//               <div className="foodie-items-grid">
//                 {filteredItems.map((item) => (
//                   <div
//                     key={item.id}
//                     className="foodie-menu-item"
//                     onClick={() => handleItemClick(item._id)}
//                   >
//                     <div className="foodie-item-info">
//                       <h3 className="foodie-item-name">{item.name}</h3>
//                       <p className="foodie-item-description">{item.description}</p>
//                       <button className="foodie-price-button">
//                         ${item.price.toFixed(2)}
//                       </button>
//                     </div>
//                     <div
//                       className="foodie-item-image"
//                       style={{ backgroundImage: `url(${url}/images/${item.image})` }}
//                     ></div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MenuPage;






// import React, { useState, useContext, useEffect } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import "./Menu.css";

// const MenuPage = ({ searchQuery: externalSearchQuery }) => {
//   const { food_list, url } = useContext(StoreContext);
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchQuery, setSearchQuery] = useState(externalSearchQuery || "");
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();

//   // Dynamically generate categories
//   const [menuCategories, setMenuCategories] = useState([
//     { id: "featured", name: "Featured", items: [] },
//     { id: "popular", name: "Popular", items: [] },
//     { id: "all", name: "All Products", items: [] },
//   ]);

//   useEffect(() => {
//     const categoryParam = searchParams.get("category");
//     if (categoryParam) {
//       setActiveTab("all");
//       setSearchQuery(categoryParam);
//     }

//     const updatedCategories = [
//       {
//         id: "featured",
//         name: "Featured",
//         items: food_list.filter((item) => item.isFeatured).slice(0, 10),
//       },
//       {
//         id: "popular",
//         name: "Popular",
//         items: food_list.filter((item) => item.isPopular).slice(0, 10),
//       },
//       {
//         id: "all",
//         name: "All Products",
//         items: food_list,
//       },
//     ];
//     setMenuCategories(updatedCategories);

//     // Set "All Products" as default if items exist
//     if (food_list.length > 0) {
//       setActiveTab("all");
//     }
//   }, [food_list, searchParams]);

//   useEffect(() => {
//     setSearchQuery(externalSearchQuery || "");
//   }, [externalSearchQuery]);

//   const filteredItems = menuCategories
//     .find((category) => category.id === activeTab)
//     ?.items.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || [];

//   const handleItemClick = (itemId) => {
//     navigate(`/product/${itemId}`);
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       setActiveTab("all"); // Show all matching products
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && searchQuery.trim()) {
//       setActiveTab("all");
//     }
//   };

//   return (
//     <div className="foodie-menu-page">
//       <main className="foodie-menu-main">
//         <div className="foodie-menu-container">
//           <div className="foodie-menu-header-section">
//             <div className="foodie-menu-title">
//               <h1 className="foodie-menu-title-text">Our Menu</h1>
//               <p className="foodie-menu-subtitle">Explore our delicious offerings</p>
//             </div>
//             <div className="foodie-search-container">
//               <div className="foodie-search-wrapper">
//                 <div className="foodie-search-icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20px"
//                     height="20px"
//                     fill="currentColor"
//                     viewBox="0 0 256 256"
//                   >
//                     <path
//                       d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
//                     ></path>
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   className="foodie-search-input"
//                   placeholder="Search menu items or categories..."
//                   value={searchQuery}
//                   onChange={(e) => setSearchQuery(e.target.value)}
//                   onKeyPress={handleKeyPress}
//                 />
//                 <button
//                   className={`foodie-search-button ${!searchQuery.trim() ? 'disabled' : ''}`}
//                   onClick={handleSearch}
//                   disabled={!searchQuery.trim()}
//                 >
//                   <span>Search</span>
//                 </button>
//               </div>
//             </div>
//           </div>

//           <div className="foodie-menu-tabs">
//             <div className="foodie-tabs-container">
//               {menuCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   className={`foodie-tab-button ${activeTab === category.id ? "foodie-tab-active" : ""} ${category.items.length === 0 ? "disabled" : ""}`}
//                   onClick={() => setActiveTab(category.id)}
//                   disabled={category.items.length === 0}
//                 >
//                   {category.name}
//                   {category.items.length > 0 && (
//                     <span className="foodie-tab-badge">{category.items.length}</span>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="foodie-menu-items">
//             <h2 className="foodie-category-title">
//               {menuCategories.find((c) => c.id === activeTab)?.name} Items
//               {filteredItems.length > 0 && (
//                 <span className="foodie-items-count">{filteredItems.length} items</span>
//               )}
//             </h2>
//             {filteredItems.length === 0 ? (
//               <div className="foodie-no-results">
//                 <div className="foodie-no-results-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="11" cy="11" r="8"></circle>
//                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                     <line x1="11" y1="8" x2="11" y2="14"></line>
//                     <line x1="8" y1="11" x2="14" y2="11"></line>
//                   </svg>
//                 </div>
//                 <p>No items found matching your search.</p>
//                 <button 
//                   className="foodie-clear-search"
//                   onClick={() => {
//                     setSearchQuery("");
//                     setActiveTab("all");
//                   }}
//                 >
//                   Clear search
//                 </button>
//               </div>
//             ) : (
//               <div className="foodie-items-grid">
//                 {filteredItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="foodie-menu-item"
//                     onClick={() => handleItemClick(item._id)}
//                   >
//                     <div className="foodie-item-image-container">
//                       <div
//                         className="foodie-item-image"
//                         style={{ 
//                           backgroundImage: `url(${url}/images/${item.image})`,
//                           backgroundSize: item.image ? 'cover' : 'contain',
//                           backgroundColor: item.image ? 'transparent' : '#f5f5f5'
//                         }}
//                       >
//                         {!item.image && (
//                           <div className="foodie-image-placeholder">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                               <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                               <polyline points="21 15 16 10 5 21"></polyline>
//                             </svg>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="foodie-item-info">
//                       <h3 className="foodie-item-name">{item.name}</h3>
//                       <p className="foodie-item-description">{item.description}</p>
//                       <p className="foodie-item-price">${item.price.toFixed(2)}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MenuPage;



// import React, { useState, useContext, useEffect } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate, useSearchParams } from "react-router-dom";
// import "./Menu.css";

// const MenuPage = ({ searchQuery: externalSearchQuery }) => {
//   const { food_list, url } = useContext(StoreContext);
//   const [activeTab, setActiveTab] = useState("all");
//   const [searchQuery, setSearchQuery] = useState(externalSearchQuery || "");
//   const navigate = useNavigate();
//   const [searchParams] = useSearchParams();
//   const [showSuggestions, setShowSuggestions] = useState(false);

//   // Dynamically generate categories
//   const [menuCategories, setMenuCategories] = useState([
//     { id: "featured", name: "Featured", items: [] },
//     { id: "popular", name: "Popular", items: [] },
//     { id: "all", name: "All Products", items: [] },
//   ]);

//   useEffect(() => {
//     const categoryParam = searchParams.get("category");
//     if (categoryParam) {
//       setActiveTab("all");
//       setSearchQuery(categoryParam);
//     }

//     const updatedCategories = [
//       {
//         id: "featured",
//         name: "Featured",
//         items: food_list.filter((item) => item.isFeatured).slice(0, 10),
//       },
//       {
//         id: "popular",
//         name: "Popular",
//         items: food_list.filter((item) => item.isPopular).slice(0, 10),
//       },
//       {
//         id: "all",
//         name: "All Products",
//         items: food_list,
//       },
//     ];
//     setMenuCategories(updatedCategories);

//     if (food_list.length > 0) {
//       setActiveTab("all");
//     }
//   }, [food_list, searchParams]);

//   useEffect(() => {
//     setSearchQuery(externalSearchQuery || "");
//   }, [externalSearchQuery]);

//   const filteredItems = menuCategories
//     .find((category) => category.id === activeTab)
//     ?.items.filter(
//       (item) =>
//         item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//         item.category.toLowerCase().includes(searchQuery.toLowerCase())
//     ) || [];

//   const popularSearches = [
//     "Burger",
//     "Pizza",
//     "Salad",
//     "Pasta",
//     "Dessert",
//     "Vegan",
//     "Gluten-free"
//   ];

//   const handleItemClick = (itemId) => {
//     navigate(`/product/${itemId}`);
//   };

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       setActiveTab("all");
//       setShowSuggestions(false);
//     }
//   };

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && searchQuery.trim()) {
//       setActiveTab("all");
//       setShowSuggestions(false);
//     }
//   };

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion);
//     setActiveTab("all");
//     setShowSuggestions(false);
//   };

//   return (
//     <div className="foodie-menu-page">
//       <main className="foodie-menu-main">
//         <div className="foodie-menu-container">
//           <div className="foodie-menu-header-section">
//             <div className="foodie-menu-title">
//               <h1 className="foodie-menu-title-text">Our Menu</h1>
//               <p className="foodie-menu-subtitle">Explore our delicious offerings</p>
//             </div>
//             <div className="foodie-search-container">
//               <div className="foodie-search-wrapper">
//                 <div className="foodie-search-icon">
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="20px"
//                     height="20px"
//                     fill="currentColor"
//                     viewBox="0 0 256 256"
//                   >
//                     <path
//                       d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
//                     ></path>
//                   </svg>
//                 </div>
//                 <input
//                   type="text"
//                   className="foodie-search-input"
//                   placeholder="Search menu items or categories..."
//                   value={searchQuery}
//                   onChange={(e) => {
//                     setSearchQuery(e.target.value);
//                     setShowSuggestions(e.target.value.length > 0);
//                   }}
//                   onKeyPress={handleKeyPress}
//                   onFocus={() => setShowSuggestions(true)}
//                   onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//                 />
//                 {searchQuery && (
//                   <button
//                     className="foodie-clear-button"
//                     onClick={() => {
//                       setSearchQuery("");
//                       setShowSuggestions(false);
//                     }}
//                   >
//                     <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                       <line x1="18" y1="6" x2="6" y2="18"></line>
//                       <line x1="6" y1="6" x2="18" y2="18"></line>
//                     </svg>
//                   </button>
//                 )}
//                 <button
//                   className={`foodie-search-button ${!searchQuery.trim() ? 'disabled' : ''}`}
//                   onClick={handleSearch}
//                   disabled={!searchQuery.trim()}
//                 >
//                   <span>Search</span>
//                 </button>
//               </div>
//               {showSuggestions && (
//                 <div className="foodie-suggestions">
//                   {searchQuery.length > 0 ? (
//                     filteredItems.slice(0, 5).map((item) => (
//                       <div
//                         key={item._id}
//                         className="foodie-suggestion-item"
//                         onClick={() => handleSuggestionClick(item.name)}
//                       >
//                         {item.name}
//                       </div>
//                     ))
//                   ) : (
//                     <div className="foodie-suggestion-header">Popular Searches</div>
//                   )}
//                   {searchQuery.length === 0 && popularSearches.map((item, index) => (
//                     <div
//                       key={index}
//                       className="foodie-suggestion-item"
//                       onClick={() => handleSuggestionClick(item)}
//                     >
//                       {item}
//                     </div>
//                   ))}
//                 </div>
//               )}
//             </div>
//           </div>

//           <div className="foodie-menu-tabs">
//             <div className="foodie-tabs-container">
//               {menuCategories.map((category) => (
//                 <button
//                   key={category.id}
//                   className={`foodie-tab-button ${activeTab === category.id ? "foodie-tab-active" : ""} ${category.items.length === 0 ? "disabled" : ""}`}
//                   onClick={() => setActiveTab(category.id)}
//                   disabled={category.items.length === 0}
//                 >
//                   {category.name}
//                   {category.items.length > 0 && (
//                     <span className="foodie-tab-badge">{category.items.length}</span>
//                   )}
//                 </button>
//               ))}
//             </div>
//           </div>

//           <div className="foodie-menu-items">
//             <div className="foodie-category-header">
//               <h2 className="foodie-category-title">
//                 {menuCategories.find((c) => c.id === activeTab)?.name}
//               </h2>
//               {filteredItems.length > 0 && (
//                 <span className="foodie-items-count">{filteredItems.length} items</span>
//               )}
//             </div>
//             {filteredItems.length === 0 ? (
//               <div className="foodie-no-results">
//                 <div className="foodie-no-results-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                     <circle cx="11" cy="11" r="8"></circle>
//                     <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                     <line x1="11" y1="8" x2="11" y2="14"></line>
//                     <line x1="8" y1="11" x2="14" y2="11"></line>
//                   </svg>
//                 </div>
//                 <p>No items found matching "{searchQuery}"</p>
//                 <button 
//                   className="foodie-clear-search"
//                   onClick={() => {
//                     setSearchQuery("");
//                     setActiveTab("all");
//                   }}
//                 >
//                   Clear search
//                 </button>
//               </div>
//             ) : (
//               <div className="foodie-items-grid">
//                 {filteredItems.map((item) => (
//                   <div
//                     key={item._id}
//                     className="foodie-menu-item"
//                     onClick={() => handleItemClick(item._id)}
//                   >
//                     <div className="foodie-item-image-container">
//                       <div
//                         className="foodie-item-image"
//                         style={{ 
//                           backgroundImage: `url(${url}/images/${item.image})`,
//                           backgroundSize: item.image ? 'cover' : 'contain',
//                           backgroundColor: item.image ? 'transparent' : '#f5f5f5'
//                         }}
//                       >
//                         {!item.image && (
//                           <div className="foodie-image-placeholder">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
//                               <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                               <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                               <polyline points="21 15 16 10 5 21"></polyline>
//                             </svg>
//                           </div>
//                         )}
//                       </div>
//                     </div>
//                     <div className="foodie-item-info">
//                       <h3 className="foodie-item-name">{item.name}</h3>
//                       <p className="foodie-item-description">{item.description}</p>
//                       <div className="foodie-item-footer">
//                         <p className="foodie-item-price">${item.price.toFixed(2)}</p>
//                         {item.isVegetarian && (
//                           <span className="foodie-item-tag vegetarian">Vegetarian</span>
//                         )}
//                         {item.isVegan && (
//                           <span className="foodie-item-tag vegan">Vegan</span>
//                         )}
//                         {item.isGlutenFree && (
//                           <span className="foodie-item-tag gluten-free">Gluten Free</span>
//                         )}
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default MenuPage;











// "use client"

// import { useState, useContext, useEffect } from "react"
// import { StoreContext } from "../../context/StoreContext"
// import { useNavigate, useSearchParams } from "react-router-dom"
// import "./Menu.css"

// const MenuPage = ({ searchQuery: externalSearchQuery }) => {
//   const { food_list, url } = useContext(StoreContext)
//   const [activeTab, setActiveTab] = useState("all")
//   const [searchQuery, setSearchQuery] = useState(externalSearchQuery || "")
//   const navigate = useNavigate()
//   const [searchParams] = useSearchParams()
//   const [showSuggestions, setShowSuggestions] = useState(false)

//   // Dynamically generate categories
//   const [menuCategories, setMenuCategories] = useState([
//     { id: "featured", name: "Featured", items: [] },
//     { id: "popular", name: "Popular", items: [] },
//     { id: "all", name: "All Products", items: [] },
//   ])

//   useEffect(() => {
//     const categoryParam = searchParams.get("category")
//     if (categoryParam) {
//       setActiveTab("all")
//       setSearchQuery(categoryParam)
//     }
//     const updatedCategories = [
//       {
//         id: "featured",
//         name: "Featured",
//         items: food_list.filter((item) => item.isFeatured).slice(0, 10),
//       },
//       {
//         id: "popular",
//         name: "Popular",
//         items: food_list.filter((item) => item.isPopular).slice(0, 10),
//       },
//       {
//         id: "all",
//         name: "All Products",
//         items: food_list,
//       },
//     ]
//     setMenuCategories(updatedCategories)
//     if (food_list.length > 0) {
//       setActiveTab("all")
//     }
//   }, [food_list, searchParams])

//   useEffect(() => {
//     setSearchQuery(externalSearchQuery || "")
//   }, [externalSearchQuery])

//   const filteredItems =
//     menuCategories
//       .find((category) => category.id === activeTab)
//       ?.items.filter(
//         (item) =>
//           item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
//           item.category.toLowerCase().includes(searchQuery.toLowerCase()),
//       ) || []

//   const popularSearches = ["Burger", "Pizza", "Salad", "Pasta", "Dessert", "Vegan", "Gluten-free"]

//   const handleItemClick = (itemId) => {
//     navigate(`/product/${itemId}`)
//   }

//   const handleSearch = () => {
//     if (searchQuery.trim()) {
//       setActiveTab("all")
//       setShowSuggestions(false)
//     }
//   }

//   const handleKeyPress = (e) => {
//     if (e.key === "Enter" && searchQuery.trim()) {
//       setActiveTab("all")
//       setShowSuggestions(false)
//     }
//   }

//   const handleSuggestionClick = (suggestion) => {
//     setSearchQuery(suggestion)
//     setActiveTab("all")
//     setShowSuggestions(false)
//   }

//   return (
//     <div className="menu-page">
//       <div className="menu-header">
//         <h1>Menu</h1>
//         <p>Browse and manage your food menu items</p>
//       </div>

//       <div className="menu-container">
//         <div className="menu-search-section">
//           <div className="search-container">
//             <div className="search-wrapper">
//               <div className="search-icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="20"
//                   height="20"
//                   fill="currentColor"
//                   viewBox="0 0 256 256"
//                 >
//                   <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 className="search-input"
//                 placeholder="Search menu items or categories..."
//                 value={searchQuery}
//                 onChange={(e) => {
//                   setSearchQuery(e.target.value)
//                   setShowSuggestions(e.target.value.length > 0)
//                 }}
//                 onKeyPress={handleKeyPress}
//                 onFocus={() => setShowSuggestions(true)}
//                 onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
//               />
//               {searchQuery && (
//                 <button
//                   className="clear-button"
//                   onClick={() => {
//                     setSearchQuery("")
//                     setShowSuggestions(false)
//                   }}
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     width="16"
//                     height="16"
//                     viewBox="0 0 24 24"
//                     fill="none"
//                     stroke="currentColor"
//                     strokeWidth="2"
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                   >
//                     <line x1="18" y1="6" x2="6" y2="18"></line>
//                     <line x1="6" y1="6" x2="18" y2="18"></line>
//                   </svg>
//                 </button>
//               )}
//               <button
//                 className={`search-button ${!searchQuery.trim() ? "disabled" : ""}`}
//                 onClick={handleSearch}
//                 disabled={!searchQuery.trim()}
//               >
//                 Search
//               </button>
//             </div>
//             {showSuggestions && (
//               <div className="suggestions">
//                 {searchQuery.length > 0 ? (
//                   filteredItems.slice(0, 5).map((item) => (
//                     <div
//                       key={item._id}
//                       className="suggestion-item"
//                       onClick={() => handleSuggestionClick(item.name)}
//                     >
//                       {item.name}
//                     </div>
//                   ))
//                 ) : (
//                   <div className="suggestion-header">Popular Searches</div>
//                 )}
//                 {searchQuery.length === 0 &&
//                   popularSearches.map((item, index) => (
//                     <div key={index} className="suggestion-item" onClick={() => handleSuggestionClick(item)}>
//                       {item}
//                     </div>
//                   ))}
//               </div>
//             )}
//           </div>
//         </div>

//         <div className="menu-tabs">
//           <div className="tabs-container">
//             {menuCategories.map((category) => (
//               <button
//                 key={category.id}
//                 className={`tab-button ${activeTab === category.id ? "active" : ""} ${
//                   category.items.length === 0 ? "disabled" : ""
//                 }`}
//                 onClick={() => setActiveTab(category.id)}
//                 disabled={category.items.length === 0}
//               >
//                 {category.name}
//                 {category.items.length > 0 && <span className="tab-badge">{category.items.length}</span>}
//               </button>
//             ))}
//           </div>
//         </div>

//         <div className="menu-items">
//           <div className="category-header">
//             <h2 className="category-title">{menuCategories.find((c) => c.id === activeTab)?.name}</h2>
//             {filteredItems.length > 0 && <span className="items-count">{filteredItems.length} items</span>}
//           </div>

//           {filteredItems.length === 0 ? (
//             <div className="no-results">
//               <div className="no-results-icon">
//                 <svg
//                   xmlns="http://www.w3.org/2000/svg"
//                   width="48"
//                   height="48"
//                   viewBox="0 0 24 24"
//                   fill="none"
//                   stroke="currentColor"
//                   strokeWidth="2"
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                 >
//                   <circle cx="11" cy="11" r="8"></circle>
//                   <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
//                   <line x1="11" y1="8" x2="11" y2="14"></line>
//                   <line x1="8" y1="11" x2="14" y2="11"></line>
//                 </svg>
//               </div>
//               <p>No items found matching "{searchQuery}"</p>
//               <button
//                 className="clear-search"
//                 onClick={() => {
//                   setSearchQuery("")
//                   setActiveTab("all")
//                 }}
//               >
//                 Clear search
//               </button>
//             </div>
//           ) : (
//             <div className="items-grid">
//               {filteredItems.map((item) => (
//                 <div key={item._id} className="menu-item" onClick={() => handleItemClick(item._id)}>
//                   <div className="item-image-container">
//                     {item.image ? (
//                       <img src={`${url}/images/${item.image}`} alt={item.name} className="item-image" />
//                     ) : (
//                       <div className="image-placeholder">
//                         <svg
//                           xmlns="http://www.w3.org/2000/svg"
//                           width="32"
//                           height="32"
//                           viewBox="0 0 24 24"
//                           fill="none"
//                           stroke="currentColor"
//                           strokeWidth="2"
//                           strokeLinecap="round"
//                           strokeLinejoin="round"
//                         >
//                           <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
//                           <circle cx="8.5" cy="8.5" r="1.5"></circle>
//                           <polyline points="21 15 16 10 5 21"></polyline>
//                         </svg>
//                       </div>
//                     )}
//                   </div>
//                   <div className="item-info">
//                     <h3 className="item-name">{item.name}</h3>
//                     <p className="item-description">{item.description}</p>
//                     <div className="item-footer">
//                       <p className="item-price">${item.price.toFixed(2)}</p>
//                       <div className="item-tags">
//                         {item.isVegetarian && <span className="item-tag vegetarian">Vegetarian</span>}
//                         {item.isVegan && <span className="item-tag vegan">Vegan</span>}
//                         {item.isGlutenFree && <span className="item-tag gluten-free">Gluten Free</span>}
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default MenuPage


















"use client"

import { useState, useContext, useEffect } from "react"
import { StoreContext } from "../../context/StoreContext"
import { useNavigate, useSearchParams } from "react-router-dom"
import "./Menu.css"

const MenuPage = ({ searchQuery: externalSearchQuery }) => {
  const { food_list, url } = useContext(StoreContext)
  const [activeTab, setActiveTab] = useState("all")
  const [searchQuery, setSearchQuery] = useState(externalSearchQuery || "")
  const navigate = useNavigate()
  const [searchParams] = useSearchParams()
  const [showSuggestions, setShowSuggestions] = useState(false)

  // Dynamically generate categories
  const [menuCategories, setMenuCategories] = useState([
    { id: "featured", name: "Featured", items: [] },
    { id: "popular", name: "Popular", items: [] },
    { id: "all", name: "All Products", items: [] },
  ])

  useEffect(() => {
    const categoryParam = searchParams.get("category")
    if (categoryParam) {
      setActiveTab("all")
      setSearchQuery(categoryParam)
    }
    const updatedCategories = [
      {
        id: "featured",
        name: "Featured",
        items: food_list.filter((item) => item.isFeatured).slice(0, 10),
      },
      {
        id: "popular",
        name: "Popular",
        items: food_list.filter((item) => item.isPopular).slice(0, 10),
      },
      {
        id: "all",
        name: "All Products",
        items: food_list,
      },
    ]
    setMenuCategories(updatedCategories)
    if (food_list.length > 0) {
      setActiveTab("all")
    }
  }, [food_list, searchParams])

  useEffect(() => {
    setSearchQuery(externalSearchQuery || "")
  }, [externalSearchQuery])

  const filteredItems =
    menuCategories
      .find((category) => category.id === activeTab)
      ?.items.filter(
        (item) =>
          item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
          item.category.toLowerCase().includes(searchQuery.toLowerCase()),
      ) || []

  const popularSearches = ["Burger", "Pizza", "Salad", "Pasta", "Dessert", "Vegan", "Gluten-free"]

  const handleItemClick = (itemId) => {
    navigate(`/product/${itemId}`)
  }

  const handleSearch = () => {
    if (searchQuery.trim()) {
      setActiveTab("all")
      setShowSuggestions(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && searchQuery.trim()) {
      setActiveTab("all")
      setShowSuggestions(false)
    }
  }

  const handleSuggestionClick = (suggestion) => {
    setSearchQuery(suggestion)
    setActiveTab("all")
    setShowSuggestions(false)
  }

  return (
    <div className="menu-menu-page">
      <div className="menu-menu-header">
        <h1>Menu</h1>
        <p>Browse and manage your food menu items</p>
      </div>

      <div className="menu-menu-container">
        <div className="menu-menu-search-section">
          <div className="menu-search-container">
            <div className="menu-search-wrapper">
              <div className="menu-search-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  viewBox="0 0 256 256"
                >
                  <path d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"></path>
                </svg>
              </div>
              <input
                type="text"
                className="menu-search-input"
                placeholder="Search menu items or categories..."
                value={searchQuery}
                onChange={(e) => {
                  setSearchQuery(e.target.value)
                  setShowSuggestions(e.target.value.length > 0)
                }}
                onKeyPress={handleKeyPress}
                onFocus={() => setShowSuggestions(true)}
                onBlur={() => setTimeout(() => setShowSuggestions(false), 200)}
              />
              {searchQuery && (
                <button
                  className="menu-clear-button"
                  onClick={() => {
                    setSearchQuery("")
                    setShowSuggestions(false)
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <line x1="18" y1="6" x2="6" y2="18"></line>
                    <line x1="6" y1="6" x2="18" y2="18"></line>
                  </svg>
                </button>
              )}
              <button
                className={`menu-search-button ${!searchQuery.trim() ? "menu-disabled" : ""}`}
                onClick={handleSearch}
                disabled={!searchQuery.trim()}
              >
                Search
              </button>
            </div>
            {showSuggestions && (
              <div className="menu-suggestions">
                {searchQuery.length > 0 ? (
                  filteredItems.slice(0, 5).map((item) => (
                    <div
                      key={item._id}
                      className="menu-suggestion-item"
                      onClick={() => handleSuggestionClick(item.name)}
                    >
                      {item.name}
                    </div>
                  ))
                ) : (
                  <div className="menu-suggestion-header">Popular Searches</div>
                )}
                {searchQuery.length === 0 &&
                  popularSearches.map((item, index) => (
                    <div key={index} className="menu-suggestion-item" onClick={() => handleSuggestionClick(item)}>
                      {item}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>

        <div className="menu-menu-tabs">
          <div className="menu-tabs-container">
            {menuCategories.map((category) => (
              <button
                key={category.id}
                className={`menu-tab-button ${activeTab === category.id ? "menu-active" : ""} ${
                  category.items.length === 0 ? "menu-disabled" : ""
                }`}
                onClick={() => setActiveTab(category.id)}
                disabled={category.items.length === 0}
              >
                {category.name}
                {category.items.length > 0 && <span className="menu-tab-badge">{category.items.length}</span>}
              </button>
            ))}
          </div>
        </div>

        <div className="menu-menu-items">
          <div className="menu-category-header">
            <h2 className="menu-category-title">{menuCategories.find((c) => c.id === activeTab)?.name}</h2>
            {filteredItems.length > 0 && <span className="menu-items-count">{filteredItems.length} items</span>}
          </div>

          {filteredItems.length === 0 ? (
            <div className="menu-no-results">
              <div className="menu-no-results-icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="48"
                  height="48"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8"></circle>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                  <line x1="11" y1="8" x2="11" y2="14"></line>
                  <line x1="8" y1="11" x2="14" y2="11"></line>
                </svg>
              </div>
              <p>No items found matching "{searchQuery}"</p>
              <button
                className="menu-clear-search"
                onClick={() => {
                  setSearchQuery("")
                  setActiveTab("all")
                }}
              >
                Clear search
              </button>
            </div>
          ) : (
            <div className="menu-items-grid">
              {filteredItems.map((item) => (
                <div key={item._id} className="menu-menu-item" onClick={() => handleItemClick(item._id)}>
                  <div className="menu-item-image-container">
                    {item.image ? (
                      <img src={`${url}/images/${item.image}`} alt={item.name} className="menu-item-image" />
                    ) : (
                      <div className="menu-image-placeholder">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="32"
                          height="32"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                          <circle cx="8.5" cy="8.5" r="1.5"></circle>
                          <polyline points="21 15 16 10 5 21"></polyline>
                        </svg>
                      </div>
                    )}
                  </div>
                  <div className="menu-item-info">
                    <h3 className="menu-item-name">{item.name}</h3>
                    <p className="menu-item-description">{item.description}</p>
                    <div className="menu-item-footer">
                      <p className="menu-item-price">${item.price.toFixed(2)}</p>
                      <div className="menu-item-tags">
                        {item.isVegetarian && <span className="menu-item-tag menu-vegetarian">Vegetarian</span>}
                        {item.isVegan && <span className="menu-item-tag menu-vegan">Vegan</span>}
                        {item.isGlutenFree && <span className="menu-item-tag menu-gluten-free">Gluten Free</span>}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default MenuPage