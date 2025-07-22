// import React, { useState } from "react";
// import Navbar from "./components/Navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import './toastify.css';
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify/Verify";
// import ContactPage from "./pages/Contact/Contact";
// import MyOrders from "./pages/MyOrders/MyOrders";
// import MenuPage from "./pages/Menu/Menu";
// // import OrderPage from "./pages/Offer/Order";
// import OffersPage from "./pages/Offer/OfferPage"; // Assuming you have an OffersPage component
// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   return (
//     <>
//       {showLogin ? <LoginPopup setShowLogin={setShowLogin} /> : <></>}
//       <div className="app">
//         <ToastContainer />
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/contact" element={<ContactPage/>} />
//           <Route path="/menu" element={<MenuPage/>} />
//           <Route path="/offers" element={<OffersPage/>} />
//           {/* <Route path="/menu" element={<MenuPage/>} /> */}
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="/myorders" element={<MyOrders />} />
//         </Routes>
//       </div>
//       <Footer />
//     </>
//   );
// };

// export default App;







// import React, { useContext } from "react";
// import StoreContextProvider from "./context/StoreContext";
// import { StoreContext } from "./context/StoreContext";
// // import { StoreContext, StoreContextProvider } from "./context/StoreContext";
// import Navbar from "./components/Navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import "./toastify.css";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify/Verify";
// import ContactPage from "./pages/Contact/Contact";
// import MyOrders from "./pages/MyOrders/MyOrders";
// import MenuPage from "./pages/Menu/Menu";
// import OffersPage from "./pages/Offer/OfferPage";
// import ProductDetail from "./pages/ProductDetail/Productdetail";
// import OrderPage from "./pages/Offer/Order";
// const App = () => {
//   const { showLogin, setShowLogin } = useContext(StoreContext);

//   return (
//     <StoreContextProvider>
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//       <div className="app">
//         <ToastContainer />
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/menu" element={<MenuPage />} />
//           <Route path="/offers" element={<OffersPage />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="/myorders" element={<OrderPage />} />
//         </Routes>
//       </div>
//       <Footer />
//     </StoreContextProvider>
//   );
// };

// export default App;











// import React, { useContext, useState } from "react";
// import StoreContextProvider from "./context/StoreContext";
// import { StoreContext } from "./context/StoreContext";
// import Navbar from "./components/Navbar/Navbar";
// import { Route, Routes } from "react-router-dom";
// import Home from "./pages/Home/Home";
// import "./toastify.css";
// import Cart from "./pages/Cart/Cart";
// import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
// import Footer from "./components/Footer/Footer";
// import LoginPopup from "./components/LoginPopup/LoginPopup";
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";
// import Verify from "./pages/Verify/Verify";
// import ContactPage from "./pages/Contact/Contact";
// import MyOrders from "./pages/MyOrders/MyOrders";
// import MenuPage from "./pages/Menu/Menu";
// import OffersPage from "./pages/Offer/OfferPage";
// import ProductDetail from "./pages/ProductDetail/Productdetail";
// import OrderPage from "./pages/Offer/Order";
// import CategoryPage from "./pages/Offer/CategoryPage";

// const App = () => {
//   const { showLogin, setShowLogin } = useContext(StoreContext);
//   const [category, setCategory] = useState("All");
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearch = (query) => {
//     setSearchQuery(query);
//     setCategory("All"); // Reset category to show all matching products
//   };

//   return (
//     <StoreContextProvider>
//       {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
//       <div className="app">
//         <ToastContainer />
//         <Navbar setShowLogin={setShowLogin} />
//         <Routes>
//           <Route
//             path="/"
//             element={
//               <Home
//                 category={category}
//                 setCategory={setCategory}
//                 searchQuery={searchQuery}
//                 setSearchQuery={setSearchQuery}
//                 onSearch={handleSearch}
//               />
//             }
//           />
//           <Route
//             path="/menu"
//             element={<MenuPage searchQuery={searchQuery} />}
//           />
//           <Route path="/cart" element={<Cart />} />
//           <Route path="/contact" element={<ContactPage />} />
//           <Route path="/offers" element={<OffersPage />} />
//           <Route path="/order" element={<PlaceOrder />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//           <Route path="/category/:categoryName" element={<CategoryPage />} />
//           <Route path="/verify" element={<Verify />} />
//           <Route path="/myorders" element={<OrderPage />} />
//         </Routes>
//       </div>
//       <Footer />
//     </StoreContextProvider>
//   );
// };

// export default App;












import React, { useContext, useState, useEffect } from "react";
import StoreContextProvider from "./context/StoreContext";
import { StoreContext } from "./context/StoreContext";
import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Home from "./pages/Home/Home";
import "./toastify.css";
import Cart from "./pages/Cart/Cart";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder";
import Footer from "./components/Footer/Footer";
import LoginPopup from "./components/LoginPopup/LoginPopup";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Verify from "./pages/Verify/Verify";
import ContactPage from "./pages/Contact/Contact";
import MyOrders from "./pages/MyOrders/MyOrders";
import MenuPage from "./pages/Menu/Menu";
import OffersPage from "./pages/Offer/OfferPage";
import ProductDetail from "./pages/ProductDetail/Productdetail";
import OrderPage from "./pages/Offer/Order";
import CategoryPage from "./pages/Offer/CategoryPage";

const AuthCallback = () => {
  const { setToken, setShowLogin } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const token = params.get("token");
    if (token) {
      console.log("Setting token in context:", token);
      setToken(token);
      localStorage.setItem("token", token);
      setShowLogin(false);
      navigate("/");
    } else {
      console.error("No token found in callback");
      navigate("/"); // Redirect to home or login page
    }
  }, [setToken, setShowLogin, navigate, location]);

  return <div className="text-center py-12">Processing login...</div>;
};

const App = () => {
  const { showLogin, setShowLogin } = useContext(StoreContext);
  const [category, setCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (query) => {
    setSearchQuery(query);
    setCategory("All"); // Reset category to show all matching products
  };

  return (
    <StoreContextProvider>
      {showLogin && <LoginPopup setShowLogin={setShowLogin} />}
      <div className="app">
        <ToastContainer />
        <Navbar setShowLogin={setShowLogin} />
        <Routes>
          <Route
            path="/"
            element={
              <Home
                category={category}
                setCategory={setCategory}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
                onSearch={handleSearch}
              />
            }
          />
          <Route
            path="/menu"
            element={<MenuPage searchQuery={searchQuery} />}
          />
          <Route path="/cart" element={<Cart />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/offers" element={<OffersPage />} />
          <Route path="/order" element={<PlaceOrder />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/category/:categoryName" element={<CategoryPage />} />
          <Route path="/verify" element={<Verify />} />
          <Route path="/myorders" element={<OrderPage />} />
          <Route path="/auth/callback" element={<AuthCallback />} />
        </Routes>
      </div>
      <Footer />
    </StoreContextProvider>
  );
};

export default App;