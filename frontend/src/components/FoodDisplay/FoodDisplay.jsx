// import React, { useContext } from "react";
// import "./FoodDisplay.css";
// import { StoreContext } from "../../context/StoreContext";
// import FoodItem from "../FoodItem/FoodItem";

// const FoodDisplay = ({ category }) => {
//   const { food_list } = useContext(StoreContext);
//   return (
//     <div className="food-display" id="food-display">
//       <h2>Top dishes near you</h2>
//       <div className="food-display-list">
//         {food_list.map((item, index) => {
//           if ((category === "All" || category === item.category))
//             return (
//               <FoodItem
//                 key={index}
//                 id={item._id}
//                 name={item.name}
//                 description={item.description}
//                 price={item.price}
//                 image={item.image}
//               />
//             );
//         })}
//       </div>
//     </div>
//   );
// };

// export default FoodDisplay;
import React, { useContext } from "react";
import "./FoodDisplay.css";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

const FoodDisplay = ({ category }) => {
  const { food_list } = useContext(StoreContext);

  // Filter the list by category, isPopular, and isFeatured
  const filteredList = food_list
    .filter(
      (item) =>
        (category === "All" || category === item.category) &&
        item.isPopular &&
        item.isFeatured
    )
    .slice(0, 5); // Limit to 5 items

  return (
    <div className="food-display" id="food-display">
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {filteredList.map((item, index) => (
          <FoodItem
            key={index}
            id={item._id}
            name={item.name}
            description={item.description}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default FoodDisplay;
