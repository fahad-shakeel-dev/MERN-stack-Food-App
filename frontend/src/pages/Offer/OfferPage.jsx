// import React from 'react';
// import './OfferPage.css';

// const OffersPage = () => {
//   // Special offers data
//   const specialOffers = [
//     {
//       id: 1,
//       title: "20% off on your first order",
//       image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       description: "Use code WELCOME20 at checkout",
//       expiry: "Valid until Dec 31, 2023"
//     },
//     {
//       id: 2,
//       title: "Free delivery on orders above $20",
//       image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       description: "No minimum order required",
//       expiry: "Valid until Jan 15, 2024"
//     },
//     {
//       id: 3,
//       title: "Buy one get one free",
//       image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       description: "Selected menu items only",
//       expiry: "Valid until Dec 25, 2023"
//     }
//   ];

//   // Restaurant offers data
//   const restaurantOffers = [
//     {
//       id: 1,
//       name: "The Burger Joint",
//       image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "15% off all burgers"
//     },
//     {
//       id: 2,
//       name: "Pizza Palace",
//       image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Family combo deal"
//     },
//     {
//       id: 3,
//       name: "Sushi Spot",
//       image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Free miso soup with order"
//     },
//     {
//       id: 4,
//       name: "Taco Town",
//       image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Taco Tuesday special"
//     },
//     {
//       id: 5,
//       name: "Noodle Nook",
//       image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "10% off all noodle dishes"
//     },
//     {
//       id: 6,
//       name: "Dessert Den",
//       image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Free dessert with $30 order"
//     }
//   ];

//   // Category offers data
//   const categoryOffers = [
//     {
//       id: 1,
//       name: "Burgers",
//       image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Combo meals from $9.99"
//     },
//     {
//       id: 2,
//       name: "Pizza",
//       image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Large pizza $12.99"
//     },
//     {
//       id: 3,
//       name: "Sushi",
//       image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Sushi platter special"
//     },
//     {
//       id: 4,
//       name: "Tacos",
//       image: "https://images.unsplash.com/photo-1615870216519-2f9fa575fa5c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "3 tacos for $10"
//     },
//     {
//       id: 5,
//       name: "Noodles",
//       image: "https://images.unsplash.com/photo-1552611052-33e04de081de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Extra toppings free"
//     },
//     {
//       id: 6,
//       name: "Desserts",
//       image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
//       offer: "Buy 1 get 1 50% off"
//     }
//   ];

//   return (
//     <div className="foodie-offers-page">
//       <main className="foodie-offers-main">
//         <div className="foodie-offers-container">
//           <div className="foodie-offers-hero">
//             <h1 className="foodie-offers-title">Exclusive Offers</h1>
//             <p className="foodie-offers-subtitle">Save big on your favorite meals</p>
//           </div>

//           <section className="foodie-offers-section">
//             <h2 className="foodie-offers-section-title">Special Offers</h2>
//             <div className="foodie-special-offers-grid">
//               {specialOffers.map(offer => (
//                 <div key={offer.id} className="foodie-special-offer-card">
//                   <div 
//                     className="foodie-special-offer-image"
//                     style={{ backgroundImage: `url(${offer.image})` }}
//                   >
//                     <div className="foodie-special-offer-badge">Limited Time</div>
//                   </div>
//                   <div className="foodie-special-offer-content">
//                     <h3 className="foodie-special-offer-title">{offer.title}</h3>
//                     <p className="foodie-special-offer-description">{offer.description}</p>
//                     <div className="foodie-special-offer-footer">
//                       <span className="foodie-special-offer-expiry">{offer.expiry}</span>
//                       <button className="foodie-special-offer-button">Claim Offer</button>
//                     </div>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="foodie-offers-section">
//             <h2 className="foodie-offers-section-title">Restaurant Offers</h2>
//             <div className="foodie-restaurant-offers-grid">
//               {restaurantOffers.map(restaurant => (
//                 <div key={restaurant.id} className="foodie-restaurant-card">
//                   <div 
//                     className="foodie-restaurant-image"
//                     style={{ backgroundImage: `url(${restaurant.image})` }}
//                   ></div>
//                   <div className="foodie-restaurant-info">
//                     <h3 className="foodie-restaurant-name">{restaurant.name}</h3>
//                     <p className="foodie-restaurant-offer">{restaurant.offer}</p>
//                     <button className="foodie-restaurant-button">View Menu</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>

//           <section className="foodie-offers-section">
//             <h2 className="foodie-offers-section-title">Category Offers</h2>
//             <div className="foodie-category-offers-grid">
//               {categoryOffers.map(category => (
//                 <div key={category.id} className="foodie-category-card">
//                   <div 
//                     className="foodie-category-image"
//                     style={{ backgroundImage: `url(${category.image})` }}
//                   ></div>
//                   <div className="foodie-category-info">
//                     <h3 className="foodie-category-name">{category.name}</h3>
//                     <p className="foodie-category-offer">{category.offer}</p>
//                     <button className="foodie-category-button">Order Now</button>
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </section>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OffersPage;

















// import React, { useState, useEffect, useContext } from 'react';
// import { StoreContext } from '../../context/StoreContext';
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import './OfferPage.css';

// const OffersPage = () => {
//   const { url, food_list, popular_categories } = useContext(StoreContext);
//   const [offers, setOffers] = useState([]);
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   // Fetch offers from backend
//   useEffect(() => {
//     const fetchOffers = async () => {
//       try {
//         console.log("Fetching offers from:", `${url}/api/offers`);
//         const response = await axios.get(`${url}/api/offers`, { withCredentials: true });
//         console.log("Offers fetched:", response.data);
//         if (response.data.success) {
//           setOffers(response.data.data || []);
//         } else {
//           setError(response.data.message || "Failed to load offers.");
//           toast.error(response.data.message || "Failed to load offers", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "error-toast",
//             style: { background: "#ff4d4d", color: "#fff" },
//           });
//         }
//       } catch (error) {
//         console.error("Error fetching offers:", error.response?.data || error.message);
//         setError(error.response?.data?.message || "Failed to load offers. Please try again.");
//         toast.error(error.response?.data?.message || "Failed to load offers", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       } finally {
//         setLoading(false);
//       }
//     };
//     fetchOffers();
//   }, [url]);

//   // Group offers by type dynamically
//   const groupedOffers = offers.reduce((acc, offer) => {
//     const type = offer.type || "Other";
//     if (!acc[type]) acc[type] = [];
//     acc[type].push(offer);
//     return acc;
//   }, {});

//   // Get unique offer types
//   const offerTypes = Object.keys(groupedOffers);

//   // Debug grouped offers and context data
//   useEffect(() => {
//     console.log("Grouped Offers:", groupedOffers);
//     console.log("Offer Types:", offerTypes);
//     console.log("food_list:", food_list);
//     console.log("popular_categories:", popular_categories);
//   }, [offers, food_list, popular_categories]);

//   // Helper to get image for offer
//   const getOfferImage = (offer) => {
//     if (offer.image) return offer.image;
//     if (offer.targetProduct) {
//       const product = food_list.find(item => item._id === offer.targetProduct);
//       return product?.image || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
//     }
//     if (offer.targetCategory) {
//       const categoryImage = popular_categories.find(cat => cat.name === offer.targetCategory)?.image;
//       return categoryImage || "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
//     }
//     return "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
//   };

//   return (
//     <div className="foodie-offers-page">
//       <main className="foodie-offers-main">
//         <div className="foodie-offers-container">
//           <div className="foodie-offers-hero">
//             <h1 className="foodie-offers-title">Exclusive Offers</h1>
//             <p className="foodie-offers-subtitle">Save big on your favorite meals</p>
//           </div>

//           {error && <div className="error-message">{error}</div>}
//           {loading ? (
//             <div className="loading">
//               <div className="spinner"></div>
//               Loading offers...
//             </div>
//           ) : (
//             <div className="foodie-offers-sections">
//               {offerTypes.length > 0 ? (
//                 offerTypes.map(type => (
//                   <section key={type} className="foodie-offers-section">
//                     <h2 className="foodie-offers-section-title">{type}</h2>
//                     <div className="foodie-offers-grid">
//                       {groupedOffers[type].length > 0 ? (
//                         groupedOffers[type].map(offer => (
//                           <div key={offer._id} className="foodie-offer-card">
//                             <div 
//                               className="foodie-offer-image"
//                               style={{ backgroundImage: `url(${getOfferImage(offer)})` }}
//                             >
//                               <div className="foodie-offer-badge">Limited Time</div>
//                             </div>
//                             <div className="foodie-offer-content">
//                               <h3 className="foodie-offer-title">{offer.title}</h3>
//                               <p className="foodie-offer-description">{offer.description}</p>
//                               <div className="foodie-offer-details">
//                                 <span>Discount: {offer.discount ? `${offer.discount}%` : "N/A"}</span>
//                                 <span>Category: {offer.targetCategory || "N/A"}</span>
//                                 <span>Product: {offer.targetProduct ? food_list.find(p => p._id === offer.targetProduct)?.name || "N/A" : "N/A"}</span>
//                                 <span>Expires: {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}</span>
//                               </div>
//                               <div className="foodie-offer-footer">
//                                 <button className="foodie-offer-button">Claim Offer</button>
//                               </div>
//                             </div>
//                           </div>
//                         ))
//                       ) : (
//                         <div className="no-offers">No offers yet, but exciting deals are coming soon!</div>
//                       )}
//                     </div>
//                   </section>
//                 ))
//               ) : (
//                 <div className="no-offers">No offers yet, but exciting deals are coming soon!</div>
//               )}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OffersPage;














import React, { useState, useEffect, useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import { useNavigate } from 'react-router-dom'; // Add useNavigate
import axios from 'axios';
import { toast } from 'react-toastify';
import './OfferPage.css';

const OffersPage = () => {
  const { url, food_list, popular_categories } = useContext(StoreContext);
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate(); // Initialize navigate

  // Fetch offers from backend
  useEffect(() => {
    const fetchOffers = async () => {
      try {
        console.log("Fetching offers from:", `${url}/api/offers`);
        const response = await axios.get(`${url}/api/offers`, { withCredentials: true });
        console.log("Offers fetched:", response.data);
        if (response.data.success) {
          setOffers(response.data.data || []);
        } else {
          setError(response.data.message || "Failed to load offers.");
          toast.error(response.data.message || "Failed to load offers", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "error-toast",
            style: { background: "#ff4d4d", color: "#fff" },
          });
        }
      } catch (error) {
        console.error("Error fetching offers:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Failed to load offers. Please try again.");
        toast.error(error.response?.data?.message || "Failed to load offers", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "error-toast",
          style: { background: "#ff4d4d", color: "#fff" },
        });
      } finally {
        setLoading(false);
      }
    };
    fetchOffers();
  }, [url]);

  // Group offers by type dynamically
  const groupedOffers = offers.reduce((acc, offer) => {
    const type = offer.type || "Other";
    if (!acc[type]) acc[type] = [];
    acc[type].push(offer);
    return acc;
  }, {});

  // Get unique offer types
  const offerTypes = Object.keys(groupedOffers);

  // Debug grouped offers and context data
  useEffect(() => {
    console.log("Grouped Offers:", groupedOffers);
    console.log("Offer Types:", offerTypes);
    console.log("food_list:", food_list);
    console.log("popular_categories:", popular_categories);
  }, [offers, food_list, popular_categories]);

  // Helper to get image for offer
  const getOfferImage = (offer) => {
    if (offer.image) return offer.image;
    if (offer.targetProduct) {
      const product = food_list.find(item => item._id === offer.targetProduct);
      return product?.image || "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    if (offer.targetCategory) {
      const categoryImage = popular_categories.find(cat => cat.name === offer.targetCategory)?.image;
      return categoryImage || "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
    }
    return "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";
  };

  // Handle Claim Offer button click
  const handleClaimOffer = (offer) => {
    if (offer.targetProduct) {
      // Redirect to product detail page with offer discount
      navigate(`/product/${offer.targetProduct}`, { state: { discount: offer.discount } });
    } else if (offer.targetCategory) {
      // Redirect to category page with offer discount
      navigate(`/category/${offer.targetCategory}`, { state: { discount: offer.discount } });
    } else {
      toast.error("Invalid offer configuration", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      });
    }
  };

  return (
    <div className="foodie-offers-page">
      <main className="foodie-offers-main">
        <div className="foodie-offers-container">
          <div className="foodie-offers-hero">
            <h1 className="foodie-offers-title">Exclusive Offers</h1>
            <p className="foodie-offers-subtitle">Save big on your favorite meals</p>
          </div>

          {error && <div className="error-message">{error}</div>}
          {loading ? (
            <div className="loading">
              <div className="spinner"></div>
              Loading offers...
            </div>
          ) : (
            <div className="foodie-offers-sections">
              {offerTypes.length > 0 ? (
                offerTypes.map(type => (
                  <section key={type} className="foodie-offers-section">
                    <h2 className="foodie-offers-section-title">{type}</h2>
                    <div className="foodie-offers-grid">
                      {groupedOffers[type].length > 0 ? (
                        groupedOffers[type].map(offer => (
                          <div key={offer._id} className="foodie-offer-card">
                            <div 
                              className="foodie-offer-image"
                              style={{ backgroundImage: `url(${getOfferImage(offer)})` }}
                            >
                              <div className="foodie-offer-badge">Limited Time</div>
                            </div>
                            <div className="foodie-offer-content">
                              <h3 className="foodie-offer-title">{offer.title}</h3>
                              <p className="foodie-offer-description">{offer.description}</p>
                              <div className="foodie-offer-details">
                                <span>Discount: {offer.discount ? `${offer.discount}%` : "N/A"}</span>
                                <span>Category: {offer.targetCategory || "N/A"}</span>
                                <span>Product: {offer.targetProduct ? food_list.find(p => p._id === offer.targetProduct)?.name || "N/A" : "N/A"}</span>
                                <span>Expires: {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}</span>
                              </div>
                              <div className="foodie-offer-footer">
                                <button 
                                  className="foodie-offer-button" 
                                  onClick={() => handleClaimOffer(offer)}
                                >
                                  Claim Offer
                                </button>
                              </div>
                            </div>
                          </div>
                        ))
                      ) : (
                        <div className="no-offers">No offers yet, but exciting deals are coming soon!</div>
                      )}
                    </div>
                  </section>
                ))
              ) : (
                <div className="no-offers">No offers yet, but exciting deals are coming soon!</div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default OffersPage;