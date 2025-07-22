// import React, { useState, useContext, useEffect } from 'react';
// import { StoreContext } from "../../context/StoreContext";
// import axios from 'axios';
// import './Offers.css';

// const Offers = ({ url }) => {
//   const { offers, setOffers, food_list } = useContext(StoreContext);
//   const [offerCategories, setOfferCategories] = useState([
//     "Special Offer",
//     "Restaurant Offer",
//     "Category Offer",
//     "Single Product Offer",
//   ]);
//   const [newOffer, setNewOffer] = useState({
//     type: "",
//     title: "",
//     description: "",
//     expiry: "",
//     discount: "",
//     target: "",
//   });
//   const [newCategory, setNewCategory] = useState("");

//   useEffect(() => {
//     fetchOffers();
//   }, [url]);

//   const fetchOffers = async () => {
//     try {
//       const response = await axios.get(`${url}/api/offers`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setOffers(response.data);
//     } catch (error) {
//       console.error("Error fetching offers:", error);
//     }
//   };

//   const handleAddOffer = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post(
//         `${url}/api/offers`,
//         { ...newOffer, createdAt: new Date().toISOString() },
//         { headers: { Authorization: `Bearer ${localStorage.getItem("token")}` } }
//       );
//       setOffers([...offers, response.data]);
//       setNewOffer({ type: "", title: "", description: "", expiry: "", discount: "", target: "" });
//     } catch (error) {
//       console.error("Error adding offer:", error);
//     }
//   };

//   const handleAddCategory = (e) => {
//     e.preventDefault();
//     if (newCategory && !offerCategories.includes(newCategory)) {
//       setOfferCategories([...offerCategories, newCategory]);
//       setNewCategory("");
//     }
//   };

//   const handleDeleteOffer = async (id) => {
//     try {
//       await axios.delete(`${url}/api/offers/${id}`, {
//         headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
//       });
//       setOffers(offers.filter((offer) => offer.id !== id));
//     } catch (error) {
//       console.error("Error deleting offer:", error);
//     }
//   };

//   return (
//     <div className="offers-page">
//       <h2>Manage Offers</h2>
//       <div className="offer-categories">
//         <h3>Add New Offer Category</h3>
//         <form onSubmit={handleAddCategory}>
//           <input
//             type="text"
//             value={newCategory}
//             onChange={(e) => setNewCategory(e.target.value)}
//             placeholder="New Offer Category"
//           />
//           <button type="submit">Add Category</button>
//         </form>
//         <ul>
//           {offerCategories.map((cat) => (
//             <li key={cat}>{cat}</li>
//           ))}
//         </ul>
//       </div>
//       <div className="offer-form">
//         <h3>Add New Offer</h3>
//         <form onSubmit={handleAddOffer}>
//           <select
//             value={newOffer.type}
//             onChange={(e) => setNewOffer({ ...newOffer, type: e.target.value })}
//           >
//             <option value="">Select Offer Type</option>
//             {offerCategories.map((cat) => (
//               <option key={cat} value={cat}>
//                 {cat}
//               </option>
//             ))}
//           </select>
//           <input
//             type="text"
//             value={newOffer.title}
//             onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//             placeholder="Offer Title"
//           />
//           <input
//             type="text"
//             value={newOffer.description}
//             onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//             placeholder="Description"
//           />
//           <input
//             type="date"
//             value={newOffer.expiry}
//             onChange={(e) => setNewOffer({ ...newOffer, expiry: e.target.value })}
//             placeholder="Expiry Date"
//           />
//           <input
//             type="number"
//             value={newOffer.discount}
//             onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
//             placeholder="Discount (%)"
//             min="0"
//             max="100"
//           />
//           <input
//             type="text"
//             value={newOffer.target}
//             onChange={(e) => setNewOffer({ ...newOffer, target: e.target.value })}
//             placeholder="Target (Product ID, Category, or Restaurant)"
//           />
//           <button type="submit">Add Offer</button>
//         </form>
//       </div>
//       <div className="offer-list">
//         <h3>Current Offers</h3>
//         <ul>
//           {offers.map((offer) => (
//             <li key={offer._id}>
//               {offer.title} ({offer.type}) - Expires: {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}
//               <button onClick={() => handleDeleteOffer(offer._id)}>Delete</button>
//             </li>
//           ))}
//         </ul>
//       </div>
//     </div>
//   );
// };

// export default Offers;


// import React, { useState, useContext, useEffect } from 'react';
// import { StoreContext } from "../../context/StoreContext";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import './Offers.css';

// const Offers = () => {
//   const { url, token, admin, offers, setOffers, food_list } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [offerCategories, setOfferCategories] = useState([
//     "Special Offer",
//     "Restaurant Offer",
//     "Category Offer",
//     "Single Product Offer",
//   ]);
//   const [newOffer, setNewOffer] = useState({
//     type: "",
//     title: "",
//     description: "",
//     expiry: "",
//     discount: "",
//     target: "",
//   });
//   const [newCategory, setNewCategory] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login as Admin", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     } else {
//       fetchOffers();
//     }
//   }, [admin, token, navigate, url]);

//   const fetchOffers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       console.log("Fetching offers from:", `${url}/api/offers`);
//       const response = await axios.get(`${url}/api/offers`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Offers fetched:", response.data);
//       setOffers(response.data);
//     } catch (error) {
//       console.error("Error fetching offers:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to load offers. Check token or API status.");
//       toast.error(error.response?.data?.message || "Failed to load offers", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddOffer = async (e) => {
//     e.preventDefault();
//     if (!newOffer.type || !newOffer.title || !newOffer.description) {
//       setError("Please fill all required fields.");
//       toast.error("Please fill all required fields", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       return;
//     }
//     try {
//       console.log("Adding offer:", newOffer);
//       const response = await axios.post(
//         `${url}/api/offers`,
//         { ...newOffer, createdAt: new Date().toISOString() },
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       console.log("Add offer response:", response.data);
//       setOffers([...offers, response.data]);
//       setNewOffer({ type: "", title: "", description: "", expiry: "", discount: "", target: "" });
//       setError(null);
//       toast.success("Offer Added Successfully", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "success-toast",
//         style: { background: "#39e079", color: "#fff" },
//       });
//     } catch (error) {
//       console.error("Error adding offer:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to add offer.");
//       toast.error(error.response?.data?.message || "Failed to add offer", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleAddCategory = (e) => {
//     e.preventDefault();
//     if (newCategory && !offerCategories.includes(newCategory)) {
//       setOfferCategories([...offerCategories, newCategory]);
//       setNewCategory("");
//       setError(null);
//       toast.success("Category Added Successfully", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "success-toast",
//         style: { background: "#39e079", color: "#fff" },
//       });
//     } else {
//       setError("Category already exists or is empty.");
//       toast.error("Category already exists or is empty", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleDeleteOffer = async (id) => {
//     try {
//       console.log("Deleting offer with ID:", id);
//       await axios.delete(`${url}/api/offers/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       setOffers(offers.filter((offer) => offer._id !== id));
//       toast.success("Offer Deleted Successfully", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "success-toast",
//         style: { background: "#39e079", color: "#fff" },
//       });
//     } catch (error) {
//       console.error("Error deleting offer:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to delete offer.");
//       toast.error(error.response?.data?.message || "Failed to delete offer", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   return (
//     <div className="offers-page">
//       <h2>Manage Offers</h2>
//       {error && <div className="error-message">{error}</div>}
//       {loading ? (
//         <div className="loading">Loading offers...</div>
//       ) : (
//         <>
//           <div className="offer-categories">
//             <h3>Add New Offer Category</h3>
//             <form onSubmit={handleAddCategory}>
//               <input
//                 type="text"
//                 value={newCategory}
//                 onChange={(e) => setNewCategory(e.target.value)}
//                 placeholder="New Offer Category"
//                 required
//               />
//               <button type="submit">Add Category</button>
//             </form>
//             <ul>
//               {offerCategories.map((cat) => (
//                 <li key={cat}>{cat}</li>
//               ))}
//             </ul>
//           </div>
//           <div className="offer-form">
//             <h3>Add New Offer</h3>
//             <form onSubmit={handleAddOffer}>
//               <select
//                 value={newOffer.type}
//                 onChange={(e) => setNewOffer({ ...newOffer, type: e.target.value })}
//                 required
//               >
//                 <option value="">Select Offer Type</option>
//                 {offerCategories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 value={newOffer.title}
//                 onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//                 placeholder="Offer Title"
//                 required
//               />
//               <input
//                 type="text"
//                 value={newOffer.description}
//                 onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//                 placeholder="Description"
//                 required
//               />
//               <input
//                 type="date"
//                 value={newOffer.expiry}
//                 onChange={(e) => setNewOffer({ ...newOffer, expiry: e.target.value })}
//                 placeholder="Expiry Date"
//               />
//               <input
//                 type="number"
//                 value={newOffer.discount}
//                 onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
//                 placeholder="Discount (%)"
//                 min="0"
//                 max="100"
//               />
//               <input
//                 type="text"
//                 value={newOffer.target}
//                 onChange={(e) => setNewOffer({ ...newOffer, target: e.target.value })}
//                 placeholder="Target (Product ID, Category, or Restaurant)"
//               />
//               <button type="submit">Add Offer</button>
//             </form>
//           </div>
//           <div className="offer-list">
//             <h3>Current Offers</h3>
//             <ul>
//               {offers.length > 0 ? (
//                 offers.map((offer) => (
//                   <li key={offer._id}>
//                     {offer.title} ({offer.type}) - Expires: {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}
//                     <button onClick={() => handleDeleteOffer(offer._id)}>Delete</button>
//                   </li>
//                 ))
//               ) : (
//                 <li>No offers available.</li>
//               )}
//             </ul>
//           </div>
//         </>
//       )}
//     </div>
//   );
// };

// export default Offers;





// import React, { useState, useContext, useEffect } from 'react';
// import { StoreContext } from "../../context/StoreContext";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import './Offers.css';

// const Offers = () => {
//   const { url, token, admin, offers = [], setOffers, food_list } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [offerCategories, setOfferCategories] = useState([]);
//   const [newOffer, setNewOffer] = useState({
//     _id: null,
//     type: "",
//     title: "",
//     description: "",
//     expiry: "",
//     discount: "",
//     targetCategory: "",
//     targetProduct: "",
//   });
//   const [newCategory, setNewCategory] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Get unique categories from food_list
//   const categories = [...new Set(food_list.map(item => item.category))];
//   // Get products for the selected category
//   const products = newOffer.targetCategory
//     ? food_list.filter(item => item.category === newOffer.targetCategory)
//     : [];

//   // Debug food_list and categories
//   useEffect(() => {
//     console.log("food_list:", food_list);
//     console.log("Categories:", categories);
//     console.log("Products for category", newOffer.targetCategory, ":", products);
//   }, [food_list, newOffer.targetCategory, products]);

//   // Fetch offer categories and offers on mount
//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login as Admin", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     } else {
//       fetchOfferCategories();
//       fetchOffers();
//     }
//   }, [admin, token, navigate, url]);

//   const fetchOfferCategories = async () => {
//     try {
//       console.log("Fetching offer categories from:", `${url}/api/offer-categories`);
//       const response = await axios.get(`${url}/api/offer-categories`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Offer categories fetched:", response.data);
//       if (response.data.success) {
//         setOfferCategories(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to load offer categories.");
//         toast.error(response.data.message || "Failed to load offer categories", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching offer categories:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to load offer categories.");
//       toast.error(error.response?.data?.message || "Failed to load offer categories", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const fetchOffers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       console.log("Fetching offers from:", `${url}/api/offers`);
//       const response = await axios.get(`${url}/api/offers`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Offers fetched:", response.data);
//       if (response.data.success) {
//         setOffers(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to load offers.");
//         toast.error(response.data.message || "Failed to load offers", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching offers:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to load offers. Check token or API status.");
//       toast.error(error.response?.data?.message || "Failed to load offers", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddOrUpdateOffer = async (e) => {
//     e.preventDefault();
//     if (!newOffer.type || !newOffer.title || !newOffer.description || !newOffer.targetCategory) {
//       setError("Please fill all required fields (Type, Title, Description, Target Category).");
//       toast.error("Please fill all required fields", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       return;
//     }
//     try {
//       console.log(isEditing ? "Updating offer payload:" : "Adding offer payload:", newOffer);
//       const payload = {
//         type: newOffer.type,
//         title: newOffer.title,
//         description: newOffer.description,
//         expiry: newOffer.expiry || undefined,
//         discount: newOffer.discount ? Number(newOffer.discount) : undefined,
//         targetCategory: newOffer.targetCategory || undefined,
//         targetProduct: newOffer.targetProduct || undefined,
//         createdAt: isEditing ? undefined : new Date().toISOString(),
//       };
//       const response = isEditing
//         ? await axios.put(
//             `${url}/api/offers/${newOffer._id}`,
//             payload,
//             { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//           )
//         : await axios.post(
//             `${url}/api/offers`,
//             payload,
//             { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//           );
//       console.log(isEditing ? "Update offer response:" : "Add offer response:", response.data);
//       console.log("Offer saved:", response.data.data);
//       if (response.data.success) {
//         setOffers(isEditing
//           ? offers.map(offer => offer._id === newOffer._id ? response.data.data : offer)
//           : [...offers, response.data.data]);
//         setNewOffer({ _id: null, type: "", title: "", description: "", expiry: "", discount: "", targetCategory: "", targetProduct: "" });
//         setError(null);
//         setIsEditing(false);
//         toast.success(isEditing ? "Offer Updated Successfully" : "Offer Added Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         setError(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer.`);
//         toast.error(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error(`Error ${isEditing ? "updating" : "adding"} offer:`, error.response?.data || error.message);
//       setError(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer.`);
//       toast.error(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleEditOffer = (offer) => {
//     setNewOffer({
//       _id: offer._id,
//       type: offer.type || "",
//       title: offer.title || "",
//       description: offer.description || "",
//       expiry: offer.expiry ? new Date(offer.expiry).toISOString().split('T')[0] : "",
//       discount: offer.discount || "",
//       targetCategory: offer.targetCategory || "",
//       targetProduct: offer.targetProduct || "",
//     });
//     setIsEditing(true);
//   };

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     const trimmedCategory = newCategory.trim();
//     if (trimmedCategory && !offerCategories.includes(trimmedCategory) && /^[A-Za-z\s]+$/.test(trimmedCategory)) {
//       try {
//         console.log("Adding offer category:", trimmedCategory);
//         const response = await axios.post(
//           `${url}/api/offer-categories`,
//           { name: trimmedCategory },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         console.log("Add offer category response:", response.data);
//         if (response.data.success) {
//           setOfferCategories([...offerCategories, response.data.data.name]);
//           setNewCategory("");
//           setError(null);
//           toast.success("Category Added Successfully", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "success-toast",
//             style: { background: "#39e079", color: "#fff" },
//           });
//         } else {
//           setError(response.data.message || "Failed to add category.");
//           toast.error(response.data.message || "Failed to add category", {
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
//         console.error("Error adding offer category:", error.response?.data || error.message);
//         setError(error.response?.data?.message || "Failed to add category.");
//         toast.error(error.response?.data?.message || "Failed to add category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } else {
//       setError("Category must be unique, non-empty, and contain only letters and spaces.");
//       toast.error("Category must be unique, non-empty, and contain only letters and spaces", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleDeleteCategory = async (category) => {
//     try {
//       console.log("Deleting offer category:", category);
//       const response = await axios.delete(`${url}/api/offer-categories/${category}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Delete offer category response:", response.data);
//       if (response.data.success) {
//         setOfferCategories(offerCategories.filter(cat => cat !== category));
//         toast.success("Category Deleted Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         setError(response.data.message || "Failed to delete category.");
//         toast.error(response.data.message || "Failed to delete category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error deleting offer category:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to delete category.");
//       toast.error(error.response?.data?.message || "Failed to delete category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleDeleteOffer = async (id) => {
//     try {
//       console.log("Deleting offer with ID:", id);
//       const response = await axios.delete(`${url}/api/offers/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         setOffers(offers.filter((offer) => offer._id !== id));
//         toast.success("Offer Deleted Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         setError(response.data.message || "Failed to delete offer.");
//         toast.error(response.data.message || "Failed to delete offer", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error deleting offer:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to delete offer.");
//       toast.error(error.response?.data?.message || "Failed to delete offer", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   return (
//     <div className="offers-page">
//       <h2>Manage Offers</h2>
//       {error && <div className="error-message">{error}</div>}
//       {loading ? (
//         <div className="loading">
//           <div className="spinner"></div>
//           Loading offers...
//         </div>
//       ) : (
//         <div className="offers-container">
//           <div className="offer-categories">
//             <h3>Offer Categories</h3>
//             <form onSubmit={handleAddCategory} className="category-form">
//               <input
//                 type="text"
//                 value={newCategory}
//                 onChange={(e) => setNewCategory(e.target.value)}
//                 placeholder="New Offer Category"
//                 required
//               />
//               <button type="submit">Add Category</button>
//             </form>
//             <div className="category-list">
//               {offerCategories.map((cat) => (
//                 <div key={cat} className="category-item">
//                   <span>{cat}</span>
//                   <button onClick={() => handleDeleteCategory(cat)} className="delete-category">Remove</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="offer-form">
//             <h3>{isEditing ? "Update Offer" : "Add New Offer"}</h3>
//             <form onSubmit={handleAddOrUpdateOffer}>
//               <select
//                 value={newOffer.type}
//                 onChange={(e) => setNewOffer({ ...newOffer, type: e.target.value })}
//                 required
//               >
//                 <option value="">Select Offer Type</option>
//                 {offerCategories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 value={newOffer.title}
//                 onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//                 placeholder="Offer Title"
//                 required
//               />
//               <input
//                 type="text"
//                 value={newOffer.description}
//                 onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//                 placeholder="Description"
//                 required
//               />
//               <input
//                 type="date"
//                 value={newOffer.expiry}
//                 onChange={(e) => setNewOffer({ ...newOffer, expiry: e.target.value })}
//                 placeholder="Expiry Date"
//               />
//               <input
//                 type="number"
//                 value={newOffer.discount}
//                 onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
//                 placeholder="Discount (%)"
//                 min="0"
//                 max="100"
//               />
//               <select
//                 value={newOffer.targetCategory}
//                 onChange={(e) => setNewOffer({ ...newOffer, targetCategory: e.target.value, targetProduct: "" })}
//                 required
//               >
//                 <option value="">Select Target Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={newOffer.targetProduct}
//                 onChange={(e) => setNewOffer({ ...newOffer, targetProduct: e.target.value })}
//                 disabled={!newOffer.targetCategory}
//               >
//                 <option value="">Select Target Product (Optional)</option>
//                 {products.map((product) => (
//                   <option key={product._id} value={product._id}>
//                     {product.name}
//                   </option>
//                 ))}
//               </select>
//               <div className="form-buttons">
//                 <button type="submit">{isEditing ? "Update Offer" : "Add Offer"}</button>
//                 {isEditing && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNewOffer({ _id: null, type: "", title: "", description: "", expiry: "", discount: "", targetCategory: "", targetProduct: "" });
//                       setIsEditing(false);
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//           <div className="offer-list">
//             <h3>Current Offers</h3>
//             <div className="offer-grid">
//               {Array.isArray(offers) && offers.length > 0 ? (
//                 offers.map((offer) => (
//                   <div key={offer._id} className="offer-item">
//                     <div className="offer-details">
//                       <span className="offer-title">{offer.title} ({offer.type})</span>
//                       <span>Expires: {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}</span>
//                       <span>Category: {offer.targetCategory || "N/A"}</span>
//                       <span>Product: {offer.targetProduct ? food_list.find(p => p._id === offer.targetProduct)?.name || "N/A" : "N/A"}</span>
//                     </div>
//                     <div className="offer-actions">
//                       <button onClick={() => handleEditOffer(offer)} className="edit">Edit</button>
//                       <button onClick={() => handleDeleteOffer(offer._id)} className="delete">Delete</button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-offers">No offers available.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Offers;

















// import React, { useState, useContext, useEffect } from 'react';
// import { StoreContext } from "../../context/StoreContext";
// import axios from 'axios';
// import { toast } from 'react-toastify';
// import { useNavigate } from 'react-router-dom';
// import './Offers.css';

// const Offers = () => {
//   const { url, token, admin, offers = [], setOffers, food_list } = useContext(StoreContext);
//   const navigate = useNavigate();
//   const [offerCategories, setOfferCategories] = useState([]);
//   const [newOffer, setNewOffer] = useState({
//     _id: null,
//     type: "",
//     title: "",
//     description: "",
//     expiry: "",
//     discount: "",
//     targetCategory: "",
//     targetProduct: "",
//     image: "",
//   });
//   const [newCategory, setNewCategory] = useState("");
//   const [loading, setLoading] = useState(true);
//   const [error, setError] = useState(null);
//   const [isEditing, setIsEditing] = useState(false);

//   // Get unique categories from food_list
//   const categories = [...new Set(food_list.map(item => item.category))];
//   // Get products for the selected category
//   const products = newOffer.targetCategory
//     ? food_list.filter(item => item.category === newOffer.targetCategory)
//     : [];

//   // Debug food_list, categories, and offers
//   useEffect(() => {
//     console.log("food_list:", food_list);
//     console.log("Categories:", categories);
//     console.log("Products for category", newOffer.targetCategory, ":", products);
//     console.log("Offers state:", offers);
//   }, [food_list, newOffer.targetCategory, products, offers]);

//   // Fetch offer categories and offers on mount
//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login as Admin", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     } else {
//       fetchOfferCategories();
//       fetchOffers();
//     }
//   }, [admin, token, navigate, url]);

//   const fetchOfferCategories = async () => {
//     try {
//       console.log("Fetching offer categories from:", `${url}/api/offer-categories`);
//       const response = await axios.get(`${url}/api/offer-categories`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Offer categories fetched:", response.data);
//       if (response.data.success) {
//         setOfferCategories(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to load offer categories.");
//         toast.error(response.data.message || "Failed to load offer categories", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching offer categories:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to load offer categories.");
//       toast.error(error.response?.data?.message || "Failed to load offer categories", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const fetchOffers = async () => {
//     setLoading(true);
//     setError(null);
//     try {
//       console.log("Fetching offers from:", `${url}/api/offers`);
//       const response = await axios.get(`${url}/api/offers`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Offers fetched:", response.data);
//       if (response.data.success) {
//         setOffers(response.data.data);
//       } else {
//         setError(response.data.message || "Failed to load offers.");
//         toast.error(response.data.message || "Failed to load offers", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error fetching offers:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to load offers. Check token or API status.");
//       toast.error(error.response?.data?.message || "Failed to load offers", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleAddOrUpdateOffer = async (e) => {
//     e.preventDefault();
//     if (!newOffer.type || !newOffer.title || !newOffer.description || !newOffer.targetCategory) {
//       setError("Please fill all required fields (Type, Title, Description, Target Category).");
//       toast.error("Please fill all required fields", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       return;
//     }
//     try {
//       const payload = {
//         type: newOffer.type,
//         title: newOffer.title,
//         description: newOffer.description,
//         expiry: newOffer.expiry ? new Date(newOffer.expiry).toISOString() : undefined,
//         discount: newOffer.discount ? Number(newOffer.discount) : undefined,
//         targetCategory: newOffer.targetCategory || undefined,
//         targetProduct: newOffer.targetProduct || undefined,
//         image: newOffer.image || undefined,
//       };
//       console.log(isEditing ? "Updating offer payload:" : "Adding offer payload:", payload);
//       const response = isEditing
//         ? await axios.put(
//             `${url}/api/offers/${newOffer._id}`,
//             payload,
//             { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//           )
//         : await axios.post(
//             `${url}/api/offers`,
//             payload,
//             { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//           );
//       console.log(isEditing ? "Update offer response:" : "Add offer response:", response.data);
//       if (response.data.success) {
//         setOffers(isEditing
//           ? offers.map(offer => offer._id === newOffer._id ? response.data.data : offer)
//           : [...offers, response.data.data]);
//         setNewOffer({ _id: null, type: "", title: "", description: "", expiry: "", discount: "", targetCategory: "", targetProduct: "", image: "" });
//         setError(null);
//         setIsEditing(false);
//         toast.success(isEditing ? "Offer Updated Successfully" : "Offer Added Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         setError(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer.`);
//         toast.error(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error(`Error ${isEditing ? "updating" : "adding"} offer:`, error.response?.data || error.message);
//       setError(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer.`);
//       toast.error(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleEditOffer = (offer) => {
//     console.log("Editing offer:", offer);
//     setNewOffer({
//       _id: offer._id,
//       type: offer.type || "",
//       title: offer.title || "",
//       description: offer.description || "",
//       expiry: offer.expiry ? new Date(offer.expiry).toISOString().split('T')[0] : "",
//       discount: offer.discount?.toString() || "",
//       targetCategory: offer.targetCategory || "",
//       targetProduct: offer.targetProduct || "",
//       image: offer.image || "",
//     });
//     setIsEditing(true);
//   };

//   const handleAddCategory = async (e) => {
//     e.preventDefault();
//     const trimmedCategory = newCategory.trim();
//     if (trimmedCategory && !offerCategories.includes(trimmedCategory) && /^[A-Za-z\s]+$/.test(trimmedCategory)) {
//       try {
//         console.log("Adding offer category:", trimmedCategory);
//         const response = await axios.post(
//           `${url}/api/offer-categories`,
//           { name: trimmedCategory },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         console.log("Add offer category response:", response.data);
//         if (response.data.success) {
//           setOfferCategories([...offerCategories, response.data.data.name]);
//           setNewCategory("");
//           setError(null);
//           toast.success("Category Added Successfully", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "success-toast",
//             style: { background: "#39e079", color: "#fff" },
//           });
//         } else {
//           setError(response.data.message || "Failed to add category.");
//           toast.error(response.data.message || "Failed to add category", {
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
//         console.error("Error adding offer category:", error.response?.data || error.message);
//         setError(error.response?.data?.message || "Failed to add category.");
//         toast.error(error.response?.data?.message || "Failed to add category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } else {
//       setError("Category must be unique, non-empty, and contain only letters and spaces.");
//       toast.error("Category must be unique, non-empty, and contain only letters and spaces", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleDeleteCategory = async (category) => {
//     try {
//       console.log("Deleting offer category:", category);
//       const response = await axios.delete(`${url}/api/offer-categories/${category}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Delete offer category response:", response.data);
//       if (response.data.success) {
//         setOfferCategories(offerCategories.filter(cat => cat !== category));
//         toast.success("Category Deleted Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         setError(response.data.message || "Failed to delete category.");
//         toast.error(response.data.message || "Failed to delete category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error deleting offer category:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to delete category.");
//       toast.error(error.response?.data?.message || "Failed to delete category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   const handleDeleteOffer = async (id) => {
//     try {
//       console.log("Deleting offer with ID:", id);
//       const response = await axios.delete(`${url}/api/offers/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Delete offer response:", response.data);
//       if (response.data.success) {
//         setOffers(offers.filter((offer) => offer._id !== id));
//         toast.success("Offer Deleted Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         setError(response.data.message || "Failed to delete offer.");
//         toast.error(response.data.message || "Failed to delete offer", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         });
//       }
//     } catch (error) {
//       console.error("Error deleting offer:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Failed to delete offer.");
//       toast.error(error.response?.data?.message || "Failed to delete offer", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//     }
//   };

//   return (
//     <div className="offers-page">
//       <h2>Manage Offers</h2>
//       {error && <div className="error-message">{error}</div>}
//       {loading ? (
//         <div className="loading">
//           <div className="spinner"></div>
//           Loading offers...
//         </div>
//       ) : (
//         <div className="offers-container">
//           <div className="offer-categories">
//             <h3>Offer Categories</h3>
//             <form onSubmit={handleAddCategory} className="category-form">
//               <input
//                 type="text"
//                 value={newCategory}
//                 onChange={(e) => setNewCategory(e.target.value)}
//                 placeholder="New Offer Category"
//                 required
//               />
//               <button type="submit">Add Category</button>
//             </form>
//             <div className="category-list">
//               {offerCategories.map((cat) => (
//                 <div key={cat} className="category-item">
//                   <span>{cat}</span>
//                   <button onClick={() => handleDeleteCategory(cat)} className="delete-category">Remove</button>
//                 </div>
//               ))}
//             </div>
//           </div>
//           <div className="offer-form">
//             <h3>{isEditing ? "Update Offer" : "Add New Offer"}</h3>
//             <form onSubmit={handleAddOrUpdateOffer}>
//               <select
//                 value={newOffer.type}
//                 onChange={(e) => setNewOffer({ ...newOffer, type: e.target.value })}
//                 required
//               >
//                 <option value="">Select Offer Type</option>
//                 {offerCategories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 value={newOffer.title}
//                 onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//                 placeholder="Offer Title"
//                 required
//               />
//               <input
//                 type="text"
//                 value={newOffer.description}
//                 onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//                 placeholder="Description"
//                 required
//               />
//               <input
//                 type="date"
//                 value={newOffer.expiry}
//                 onChange={(e) => setNewOffer({ ...newOffer, expiry: e.target.value })}
//                 placeholder="Expiry Date"
//               />
//               <input
//                 type="number"
//                 value={newOffer.discount}
//                 onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
//                 placeholder="Discount (%)"
//                 min="0"
//                 max="100"
//               />
//               <select
//                 value={newOffer.targetCategory}
//                 onChange={(e) => setNewOffer({ ...newOffer, targetCategory: e.target.value, targetProduct: "" })}
//                 required
//               >
//                 <option value="">Select Target Category</option>
//                 {categories.map((cat) => (
//                   <option key={cat} value={cat}>
//                     {cat}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={newOffer.targetProduct}
//                 onChange={(e) => setNewOffer({ ...newOffer, targetProduct: e.target.value })}
//                 disabled={!newOffer.targetCategory}
//               >
//                 <option value="">Select Target Product (Optional)</option>
//                 {products.map((product) => (
//                   <option key={product._id} value={product._id}>
//                     {product.name}
//                   </option>
//                 ))}
//               </select>
//               <input
//                 type="text"
//                 value={newOffer.image}
//                 onChange={(e) => setNewOffer({ ...newOffer, image: e.target.value })}
//                 placeholder="Image URL (Optional)"
//               />
//               <div className="form-buttons">
//                 <button type="submit">{isEditing ? "Update Offer" : "Add Offer"}</button>
//                 {isEditing && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNewOffer({ _id: null, type: "", title: "", description: "", expiry: "", discount: "", targetCategory: "", targetProduct: "", image: "" });
//                       setIsEditing(false);
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>
//           <div className="offer-list">
//             <h3>Current Offers</h3>
//             <div className="offer-grid">
//               {Array.isArray(offers) && offers.length > 0 ? (
//                 offers.map((offer) => (
//                   <div key={offer._id} className="offer-item">
//                     <div className="offer-details">
//                       <span className="offer-title">{offer.title} ({offer.type})</span>
//                       <span>Expires: {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}</span>
//                       <span>Category: {offer.targetCategory || "N/A"}</span>
//                       <span>Product: {offer.targetProduct ? food_list.find(p => p._id === offer.targetProduct)?.name || "N/A" : "N/A"}</span>
//                       <span>Image: {offer.image || "N/A"}</span>
//                     </div>
//                     <div className="offer-actions">
//                       <button onClick={() => handleEditOffer(offer)} className="edit">Edit</button>
//                       <button onClick={() => handleDeleteOffer(offer._id)} className="delete">Delete</button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-offers">No offers available.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Offers;











// "use client"

// import { useState, useContext, useEffect } from "react"
// import { StoreContext } from "../../context/StoreContext"
// import axios from "axios"
// import { toast } from "react-toastify"
// import { useNavigate } from "react-router-dom"
// import "./Offers.css"

// const Offers = () => {
//   const { url, token, admin, offers = [], setOffers, food_list } = useContext(StoreContext)
//   const navigate = useNavigate()
//   const [offerCategories, setOfferCategories] = useState([])
//   const [newOffer, setNewOffer] = useState({
//     _id: null,
//     type: "",
//     title: "",
//     description: "",
//     expiry: "",
//     discount: "",
//     targetCategory: "",
//     targetProduct: "",
//     image: "",
//   })
//   const [newCategory, setNewCategory] = useState("")
//   const [loading, setLoading] = useState(true)
//   const [error, setError] = useState(null)
//   const [isEditing, setIsEditing] = useState(false)

//   // Get unique categories from food_list
//   const categories = [...new Set(food_list.map((item) => item.category))]

//   // Get products for the selected category
//   const products = newOffer.targetCategory ? food_list.filter((item) => item.category === newOffer.targetCategory) : []

//   // Debug food_list, categories, and offers
//   useEffect(() => {
//     console.log("food_list:", food_list)
//     console.log("Categories:", categories)
//     console.log("Products for category", newOffer.targetCategory, ":", products)
//     console.log("Offers state:", offers)
//   }, [food_list, newOffer.targetCategory, products, offers])

//   // Fetch offer categories and offers on mount
//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /")
//       toast.error("Please Login as Admin", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//       navigate("/")
//     } else {
//       fetchOfferCategories()
//       fetchOffers()
//     }
//   }, [admin, token, navigate, url])

//   const fetchOfferCategories = async () => {
//     try {
//       console.log("Fetching offer categories from:", `${url}/api/offer-categories`)
//       const response = await axios.get(`${url}/api/offer-categories`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       })
//       console.log("Offer categories fetched:", response.data)
//       if (response.data.success) {
//         setOfferCategories(response.data.data)
//       } else {
//         setError(response.data.message || "Failed to load offer categories.")
//         toast.error(response.data.message || "Failed to load offer categories", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         })
//       }
//     } catch (error) {
//       console.error("Error fetching offer categories:", error.response?.data || error.message)
//       setError(error.response?.data?.message || "Failed to load offer categories.")
//       toast.error(error.response?.data?.message || "Failed to load offer categories", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//     }
//   }

//   const fetchOffers = async () => {
//     setLoading(true)
//     setError(null)
//     try {
//       console.log("Fetching offers from:", `${url}/api/offers`)
//       const response = await axios.get(`${url}/api/offers`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       })
//       console.log("Offers fetched:", response.data)
//       if (response.data.success) {
//         setOffers(response.data.data)
//       } else {
//         setError(response.data.message || "Failed to load offers.")
//         toast.error(response.data.message || "Failed to load offers", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         })
//       }
//     } catch (error) {
//       console.error("Error fetching offers:", error.response?.data || error.message)
//       setError(error.response?.data?.message || "Failed to load offers. Check token or API status.")
//       toast.error(error.response?.data?.message || "Failed to load offers", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//     } finally {
//       setLoading(false)
//     }
//   }

//   const handleAddOrUpdateOffer = async (e) => {
//     e.preventDefault()
//     if (!newOffer.type || !newOffer.title || !newOffer.description || !newOffer.targetCategory) {
//       setError("Please fill all required fields (Type, Title, Description, Target Category).")
//       toast.error("Please fill all required fields", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//       return
//     }
//     try {
//       const payload = {
//         type: newOffer.type,
//         title: newOffer.title,
//         description: newOffer.description,
//         expiry: newOffer.expiry ? new Date(newOffer.expiry).toISOString() : undefined,
//         discount: newOffer.discount ? Number(newOffer.discount) : undefined,
//         targetCategory: newOffer.targetCategory || undefined,
//         targetProduct: newOffer.targetProduct || undefined,
//         image: newOffer.image || undefined,
//       }
//       console.log(isEditing ? "Updating offer payload:" : "Adding offer payload:", payload)
//       const response = isEditing
//         ? await axios.put(`${url}/api/offers/${newOffer._id}`, payload, {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true,
//           })
//         : await axios.post(`${url}/api/offers`, payload, {
//             headers: { Authorization: `Bearer ${token}` },
//             withCredentials: true,
//           })
//       console.log(isEditing ? "Update offer response:" : "Add offer response:", response.data)
//       if (response.data.success) {
//         setOffers(
//           isEditing
//             ? offers.map((offer) => (offer._id === newOffer._id ? response.data.data : offer))
//             : [...offers, response.data.data],
//         )
//         setNewOffer({
//           _id: null,
//           type: "",
//           title: "",
//           description: "",
//           expiry: "",
//           discount: "",
//           targetCategory: "",
//           targetProduct: "",
//           image: "",
//         })
//         setError(null)
//         setIsEditing(false)
//         toast.success(isEditing ? "Offer Updated Successfully" : "Offer Added Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         })
//       } else {
//         setError(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer.`)
//         toast.error(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         })
//       }
//     } catch (error) {
//       console.error(`Error ${isEditing ? "updating" : "adding"} offer:`, error.response?.data || error.message)
//       setError(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer.`)
//       toast.error(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//     }
//   }

//   const handleEditOffer = (offer) => {
//     console.log("Editing offer:", offer)
//     setNewOffer({
//       _id: offer._id,
//       type: offer.type || "",
//       title: offer.title || "",
//       description: offer.description || "",
//       expiry: offer.expiry ? new Date(offer.expiry).toISOString().split("T")[0] : "",
//       discount: offer.discount?.toString() || "",
//       targetCategory: offer.targetCategory || "",
//       targetProduct: offer.targetProduct || "",
//       image: offer.image || "",
//     })
//     setIsEditing(true)
//   }

//   const handleAddCategory = async (e) => {
//     e.preventDefault()
//     const trimmedCategory = newCategory.trim()
//     if (trimmedCategory && !offerCategories.includes(trimmedCategory) && /^[A-Za-z\s]+$/.test(trimmedCategory)) {
//       try {
//         console.log("Adding offer category:", trimmedCategory)
//         const response = await axios.post(
//           `${url}/api/offer-categories`,
//           { name: trimmedCategory },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true },
//         )
//         console.log("Add offer category response:", response.data)
//         if (response.data.success) {
//           setOfferCategories([...offerCategories, response.data.data.name])
//           setNewCategory("")
//           setError(null)
//           toast.success("Category Added Successfully", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "success-toast",
//             style: { background: "#39e079", color: "#fff" },
//           })
//         } else {
//           setError(response.data.message || "Failed to add category.")
//           toast.error(response.data.message || "Failed to add category", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "error-toast",
//             style: { background: "#ff4d4d", color: "#fff" },
//           })
//         }
//       } catch (error) {
//         console.error("Error adding offer category:", error.response?.data || error.message)
//         setError(error.response?.data?.message || "Failed to add category.")
//         toast.error(error.response?.data?.message || "Failed to add category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         })
//       }
//     } else {
//       setError("Category must be unique, non-empty, and contain only letters and spaces.")
//       toast.error("Category must be unique, non-empty, and contain only letters and spaces", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//     }
//   }

//   const handleDeleteCategory = async (category) => {
//     try {
//       console.log("Deleting offer category:", category)
//       const response = await axios.delete(`${url}/api/offer-categories/${category}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       })
//       console.log("Delete offer category response:", response.data)
//       if (response.data.success) {
//         setOfferCategories(offerCategories.filter((cat) => cat !== category))
//         toast.success("Category Deleted Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         })
//       } else {
//         setError(response.data.message || "Failed to delete category.")
//         toast.error(response.data.message || "Failed to delete category", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         })
//       }
//     } catch (error) {
//       console.error("Error deleting offer category:", error.response?.data || error.message)
//       setError(error.response?.data?.message || "Failed to delete category.")
//       toast.error(error.response?.data?.message || "Failed to delete category", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//     }
//   }

//   const handleDeleteOffer = async (id) => {
//     try {
//       console.log("Deleting offer with ID:", id)
//       const response = await axios.delete(`${url}/api/offers/${id}`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       })
//       console.log("Delete offer response:", response.data)
//       if (response.data.success) {
//         setOffers(offers.filter((offer) => offer._id !== id))
//         toast.success("Offer Deleted Successfully", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         })
//       } else {
//         setError(response.data.message || "Failed to delete offer.")
//         toast.error(response.data.message || "Failed to delete offer", {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "error-toast",
//           style: { background: "#ff4d4d", color: "#fff" },
//         })
//       }
//     } catch (error) {
//       console.error("Error deleting offer:", error.response?.data || error.message)
//       setError(error.response?.data?.message || "Failed to delete offer.")
//       toast.error(error.response?.data?.message || "Failed to delete offer", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       })
//     }
//   }

//   return (
//     <div className="offers">
//       <div className="offers-header">
//         <h1>Offers</h1>
//         <p>Manage promotional offers and special deals</p>
//       </div>

//       {error && <div className="error-message">{error}</div>}

//       {loading ? (
//         <div className="loading">
//           <div className="spinner"></div>
//           Loading offers...
//         </div>
//       ) : (
//         <div className="offers-container">
//           <div className="offers-section">
//             <h3>Offer Categories</h3>
//             <form onSubmit={handleAddCategory} className="category-form">
//               <input
//                 type="text"
//                 value={newCategory}
//                 onChange={(e) => setNewCategory(e.target.value)}
//                 placeholder="New Offer Category"
//                 required
//               />
//               <button type="submit">Add Category</button>
//             </form>
//             <div className="offer-categories-grid">
//               {offerCategories.map((cat) => (
//                 <div key={cat} className="category-item">
//                   <span>{cat}</span>
//                   <button onClick={() => handleDeleteCategory(cat)} className="delete-category-btn">
//                     Remove
//                   </button>
//                 </div>
//               ))}
//             </div>
//           </div>

//           <div className="offers-section">
//             <h3>{isEditing ? "Update Offer" : "Add New Offer"}</h3>
//             <form onSubmit={handleAddOrUpdateOffer} className="offer-form">
//               <div className="form-group">
//                 <label>Offer Type *</label>
//                 <select
//                   value={newOffer.type}
//                   onChange={(e) => setNewOffer({ ...newOffer, type: e.target.value })}
//                   required
//                 >
//                   <option value="">Select Offer Type</option>
//                   {offerCategories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Offer Title *</label>
//                 <input
//                   type="text"
//                   value={newOffer.title}
//                   onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
//                   placeholder="Offer Title"
//                   required
//                 />
//               </div>

//               <div className="form-group full-width">
//                 <label>Description *</label>
//                 <input
//                   type="text"
//                   value={newOffer.description}
//                   onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
//                   placeholder="Description"
//                   required
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Expiry Date</label>
//                 <input
//                   type="date"
//                   value={newOffer.expiry}
//                   onChange={(e) => setNewOffer({ ...newOffer, expiry: e.target.value })}
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Discount (%)</label>
//                 <input
//                   type="number"
//                   value={newOffer.discount}
//                   onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
//                   placeholder="Discount (%)"
//                   min="0"
//                   max="100"
//                 />
//               </div>

//               <div className="form-group">
//                 <label>Target Category *</label>
//                 <select
//                   value={newOffer.targetCategory}
//                   onChange={(e) => setNewOffer({ ...newOffer, targetCategory: e.target.value, targetProduct: "" })}
//                   required
//                 >
//                   <option value="">Select Target Category</option>
//                   {categories.map((cat) => (
//                     <option key={cat} value={cat}>
//                       {cat}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group">
//                 <label>Target Product (Optional)</label>
//                 <select
//                   value={newOffer.targetProduct}
//                   onChange={(e) => setNewOffer({ ...newOffer, targetProduct: e.target.value })}
//                   disabled={!newOffer.targetCategory}
//                 >
//                   <option value="">Select Target Product (Optional)</option>
//                   {products.map((product) => (
//                     <option key={product._id} value={product._id}>
//                       {product.name}
//                     </option>
//                   ))}
//                 </select>
//               </div>

//               <div className="form-group full-width">
//                 <label>Image URL (Optional)</label>
//                 <input
//                   type="text"
//                   value={newOffer.image}
//                   onChange={(e) => setNewOffer({ ...newOffer, image: e.target.value })}
//                   placeholder="Image URL (Optional)"
//                 />
//               </div>

//               <div className="form-buttons full-width">
//                 <button type="submit">{isEditing ? "Update Offer" : "Add Offer"}</button>
//                 {isEditing && (
//                   <button
//                     type="button"
//                     onClick={() => {
//                       setNewOffer({
//                         _id: null,
//                         type: "",
//                         title: "",
//                         description: "",
//                         expiry: "",
//                         discount: "",
//                         targetCategory: "",
//                         targetProduct: "",
//                         image: "",
//                       })
//                       setIsEditing(false)
//                     }}
//                   >
//                     Cancel
//                   </button>
//                 )}
//               </div>
//             </form>
//           </div>

//           <div className="offers-list-section">
//             <div className="offers-list-header">
//               <h3>Current Offers</h3>
//             </div>
//             <div className="offers-grid">
//               {Array.isArray(offers) && offers.length > 0 ? (
//                 offers.map((offer) => (
//                   <div key={offer._id} className="offer-item">
//                     <div className="offer-details">
//                       <h4 className="offer-title">
//                         {offer.title} ({offer.type})
//                       </h4>
//                       <p className="offer-detail-item">
//                         <strong>Expires:</strong>{" "}
//                         {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}
//                       </p>
//                       <p className="offer-detail-item">
//                         <strong>Category:</strong> {offer.targetCategory || "N/A"}
//                       </p>
//                       <p className="offer-detail-item">
//                         <strong>Product:</strong>{" "}
//                         {offer.targetProduct
//                           ? food_list.find((p) => p._id === offer.targetProduct)?.name || "N/A"
//                           : "N/A"}
//                       </p>
//                       <p className="offer-detail-item">
//                         <strong>Image:</strong> {offer.image || "N/A"}
//                       </p>
//                     </div>
//                     <div className="offer-actions">
//                       <button onClick={() => handleEditOffer(offer)} className="edit-btn">
//                         Edit
//                       </button>
//                       <button onClick={() => handleDeleteOffer(offer._id)} className="delete-btn">
//                         Delete
//                       </button>
//                     </div>
//                   </div>
//                 ))
//               ) : (
//                 <div className="no-offers">No offers available.</div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   )
// }

// export default Offers

















import React, { useState, useContext, useEffect } from 'react';
import { StoreContext } from "../../context/StoreContext";
import axios from 'axios';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import './Offers.css';

const Offers = () => {
  const { url, token, admin, offers = [], setOffers, food_list = [] } = useContext(StoreContext);
  const navigate = useNavigate();
  const [offerCategories, setOfferCategories] = useState([]);
  const [newOffer, setNewOffer] = useState({
    _id: null,
    type: "",
    title: "",
    description: "",
    expiry: "",
    discount: "",
    targetCategory: "",
    targetProduct: "",
    image: "",
  });
  const [newCategory, setNewCategory] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  // Get unique categories from food_list with fallback
  const categories = food_list && Array.isArray(food_list)
    ? [...new Set(food_list.filter(item => item && item.category).map(item => item.category))]
    : [];

  // Get products for the selected category
  const products = newOffer.targetCategory
    ? food_list.filter(item => item && item.category === newOffer.targetCategory)
    : [];

  // Debug food_list, categories, and offers
  useEffect(() => {
    console.log("food_list:", food_list);
    console.log("Categories:", categories);
    console.log("Products for category", newOffer.targetCategory, ":", products);
    console.log("Offers state:", offers);
    if (!food_list || food_list.length === 0) {
      console.warn("food_list is empty or undefined. Ensure products are loaded in StoreContext.");
      setError("No categories available. Please add products to create categories.");
    }
  }, [food_list, newOffer.targetCategory, products, offers]);

  // Fetch offer categories and offers on mount
  useEffect(() => {
    if (!admin || !token) {
      console.log("No admin or token, redirecting to /");
      toast.error("Please Login as Admin", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      });
      navigate("/");
    } else {
      fetchOfferCategories();
      fetchOffers();
    }
  }, [admin, token, navigate, url]);

  const fetchOfferCategories = async () => {
    try {
      console.log("Fetching offer categories from:", `${url}/api/offer-categories`);
      const response = await axios.get(`${url}/api/offer-categories`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Offer categories fetched:", response.data);
      if (response.data.success) {
        setOfferCategories(response.data.data);
      } else {
        setError(response.data.message || "Failed to load offer categories.");
        toast.error(response.data.message || "Failed to load offer categories", {
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
      console.error("Error fetching offer categories:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to load offer categories.");
      toast.error(error.response?.data?.message || "Failed to load offer categories", {
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

  const fetchOffers = async () => {
    setLoading(true);
    setError(null);
    try {
      console.log("Fetching offers from:", `${url}/api/offers`);
      const response = await axios.get(`${url}/api/offers`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Offers fetched:", response.data);
      if (response.data.success) {
        setOffers(response.data.data);
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
      setError(error.response?.data?.message || "Failed to load offers. Check token or API status.");
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

  const handleAddOrUpdateOffer = async (e) => {
    e.preventDefault();
    if (!newOffer.type || !newOffer.title || !newOffer.description || !newOffer.targetCategory) {
      setError("Please fill all required fields (Type, Title, Description, Target Category).");
      toast.error("Please fill all required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      });
      return;
    }
    try {
      const payload = {
        type: newOffer.type,
        title: newOffer.title,
        description: newOffer.description,
        expiry: newOffer.expiry ? new Date(newOffer.expiry).toISOString() : undefined,
        discount: newOffer.discount ? Number(newOffer.discount) : undefined,
        targetCategory: newOffer.targetCategory || undefined,
        targetProduct: newOffer.targetProduct || undefined,
        image: newOffer.image || undefined,
      };
      console.log(isEditing ? "Updating offer payload:" : "Adding offer payload:", payload);
      const response = isEditing
        ? await axios.put(
            `${url}/api/offers/${newOffer._id}`,
            payload,
            { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
          )
        : await axios.post(
            `${url}/api/offers`,
            payload,
            { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
          );
      console.log(isEditing ? "Update offer response:" : "Add offer response:", response.data);
      if (response.data.success) {
        setOffers(isEditing
          ? offers.map(offer => offer._id === newOffer._id ? response.data.data : offer)
          : [...offers, response.data.data]);
        setNewOffer({ _id: null, type: "", title: "", description: "", expiry: "", discount: "", targetCategory: "", targetProduct: "", image: "" });
        setError(null);
        setIsEditing(false);
        toast.success(isEditing ? "Offer Updated Successfully" : "Offer Added Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        });
      } else {
        setError(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer.`);
        toast.error(response.data.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
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
      console.error(`Error ${isEditing ? "updating" : "adding"} offer:`, error.response?.data || error.message);
      setError(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer.`);
      toast.error(error.response?.data?.message || `Failed to ${isEditing ? "update" : "add"} offer`, {
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

  const handleEditOffer = (offer) => {
    console.log("Editing offer:", offer);
    setNewOffer({
      _id: offer._id,
      type: offer.type || "",
      title: offer.title || "",
      description: offer.description || "",
      expiry: offer.expiry ? new Date(offer.expiry).toISOString().split('T')[0] : "",
      discount: offer.discount?.toString() || "",
      targetCategory: offer.targetCategory || "",
      targetProduct: offer.targetProduct || "",
      image: offer.image || "",
    });
    setIsEditing(true);
  };

  const handleAddCategory = async (e) => {
    e.preventDefault();
    const trimmedCategory = newCategory.trim();
    if (trimmedCategory && !offerCategories.includes(trimmedCategory) && /^[A-Za-z\s]+$/.test(trimmedCategory)) {
      try {
        console.log("Adding offer category:", trimmedCategory);
        const response = await axios.post(
          `${url}/api/offer-categories`,
          { name: trimmedCategory },
          { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
        );
        console.log("Add offer category response:", response.data);
        if (response.data.success) {
          setOfferCategories([...offerCategories, response.data.data.name]);
          setNewCategory("");
          setError(null);
          toast.success("Category Added Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "success-toast",
            style: { background: "#39e079", color: "#fff" },
          });
        } else {
          setError(response.data.message || "Failed to add category.");
          toast.error(response.data.message || "Failed to add category", {
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
        console.error("Error adding offer category:", error.response?.data || error.message);
        setError(error.response?.data?.message || "Failed to add category.");
        toast.error(error.response?.data?.message || "Failed to add category", {
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
    } else {
      setError("Category must be unique, non-empty, and contain only letters and spaces.");
      toast.error("Category must be unique, non-empty, and contain only letters and spaces", {
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

  const handleDeleteCategory = async (category) => {
    try {
      console.log("Deleting offer category:", category);
      const response = await axios.delete(`${url}/api/offer-categories/${category}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Delete offer category response:", response.data);
      if (response.data.success) {
        setOfferCategories(offerCategories.filter(cat => cat !== category));
        toast.success("Category Deleted Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        });
      } else {
        setError(response.data.message || "Failed to delete category.");
        toast.error(response.data.message || "Failed to delete category", {
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
      console.error("Error deleting offer category:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to delete category.");
      toast.error(error.response?.data?.message || "Failed to delete category", {
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

  const handleDeleteOffer = async (id) => {
    try {
      console.log("Deleting offer with ID:", id);
      const response = await axios.delete(`${url}/api/offers/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Delete offer response:", response.data);
      if (response.data.success) {
        setOffers(offers.filter((offer) => offer._id !== id));
        toast.success("Offer Deleted Successfully", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        });
      } else {
        setError(response.data.message || "Failed to delete offer.");
        toast.error(response.data.message || "Failed to delete offer", {
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
      console.error("Error deleting offer:", error.response?.data || error.message);
      setError(error.response?.data?.message || "Failed to delete offer.");
      toast.error(error.response?.data?.message || "Failed to delete offer", {
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
    <div className="offers">
      <div className="offers-header">
        <h1>Offers</h1>
        <p>Manage promotional offers and special deals</p>
      </div>

      {error && <div className="error-message">{error}</div>}

      {loading ? (
        <div className="loading">
          <div className="spinner"></div>
          Loading offers...
        </div>
      ) : (
        <div className="offers-container">
          <div className="offers-section">
            <h3>Offer Categories</h3>
            <form onSubmit={handleAddCategory} className="category-form">
              <input
                type="text"
                value={newCategory}
                onChange={(e) => setNewCategory(e.target.value)}
                placeholder="New Offer Category"
                required
              />
              <button type="submit">Add Category</button>
            </form>
            <div className="offer-categories-grid">
              {offerCategories.length > 0 ? (
                offerCategories.map((cat) => (
                  <div key={cat} className="category-item">
                    <span>{cat}</span>
                    <button onClick={() => handleDeleteCategory(cat)} className="delete-category-btn">
                      Remove
                    </button>
                  </div>
                ))
              ) : (
                <div className="no-categories">No offer categories available.</div>
              )}
            </div>
          </div>

          <div className="offers-section">
            <h3>{isEditing ? "Update Offer" : "Add New Offer"}</h3>
            <form onSubmit={handleAddOrUpdateOffer} className="offer-form">
              <div className="form-group">
                <label>Offer Type *</label>
                <select
                  value={newOffer.type}
                  onChange={(e) => setNewOffer({ ...newOffer, type: e.target.value })}
                  required
                >
                  <option value="">Select Offer Type</option>
                  {offerCategories.length > 0 ? (
                    offerCategories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No offer categories available
                    </option>
                  )}
                </select>
              </div>

              <div className="form-group">
                <label>Offer Title *</label>
                <input
                  type="text"
                  value={newOffer.title}
                  onChange={(e) => setNewOffer({ ...newOffer, title: e.target.value })}
                  placeholder="Offer Title"
                  required
                />
              </div>

              <div className="form-group full-width">
                <label>Description *</label>
                <input
                  type="text"
                  value={newOffer.description}
                  onChange={(e) => setNewOffer({ ...newOffer, description: e.target.value })}
                  placeholder="Description"
                  required
                />
              </div>

              <div className="form-group">
                <label>Expiry Date</label>
                <input
                  type="date"
                  value={newOffer.expiry}
                  onChange={(e) => setNewOffer({ ...newOffer, expiry: e.target.value })}
                  placeholder="Expiry Date"
                />
              </div>

              <div className="form-group">
                <label>Discount (%)</label>
                <input
                  type="number"
                  value={newOffer.discount}
                  onChange={(e) => setNewOffer({ ...newOffer, discount: e.target.value })}
                  placeholder="Discount (%)"
                  min="0"
                  max="100"
                />
              </div>

              <div className="form-group">
                <label>Target Category *</label>
                <select
                  value={newOffer.targetCategory}
                  onChange={(e) => setNewOffer({ ...newOffer, targetCategory: e.target.value, targetProduct: "" })}
                  required
                >
                  <option value="">Select Target Category</option>
                  {categories.length > 0 ? (
                    categories.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No categories available
                    </option>
                  )}
                </select>
              </div>

              <div className="form-group">
                <label>Target Product (Optional)</label>
                <select
                  value={newOffer.targetProduct}
                  onChange={(e) => setNewOffer({ ...newOffer, targetProduct: e.target.value })}
                  disabled={!newOffer.targetCategory || products.length === 0}
                >
                  <option value="">Select Target Product (Optional)</option>
                  {products.length > 0 ? (
                    products.map((product) => (
                      <option key={product._id} value={product._id}>
                        {product.name}
                      </option>
                    ))
                  ) : (
                    <option value="" disabled>
                      No products available
                    </option>
                  )}
                </select>
              </div>

              <div className="form-group full-width">
                <label>Image URL (Optional)</label>
                <input
                  type="text"
                  value={newOffer.image}
                  onChange={(e) => setNewOffer({ ...newOffer, image: e.target.value })}
                  placeholder="Image URL (Optional)"
                />
              </div>

              <div className="form-buttons full-width">
                <button type="submit">{isEditing ? "Update Offer" : "Add Offer"}</button>
                {isEditing && (
                  <button
                    type="button"
                    onClick={() => {
                      setNewOffer({ _id: null, type: "", title: "", description: "", expiry: "", discount: "", targetCategory: "", targetProduct: "", image: "" });
                      setIsEditing(false);
                    }}
                  >
                    Cancel
                  </button>
                )}
              </div>
            </form>
          </div>

          <div className="offers-list-section">
            <div className="offers-list-header">
              <h3>Current Offers</h3>
            </div>
            <div className="offers-grid">
              {Array.isArray(offers) && offers.length > 0 ? (
                offers.map((offer) => (
                  <div key={offer._id} className="offer-item">
                    <div className="offer-details">
                      <h4 className="offer-title">
                        {offer.title} ({offer.type})
                      </h4>
                      <p className="offer-detail-item">
                        <strong>Expires:</strong>{" "}
                        {offer.expiry ? new Date(offer.expiry).toLocaleDateString() : "No expiry"}
                      </p>
                      <p className="offer-detail-item">
                        <strong>Category:</strong> {offer.targetCategory || "N/A"}
                      </p>
                      <p className="offer-detail-item">
                        <strong>Product:</strong>{" "}
                        {offer.targetProduct
                          ? food_list.find((p) => p._id === offer.targetProduct)?.name || "N/A"
                          : "N/A"}
                      </p>
                      <p className="offer-detail-item">
                        <strong>Image:</strong> {offer.image || "N/A"}
                      </p>
                    </div>
                    <div className="offer-actions">
                      <button onClick={() => handleEditOffer(offer)} className="edit-btn">
                        Edit
                      </button>
                      <button onClick={() => handleDeleteOffer(offer._id)} className="delete-btn">
                        Delete
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <div className="no-offers">No offers available.</div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offers;