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
          <button
            type="button"
            onClick={() => handleSocialLogin("Google")}
            className="custom-social-button google"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="18" height="18" style={{marginRight: '8px', flexShrink: 0}}>
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z"/>
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            Continue with Google
          </button>
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