// import axios from "axios";
// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const url = "https://food-delivery-backend-5b6g.onrender.com";
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       const response=await axios.post(
//         url + "/api/cart/add",
//         { itemId },
//         { headers: { token } }
//       );
//       if(response.data.success){
//         toast.success("item Added to Cart")
//       }else{
//         toast.error("Something went wrong")
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (token) {
//       const response= await axios.post(
//         url + "/api/cart/remove",
//         { itemId },
//         { headers: { token } }
//       );
//       if(response.data.success){
//         toast.success("item Removed from Cart")
//       }else{
//         toast.error("Something went wrong")
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     const response = await axios.get(url + "/api/food/list");
//     if (response.data.success) {
//       setFoodList(response.data.data);
//     } else {
//       alert("Error! Products are not fetching..");
//     }
//   };

//   const loadCardData = async (token) => {
//     const response = await axios.post(
//       url + "/api/cart/get",
//       {},
//       { headers: { token } }
//     );
//     setCartItems(response.data.cartData);
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (localStorage.getItem("token")) {
//         setToken(localStorage.getItem("token"));
//         await loadCardData(localStorage.getItem("token"));
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
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
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const url = "https://food-delivery-backend-5b6g.onrender.com";
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       const response = await axios.post(
//         url + "/api/cart/add",
//         { itemId },
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         toast.success("Item Added to Cart");
//       } else {
//         toast.error("Something went wrong");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (token) {
//       const response = await axios.post(
//         url + "/api/cart/remove",
//         { itemId },
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         toast.success("Item Removed from Cart");
//       } else {
//         toast.error("Something went wrong");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list");
//       if (response.data.success) {
//         setFoodList(response.data.data);
//       } else {
//         toast.error("Error fetching products");
//       }
//     } catch (error) {
//       toast.error("Error fetching products");
//     }
//   };

//   const loadCardData = async (token) => {
//     try {
//       const response = await axios.post(
//         url + "/api/cart/get",
//         {},
//         { headers: { token } }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       }
//     } catch (error) {
//       toast.error("Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       const cookieToken = Cookies.get("token");
//       if (cookieToken) {
//         setToken(cookieToken);
//         await loadCardData(cookieToken);
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
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
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const url = "http://localhost:4000"; // Local testing
//   const [token, setToken] = useState("");
//   const [food_list, setFoodList] = useState([]);
//   const [showLogin, setShowLogin] = useState(false);

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         const response = await axios.post(
//           url + "/api/cart/add",
//           { itemId },
//           { headers: { token }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error("Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error("Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }));
//     if (token) {
//       try {
//         const response = await axios.post(
//           url + "/api/cart/remove",
//           { itemId },
//           { headers: { token }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error("Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error("Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         let itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) totalAmount += itemInfo.price * cartItems[item];
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(url + "/api/food/list", { withCredentials: true });
//       if (response.data.success) {
//         setFoodList(response.data.data);
//       } else {
//         toast.error("Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error("Error fetching products");
//     }
//   };

//   const loadCardData = async (token) => {
//     try {
//       const response = await axios.post(
//         url + "/api/cart/get",
//         {},
//         { headers: { token }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error("Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       const cookieToken = Cookies.get("token");
//       if (cookieToken) {
//         setToken(cookieToken);
//         await loadCardData(cookieToken);
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(Cookies.get("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000"; // Local testing

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`, { withCredentials: true });
//       if (response.data.success) {
//         setFoodList(response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       const cookieToken = Cookies.get("token");
//       if (cookieToken) {
//         setToken(cookieToken);
//         await loadCartData(cookieToken);
//       }
//     }
//     loadData();
//   }, []);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(Cookies.get("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000"; // Local testing

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       const response = await axios.get(`${url}/api/food/list`, { withCredentials: true });
//       if (response.data.success) {
//         setFoodList(response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       const cookieToken = Cookies.get("token");
//       if (cookieToken) {
//         setToken(cookieToken);
//         await loadCartData(cookieToken);
//       }
//     }
//     loadData();
//   }, []);

//   // Watch for token changes and reload cart data
//   useEffect(() => {
//     if (token) {
//       loadCartData(token);
//     } else {
//       setCartItems({});
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(Cookies.get("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000"; // Correct URL

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const response = await axios.get(`${url}/api/food/list`, { withCredentials: true });
//       if (response.data.success) {
//         setFoodList(response.data.data);
//         console.log("Food list fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       const cookieToken = Cookies.get("token");
//       console.log("Initial cookie token:", cookieToken);
//       if (cookieToken) {
//         setToken(cookieToken);
//         await loadCartData(cookieToken);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       loadCartData(token);
//     } else {
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
// import Cookies from "js-cookie";

// export const StoreContext = createContext(null);

// const StoreContextProvider = (props) => {
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(() => Cookies.get("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000"; // Correct URL

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         setFoodList(response.data.data);
//         console.log("Food list fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       const cookieToken = Cookies.get("token");
//       console.log("Initial cookie token:", cookieToken);
//       if (cookieToken) {
//         setToken(cookieToken);
//         await loadCartData(cookieToken);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       loadCartData(token);
//     } else {
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000";

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         setFoodList(response.data.data);
//         console.log("Food list fetched:", response.data.data);
//       } else {
//         toast.error(response.data.message || "Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (token) {
//         await loadCartData(token);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       localStorage.setItem("token", token);
//       loadCartData(token);
//     } else {
//       localStorage.removeItem("token");
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [featured_list, setFeaturedList] = useState([]);
//   const [popular_list, setPopularList] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000";

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const response = await axios.get(`${url}/api/food/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         const allFoods = response.data.data;
//         setFoodList(allFoods);
//         setFeaturedList(allFoods.filter((item) => item.isFeatured));
//         setPopularList(allFoods.filter((item) => item.isPopular));
//         console.log("Food list fetched:", allFoods);
//         console.log("Featured list:", allFoods.filter((item) => item.isFeatured));
//         console.log("Popular list:", allFoods.filter((item) => item.isPopular));
//       } else {
//         toast.error(response.data.message || "Error fetching products");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (token) {
//         await loadCartData(token);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       localStorage.setItem("token", token);
//       loadCartData(token);
//     } else {
//       localStorage.removeItem("token");
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     featured_list,
//     popular_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [featured_list, setFeaturedList] = useState([]);
//   const [popular_list, setPopularList] = useState([]);
//   const [popular_categories, setPopularCategories] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000";

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const foodResponse = await axios.get(`${url}/api/food/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (foodResponse.data.success) {
//         const allFoods = foodResponse.data.data;
//         setFoodList(allFoods);
//         setFeaturedList(allFoods.filter((item) => item.isFeatured));
//         setPopularList(allFoods.filter((item) => item.isPopular));
//         console.log("Food list fetched:", allFoods);
//         console.log("Featured list:", allFoods.filter((item) => item.isFeatured));
//         console.log("Popular list:", allFoods.filter((item) => item.isPopular));
//       } else {
//         toast.error(foodResponse.data.message || "Error fetching products");
//       }

//       console.log("Fetching category metadata from:", `${url}/api/category/list`);
//       const categoryResponse = await axios.get(`${url}/api/category/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (categoryResponse.data.success) {
//         setPopularCategories(categoryResponse.data.data.filter((cat) => cat.isPopular));
//         console.log("Popular categories:", categoryResponse.data.data.filter((cat) => cat.isPopular));
//       } else {
//         toast.error(categoryResponse.data.message || "Error fetching category metadata");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (token) {
//         await loadCartData(token);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       localStorage.setItem("token", token);
//       loadCartData(token);
//     } else {
//       localStorage.removeItem("token");
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     featured_list,
//     popular_list,
//     popular_categories,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [featured_list, setFeaturedList] = useState([]);
//   const [popular_list, setPopularList] = useState([]);
//   const [popular_categories, setPopularCategories] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000";

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const foodResponse = await axios.get(`${url}/api/food/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (foodResponse.data.success) {
//         const allFoods = foodResponse.data.data;
//         setFoodList(allFoods);
//         setFeaturedList(allFoods.filter((item) => item.isFeatured));
//         setPopularList(allFoods.filter((item) => item.isPopular));
//         console.log("Food list fetched:", allFoods);
//         console.log("Featured list:", allFoods.filter((item) => item.isFeatured));
//         console.log("Popular list:", allFoods.filter((item) => item.isPopular));
//       } else {
//         toast.error(foodResponse.data.message || "Error fetching products");
//       }

//       console.log("Fetching category metadata from:", `${url}/api/category/list`);
//       const categoryResponse = await axios.get(`${url}/api/category/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (categoryResponse.data.success) {
//         const popularCats = categoryResponse.data.data.filter((cat) => cat.isPopular);
//         setPopularCategories(popularCats);
//         console.log("Popular categories:", popularCats);
//       } else {
//         toast.error(categoryResponse.data.message || "Error fetching category metadata");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async (token) => {
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (token) {
//         await loadCartData(token);
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       localStorage.setItem("token", token);
//       loadCartData(token);
//     } else {
//       localStorage.removeItem("token");
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     featured_list,
//     popular_list,
//     popular_categories,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
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
//   const [cartItems, setCartItems] = useState({});
//   const [food_list, setFoodList] = useState([]);
//   const [featured_list, setFeaturedList] = useState([]);
//   const [popular_list, setPopularList] = useState([]);
//   const [popular_categories, setPopularCategories] = useState([]);
//   const [token, setToken] = useState(localStorage.getItem("token") || "");
//   const [showLogin, setShowLogin] = useState(false);
//   const url = "http://localhost:4000";

//   const addToCart = async (itemId) => {
//     if (!cartItems[itemId]) {
//       setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
//     } else {
//       setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
//     }
//     if (token) {
//       try {
//         console.log("Adding to cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/add`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Added to Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Add to cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error adding item to cart");
//       }
//     }
//   };

//   const removeFromCart = async (itemId) => {
//     setCartItems((prev) => {
//       const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
//       if (newCart[itemId] <= 0) {
//         delete newCart[itemId];
//       }
//       return newCart;
//     });
//     if (token) {
//       try {
//         console.log("Removing from cart with token:", token);
//         const response = await axios.post(
//           `${url}/api/cart/remove`,
//           { itemId },
//           { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//         );
//         if (response.data.success) {
//           toast.success("Item Removed from Cart");
//         } else {
//           toast.error(response.data.message || "Something went wrong");
//         }
//       } catch (error) {
//         console.error("Remove from cart error:", error.response?.data || error.message);
//         toast.error(error.response?.data?.message || "Error removing item from cart");
//       }
//     }
//   };

//   const getTotalCartAmount = () => {
//     let totalAmount = 0;
//     for (const item in cartItems) {
//       if (cartItems[item] > 0) {
//         const itemInfo = food_list.find((product) => product._id === item);
//         if (itemInfo) {
//           totalAmount += itemInfo.price * cartItems[item];
//         }
//       }
//     }
//     return totalAmount;
//   };

//   const fetchFoodList = async () => {
//     try {
//       console.log("Fetching food list from:", `${url}/api/food/list`);
//       const headers = token ? { Authorization: `Bearer ${token}` } : {};
//       const foodResponse = await axios.get(`${url}/api/food/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (foodResponse.data.success) {
//         const allFoods = foodResponse.data.data;
//         setFoodList(allFoods);
//         setFeaturedList(allFoods.filter((item) => item.isFeatured));
//         setPopularList(allFoods.filter((item) => item.isPopular));
//         console.log("Food list fetched:", allFoods);
//         console.log("Featured list:", allFoods.filter((item) => item.isFeatured));
//         console.log("Popular list:", allFoods.filter((item) => item.isPopular));
//       } else {
//         toast.error(foodResponse.data.message || "Error fetching products");
//       }

//       console.log("Fetching category metadata from:", `${url}/api/category/list`);
//       const categoryResponse = await axios.get(`${url}/api/category/list`, {
//         headers,
//         withCredentials: true,
//       });
//       if (categoryResponse.data.success) {
//         const popularCats = categoryResponse.data.data.filter((cat) => cat.isPopular);
//         setPopularCategories(popularCats);
//         console.log("Popular categories:", popularCats);
//       } else {
//         toast.error(categoryResponse.data.message || "Error fetching category metadata");
//       }
//     } catch (error) {
//       console.error("Fetch food list error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching products");
//     }
//   };

//   const loadCartData = async () => {
//     if (!token) {
//       console.log("No token, skipping cart data load");
//       return;
//     }
//     try {
//       console.log("Loading cart data with token:", token);
//       const response = await axios.post(
//         `${url}/api/cart/get`,
//         {},
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         setCartItems(response.data.cartData);
//         console.log("Cart data loaded:", response.data.cartData);
//       } else {
//         toast.error(response.data.message || "Error loading cart data");
//       }
//     } catch (error) {
//       console.error("Load cart data error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error loading cart data");
//     }
//   };

//   useEffect(() => {
//     async function loadData() {
//       await fetchFoodList();
//       if (token) {
//         await loadCartData();
//       }
//     }
//     loadData();
//   }, []);

//   useEffect(() => {
//     console.log("Token changed in StoreContext:", token);
//     if (token) {
//       localStorage.setItem("token", token);
//     } else {
//       localStorage.removeItem("token");
//       setCartItems({});
//       console.log("Token cleared, cart reset");
//     }
//   }, [token]);

//   const contextValue = {
//     food_list,
//     featured_list,
//     popular_list,
//     popular_categories,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//     token,
//     setToken,
//     showLogin,
//     setShowLogin,
//   };

//   return (
//     <StoreContext.Provider value={contextValue}>
//       {props.children}
//     </StoreContext.Provider>
//   );
// };

// export default StoreContextProvider;











import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [food_list, setFoodList] = useState([]);
  const [featured_list, setFeaturedList] = useState([]);
  const [popular_list, setPopularList] = useState([]);
  const [popular_categories, setPopularCategories] = useState([]);
  const [offers, setOffers] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token") || "");
  const [showLogin, setShowLogin] = useState(false);
  const [isLoading, setIsLoading] = useState(true); // Added loading state
  const url = "http://localhost:4000";

  // Fetch food list, categories, and offers
  const fetchFoodList = async () => {
    try {
      setIsLoading(true);
      console.log("StoreContext: Fetching food list from:", `${url}/api/food/list`);
      const headers = token ? { Authorization: `Bearer ${token}` } : {};
      const foodResponse = await axios.get(`${url}/api/food/list`, {
        headers,
        withCredentials: true,
      });
      console.log("StoreContext: Food API Response:", foodResponse.data);
      if (foodResponse.data.success) {
        const allFoods = foodResponse.data.data || [];
        setFoodList(allFoods);
        setFeaturedList(allFoods.filter((item) => item.isFeatured));
        setPopularList(allFoods.filter((item) => item.isPopular));
        console.log("StoreContext: Food list fetched:", allFoods);
        const categories = [...new Set(allFoods.map((item) => item.category || "undefined"))];
        console.log("StoreContext: Available categories:", categories);
      } else {
        console.error("StoreContext: Food list fetch failed:", foodResponse.data.message || "No message provided");
        toast.error(foodResponse.data.message || "Error fetching products");
        setFoodList([]);
      }

      console.log("StoreContext: Fetching category metadata from:", `${url}/api/category/list`);
      const categoryResponse = await axios.get(`${url}/api/category/list`, {
        headers,
        withCredentials: true,
      });
      console.log("StoreContext: Category API Response:", categoryResponse.data);
      if (categoryResponse.data.success) {
        const popularCats = categoryResponse.data.data.filter((cat) => cat.isPopular) || [];
        setPopularCategories(popularCats);
        console.log("StoreContext: Popular categories:", popularCats);
      } else {
        console.error("StoreContext: Category fetch failed:", categoryResponse.data.message || "No message provided");
        toast.error(categoryResponse.data.message || "Error fetching category metadata");
      }

      console.log("StoreContext: Fetching offers from:", `${url}/api/offers`);
      const offerResponse = await axios.get(`${url}/api/offers`, {
        headers,
        withCredentials: true,
      });
      console.log("StoreContext: Offers API Response:", offerResponse.data);
      if (offerResponse.data.success) {
        const fetchedOffers = offerResponse.data.data || [];
        setOffers(fetchedOffers);
        console.log("StoreContext: Offers fetched:", fetchedOffers);
      } else {
        console.error("StoreContext: Offers fetch failed:", offerResponse.data.message || "No message provided");
        toast.error(offerResponse.data.message || "Error fetching offers");
      }
    } catch (error) {
      console.error("StoreContext: Fetch data error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching data");
      setFoodList([]);
    } finally {
      setIsLoading(false);
    }
  };

  // Load cart data
  const loadCartData = async () => {
    if (!token) {
      console.log("StoreContext: No token, skipping cart data load");
      return;
    }
    try {
      console.log("StoreContext: Loading cart data with token:", token);
      const response = await axios.post(
        `${url}/api/cart/get`,
        {},
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );
      console.log("StoreContext: Cart API Response:", response.data);
      if (response.data.success) {
        setCartItems(response.data.cartData);
        console.log("StoreContext: Cart data loaded:", response.data.cartData);
      } else {
        console.error("StoreContext: Cart fetch failed:", response.data.message || "No message provided");
        toast.error(response.data.message || "Error loading cart data");
      }
    } catch (error) {
      console.error("StoreContext: Load cart data error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error loading cart data");
    }
  };

  // Add to cart
  const addToCart = async (itemId) => {
    if (!cartItems[itemId]) {
      setCartItems((prev) => ({ ...prev, [itemId]: 1 }));
    } else {
      setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    if (token) {
      try {
        console.log("StoreContext: Adding to cart with token:", token);
        const response = await axios.post(
          `${url}/api/cart/add`,
          { itemId },
          { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
        );
        if (response.data.success) {
          toast.success("Item Added to Cart");
        } else {
          toast.error(response.data.message || "Something went wrong");
        }
      } catch (error) {
        console.error("StoreContext: Add to cart error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Error adding item to cart");
      }
    }
  };

  // Remove from cart
  const removeFromCart = async (itemId) => {
    setCartItems((prev) => {
      const newCart = { ...prev, [itemId]: prev[itemId] - 1 };
      if (newCart[itemId] <= 0) {
        delete newCart[itemId];
      }
      return newCart;
    });
    if (token) {
      try {
        console.log("StoreContext: Removing from cart with token:", token);
        const response = await axios.post(
          `${url}/api/cart/remove`,
          { itemId },
          { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
        );
        if (response.data.success) {
          toast.success("Item Removed from Cart");
        } else {
          toast.error(response.data.message || "Something went wrong");
        }
      } catch (error) {
        console.error("StoreContext: Remove from cart error:", error.response?.data || error.message);
        toast.error(error.response?.data?.message || "Error removing item from cart");
      }
    }
  };

  // Calculate total cart amount with discounts
  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const item in cartItems) {
      if (cartItems[item] > 0) {
        const itemInfo = food_list.find((product) => product._id === item);
        if (itemInfo) {
          const validOffer = offers.find(
            (offer) =>
              (offer.targetProduct === item ||
               (itemInfo.category && offer.targetCategory === itemInfo.category)) &&
              (!offer.expiry || new Date(offer.expiry) >= new Date())
          );
          const price = validOffer
            ? itemInfo.price * (1 - validOffer.discount / 100)
            : itemInfo.price;
          totalAmount += price * cartItems[item];
        }
      }
    }
    return totalAmount.toFixed(2);
  };

  // Load data on mount
  useEffect(() => {
    async function loadData() {
      console.log("StoreContext: Initiating data load");
      await fetchFoodList();
      if (token) {
        await loadCartData();
      }
    }
    loadData();
  }, [token]);

  // Handle token changes
  useEffect(() => {
    console.log("StoreContext: Token changed:", token);
    if (token) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token");
      setCartItems({});
      console.log("StoreContext: Token cleared, cart reset");
    }
  }, [token]);

  const contextValue = {
    food_list,
    featured_list,
    popular_list,
    popular_categories,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    offers,
    url,
    token,
    setToken,
    showLogin,
    setShowLogin,
    isLoading, // Expose loading state
  };

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreContextProvider;