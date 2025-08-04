// // import React from "react";
// // import "./Orders.css";
// // import { useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { useEffect } from "react";
// // import { assets } from "../../assets/assets";
// // import { useContext } from "react";
// // import { StoreContext } from "../../context/StoreContext";
// // import { useNavigate } from "react-router-dom";

// // const Orders = ({ url }) => {
// //   const navigate = useNavigate();
// //   const { token, admin } = useContext(StoreContext);
// //   const [orders, setOrders] = useState([]);

// //   const fetchAllOrder = async () => {
// //     const response = await axios.get(url + "/api/order/list", {
// //       headers: { token },
// //     });
// //     if (response.data.success) {
// //       setOrders(response.data.data);
// //     }
// //   };

// //   const statusHandler = async (event, orderId) => {
// //     const response = await axios.post(
// //       url + "/api/order/status",
// //       {
// //         orderId,
// //         status: event.target.value,
// //       },
// //       { headers: { token } }
// //     );
// //     if (response.data.success) {
// //       toast.success(response.data.message);
// //       await fetchAllOrder();
// //     } else {
// //       toast.error(response.data.message);
// //     }
// //   };
// //   useEffect(() => {
// //     if (!admin && !token) {
// //       toast.error("Please Login First");
// //       navigate("/");
// //     }
// //     fetchAllOrder();
// //   }, []);

// //   return (
// //     <div className="order add">
// //       <h3>Order Page</h3>
// //       <div className="order-list">
// //         {orders.map((order, index) => (
// //           <div key={index} className="order-item">
// //             <img src={assets.parcel_icon} alt="" />
// //             <div>
// //               <p className="order-item-food">
// //                 {order.items.map((item, index) => {
// //                   if (index === order.items.length - 1) {
// //                     return item.name + " x " + item.quantity;
// //                   } else {
// //                     return item.name + " x " + item.quantity + ", ";
// //                   }
// //                 })}
// //               </p>
// //               <p className="order-item-name">
// //                 {order.address.firstName + " " + order.address.lastName}
// //               </p>
// //               <div className="order-item-address">
// //                 <p>{order.address.street + ","}</p>
// //                 <p>
// //                   {order.address.city +
// //                     ", " +
// //                     order.address.state +
// //                     ", " +
// //                     order.address.country +
// //                     ", " +
// //                     order.address.zipcode}
// //                 </p>
// //               </div>
// //               <p className="order-item-phone">{order.address.phone}</p>
// //             </div>
// //             <p>Items: {order.items.length}</p>
// //             <p>${order.amount}</p>
// //             <select
// //               onChange={(event) => statusHandler(event, order._id)}
// //               value={order.status}
// //             >
// //               <option value="Food Processing">Food Processing</option>
// //               <option value="Out for delivery">Out for delivery</option>
// //               <option value="Delivered">Delivered</option>
// //             </select>
// //           </div>
// //         ))}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;










// // import React, { useEffect, useState, useContext } from "react";
// // import "./Orders.css";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { assets } from "../../assets/assets";
// // import { StoreContext } from "../../context/StoreContext";
// // import { useNavigate } from "react-router-dom";

// // const Orders = () => {
// //   const navigate = useNavigate();
// //   const { url, token, admin } = useContext(StoreContext);
// //   const [orders, setOrders] = useState([]);

// //   const fetchAllOrder = async () => {
// //     try {
// //       console.log("Fetching orders with URL:", `${url}/api/order/list`);
// //       const response = await axios.get(`${url}/api/order/list`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //         withCredentials: true,
// //       });
// //       console.log("Orders response:", response.data);
// //       if (response.data.success) {
// //         setOrders(response.data.data);
// //         console.log("Orders fetched:", response.data.data);
// //       } else {
// //         toast.error(response.data.message || "Error fetching orders", {
// //           position: "top-right",
// //           autoClose: 3000,
// //           hideProgressBar: false,
// //           closeOnClick: true,
// //           pauseOnHover: true,
// //           draggable: true,
// //           className: "error-toast",
// //           style: { background: "#ff4d4d", color: "#fff" },
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Fetch orders error:", error.response?.data || error.message);
// //       toast.error(error.response?.data?.message || "Error fetching orders", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         className: "error-toast",
// //         style: { background: "#ff4d4d", color: "#fff" },
// //       });
// //     }
// //   };

// //   const statusHandler = async (event, orderId) => {
// //     try {
// //       const status = event.target.value;
// //       console.log("Updating status for order:", orderId, "to:", status);
// //       const response = await axios.post(
// //         `${url}/api/order/status`,
// //         { orderId, status },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //           withCredentials: true,
// //         }
// //       );
// //       console.log("Status update response:", response.data);
// //       if (response.data.success) {
// //         toast.success(response.data.message, {
// //           position: "top-right",
// //           autoClose: 3000,
// //           hideProgressBar: false,
// //           closeOnClick: true,
// //           pauseOnHover: true,
// //           draggable: true,
// //           className: "success-toast",
// //           style: { background: "#39e079", color: "#fff" },
// //         });
// //         await fetchAllOrder();
// //       } else {
// //         toast.error(response.data.message || "Error updating status", {
// //           position: "top-right",
// //           autoClose: 3000,
// //           hideProgressBar: false,
// //           closeOnClick: true,
// //           pauseOnHover: true,
// //           draggable: true,
// //           className: "error-toast",
// //           style: { background: "#ff4d4d", color: "#fff" },
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Status update error:", error.response?.data || error.message);
// //       toast.error(error.response?.data?.message || "Error updating status", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         className: "error-toast",
// //         style: { background: "#ff4d4d", color: "#fff" },
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     if (!admin || !token) {
// //       console.log("No admin or token, redirecting to /");
// //       toast.error("Please Login First", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         className: "error-toast",
// //         style: { background: "#ff4d4d", color: "#fff" },
// //       });
// //       navigate("/");
// //     } else {
// //       fetchAllOrder();
// //     }
// //   }, [admin, token, navigate]);

// //   return (
// //     <div className="order add">
// //       <h3>Order Page</h3>
// //       <div className="order-list">
// //         {orders.length === 0 ? (
// //           <p>No orders found</p>
// //         ) : (
// //           orders.map((order, index) => (
// //             <div key={index} className="order-item">
// //               <img src={assets.parcel_icon} alt="Parcel Icon" />
// //               <div>
// //                 <p className="order-item-food">
// //                   {order.items.map((item, idx) => (
// //                     <span key={idx}>
// //                       {item.name} x {item.quantity}
// //                       {idx < order.items.length - 1 ? ", " : ""}
// //                     </span>
// //                   ))}
// //                 </p>
// //                 <p className="order-item-name">
// //                   {order.address.firstName} {order.address.lastName}
// //                 </p>
// //                 <div className="order-item-address">
// //                   <p>{order.address.street},</p>
// //                   <p>
// //                     {order.address.city}, {order.address.state},{" "}
// //                     {order.address.country}, {order.address.zipcode}
// //                   </p>
// //                 </div>
// //                 <p className="order-item-phone">{order.address.phone}</p>
// //               </div>
// //               <p>Items: {order.items.length}</p>
// //               <p>${order.amount}</p>
// //               <select
// //                 onChange={(event) => statusHandler(event, order._id)}
// //                 value={order.status}
// //               >
// //                 <option value="Food Processing">Food Processing</option>
// //                 <option value="Out for delivery">Out for delivery</option>
// //                 <option value="Delivered">Delivered</option>
// //               </select>
// //             </div>
// //           ))
// //         )}
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;








// // import React, { useEffect, useState, useContext } from "react";
// // import "./Orders.css";
// // import axios from "axios";
// // import { toast } from "react-toastify";
// // import { assets } from "../../assets/assets";
// // import { StoreContext } from "../../context/StoreContext";
// // import { useNavigate } from "react-router-dom";

// // const Orders = () => {
// //   const navigate = useNavigate();
// //   const { url, token, admin } = useContext(StoreContext);
// //   const [orders, setOrders] = useState([]);

// //   const fetchAllOrder = async () => {
// //     try {
// //       console.log("Fetching orders with URL:", `${url}/api/order/list`);
// //       const response = await axios.get(`${url}/api/order/list`, {
// //         headers: { Authorization: `Bearer ${token}` },
// //         withCredentials: true,
// //       });
// //       console.log("Orders response:", response.data);
// //       if (response.data.success) {
// //         setOrders(response.data.data);
// //         console.log("Orders fetched:", response.data.data);
// //       } else {
// //         toast.error(response.data.message || "Error fetching orders", {
// //           position: "top-right",
// //           autoClose: 3000,
// //           hideProgressBar: false,
// //           closeOnClick: true,
// //           pauseOnHover: true,
// //           draggable: true,
// //           className: "error-toast",
// //           style: { background: "#ff4d4d", color: "#fff" },
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Fetch orders error:", error.response?.data || error.message);
// //       toast.error(error.response?.data?.message || "Error fetching orders", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         className: "error-toast",
// //         style: { background: "#ff4d4d", color: "#fff" },
// //       });
// //     }
// //   };

// //   const statusHandler = async (event, orderId) => {
// //     try {
// //       const status = event.target.value;
// //       console.log("Updating status for order:", orderId, "to:", status);
// //       const response = await axios.post(
// //         `${url}/api/order/status`,
// //         { orderId, status },
// //         {
// //           headers: { Authorization: `Bearer ${token}` },
// //           withCredentials: true,
// //         }
// //       );
// //       console.log("Status update response:", response.data);
// //       if (response.data.success) {
// //         toast.success(response.data.message, {
// //           position: "top-right",
// //           autoClose: 3000,
// //           hideProgressBar: false,
// //           closeOnClick: true,
// //           pauseOnHover: true,
// //           draggable: true,
// //           className: "success-toast",
// //           style: { background: "#39e079", color: "#fff" },
// //         });
// //         await fetchAllOrder();
// //       } else {
// //         toast.error(response.data.message || "Error updating status", {
// //           position: "top-right",
// //           autoClose: 3000,
// //           hideProgressBar: false,
// //           closeOnClick: true,
// //           pauseOnHover: true,
// //           draggable: true,
// //           className: "error-toast",
// //           style: { background: "#ff4d4d", color: "#fff" },
// //         });
// //       }
// //     } catch (error) {
// //       console.error("Status update error:", error.response?.data || error.message);
// //       toast.error(error.response?.data?.message || "Error updating status", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         className: "error-toast",
// //         style: { background: "#ff4d4d", color: "#fff" },
// //       });
// //     }
// //   };

// //   useEffect(() => {
// //     if (!admin || !token) {
// //       console.log("No admin or token, redirecting to /");
// //       toast.error("Please Login First", {
// //         position: "top-right",
// //         autoClose: 3000,
// //         hideProgressBar: false,
// //         closeOnClick: true,
// //         pauseOnHover: true,
// //         draggable: true,
// //         className: "error-toast",
// //         style: { background: "#ff4d4d", color: "#fff" },
// //       });
// //       navigate("/");
// //     } else {
// //       fetchAllOrder();
// //     }
// //   }, [admin, token, navigate]);

// //   return (
// //     <div className="orders">
// //       <div className="orders-header">
// //         <h1>Orders</h1>
// //         <p>Manage customer orders and delivery status</p>
// //       </div>
      
// //       <div className="orders-container">
// //         <div className="orders-table">
// //           <div className="orders-table-header">
// //             <div>Order</div>
// //             <div>Customer</div>
// //             <div>Items</div>
// //             <div>Total</div>
// //             <div>Status</div>
// //             <div>Actions</div>
// //           </div>
          
// //           {orders.length === 0 ? (
// //             <div className="no-orders">No orders found</div>
// //           ) : (
// //             orders.map((order, index) => (
// //               <div key={index} className="order-item">
// //                 <div className="order-icon">
// //                   <img src={assets.parcel_icon || "/placeholder.svg"} alt="Order" />
// //                 </div>
                
// //                 <div className="order-details">
// //                   <p className="order-items">
// //                     {order.items.map((item, idx) => (
// //                       <span key={idx}>
// //                         {item.name} x {item.quantity}
// //                         {idx < order.items.length - 1 ? ", " : ""}
// //                       </span>
// //                     ))}
// //                   </p>
// //                   <p className="customer-name">
// //                     {order.address.firstName} {order.address.lastName}
// //                   </p>
// //                   <div className="customer-address">
// //                     <p>{order.address.street}</p>
// //                     <p>
// //                       {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
// //                     </p>
// //                   </div>
// //                   <p className="customer-phone">{order.address.phone}</p>
// //                 </div>
                
// //                 <p className="order-count">{order.items.length} items</p>
// //                 <p className="order-amount">${order.amount}</p>
                
// //                 <select
// //                   className="status-select"
// //                   onChange={(event) => statusHandler(event, order._id)}
// //                   value={order.status}
// //                 >
// //                   <option value="Food Processing">Food Processing</option>
// //                   <option value="Out for delivery">Out for delivery</option>
// //                   <option value="Delivered">Delivered</option>
// //                 </select>
                
// //                 <div></div>
// //               </div>
// //             ))
// //           )}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Orders;















// "use client"

// import { useEffect, useState, useContext } from "react"
// import "./Orders.css"
// import axios from "axios"
// import { toast } from "react-toastify"
// import { assets } from "../../assets/assets"
// import { StoreContext } from "../../context/StoreContext"
// import { useNavigate } from "react-router-dom"

// const Orders = () => {
//   const navigate = useNavigate()
//   const { url, token, admin } = useContext(StoreContext)
//   const [orders, setOrders] = useState([])

//   const fetchAllOrder = async () => {
//     try {
//       console.log("Fetching orders with URL:", `${url}/api/order/list`)
//       const response = await axios.get(`${url}/api/order/list`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       })
//       console.log("Orders response:", response.data)
//       if (response.data.success) {
//         setOrders(response.data.data)
//         console.log("Orders fetched:", response.data.data)
//       } else {
//         toast.error(response.data.message || "Error fetching orders", {
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
//       console.error("Fetch orders error:", error.response?.data || error.message)
//       toast.error(error.response?.data?.message || "Error fetching orders", {
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

//   const statusHandler = async (event, orderId) => {
//     try {
//       const status = event.target.value
//       console.log("Updating status for order:", orderId, "to:", status)
//       const response = await axios.post(
//         `${url}/api/order/status`,
//         { orderId, status },
//         {
//           headers: { Authorization: `Bearer ${token}` },
//           withCredentials: true,
//         },
//       )
//       console.log("Status update response:", response.data)
//       if (response.data.success) {
//         toast.success(response.data.message, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         })
//         await fetchAllOrder()
//       } else {
//         toast.error(response.data.message || "Error updating status", {
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
//       console.error("Status update error:", error.response?.data || error.message)
//       toast.error(error.response?.data?.message || "Error updating status", {
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

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /")
//       toast.error("Please Login First", {
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
//       fetchAllOrder()
//     }
//   }, [admin, token, navigate])

//   return (
//     <div className="orders">
//       <div className="orders-header">
//         <h1>Orders</h1>
//         <p>Manage customer orders and delivery status</p>
//       </div>

//       <div className="orders-container">
//         <div className="orders-table">
//           <div className="orders-table-header">
//             <div>Order</div>
//             <div>Customer</div>
//             <div>Items</div>
//             <div>Total</div>
//             <div>Status</div>
//             <div>Actions</div>
//           </div>

//           {orders.length === 0 ? (
//             <div className="no-orders">No orders found</div>
//           ) : (
//             orders.map((order, index) => (
//               <div key={index} className="order-item">
//                 <div className="order-icon">
//                   <img src={assets.parcel_icon || "/placeholder.svg"} alt="Order" />
//                 </div>

//                 <div className="order-details">
//                   <p className="order-items">
//                     {order.items.map((item, idx) => (
//                       <span key={idx}>
//                         {item.name} x {item.quantity}
//                         {idx < order.items.length - 1 ? ", " : ""}
//                       </span>
//                     ))}
//                   </p>
//                   <p className="customer-name">
//                     {order.address.firstName} {order.address.lastName}
//                   </p>
//                   <div className="customer-address">
//                     <p>{order.address.street}</p>
//                     <p>
//                       {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
//                     </p>
//                   </div>
//                   <p className="customer-phone">{order.address.phone}</p>
//                 </div>

//                 <p className="order-count">{order.items.length} items</p>
//                 <p className="order-amount">${order.amount}</p>

//                 <select
//                   className="status-select"
//                   onChange={(event) => statusHandler(event, order._id)}
//                   value={order.status}
//                 >
//                   <option value="Food Processing">Food Processing</option>
//                   <option value="Out for delivery">Out for delivery</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>

//                 <div></div>
//               </div>
//             ))
//           )}
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Orders



"use client";

import { useEffect, useState, useContext } from "react";
import "./Orders.css";
import axios from "axios";
import { toast } from "react-toastify";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Orders = () => {
  const navigate = useNavigate();
  const { url, token, admin } = useContext(StoreContext);
  const [orders, setOrders] = useState([]);

  const fetchAllOrder = async () => {
    try {
      console.log("Fetching orders with URL:", `${url}/api/order/list`);
      const response = await axios.get(`${url}/api/order/list`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Orders response:", response.data);
      if (response.data.success) {
        // Optionally filter out cancelled orders
        const filteredOrders = response.data.data; // Comment out to include cancelled orders
        // const filteredOrders = response.data.data.filter(order => order.status !== "Cancelled");
        setOrders(filteredOrders);
        console.log("Orders fetched:", filteredOrders);
      } else {
        toast.error(response.data.message || "Error fetching orders", {
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
      console.error("Fetch orders error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching orders", {
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

  const statusHandler = async (event, orderId) => {
    try {
      const status = event.target.value;
      console.log("Updating status for order:", orderId, "to:", status);
      const response = await axios.post(
        `${url}/api/order/status`,
        { orderId, status },
        {
          headers: { Authorization: `Bearer ${token}` },
          withCredentials: true,
        }
      );
      console.log("Status update response:", response.data);
      if (response.data.success) {
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
        await fetchAllOrder();
      } else {
        toast.error(response.data.message || "Error updating status", {
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
      console.error("Status update error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error updating status", {
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
      fetchAllOrder();
    }
  }, [admin, token, navigate]);

  return (
    <div className="orders">
      <div className="orders-header">
        <h1>Orders</h1>
        <p>Manage customer orders and delivery status</p>
      </div>

      <div className="orders-container">
        <div className="orders-table">
          <div className="orders-table-header">
            <div>Order</div>
            <div>Customer</div>
            <div>Items</div>
            <div>Total</div>
            <div>Status</div>
            <div>Actions</div>
          </div>

          {orders.length === 0 ? (
            <div className="no-orders">No orders found</div>
          ) : (
            orders.map((order, index) => (
              <div key={index} className={`order-item ${order.status === "Cancelled" ? "order-cancelled" : ""}`}>
                <div className="order-icon">
                  <img src={assets.parcel_icon || "/placeholder.svg"} alt="Order" />
                </div>

                <div className="order-details">
                  <p className="order-items">
                    {order.items.map((item, idx) => (
                      <span key={idx}>
                        {item.name} x {item.quantity}
                        {idx < order.items.length - 1 ? ", " : ""}
                      </span>
                    ))}
                  </p>
                  <p className="customer-name">
                    {order.address.firstName} {order.address.lastName}
                  </p>
                  <div className="customer-address">
                    <p>{order.address.street}</p>
                    <p>
                      {order.address.city}, {order.address.state}, {order.address.country}, {order.address.zipcode}
                    </p>
                  </div>
                  <p className="customer-phone">{order.address.phone}</p>
                </div>

                <p className="order-count">{order.items.length} items</p>
                <p className="order-amount">${order.amount.toFixed(2)}</p>

                <select
                  className={`status-select ${order.status === "Cancelled" ? "status-cancelled" : ""}`}
                  onChange={(event) => statusHandler(event, order._id)}
                  value={order.status}
                >
                  <option value="Food Processing">Food Processing</option>
                  <option value="Out for delivery">Out for delivery</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <div></div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Orders;