// import React from "react";
// import "./ExploreMenu.css";
// import { menu_list } from "../../assets/frontend_assets/assets";

// const ExploreMenu = ({category,setCategory}) => {
//   return (
//     <div className="explore-menu" id="explore-menu">
//       <h1>Explore our menu</h1>
//       <p className="explore-menu-text">
//         Choose from a diverse menu featuring a detectable array of dishes. Our
//         mission is to satisfy your cravings and elevate your dining experience,
//         one delicious meal at a time.
//       </p>
//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => {
//           return (
//             <div onClick={()=>setCategory(prev=>prev===item.menu_image.name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
//               <img className={category===item.menu_name?"active":""} src={item.menu_image} alt="" />
//               <p>{item.menu_name}</p>
//             </div>
//           );
//         })}
//       </div>
//       <hr/>
//     </div>
//   );
// };

// export default ExploreMenu;


// import React from "react";
// import "./ExploreMenu.css";
// import { menu_list } from "../../assets/frontend_assets/assets";

// const ExploreMenu = ({ category, setCategory }) => {
//   const popularCategories = [
//     { name: "Pizza", icon: "Pizza" },
//     { name: "Sushi", icon: "Fish" },
//     { name: "Burgers", icon: "Hamburger" },
//     { name: "Tacos", icon: "Pizza" }, // Reusing Pizza icon as per provided HTML
//     { name: "Desserts", icon: "Cake" },
//     { name: "Salads", icon: "BowlFood" },
//   ];

//   const featuredItems = [
//     {
//       name: "Classic Pepperoni Pizza",
//       description: "A timeless favorite with a crispy crust and savory toppings.",
//       image: "/frontend/src/assets/frontend_assets/pizza.jpg",
//     },
//     {
//       name: "Fresh Salmon Sushi",
//       description: "Premium salmon with perfectly seasoned rice and nori.",
//       image: "/frontend/src/assets/frontend_assets/sushi.jpg",
//     },
//     {
//       name: "Juicy Bacon Cheeseburger",
//       description: "A mouthwatering burger with crispy bacon and melted cheese.",
//       image: "/frontend/src/assets/frontend_assets/burger.jpg",
//     },
//   ];

//   return (
//     <div className="explore-menu" id="explore-menu">
//           <h1 className="menu-title">Explore Our Menu</h1>
//       <p className="explore-menu-text">
//         Choose from a diverse menu featuring a delectable array of dishes. Our
//         mission is to satisfy your cravings and elevate your dining experience,
//         one delicious meal at a time.
//       </p>
//       <div className="explore-menu-list">
//         {menu_list.map((item, index) => (
//           <div
//             onClick={() =>
//               setCategory((prev) =>
//                 prev === item.menu_name ? "All" : item.menu_name
//               )
//             }
//             key={index}
//             className="explore-menu-list-item"
//           >
//             <img
//               className={category === item.menu_name ? "active" : ""}
//               src={item.menu_image}
//               alt={item.menu_name}
//             />
//             <p>{item.menu_name}</p>
//           </div>
//         ))}
//       </div>
//       <div className="explore-more-button-container">
//         <a href="#explore-more" className="explore-more-button">
//           Explore More
//         </a>
//       </div>
//       <hr />
//       <h2 className="section-title">Popular Categories</h2>
//       <div className="categories-container">
//         {popularCategories.map((cat) => (
//           <div key={cat.name} className="category-item">
//             <div className={`category-icon ${cat.icon}`}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20px"
//                 height="20px"
//                 fill="currentColor"
//                 viewBox="0 0 256 256"
//               >
//                 {cat.icon === "Pizza" && (
//                   <path
//                     d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z"
//                   />
//                 )}
//                 {cat.icon === "Fish" && (
//                   <path
//                     d="M168.06,75.94a12,12,0,1,1-12-12A12,12,0,0,1,168.06,75.94Zm39.87,81c-20.76,26.37-53.85,40.74-98.41,42.77l-22,51.42A8,8,0,0,1,80.13,256l-.51,0a8,8,0,0,1-7.19-5.78L57.62,198.37,5.8,183.53a8,8,0,0,1-1-15.05l51.43-22c2-44.57,16.41-77.66,42.79-98.41,43.21-34,104.91-22.83,116.84-20.25a16,16,0,0,1,12.26,12.26C230.76,52,241.94,113.76,207.93,157ZM161.6,172.61a52.12,52.12,0,0,1-33.42-44.79A52.1,52.1,0,0,1,83.4,94.41c-7,15.86-10.76,35.11-11.3,57.62a8,8,0,0,1-4.85,7.16L31.84,174.34l34.46,9.87a8,8,0,0,1,5.49,5.49l9.84,34.46,15.18-35.41A8,8,0,0,1,104,183.9C126.48,183.37,145.73,179.59,161.6,172.61ZM212.53,43.47c-10.7-2.32-66-12.39-103.57,17.18A80.9,80.9,0,0,0,96.13,73.32a36,36,0,0,0,39.36,38.47,8,8,0,0,1,8.72,8.72,36,36,0,0,0,38.49,39.36,80.64,80.64,0,0,0,12.65-12.81C224.92,109.49,214.85,54.18,212.53,43.47Z"
//                   />
//                 )}
//                 {cat.icon === "Hamburger" && (
//                   <path
//                     d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z"
//                   />
//                 )}
//                 {cat.icon === "Cake" && (
//                   <path
//                     d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z"
//                   />
//                 )}
//                 {cat.icon === "BowlFood" && (
//                   <path
//                     d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z"
//                   />
//                 )}
//               </svg>
//             </div>
//             <p className="category-text">{cat.name}</p>
//           </div>
//         ))}
//       </div>
//       <h2 className="section-title">Featured Items</h2>
//       <div className="featured-container">
//         <div className="featured-items">
//           {featuredItems.map((item) => (
//             <div key={item.name} className="featured-item">
//               <div
//                 className="featured-image"
//                 style={{ backgroundImage: `url(${item.image})` }}
//               ></div>
//               <div className="featured-text">
//                 <p className="featured-title">{item.name}</p>
//                 <p className="featured-description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;




// import React, { useContext, useEffect, useState } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "./ExploreMenu.css";

// const ExploreMenu = ({ category, setCategory }) => {
//   const { url, food_list, popular_categories, featured_list } = useContext(StoreContext);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching categories with URL:", `${url}/api/category/list`);
//       const response = await axios.get(`${url}/api/category/list`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}`},
//         withCredentials: true,
//       });
//       console.log("Categories response:", response.data);
//       if (response.data.success) {
//         setCategories(response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching categories");
//       }
//     } catch (error) {
//       console.error("Fetch categories error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching categories");
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (cat) => {
//     setCategory((prev) => (prev === cat ? "All" : cat));
//   };

//   const getCategoriesWithProducts = () => {
//     const categoriesWithProducts = [...new Set(food_list.map((item) => item.category))];
//     return categories.filter((cat) => categoriesWithProducts.includes(cat.category) || cat.isPopular);
//   };

//   const getCategoryProducts = (cat) => {
//     return food_list
//       .filter((item) => item.category === cat)
//       .slice(0, 5);
//   };

//   const recentFeaturedItems = featured_list
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, 3);

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="explore-menu">
//       <h1 className="menu-title">Explore Our Menu</h1>
//       <p className="explore-menu-text">
//         Discover a diverse menu featuring a delectable array of dishes. Our mission
//         is to satisfy your cravings and elevate your dining experience, one delicious
//         meal at a time.
//       </p>

//       <div className="explore-menu-list">
//         {getCategoriesWithProducts().slice(0, 12).map((item, index) => {
//           const categoryImage = food_list.find((food) => food.category === item.category)?.image;
//           return (
//             <div
//               key={index}
//               onClick={() => handleCategoryClick(item.category)}
//               className={`explore-menu-list-item ${category === item.category ? "active" : ""}`}
//             >
//               <img
//                 className="category-image"
//                 src={categoryImage ? `${url}/images/${categoryImage}` : "/placeholder.jpg"}
//                 alt={item.category}
//               />
//               <p className="category-name">{item.category}</p>
//             </div>
//           );
//         })}
//       </div>
//       {getCategoriesWithProducts().length > 12 && (
//         <div className="explore-more-button-container">
//           <a href="/menu" className="explore-more-button">Explore More Categories</a>
//         </div>
//       )}

//       {category !== "All" && (
//         <div className="category-products">
//           <h2 className="section-title">{category} Items</h2>
//           <div className="food-display-list">
//             {getCategoryProducts(category).map((item, index) => (
//               <div
//                 key={index}
//                 className="food-item"
//                 onClick={() => handleProductClick(item._id)}
//               >
//                 <div className="food-item-img-container">
//                   <img
//                     className="food-item-image"
//                     src={`${url}/images/${item.image}`}
//                     alt={item.name}
//                   />
//                 </div>
//                 <div className="food-item-info">
//                   <p className="food-item-name">{item.name}</p>
//                   <p className="food-item-desc">{item.description}</p>
//                   <p className="food-item-price">${item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {food_list.filter((item) => item.category === category).length > 5 && (
//             <div className="explore-more-button-container">
//               <a
//                 href={`/menu?category=${encodeURIComponent(category)}`}
//                 className="explore-more-button"
//               >
//                 Explore More {category} Items
//               </a>
//             </div>
//           )}
//         </div>
//       )}

//       <hr className="divider" />

//       <h2 className="section-title">Popular Categories</h2>
//       <div className="categories-container">
//         {popular_categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => handleCategoryClick(cat.category)}
//             className="category-item"
//           >
//             <div className="category-icon">
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 width="20px"
//                 height="20px"
//                 fill="currentColor"
//                 viewBox="0 0 256 256"
//               >
//                 {cat.category === "Pizza" && (
//                   <path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z" />
//                 )}
//                 {cat.category === "Sushi" && (
//                   <path d="M168.06,75.94a12,12,0,1,1-12-12A12,12,0,0,1,168.06,75.94Zm39.87,81c-20.76,26.37-53.85,40.74-98.41,42.77l-22,51.42A8,8,0,0,1,80.13,256l-.51,0a8,8,0,0,1-7.19-5.78L57.62,198.37,5.8,183.53a8,8,0,0,1-1-15.05l51.43-22c2-44.57,16.41-77.66,42.79-98.41,43.21-34,104.91-22.83,116.84-20.25a16,16,0,0,1,12.26,12.26C230.76,52,241.94,113.76,207.93,157ZM161.6,172.61a52.12,52.12,0,0,1-33.42-44.79A52.1,52.1,0,0,1,83.4,94.41c-7,15.86-10.76,35.11-11.3,57.62a8,8,0,0,1-4.85,7.16L31.84,174.34l34.46,9.87a8,8,0,0,1,5.49,5.49l9.84,34.46,15.18-35.41A8,8,0,0,1,104,183.9C126.48,183.37,145.73,179.59,161.6,172.61ZM212.53,43.47c-10.7-2.32-66-12.39-103.57,17.18A80.9,80.9,0,0,0,96.13,73.32a36,36,0,0,0,39.36,38.47,8,8,0,0,1,8.72,8.72,36,36,0,0,0,38.49,39.36,80.64,80.64,0,0,0,12.65-12.81C224.92,109.49,214.85,54.18,212.53,43.47Z" />
//                 )}
//                 {cat.category === "Burgers" && (
//                   <path d="M48.07,104H207.93a16,16,0,0,0,15.72-19.38C216.22,49.5,176,24,128,24S39.78,49.5,32.35,84.62A16,16,0,0,0,48.07,104ZM128,40c39.82,0,74.21,20.61,79.93,48H48.07L48,87.93C53.79,60.61,88.18,40,128,40ZM229.26,152.48l-41.13,15L151,152.57a8,8,0,0,0-5.94,0l-37,14.81L71,152.57a8,8,0,0,0-5.7-.09l-44,16a8,8,0,0,0,5.47,15L40,178.69V184a40,40,0,0,0,40,40h96a40,40,0,0,0,40-40v-9.67l18.73-6.81a8,8,0,1,0-5.47-15ZM200,184a24,24,0,0,1-24,24H80a24,24,0,0,1-24-24V172.88l11.87-4.32L105,183.43a8,8,0,0,0,5.94,0l37-14.81,37,14.81a8,8,0,0,0,5.7.09l9.27-3.37ZM16,128a8,8,0,0,1,8-8H232a8,8,0,0,1,0,16H24A8,8,0,0,1,16,128Z" />
//                 )}
//                 {cat.category === "Tacos" && (
//                   <path d="M239.54,63a15.91,15.91,0,0,0-7.25-9.9,201.49,201.49,0,0,0-208.58,0,16,16,0,0,0-5.37,22l96,157.27a16,16,0,0,0,27.36,0l96-157.27A15.82,15.82,0,0,0,239.54,63ZM63.59,118.5a24,24,0,1,1,24.47,40.09Zm87.92,66.95A24,24,0,0,1,176,145.37Zm32.93-53.93a40,40,0,0,0-41.38,67.77L128,224,96.5,172.43a40,40,0,1,0-41.35-67.76L48.8,94.26a152,152,0,0,1,158.39,0Zm31.1-50.93a168.12,168.12,0,0,0-175.08,0L32,66.77a185.6,185.6,0,0,1,192,0Z" />
//                 )}
//                 {cat.category === "Desserts" && (
//                   <path d="M232,112a24,24,0,0,0-24-24H136V79a32.06,32.06,0,0,0,24-31c0-28-26.44-45.91-27.56-46.66a8,8,0,0,0-8.88,0C122.44,2.09,96,20,96,48a32.06,32.06,0,0,0,24,31v9H48a24,24,0,0,0-24,24v23.33a40.84,40.84,0,0,0,8,24.24V200a24,24,0,0,0,24,24H200a24,24,0,0,0,24-24V159.57a40.84,40.84,0,0,0,8-24.24ZM112,48c0-13.57,10-24.46,16-29.79,6,5.33,16,16.22,16,29.79a16,16,0,0,1-32,0ZM40,112a8,8,0,0,1,8-8H208a8,8,0,0,1,8,8v23.33c0,13.25-10.46,24.31-23.32,24.66A24,24,0,0,1,168,136a8,8,0,0,0-16,0,24,24,0,0,1-48,0,8,8,0,0,0-16,0,24,24,0,0,1-24.68,24C50.46,159.64,40,148.58,40,135.33Zm160,96H56a8,8,0,0,1-8-8V172.56A38.77,38.77,0,0,0,62.88,176a39.69,39.69,0,0,0,29-11.31A40.36,40.36,0,0,0,96,160a40,40,0,0,0,64,0,40.36,40.36,0,0,0,4.13,4.67A39.67,39.67,0,0,0,192,176c.38,0,.76,0,1.14,0A38.77,38.77,0,0,0,208,172.56V200A8,8,0,0,1,200,208Z" />
//                 )}
//                 {cat.category === "Salads" && (
//                   <path d="M224,104h-8.37a88,88,0,0,0-175.26,0H32a8,8,0,0,0-8,8,104.35,104.35,0,0,0,56,92.28V208a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16v-3.72A104.35,104.35,0,0,0,232,112,8,8,0,0,0,224,104Zm-24.46,0H148.12a71.84,71.84,0,0,1,41.27-29.57A71.45,71.45,0,0,1,199.54,104ZM173.48,56.23q2.75,2.25,5.27,4.75a87.92,87.92,0,0,0-49.15,43H100.1A72.26,72.26,0,0,1,168,56C169.83,56,171.66,56.09,173.48,56.23ZM128,40a71.87,71.87,0,0,1,19,2.57A88.36,88.36,0,0,0,83.33,104H56.46A72.08,72.08,0,0,1,128,40Zm36.66,152A8,8,0,0,0,160,199.3V208H96v-8.7A8,8,0,0,0,91.34,192a88.29,88.29,0,0,1-51-72H215.63A88.29,88.29,0,0,1,164.66,192Z" />
//                 )}
//               </svg>
//             </div>
//             <p className="category-text">{cat.category}</p>
//           </div>
//         ))}
//       </div>

//       <h2 className="section-title">Featured Items</h2>
//       <div className="featured-container">
//         <div className="featured-items">
//           {recentFeaturedItems.map((item, index) => (
//             <div key={index} className="featured-item">
//               <div
//                 className="featured-image"
//                 style={{ backgroundImage: `url(${url}/images/${item.image})` }}
//               ></div>
//               <div className="featured-text">
//                 <p className="featured-title">{item.name}</p>
//                 <p className="featured-description">{item.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="explore-more-button-container">
//           <a
//             href="/menu?featured=true"
//             className="explore-more-button featured-explore-more"
//           >
//             Explore More Featured Items
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;







// import React, { useContext, useEffect, useState } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import "./ExploreMenu.css";

// const ExploreMenu = ({ category, setCategory }) => {
//   const { url, food_list, featured_list, popular_categories } = useContext(StoreContext);
//   const [categories, setCategories] = useState([]);
//   const navigate = useNavigate();

//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching categories with URL:", `${url}/api/category/list`);
//       const response = await axios.get(`${url}/api/category/list`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         withCredentials: true,
//       });
//       console.log("Categories response:", response.data);
//       if (response.data.success) {
//         setCategories(response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching categories");
//       }
//     } catch (error) {
//       console.error("Fetch categories error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching categories");
//     }
//   };

//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   const handleCategoryClick = (cat) => {
//     setCategory((prev) => (prev === cat ? "All" : cat));
//   };

//   const getCategoriesWithProducts = () => {
//     const categoriesWithProducts = [...new Set(food_list.map((item) => item.category))];
//     return categories.filter((cat) => categoriesWithProducts.includes(cat.category));
//   };

//   const getCategoryProducts = (cat) => {
//     return food_list.filter((item) => item.category === cat).slice(0, 5);
//   };

//   const recentFeaturedItems = featured_list
//     .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
//     .slice(0, 3);

//   const handleProductClick = (id) => {
//     navigate(`/product/${id}`);
//   };

//   return (
//     <div className="explore-menu">
//       <h1 className="menu-title">Explore Our Menu</h1>
//       <p className="explore-menu-text">
//         Discover a diverse menu featuring a delectable array of dishes. Our mission
//         is to satisfy your cravings and elevate your dining experience, one delicious
//         meal at a time.
//       </p>

//       <div className="explore-menu-list">
//         {getCategoriesWithProducts().slice(0, 12).map((item, index) => {
//           const categoryImage = food_list.find((food) => food.category === item.category)?.image;
//           return (
//             <div
//               key={index}
//               onClick={() => handleCategoryClick(item.category)}
//               className={`explore-menu-list-item ${category === item.category ? "active" : ""}`}
//             >
//               <img
//                 className="category-image"
//                 src={categoryImage ? `${url}/images/${categoryImage}` : "/placeholder.jpg"}
//                 alt={item.category}
//               />
//               <p className="category-name">{item.category}</p>
//             </div>
//           );
//         })}
//       </div>
//       {getCategoriesWithProducts().length > 12 && (
//         <div className="explore-more-button-container">
//           <a href="/menu" className="explore-more-button">Explore More Categories</a>
//         </div>
//       )}

//       {category !== "All" && (
//         <div className="category-products">
//           <h2 className="section-title">{category} Items</h2>
//           <div className="food-display-list">
//             {getCategoryProducts(category).map((item, index) => (
//               <div
//                 key={index}
//                 className="food-item"
//                 onClick={() => handleProductClick(item._id)}
//               >
//                 <div className="food-item-img-container">
//                   <img
//                     className="food-item-image"
//                     src={`${url}/images/${item.image}`}
//                     alt={item.name}
//                   />
//                 </div>
//                 <div className="food-item-info">
//                   <p className="food-item-name">{item.name}</p>
//                   <p className="food-item-desc">{item.description}</p>
//                   <p className="food-item-price">${item.price.toFixed(2)}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//           {food_list.filter((item) => item.category === category).length > 5 && (
//             <div className="explore-more-button-container">
//               <a
//                 href={`/menu?category=${encodeURIComponent(category)}`}
//                 className="explore-more-button"
//               >
//                 Explore More {category} Items
//               </a>
//             </div>
//           )}
//         </div>
//       )}

//       <hr className="divider" />

//       <h2 className="section-title">Popular Categories</h2>
//       <div className="categories-container">
//         {popular_categories.map((cat, index) => (
//           <div
//             key={index}
//             onClick={() => handleCategoryClick(cat.category)}
//             className={`category-item ${category === cat.category ? "active" : ""}`}
//           >
//             <p className="category-text">{cat.category}</p>
//           </div>
//         ))}
//       </div>

//       <hr className="divider" />

//       <h2 className="section-title">Featured Items</h2>
//       <div className="featured-container">
//         <div className="featured-items">
//           {recentFeaturedItems.map((item, index) => (
//             <div
//               key={index}
//               className="featured-item"
//               onClick={() => handleProductClick(item._id)}
//             >
//               <div
//                 className="featured-image"
//                 style={{ backgroundImage: `url(${url}/images/${item.image})` }}
//               ></div>
//               <div className="featured-text">
//                 <p className="featured-title">{item.name}</p>
//                 <p className="featured-description">{item.description}</p>
//                 <p className="featured-price">${item.price.toFixed(2)}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//         <div className="explore-more-button-container">
//           <a
//             href="/menu?featured=true"
//             className="explore-more-button featured-explore-more"
//           >
//             Explore More Featured Items
//           </a>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ExploreMenu;

import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import "./ExploreMenu.css";

const ExploreMenu = ({ category, setCategory, searchQuery, onSearch }) => {
  const { url, food_list, featured_list, popular_categories } = useContext(StoreContext);
  const [categories, setCategories] = useState([]);
  const navigate = useNavigate();

  const fetchCategories = async () => {
    try {
      console.log("Fetching categories with URL:", `${url}/api/category/list`);
      const response = await axios.get(`${url}/api/category/list`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        withCredentials: true,
      });
      console.log("Categories response:", response.data);
      if (response.data.success) {
        setCategories(response.data.data);
      } else {
        toast.error(response.data.message || "Error fetching categories");
      }
    } catch (error) {
      console.error("Fetch categories error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching categories");
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const handleCategoryClick = (cat) => {
    setCategory((prev) => (prev === cat ? "All" : cat));
    onSearch(""); // Clear search query when selecting a category
  };

  const getCategoriesWithProducts = () => {
    const categoriesWithProducts = [...new Set(food_list.map((item) => item.category))];
    let filteredCategories = categories.filter((cat) => categoriesWithProducts.includes(cat.category));
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredCategories = filteredCategories.filter((cat) =>
        cat.category.toLowerCase().includes(query)
      );
    }
    return filteredCategories;
  };

  const getCategoryProducts = (cat) => {
    let filteredProducts = food_list.filter((item) => item.category === cat);
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filteredProducts = filteredProducts.filter(
        (item) =>
          item.name.toLowerCase().includes(query) ||
          item.description.toLowerCase().includes(query) ||
          item.category.toLowerCase().includes(query)
      );
    }
    return filteredProducts.slice(0, 5);
  };

  const recentFeaturedItems = featured_list
    .filter((item) => {
      if (!searchQuery) return true;
      const query = searchQuery.toLowerCase();
      return (
        item.name.toLowerCase().includes(query) ||
        item.description.toLowerCase().includes(query) ||
        item.category.toLowerCase().includes(query)
      );
    })
    .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
    .slice(0, 3);

  const handleProductClick = (id) => {
    navigate(`/product/${id}`);
  };

  return (
    <div className="explore-menu">
      <h1 className="menu-title">Explore Our Menu</h1>
      <p className="explore-menu-text">
        Discover a diverse menu featuring a delectable array of dishes. Our mission
        is to satisfy your cravings and elevate your dining experience, one delicious
        meal at a time.
      </p>

      <div className="explore-menu-list">
        {getCategoriesWithProducts().slice(0, 12).map((item, index) => {
          const categoryImage = food_list.find((food) => food.category === item.category)?.image;
          return (
            <div
              key={index}
              onClick={() => handleCategoryClick(item.category)}
              className={`explore-menu-list-item ${category === item.category ? "active" : ""}`}
            >
              <img
                className="category-image"
                src={categoryImage ? `${url}/images/${categoryImage}` : "/placeholder.jpg"}
                alt={item.category}
              />
              <p className="category-name">{item.category}</p>
            </div>
          );
        })}
      </div>
      {getCategoriesWithProducts().length > 12 && (
        <div className="explore-more-button-container">
          <a href="/menu" className="explore-more-button">Explore More Categories</a>
        </div>
      )}

      {category !== "All" && (
        <div className="category-products">
          <h2 className="section-title">{category} Items</h2>
          <div className="food-display-list">
            {getCategoryProducts(category).map((item, index) => (
              <div
                key={index}
                className="food-item"
                onClick={() => handleProductClick(item._id)}
              >
                <div className="food-item-img-container">
                  <img
                    className="food-item-image"
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                  />
                </div>
                <div className="food-item-info">
                  <p className="food-item-name">{item.name}</p>
                  <p className="food-item-desc">{item.description}</p>
                  <p className="food-item-price">${item.price.toFixed(2)}</p>
                </div>
              </div>
            ))}
          </div>
          {food_list.filter((item) => item.category === category).length > 5 && (
            <div className="explore-more-button-container">
              <a
                href={`/menu?category=${encodeURIComponent(category)}`}
                className="explore-more-button"
              >
                Explore More {category} Items
              </a>
            </div>
          )}
        </div>
      )}

      <hr className="divider" />

      <h2 className="section-title">Popular Categories</h2>
      <div className="categories-container">
        {popular_categories.map((cat, index) => (
          <div
            key={index}
            onClick={() => handleCategoryClick(cat.category)}
            className={`category-item ${category === cat.category ? "active" : ""}`}
          >
            <p className="category-text">{cat.category}</p>
          </div>
        ))}
      </div>

      <hr className="divider" />

      <h2 className="section-title">Featured Items</h2>
      <div className="featured-container">
        <div className="featured-items">
          {recentFeaturedItems.map((item, index) => (
            <div
              key={index}
              className="featured-item"
              onClick={() => handleProductClick(item._id)}
            >
              <div
                className="featured-image"
                style={{ backgroundImage: `url(${url}/images/${item.image})` }}
              ></div>
              <div className="featured-text">
                <p className="featured-title">{item.name}</p>
                <p className="featured-description">{item.description}</p>
                <p className="featured-price">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="explore-more-button-container">
          <a
            href="/menu?featured=true"
            className="explore-more-button featured-explore-more"
          >
            Explore More Featured Items
          </a>
        </div>
      </div>
    </div>
  );
};

export default ExploreMenu;