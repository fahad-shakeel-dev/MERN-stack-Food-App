// // import React from "react";
// // import "./ExploreMore.css";

// // const ExploreMore = () => {
// //   const cuisines = [
// //     {
// //       name: "Italian",
// //       description: "Authentic Italian dishes",
// //       image: "/frontend/src/assets/frontend_assets/italian.jpg",
// //     },
// //     {
// //       name: "Mexican",
// //       description: "Spicy and flavorful Mexican cuisine",
// //       image: "/frontend/src/assets/frontend_assets/mexican.jpg",
// //     },
// //     {
// //       name: "Chinese",
// //       description: "Classic Chinese takeout",
// //       image: "/frontend/src/assets/frontend_assets/chinese.jpg",
// //     },
// //     {
// //       name: "Indian",
// //       description: "Rich and aromatic Indian food",
// //       image: "/frontend/src/assets/frontend_assets/indian.jpg",
// //     },
// //   ];

// //   return (
// //     <div className="explore-more">
// //       <h2 className="section-title">Explore More</h2>
// //       <div className="cuisines-container">
// //         {cuisines.map((cuisine) => (
// //           <div key={cuisine.name} className="cuisine-item">
// //             <div
// //               className="cuisine-image"
// //               style={{ backgroundImage: `url(${cuisine.image})` }}
// //             ></div>
// //             <div className="cuisine-text">
// //               <p className="cuisine-title">{cuisine.name}</p>
// //               <p className="cuisine-description">{cuisine.description}</p>
// //             </div>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default ExploreMore;







// import React, { useContext, useEffect, useState } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";
// import "./ExploreMore.css";

// const ExploreMore = () => {
//   const { food_list, url } = useContext(StoreContext);
//   const [cuisines, setCuisines] = useState([]);
//   const navigate = useNavigate();

//   useEffect(() => {
//     // Dynamically generate cuisines from food_list based on unique categories
//     const uniqueCategories = [...new Set(food_list.map((item) => item.category))].slice(0, 4);
//     const dynamicCuisines = uniqueCategories.map((category) => {
//       const categoryItems = food_list.filter((item) => item.category === category);
//       const firstItem = categoryItems[0] || {};
//       return {
//         name: category,
//         description: `${category} cuisine with delicious options`,
//         image: firstItem.image ? `${url}/images/${firstItem.image}` : "/placeholder.jpg",
//       };
//     });
//     setCuisines(dynamicCuisines);
//   }, [food_list, url]);

//   const handleCuisineClick = (cuisineName) => {
//     navigate(`/menu?category=${encodeURIComponent(cuisineName)}`);
//   };

//   return (
//     <div className="explore-more">
//       <h2 className="section-title">Explore More</h2>
//       <div className="cuisines-container">
//         {cuisines.map((cuisine) => (
//           <div
//             key={cuisine.name}
//             className="cuisine-item"
//             onClick={() => handleCuisineClick(cuisine.name)}
//           >
//             <div
//               className="cuisine-image"
//               style={{ backgroundImage: `url(${cuisine.image})` }}
//             ></div>
//             <div className="cuisine-text">
//               <p className="cuisine-title">{cuisine.name}</p>
//               <p className="cuisine-description">{cuisine.description}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//       <div className="explore-more-button-container">
//         <a href="/menu" className="explore-more-button">
//           Discover All Cuisines
//         </a>
//       </div>
//     </div>
//   );
// };

// export default ExploreMore;














import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import "./ExploreMore.css";

const ExploreMore = () => {
  const { food_list, url } = useContext(StoreContext);
  const [cuisines, setCuisines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const validImage = (img) => img && typeof img === "string" && img.trim() !== "";

    // Get up to 4 unique categories
    const uniqueCategories = [...new Set(food_list.map((item) => item.category))].slice(0, 4);

    const dynamicCuisines = uniqueCategories.map((category) => {
      // Find the first item in this category with a valid image
      const categoryItems = food_list.filter((item) => item.category === category);
      const firstItem = categoryItems.find((item) => validImage(item.image)) || {};

      return {
        name: category,
        description: `${category} cuisine with delicious options`,
        image: validImage(firstItem.image)
          ? `${url.replace(/\/$/, "")}/images/${firstItem.image}`
          : "/placeholder.jpg", // Use a default image if none valid
      };
    });

    setCuisines(dynamicCuisines);
  }, [food_list, url]);

  const handleCuisineClick = (cuisineName) => {
    navigate(`/menu?category=${encodeURIComponent(cuisineName)}`);
  };

  return (
    <div className="explore-more">
      {/* <h2 className="section-title">Explore More</h2>
      <div className="cuisines-container">
        {cuisines.map((cuisine) => (
          <div
            key={cuisine.name}
            className="cuisine-item"
            onClick={() => handleCuisineClick(cuisine.name)}
          >
            <div
              className="cuisine-image"
              style={{
                backgroundImage: `url(${cuisine.image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="cuisine-text">
              <p className="cuisine-title">{cuisine.name}</p>
              <p className="cuisine-description">{cuisine.description}</p>
            </div>
          </div>
        ))}
      </div> */}
      <div className="explore-more-button-container">
        <a href="/menu" className="explore-more-button">
          Discover All Cuisines
        </a>
      </div>
    </div>
  );
};

export default ExploreMore;
