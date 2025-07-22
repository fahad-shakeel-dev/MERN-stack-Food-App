// import React, { useContext, useEffect } from "react";
// import "./Login.css";
// import { useState } from "react";
// import { toast } from "react-toastify";
// import axios from "axios";
// import { StoreContext } from "../../context/StoreContext";
// import {useNavigate } from "react-router-dom";

// const Login = ({ url }) => {
//   const navigate=useNavigate();
//   const {admin,setAdmin,token, setToken } = useContext(StoreContext);
//   const [data, setData] = useState({
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
//     const response = await axios.post(url + "/api/user/login", data);
//     if (response.data.success) {
//       if (response.data.role === "admin") {
//         setToken(response.data.token);
//         setAdmin(true);
//         localStorage.setItem("token", response.data.token);
//         localStorage.setItem("admin", true);
//         toast.success("Login Successfully");
//         navigate("/add")
//       }else{
//         toast.error("You are not an admin");
//       }
//     } else {
//       toast.error(response.data.message);
//     }
//   };
//   useEffect(()=>{
//     if(admin && token){
//        navigate("/add");
//     }
//   },[])
//   return (
//     <div className="login-popup">
//       <form onSubmit={onLogin} className="login-popup-container">
//         <div className="login-popup-title">
//           <h2>Login</h2>
//         </div>
//         <div className="login-popup-inputs">
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
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;



import React, { useContext, useEffect } from "react";
import "./Login.css";
import { useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { url, admin, setAdmin, token, setToken } = useContext(StoreContext);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onLogin = async (event) => {
    event.preventDefault();
    console.log("Attempting admin login with data:", data);
    console.log("Using URL:", `${url}/api/auth/login`);
    try {
      const response = await axios.post(`${url}/api/auth/login`, data, {
        withCredentials: true,
      });
      console.log("Admin login response:", response.data);
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
        if (response.data.role === "admin") {
          console.log("Setting token in context:", token);
          setToken(token);
          setAdmin(true);
          localStorage.setItem("token", token);
          localStorage.setItem("admin", "true");
          toast.success("Login Successful", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            className: "success-toast",
            style: { background: "#39e079", color: "#fff" },
          });
          console.log("Navigating to /add");
          navigate("/add");
        } else {
          console.log("Non-admin user attempted login, role:", response.data.role);
          toast.error("You are not an admin", {
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
        console.log("Login failed:", response.data.message);
        toast.error(response.data.message || "Login failed", {
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
      console.error("Admin login error:", error.response?.data || error.message);
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

  useEffect(() => {
    if (admin && token) {
      console.log("Admin and token detected, navigating to /add");
      navigate("/add");
    }
  }, [admin, token, navigate]);

  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>Admin Login</h2>
        </div>
        <div className="login-popup-inputs">
          <input
            name="email"
            onChange={onChangeHandler}
            value={data.email}
            type="email"
            placeholder="Your email"
            required
          />
          <input
            name="password"
            onChange={onChangeHandler}
            value={data.password}
            type="password"
            placeholder="Your password"
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;