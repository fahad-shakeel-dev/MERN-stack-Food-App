// import React, { useEffect, useState } from "react";
// import "./List.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const List = ({ url }) => {
//   const navigate = useNavigate();
//   const { token,admin } = useContext(StoreContext);
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     const response = await axios.get(`${url}/api/food/list`);
//     if (response.data.success) {
//       setList(response.data.data);
//     } else {
//       toast.error("Error");
//     }
//   };

//   const removeFood = async (foodId) => {
//     const response = await axios.post(
//       `${url}/api/food/remove`,
//       { id: foodId },
//       { headers: { token } }
//     );
//     await fetchList();
//     if (response.data.success) {
//       toast.success(response.data.message);
//     } else {
//       toast.error("Error");
//     }
//   };
//   useEffect(() => {
//     if (!admin && !token) {
//       toast.error("Please Login First");
//       navigate("/");
//     }
//     fetchList();
//   }, []);

//   return (
//     <div className="list add flex-col">
//       <p>All Food List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.map((item, index) => {
//           return (
//             <div key={index} className="list-table-format">
//               <img src={`${url}/images/` + item.image} alt="" />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>${item.price}</p>
//               <p onClick={() => removeFood(item._id)} className="cursor">
//                 X
//               </p>
//             </div>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default List;







// import React, { useEffect, useState, useContext } from "react";
// import "./List.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const List = () => {
//   const navigate = useNavigate();
//   const { url, token, admin } = useContext(StoreContext);
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       console.log("Fetching food list with URL:", `${url}/api/food/list`);
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Food list response:", response.data);
//       if (response.data.success) {
//         setList(response.data.data);
//         console.log("Food list fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching food list", {
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
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching food list", {
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

//   const removeFood = async (foodId) => {
//     try {
//       console.log("Removing food with ID:", foodId);
//       const response = await axios.post(
//         `${url}/api/food/remove`,
//         { id: foodId },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Remove food response:", response.data);
//       if (response.data.success) {
//         await fetchList();
//         toast.success(response.data.message, {
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
//         toast.error(response.data.message || "Error removing food", {
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
//       console.error("Remove food error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error removing food", {
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

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login First", {
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
//       fetchList();
//     }
//   }, [admin, token, navigate]);

//   return (
//     <div className="list add flex-col">
//       <p>All Food List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Action</b>
//         </div>
//         {list.length === 0 ? (
//           <p>No food items found</p>
//         ) : (
//           list.map((item, index) => (
//             <div key={index} className="list-table-format">
//               <img src={`${url}/images/${item.image}`} alt={item.name} />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>${item.price}</p>
//               <p onClick={() => removeFood(item._id)} className="cursor">
//                 X
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;

















// import React, { useEffect, useState, useContext } from "react";
// import "./List.css";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const List = () => {
//   const navigate = useNavigate();
//   const { url, token, admin } = useContext(StoreContext);
//   const [list, setList] = useState([]);

//   const fetchList = async () => {
//     try {
//       console.log("Fetching food list with URL:", `${url}/api/food/list`);
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Food list response:", response.data);
//       if (response.data.success) {
//         setList(response.data.data);
//         console.log("Food list fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching food list", {
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
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching food list", {
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

//   const removeFood = async (foodId) => {
//     try {
//       console.log("Removing food with ID:", foodId);
//       const response = await axios.post(
//         `${url}/api/food/remove`,
//         { id: foodId },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Remove food response:", response.data);
//       if (response.data.success) {
//         await fetchList();
//         toast.success(response.data.message, {
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
//         toast.error(response.data.message || "Error removing food", {
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
//       console.error("Remove food error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error removing food", {
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

//   const toggleFeatured = async (foodId, currentStatus) => {
//     try {
//       console.log(`Toggling isFeatured for food ID: ${foodId}, current status: ${currentStatus}`);
//       const response = await axios.post(
//         `${url}/api/food/update`,
//         { id: foodId, isFeatured: !currentStatus },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Toggle featured response:", response.data);
//       if (response.data.success) {
//         await fetchList();
//         toast.success(`Food ${!currentStatus ? "marked as featured" : "unmarked as featured"}`, {
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
//         toast.error(response.data.message || "Error toggling featured status", {
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
//       console.error("Toggle featured error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error toggling featured status", {
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

//   const togglePopular = async (foodId, currentStatus) => {
//     try {
//       console.log(`Toggling isPopular for food ID: ${foodId}, current status: ${currentStatus}`);
//       const response = await axios.post(
//         `${url}/api/food/update`,
//         { id: foodId, isPopular: !currentStatus },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         }
//       );
//       console.log("Toggle popular response:", response.data);
//       if (response.data.success) {
//         await fetchList();
//         toast.success(`Food ${!currentStatus ? "marked as popular" : "unmarked as popular"}`, {
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
//         toast.error(response.data.message || "Error toggling popular status", {
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
//       console.error("Toggle popular error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error toggling popular status", {
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

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login First", {
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
//       fetchList();
//     }
//   }, [admin, token, navigate]);

//   return (
//     <div className="list add flex-col">
//       <p>All Food List</p>
//       <div className="list-table">
//         <div className="list-table-format title">
//           <b>Image</b>
//           <b>Name</b>
//           <b>Category</b>
//           <b>Price</b>
//           <b>Featured</b>
//           <b>Popular</b>
//           <b>Action</b>
//         </div>
//         {list.length === 0 ? (
//           <p>No food items found</p>
//         ) : (
//           list.map((item, index) => (
//             <div key={index} className="list-table-format">
//               <img src={`${url}/images/${item.image}`} alt={item.name} />
//               <p>{item.name}</p>
//               <p>{item.category}</p>
//               <p>${item.price}</p>
//               <p
//                 onClick={() => toggleFeatured(item._id, item.isFeatured)}
//                 className="cursor"
//               >
//                 {item.isFeatured ? "★ Featured" : "☆ Not Featured"}
//               </p>
//               <p
//                 onClick={() => togglePopular(item._id, item.isPopular)}
//                 className="cursor"
//               >
//                 {item.isPopular ? "🔥 Popular" : "❄ Not Popular"}
//               </p>
//               <p onClick={() => removeFood(item._id)} className="cursor">
//                 X
//               </p>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// };

// export default List;



















import React, { useEffect, useState, useContext } from "react";
import "./List.css";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const List = () => {
  const navigate = useNavigate();
  const { url, token, admin } = useContext(StoreContext);
  const [list, setList] = useState([]);

  const fetchList = async () => {
    try {
      console.log("Fetching food list with URL:", `${url}/api/food/list`);
      const response = await axios.get(`${url}/api/food/list`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Food list response:", response.data);
      if (response.data.success) {
        setList(response.data.data);
        console.log("Food list fetched:", response.data.data);
      } else {
        toast.error(response.data.message || "Error fetching food list", {
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
      console.error("Fetch food list error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching food list", {
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

  const removeFood = async (foodId) => {
    try {
      console.log("Removing food with ID:", foodId);
      const response = await axios.post(
        `${url}/api/food/remove`,
        { id: foodId },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      console.log("Remove food response:", response.data);
      if (response.data.success) {
        await fetchList();
        toast.success(response.data.message, {
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
        toast.error(response.data.message || "Error removing food", {
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
      console.error("Remove food error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error removing food", {
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

  const toggleFeatured = async (foodId, currentStatus) => {
    try {
      console.log(`Toggling isFeatured for food ID: ${foodId}, current status: ${currentStatus}`);
      const response = await axios.post(
        `${url}/api/food/update`,
        { id: foodId, isFeatured: !currentStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      console.log("Toggle featured response:", response.data);
      if (response.data.success) {
        await fetchList();
        toast.success(`Food ${!currentStatus ? "marked as featured" : "unmarked as featured"}`, {
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
        toast.error(response.data.message || "Error toggling featured status", {
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
      console.error("Toggle featured error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error toggling featured status", {
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

  const togglePopular = async (foodId, currentStatus) => {
    try {
      console.log(`Toggling isPopular for food ID: ${foodId}, current status: ${currentStatus}`);
      const response = await axios.post(
        `${url}/api/food/update`,
        { id: foodId, isPopular: !currentStatus },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      console.log("Toggle popular response:", response.data);
      if (response.data.success) {
        await fetchList();
        toast.success(`Food ${!currentStatus ? "marked as popular" : "unmarked as popular"}`, {
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
        toast.error(response.data.message || "Error toggling popular status", {
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
      console.error("Toggle popular error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error toggling popular status", {
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

  useEffect(() => {
    if (!admin || !token) {
      console.log("No admin or token, redirecting to /");
      toast.error("Please Login First", {
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
      fetchList();
    }
  }, [admin, token, navigate]);

  return (
    <div className="list">
      <div className="list-header">
        <h1>Products</h1>
        <p>Manage your food items and menu</p>
      </div>
      
      <div className="list-container">
        <div className="list-table">
          <div className="list-table-header">
            <div>Image</div>
            <div>Name</div>
            <div>Category</div>
            <div>Price</div>
            <div>Featured</div>
            <div>Popular</div>
            <div>Action</div>
          </div>
          
          {list.length === 0 ? (
            <div className="no-products">No products found</div>
          ) : (
            list.map((item, index) => (
              <div key={index} className="list-table-row">
                <img 
                  src={`${url}/images/${item.image}`} 
                  alt={item.name} 
                  className="product-image"
                />
                <p className="product-name">{item.name}</p>
                <p className="product-category">{item.category}</p>
                <p className="product-price">${item.price}</p>
                <span
                  onClick={() => toggleFeatured(item._id, item.isFeatured)}
                  className={`status-badge ${item.isFeatured ? 'featured' : 'not-featured'}`}
                >
                  {item.isFeatured ? "★ Featured" : "☆ Not Featured"}
                </span>
                <span
                  onClick={() => togglePopular(item._id, item.isPopular)}
                  className={`status-badge ${item.isPopular ? 'popular' : 'not-popular'}`}
                >
                  {item.isPopular ? "🔥 Popular" : "❄ Not Popular"}
                </span>
                <button 
                  onClick={() => removeFood(item._id)} 
                  className="delete-btn"
                >
                  ×
                </button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default List;
