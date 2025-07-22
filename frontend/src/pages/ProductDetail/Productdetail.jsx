// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate } from "react-router-dom";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { url, food_list, cartItems, addToCart, removeFromCart, setCartItems } = useContext(StoreContext);
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();

//   useEffect(() => {
//     const foundProduct = food_list.find((item) => item._id === id);
//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       fetchProductDetails();
//     }
//   }, [id, food_list]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         const foundProduct = response.data.data.find((item) => item._id === id);
//         if (foundProduct) setProduct(foundProduct);
//         else toast.error("Product not found");
//       } else {
//         toast.error(response.data.message || "Error fetching product");
//       }
//     } catch (error) {
//       console.error("Fetch product error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching product");
//     }
//   };

//   if (!product) return <div className="text-center py-12">Loading...</div>;

//   return (
//     <div className="product-detail">
//       <div className="product-content">
//         <div className="product-image">
//           <img
//             src={`${url}/images/${product.image}`}
//             alt={product.name}
//           />
//         </div>
//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>
//           <p className="product-description">{product.description}</p>
//           <p className="product-price">${product.price}</p>
//           <div className="product-actions">
//             <button
//               onClick={() => {
//                 addToCart(product._id);
//                 toast.success("Added to cart!");
//               }}
//               className="add-to-cart"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => navigate("/cart")}
//               className="view-cart"
//             >
//               View Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



















// import React, { useContext, useEffect, useState } from "react";
// import { useParams, useNavigate, useLocation } from "react-router-dom"; // Add useLocation
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import "./ProductDetail.css";

// const ProductDetail = () => {
//   const { id } = useParams();
//   const { url, food_list, cartItems, addToCart, removeFromCart, setCartItems } = useContext(StoreContext);
//   const [product, setProduct] = useState(null);
//   const navigate = useNavigate();
//   const location = useLocation(); // Get location to access state

//   // Extract discount from location.state
//   const discount = location.state?.discount || 0;

//   useEffect(() => {
//     const foundProduct = food_list.find((item) => item._id === id);
//     if (foundProduct) {
//       setProduct(foundProduct);
//     } else {
//       fetchProductDetails();
//     }
//   }, [id, food_list]);

//   const fetchProductDetails = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         const foundProduct = response.data.data.find((item) => item._id === id);
//         if (foundProduct) setProduct(foundProduct);
//         else toast.error("Product not found");
//       } else {
//         toast.error(response.data.message || "Error fetching product");
//       }
//     } catch (error) {
//       console.error("Fetch product error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching product");
//     }
//   };

//   if (!product) return <div className="text-center py-12">Loading...</div>;

//   // Calculate discounted price
//   const originalPrice = product.price;
//   const discountedPrice = discount ? (originalPrice * (1 - discount / 100)).toFixed(2) : originalPrice;

//   return (
//     <div className="product-detail">
//       <div className="product-content">
//         <div className="product-image">
//           <img
//             src={`${url}/images/${product.image}`}
//             alt={product.name}
//           />
//         </div>
//         <div className="product-info">
//           <h1 className="product-title">{product.name}</h1>
//           <p className="product-description">{product.description}</p>
//           <p className="product-price">
//             {discount ? (
//               <>
//                 <span className="original-price" style={{ textDecoration: "line-through", color: "#888" }}>
//                   ${originalPrice}
//                 </span>
//                 <span className="discounted-price" style={{ color: "#e74c3c", fontWeight: "bold" }}>
//                   ${discountedPrice} ({discount}% off)
//                 </span>
//               </>
//             ) : (
//               <span>${originalPrice}</span>
//             )}
//           </p>
//           <div className="product-actions">
//             <button
//               onClick={() => {
//                 addToCart(product._id);
//                 toast.success("Added to cart!");
//               }}
//               className="add-to-cart"
//             >
//               Add to Cart
//             </button>
//             <button
//               onClick={() => navigate("/cart")}
//               className="view-cart"
//             >
//               View Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductDetail;



















import React, { useContext, useEffect, useState } from "react";
import { useParams, useNavigate, useLocation } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import "./ProductDetail.css";

const ProductDetail = () => {
  const { id } = useParams();
  const { url, food_list, cartItems, addToCart, removeFromCart, setCartItems, offers, isLoading } = useContext(StoreContext);
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();

  // Extract discount from location.state (for navigation-specific discounts)
  const navDiscount = location.state?.discount || 0;

  useEffect(() => {
    const foundProduct = food_list.find((item) => item._id === id);
    if (foundProduct) {
      setProduct(foundProduct);
    } else {
      fetchProductDetails();
    }
  }, [id, food_list]);

  const fetchProductDetails = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        withCredentials: true,
      });
      if (response.data.success) {
        const foundProduct = response.data.data.find((item) => item._id === id);
        if (foundProduct) setProduct(foundProduct);
        else toast.error("Product not found");
      } else {
        toast.error(response.data.message || "Error fetching product");
      }
    } catch (error) {
      console.error("Fetch product error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching product");
    }
  };

  // Function to get the highest applicable discount
  const getProductDiscount = () => {
    if (!product || !offers) return navDiscount;

    const validOffers = offers.filter(
      (offer) =>
        (offer.targetProduct === product._id ||
         (product.category && offer.targetCategory === product.category)) &&
        (!offer.expiry || new Date(offer.expiry) >= new Date())
    );

    // Return the highest discount (navDiscount or from offers)
    const maxOfferDiscount = validOffers.length
      ? Math.max(...validOffers.map((offer) => offer.discount))
      : 0;
    return Math.max(navDiscount, maxOfferDiscount);
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading...</div>;
  }

  if (!product) {
    return <div className="text-center py-12">Product not found</div>;
  }

  // Calculate discounted price
  const originalPrice = product.price.toFixed(2);
  const discount = getProductDiscount();
  const discountedPrice = discount
    ? (product.price * (1 - discount / 100)).toFixed(2)
    : originalPrice;

  return (
    <div className="product-detail">
      <div className="product-content">
        <div className="product-image">
          <img
            src={`${url}/images/${product.image}`}
            alt={product.name}
          />
        </div>
        <div className="product-info">
          <h1 className="product-title">{product.name}</h1>
          <p className="product-description">{product.description}</p>
          <p className="product-price">
            {discount ? (
              <>
                <span className="original-price" style={{ textDecoration: "line-through", color: "#888" }}>
                  ${originalPrice}
                </span>
                <span className="discounted-price" style={{ color: "#e74c3c", fontWeight: "bold", marginLeft: "8px" }}>
                  ${discountedPrice} ({discount}% off)
                </span>
              </>
            ) : (
              <span>${originalPrice}</span>
            )}
          </p>
          <div className="product-actions">
            <button
              onClick={() => {
                addToCart(product._id);
                toast.success("Added to cart!");
              }}
              className="add-to-cart"
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate("/cart")}
              className="view-cart"
            >
              View Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;