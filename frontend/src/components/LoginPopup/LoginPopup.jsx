// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const LoginPopup = ({ setShowLogin }) => {
//   const {url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     let newUrl = url;
//     if (currentState === "Login") {
//       newUrl += "/api/user/login";
//     } else {
//       newUrl += "/api/user/register";
//     }
//     const response = await axios.post(newUrl, data);
//     if (response.data.success) {
//       setToken(response.data.token);
//       localStorage.setItem("token", response.data.token);
//       toast.success("Login Successfully")
//       setShowLogin(false);
//     }else{
//       toast.error(response.data.message);
//     }
//   };
//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt=""
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Login" ? (
//             <></>
//           ) : (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//           />
//         </div>
//         <button type="submit">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required />
//           <p>By continuing, i agree to the terms of use & privacy policy.</p>
//         </div>
//         {currentState === "Login" ? (
//           <p>
//             Create a new account?{" "}
//             <span onClick={() => setCurrentState("Sign Up")}>Click here</span>
//           </p>
//         ) : (
//           <p>
//             Already have an account?{" "}
//             <span onClick={() => setCurrentState("Login")}>Login here</span>
//           </p>
//         )}
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;



// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/register";
//     try {
//       const response = await axios.post(`${url}${endpoint}`, data, {
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         setToken(response.data.token);
//         toast.success(currentState === "Login" ? "Login Successful" : "Account Created");
//         setShowLogin(false);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="close-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Sign Up" && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//               className="login-input"
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//             className="login-input"
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//             className="login-input"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required className="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p className="login-toggle">
//           {currentState === "Login" ? (
//             <>
//               Create a new account?{" "}
//               <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setCurrentState("Login")}>Login</span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;





// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/signup";
//     try {
//       const response = await axios.post(`${url}${endpoint}`, data, {
//         withCredentials: true,
//       });
//       if (response.data.success) {
//         const token = response.data.token;
//         setToken(token);
//         Cookies.set("token", token, { expires: 3 }); // Store token in cookie, expires in 3 days
//         toast.success(`${currentState === "Login" ? "Login Successful" : "Account Created"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//         });
//         setShowLogin(false);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       console.error("Login/Signup error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="close-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Sign Up" && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//               className="login-input"
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//             className="login-input"
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//             className="login-input"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required className="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p className="login-toggle">
//           {currentState === "Login" ? (
//             <>
//               Create a new account?{" "}
//               <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setCurrentState("Login")}>Login</span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;








// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     console.log(`Attempting ${currentState} with data:`, data);
//     console.log("Using URL:", url);
//     const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/signup";
//     try {
//       const response = await axios.post(`${url}${endpoint}`, data, {
//         withCredentials: true,
//       });
//       console.log(`${currentState} response:`, response.data);
//       if (response.data.success) {
//         const token = response.data.token;
//         if (!token) {
//           console.error("No token received in response");
//           toast.error("Login failed: No token received", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "error-toast",
//             style: { background: "#ff4d4d", color: "#fff" },
//           });
//           return;
//         }
//         console.log("Setting token in context:", token);
//         setToken(token);
//         Cookies.set("token", token, { expires: 3, sameSite: "strict", secure: false });
//         console.log("Cookie set:", Cookies.get("token"));
//         toast.success(`${currentState === "Login" ? "Login Successful" : "Account Created"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//         setShowLogin(false);
//         console.log("Navigating to home page");
//         navigate("/");
//       } else {
//         console.log("Request failed:", response.data.message);
//         toast.error(response.data.message || "Request failed", {
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
//       console.error(`${currentState} error:`, error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "An error occurred. Please try again.", {
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
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="close-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Sign Up" && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//               className="login-input"
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//             className="login-input"
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//             className="login-input"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required className="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p className="login-toggle">
//           {currentState === "Login" ? (
//             <>
//               Create a new account?{" "}
//               <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setCurrentState("Login")}>Login</span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;







// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     console.log(`Attempting ${currentState} with data:`, data);
//     console.log("Using URL:", url);
//     const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/signup";
//     try {
//       const response = await axios.post(`${url}${endpoint}`, data, {
//         withCredentials: true,
//       });
//       console.log(`${currentState} response:`, response.data);
//       if (response.data.success) {
//         const token = response.data.token;
//         if (!token) {
//           console.error("No token received in response");
//           toast.error("Login failed: No token received", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "error-toast",
//             style: { background: "#ff4d4d", color: "#fff" },
//           });
//           return;
//         }
//         console.log("Setting token in context:", token);
//         setToken(token);
//         Cookies.set("token", token, {
//           expires: 3,
//           sameSite: "Strict",
//           secure: false, // Set to true in production (HTTPS)
//           path: "/",
//         });
//         console.log("Cookie set:", Cookies.get("token"));
//         toast.success(`${currentState === "Login" ? "Login Successful" : "Account Created"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//         setShowLogin(false);
//         console.log("Navigating to home page");
//         navigate("/");
//       } else {
//         console.log("Request failed:", response.data.message);
//         toast.error(response.data.message || "Request failed", {
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
//       console.error(`${currentState} error:`, error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "An error occurred. Please try again.", {
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
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="close-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Sign Up" && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//               className="login-input"
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//             className="login-input"
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//             className="login-input"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required className="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p className="login-toggle">
//           {currentState === "Login" ? (
//             <>
//               Create a new account?{" "}
//               <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setCurrentState("Login")}>Login</span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;










// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import Cookies from "js-cookie";
// import { useNavigate } from "react-router-dom";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     console.log(`Attempting ${currentState} with data:`, data);
//     console.log("Using URL:", url);
//     const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/signup";
//     try {
//       const response = await axios.post(`${url}${endpoint}`, data, {
//         withCredentials: true,
//       });
//       console.log(`${currentState} response:`, response.data);
//       console.log("Response headers:", response.headers);
//       if (response.data.success) {
//         const token = response.data.token;
//         if (!token) {
//           console.error("No token received in response");
//           toast.error("Login failed: No token received", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "error-toast",
//             style: { background: "#ff4d4d", color: "#fff" },
//           });
//           return;
//         }
//         console.log("Setting token in context:", token);
//         setToken(token);
//         console.log("Cookie after login:", Cookies.get("token"));
//         toast.success(`${currentState === "Login" ? "Login Successful" : "Account Created"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//         setShowLogin(false);
//         console.log("Navigating to home page");
//         navigate("/");
//       } else {
//         console.log("Request failed:", response.data.message);
//         toast.error(response.data.message || "Request failed", {
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
//       console.error(`${currentState} error:`, error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "An error occurred. Please try again.", {
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
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="close-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Sign Up" && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//               className="login-input"
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//             className="login-input"
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//             className="login-input"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required className="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p className="login-toggle">
//           {currentState === "Login" ? (
//             <>
//               Create a new account?{" "}
//               <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setCurrentState("Login")}>Login</span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;










// import React, { useContext, useState } from "react";
// import "./LoginPopup.css";
// import { assets } from "../../assets/frontend_assets/assets";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";

// const LoginPopup = ({ setShowLogin }) => {
//   const { url, setToken } = useContext(StoreContext);
//   const [currentState, setCurrentState] = useState("Login");
//   const [data, setData] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });
//   const navigate = useNavigate();

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//   };

//   const onLogin = async (event) => {
//     event.preventDefault();
//     console.log(`Attempting ${currentState} with data:`, data);
//     console.log("Using URL:", url);
//     const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/signup";
//     try {
//       const response = await axios.post(`${url}${endpoint}`, data, {
//         withCredentials: true,
//       });
//       console.log(`${currentState} response:`, response.data);
//       console.log("Response headers:", response.headers);
//       if (response.data.success) {
//         const token = response.data.token;
//         if (!token) {
//           console.error("No token received in response");
//           toast.error("Login failed: No token received", {
//             position: "top-right",
//             autoClose: 3000,
//             hideProgressBar: false,
//             closeOnClick: true,
//             pauseOnHover: true,
//             draggable: true,
//             className: "error-toast",
//             style: { background: "#ff4d4d", color: "#fff" },
//           });
//           return;
//         }
//         console.log("Setting token in context:", token);
//         setToken(token);
//         localStorage.setItem("token", token);
//         toast.success(`${currentState === "Login" ? "Login Successful" : "Account Created"}`, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//         setShowLogin(false);
//         console.log("Navigating to home page");
//         navigate("/");
//       } else {
//         console.log("Request failed:", response.data.message);
//         toast.error(response.data.message || "Request failed", {
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
//       console.error(`${currentState} error:`, error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "An error occurred. Please try again.", {
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
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>{currentState}</h2>
//           <img
//             onClick={() => setShowLogin(false)}
//             src={assets.cross_icon}
//             alt="Close"
//             className="close-icon"
//           />
//         </div>
//         <div className="login-popup-inputs">
//           {currentState === "Sign Up" && (
//             <input
//               name="name"
//               onChange={onChangeHandler}
//               value={data.name}
//               type="text"
//               placeholder="Your name"
//               required
//               className="login-input"
//             />
//           )}
//           <input
//             name="email"
//             onChange={onChangeHandler}
//             value={data.email}
//             type="email"
//             placeholder="Your email"
//             required
//             className="login-input"
//           />
//           <input
//             name="password"
//             onChange={onChangeHandler}
//             value={data.password}
//             type="password"
//             placeholder="Your password"
//             required
//             className="login-input"
//           />
//         </div>
//         <button type="submit" className="login-button">
//           {currentState === "Sign Up" ? "Create Account" : "Login"}
//         </button>
//         <div className="login-popup-condition">
//           <input type="checkbox" required className="checkbox" />
//           <p>By continuing, I agree to the terms of use & privacy policy.</p>
//         </div>
//         <p className="login-toggle">
//           {currentState === "Login" ? (
//             <>
//               Create a new account?{" "}
//               <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
//             </>
//           ) : (
//             <>
//               Already have an account?{" "}
//               <span onClick={() => setCurrentState("Login")}>Login</span>
//             </>
//           )}
//         </p>
//       </form>
//     </div>
//   );
// };

// export default LoginPopup;













import React, { useContext, useState } from "react";
import "./LoginPopup.css";
import { assets } from "../../assets/frontend_assets/assets";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { GoogleLoginButton, FacebookLoginButton } from "react-social-login-buttons";

const LoginPopup = ({ setShowLogin }) => {
  const { url, setToken } = useContext(StoreContext);
  const [currentState, setCurrentState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    console.log(`Attempting ${currentState} with data:`, data);
    console.log("Using URL:", url);
    const endpoint = currentState === "Login" ? "/api/auth/login" : "/api/auth/signup";
    try {
      const response = await axios.post(`${url}${endpoint}`, data, {
        withCredentials: true,
      });
      console.log(`${currentState} response:`, response.data);
      console.log("Response headers:", response.headers);
      if (response.data.success) {
        const token = response.data.token;
        if (!token) {
          console.error("No token received in response");
          toast.error("Login failed: No token received", {
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
        console.log("Setting token in context:", token);
        setToken(token);
        localStorage.setItem("token", token);
        toast.success(`${currentState === "Login" ? "Login Successful" : "Account Created"}`, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        });
        setShowLogin(false);
        console.log("Navigating to home page");
        navigate("/");
      } else {
        console.log("Request failed:", response.data.message);
        toast.error(response.data.message || "Request failed", {
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
      console.error(`${currentState} error:`, error.response?.data || error.message);
      toast.error(error.response?.data?.message || "An error occurred. Please try again.", {
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

  const handleSocialLogin = (provider) => {
    console.log(`Initiating ${provider} login`);
    window.location.href = `${url}/api/auth/${provider.toLowerCase()}`;
  };

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt="Close"
            className="close-icon"
          />
        </div>
        <div className="login-popup-inputs">
          {currentState === "Sign Up" && (
            <input
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              placeholder="Your name"
              required
              className="login-input"
            />
          )}
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
            className="login-input"
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
            className="login-input"
          />
        </div>
        <button type="submit" className="login-button">
          {currentState === "Sign Up" ? "Create Account" : "Login"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required className="checkbox" />
          <p>By continuing, I agree to the terms of use & privacy policy.</p>
        </div>
        <div className="social-login">
          {/* <GoogleLoginButton
            onClick={() => handleSocialLogin("Google")}
            className="social-login-button"
            text="Continue with Google"
          />
          <FacebookLoginButton
            onClick={() => handleSocialLogin("Facebook")}
            className="social-login-button"
            text="Continue with Facebook"
          /> */}


          <div className="custom-social-buttons">
  <button
    type="button"
    onClick={() => handleSocialLogin("Google")}
    className="custom-social-button google"
  >
    {/* <img src={assets.google_icon} alt="Google" className="social-icon" /> */}
    Continue with Google
  </button>
  <button
    type="button"
    onClick={() => handleSocialLogin("Facebook")}
    className="custom-social-button facebook"
  >
    {/* <img src={assets.facebook_icon} alt="Facebook" className="social-icon" /> */}
    Continue with Facebook
  </button>
</div>

        </div>
        <p className="login-toggle">
          {currentState === "Login" ? (
            <>
              Create a new account?{" "}
              <span onClick={() => setCurrentState("Sign Up")}>Sign Up</span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span onClick={() => setCurrentState("Login")}>Login</span>
            </>
          )}
        </p>
      </form>
    </div>
  );
};

export default LoginPopup;