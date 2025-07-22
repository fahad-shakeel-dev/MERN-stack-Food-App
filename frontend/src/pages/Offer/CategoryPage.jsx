// import React, { useContext, useEffect, useState } from 'react';
// import { useParams, useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../context/StoreContext';
// import { toast } from 'react-toastify';
// import './CategoryPage.css';

// const CategoryPage = () => {
//   const { category } = useParams();
//   const { food_list = [], claimedOffers = [], addToCart, url } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [products, setProducts] = useState([]);
//   const [categoryOffer, setCategoryOffer] = useState(null);

//   useEffect(() => {
//     // Filter products by category
//     const filteredProducts = food_list.filter(item => item.category === decodeURIComponent(category));
//     setProducts(filteredProducts);

//     // Find applicable offer for this category
//     const offer = claimedOffers.find(
//       offer => offer.targetCategory === decodeURIComponent(category) && !offer.targetProduct
//     );
//     setCategoryOffer(offer);

//     if (filteredProducts.length === 0) {
//       toast.warn(`No products found in category: ${decodeURIComponent(category)}`, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "warning-toast",
//         style: { background: "#ffcc00", color: "#333" },
//       });
//     }
//   }, [category, food_list, claimedOffers]);

//   const getDiscountedPrice = (price, discount) => {
//     if (!discount) return price;
//     return (price * (100 - discount) / 100).toFixed(2);
//   };

//   return (
//     <div className="category-page">
//       <main className="category-main">
//         <div className="category-container">
//           <div className="category-hero">
//             <h1 className="category-title">{decodeURIComponent(category)} Products</h1>
//             {categoryOffer && (
//               <p className="category-offer-info">
//                 Enjoy {categoryOffer.discount}% off all products in this category!
//               </p>
//             )}
//           </div>
//           <div className="category-grid">
//             {products.length > 0 ? (
//               products.map(product => (
//                 <div key={product._id} className="category-product-card">
//                   <div
//                     className="category-product-image"
//                     style={{ backgroundImage: `url(${product.image ? `${url}/images/${product.image}` : 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'})` }}
//                   ></div>
//                   <div className="category-product-content">
//                     <h3 className="category-product-title">{product.name}</h3>
//                     <p className="category-product-description">{product.description}</p>
//                     <div className="category-product-price">
//                       {categoryOffer ? (
//                         <>
//                           <span className="original-price">${product.price}</span>
//                           <span className="discount-info">{categoryOffer.discount}% off</span>
//                           <span className="discounted-price">${getDiscountedPrice(product.price, categoryOffer.discount)}</span>
//                         </>
//                       ) : (
//                         <span>${product.price}</span>
//                       )}
//                     </div>
//                     <div className="category-product-actions">
//                       <button
//                         onClick={() => navigate(`/product/${product._id}`)}
//                         className="view-product"
//                       >
//                         View Product
//                       </button>
//                       <button
//                         onClick={() => {
//                           addToCart(product._id, categoryOffer ? getDiscountedPrice(product.price, categoryOffer.discount) : product.price);
//                           toast.success("Added to cart!");
//                         }}
//                         className="add-to-cart"
//                       >
//                         Add to Cart
//                       </button>
//                     </div>
//                   </div>
//                 </div>
//               ))
//             ) : (
//               <div className="no-products">No products available in this category.</div>
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default CategoryPage;














import React, { useContext, useEffect, useState } from "react";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";
import { toast } from "react-toastify";
import "./CategoryPage.css";

const CategoryPage = () => {
  const { categoryName } = useParams();
  const { url, food_list, addToCart } = useContext(StoreContext);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const location = useLocation();
  const navigate = useNavigate();

  // Extract discount from location.state
  const discount = location.state?.discount || 0;

  useEffect(() => {
    console.log("CategoryPage: Rendering for category:", categoryName);
    console.log("CategoryPage: Current URL:", window.location.pathname);
    console.log("CategoryPage: Location State:", location.state);
    console.log("CategoryPage: Food List:", food_list);
    console.log("CategoryPage: Food List Length:", food_list.length);

    if (!categoryName) {
      console.error("CategoryPage: categoryName is undefined");
      return;
    }

    // Filter products by category (case-insensitive, trim spaces)
    const filteredProducts = food_list.filter(
      (product) =>
        product.category &&
        product.category.trim().toLowerCase() === categoryName.trim().toLowerCase()
    );
    console.log("CategoryPage: Filtered Products:", filteredProducts);
    if (filteredProducts.length === 0) {
      console.log("CategoryPage: Categories in food_list:", [
        ...new Set(food_list.map((p) => p.category || "undefined")),
      ]);
    }
    setCategoryProducts(filteredProducts);
  }, [categoryName, food_list]);

  // Log state changes
  useEffect(() => {
    console.log("CategoryPage: Category Products Updated:", categoryProducts);
  }, [categoryProducts]);

  if (!categoryName) {
    console.log("CategoryPage: No category specified");
    return <div className="text-center py-12">Error: No category specified</div>;
  }

  if (!food_list) {
    console.log("CategoryPage: Food list is undefined");
    return <div className="text-center py-12">Error: Food list not loaded</div>;
  }

  if (!food_list.length) {
    console.log("CategoryPage: Food list is empty");
    return <div className="text-center py-12">Loading products...</div>;
  }

  if (!categoryProducts.length) {
    console.log(`CategoryPage: No products found for category: ${categoryName}`);
    return <div className="text-center py-12">No products found in this category.</div>;
  }

  return (
    <div className="category-page">
      <h1 className="category-title">{categoryName} Offers</h1>
      <div className="category-products-grid">
        {categoryProducts.map((product) => {
          // Calculate discounted price
          const originalPrice = product.price;
          const discountedPrice = discount
            ? (originalPrice * (1 - discount / 100)).toFixed(2)
            : originalPrice;

          return (
            <div key={product._id} className="category-product-card">
              <img
                src={`${url}/images/${product.image}`}
                alt={product.name}
                className="category-product-image"
              />
              <div className="category-product-info">
                <h3 className="category-product-title">{product.name}</h3>
                <p className="category-product-description">{product.description}</p>
                <p className="category-product-price">
                  {discount ? (
                    <>
                      <span
                        className="original-price"
                        style={{ textDecoration: "line-through", color: "#888" }}
                      >
                        ${originalPrice}
                      </span>
                      <span
                        className="discounted-price"
                        style={{ color: "#e74c3c", fontWeight: "bold" }}
                      >
                        ${discountedPrice} ({discount}% off)
                      </span>
                    </>
                  ) : (
                    <span>${originalPrice}</span>
                  )}
                </p>
                <div className="category-product-actions">
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
                    onClick={() =>
                      navigate(`/product/${product._id}`, { state: { discount } })
                    }
                    className="view-product"
                  >
                    View Product
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CategoryPage;