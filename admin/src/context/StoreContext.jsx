// import axios from "axios";
// import { createContext, useEffect, useState } from "react";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [token, setToken] = useState("");
//   const [admin, setAdmin] = useState(false);


//   useEffect(() => {
//     async function loadData() {
//       if (localStorage.getItem("token")) {
//         setToken(localStorage.getItem("token"));
//       }
//       if (localStorage.getItem("admin")) {
//         setAdmin(localStorage.getItem("admin"));
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     token,
//     setToken,
//     admin,
//     setAdmin,
//   };
//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };
// export default StoreContextProvider;



// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [admin, setAdmin] = useState(localStorage.getItem("admin") === "true");
//   const url = "http://localhost:4000";

//   useEffect(() => {
//     async function loadData() {
//       const storedToken = localStorage.getItem("token");
//       const storedAdmin = localStorage.getItem("admin");
//       console.log("Initial token:", storedToken);
//       console.log("Initial admin status:", storedAdmin);
//       if (storedToken) {
//         setToken(storedToken);
//       }
//       if (storedAdmin === "true") {
//         setAdmin(true);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     console.log("Admin status changed in StoreContext:", admin);
//   }, [token, admin]);

//   const contextValue = {
//     token,
//     setToken,
//     admin,
//     setAdmin,
//     url,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;













import React, { createContext, useState, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [offers, setOffers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [admin, setAdmin] = useState(localStorage.getItem("admin") === "true");
  const [food_list, setFoodList] = useState([]);
  const url = "http://localhost:4000";

  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
        );
      } catch (error) {
        console.error("Add to cart error:", error.response?.data || error.message);
        toast.error("Error adding to cart");
      }
    }
  };

  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const updated = { ...prev };
      if (updated[itemId] > 1) {
        updated[itemId] -= 1;
      } else {
        delete updated[itemId];
      }
      return updated;
    });
    if (token) {
      try {
        await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
        );
      } catch (error) {
        console.error("Remove from cart error:", error.response?.data || error.message);
        toast.error("Error removing from cart");
      }
    }
  };

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        let itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[item];
        }
      }
    }
    return totalAmount;
  };

  const fetchFoodList = async () => {
    try {
      console.log("Fetching food list with token:", token);
      const response = await axios.get(`${url}/api/food/list`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Food list response:", response.data);
      if (response.data.success) {
        setFoodList(response.data.data);
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

  const loadCartData = async () => {
    try {
      console.log("Loading cart data with token:", token);
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );
      if (response.data.success) {
        setCartItems(response.data.data);
      } else {
        toast.error("Error loading cart data");
      }
    } catch (error) {
      console.error("Load cart error:", error.response?.data || error.message);
      toast.error("Error loading cart data");
    }
  };

  useEffect(() => {
    console.log("Initial token from localStorage:", localStorage.getItem("token"));
    console.log("Initial admin status:", localStorage.getItem("admin"));
    if (token) {
      fetchFoodList();
      loadCartData();
    }
  }, [token]);

  useEffect(() => {
    console.log("Token changed in StoreContext:", token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
    }
  }, [token]);

  useEffect(() => {
    console.log("Admin status changed in StoreContext:", admin);
    if (admin) {
      localStorage.setItem("admin", "true");
    } else {
      localStorage.removeItem("admin");
    }
  }, [admin]);

  const contextValue = {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    url,
    token,
    setToken,
    admin,
    setAdmin,
    offers,
    setOffers,
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;