// import React, { useContext, useEffect, useState } from "react";
// import "./PlaceOrder.css";
// import { StoreContext } from "../../context/StoreContext";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useNavigate } from 'react-router-dom';

// const PlaceOrder = () => {
//   const navigate = useNavigate();
//   const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
//   const [data, setData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     street: "",
//     city: "",
//     state: "",
//     zipcode: "",
//     country: "",
//     phone: "",
//   });
//   const [errors, setErrors] = useState({});

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: "" }));
//   };

//   const validateForm = () => {
//     const newErrors = {};
//     if (!data.firstName.trim()) newErrors.firstName = "First name is required";
//     if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
//     if (!data.email.trim()) {
//       newErrors.email = "Email is required";
//     } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
//       newErrors.email = "Invalid email format";
//     }
//     if (!data.street.trim()) newErrors.street = "Street is required";
//     if (!data.city.trim()) newErrors.city = "City is required";
//     if (!data.state.trim()) newErrors.state = "State is required";
//     if (!data.zipcode.trim()) {
//       newErrors.zipcode = "Zip code is required";
//     } else if (!/^\d{5}(-\d{4})?$/.test(data.zipcode)) {
//       newErrors.zipcode = "Invalid zip code format";
//     }
//     if (!data.country.trim()) newErrors.country = "Country is required";
//     if (!data.phone.trim()) {
//       newErrors.phone = "Phone number is required";
//     } else if (!/^\+?\d{10,15}$/.test(data.phone.replace(/\D/g, ""))) {
//       newErrors.phone = "Invalid phone number";
//     }
//     setErrors(newErrors);
//     return Object.keys(newErrors).length === 0;
//   };

//   const placeOrder = async (event) => {
//     event.preventDefault();
//     if (!validateForm()) {
//       toast.error("Please fill out all required fields correctly");
//       return;
//     }
//     let orderItems = [];
//     food_list.forEach((item) => {
//       if (cartItems[item._id] > 0) {
//         let itemInfo = { ...item, quantity: cartItems[item._id] };
//         orderItems.push(itemInfo);
//       }
//     });
//     if (orderItems.length === 0) {
//       toast.error("Cart is empty");
//       navigate("/cart");
//       return;
//     }
//     let orderData = {
//       address: data,
//       items: orderItems,
//       // amount: getTotalCartAmount() + 2,
//       amount: Math.round(getTotalCartAmount()) + 2,
//     };
//     try {
//       const response = await axios.post(
//         `${url}/api/order/place`,
//         orderData,
//         { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
//       );
//       if (response.data.success) {
//         const { session_url } = response.data;
//         window.location.replace(session_url);
//       } else {
//         toast.error(response.data.message || "Error placing order");
//       }
//     } catch (error) {
//       console.error("Place order error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error placing order");
//     }
//   };

//   useEffect(() => {
//     if (!token) {
//       toast.error("Please login first");
//       navigate("/cart");
//     } else if (getTotalCartAmount() === 0) {
//       toast.error("Please add items to cart");
//       navigate("/cart");
//     }
//   }, [token, getTotalCartAmount, navigate]);

//   return (
//     <form className="place-order-place-order" onSubmit={placeOrder}>
//       <div className="place-order-place-order-left">
//         <p className="place-order-title">Delivery Information</p>
//         <div className="place-order-multi-fields">
//           <div className="place-order-input-group">
//             <input
//               required
//               name="firstName"
//               value={data.firstName}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="First name"
//               className={`place-order-input ${errors.firstName ? "place-order-error" : ""}`}
//             />
//             {errors.firstName && <span className="place-order-error-message">{errors.firstName}</span>}
//           </div>
//           <div className="place-order-input-group">
//             <input
//               required
//               name="lastName"
//               value={data.lastName}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Last name"
//               className={`place-order-input ${errors.lastName ? "place-order-error" : ""}`}
//             />
//             {errors.lastName && <span className="place-order-error-message">{errors.lastName}</span>}
//           </div>
//         </div>
//         <div className="place-order-input-group">
//           <input
//             required
//             name="email"
//             value={data.email}
//             onChange={onChangeHandler}
//             type="email"
//             placeholder="Email Address"
//             className={`place-order-input ${errors.email ? "place-order-error" : ""}`}
//           />
//           {errors.email && <span className="place-order-error-message">{errors.email}</span>}
//         </div>
//         <div className="place-order-input-group">
//           <input
//             required
//             name="street"
//             value={data.street}
//             onChange={onChangeHandler}
//             type="text"
//             placeholder="Street"
//             className={`place-order-input ${errors.street ? "place-order-error" : ""}`}
//           />
//           {errors.street && <span className="place-order-error-message">{errors.street}</span>}
//         </div>
//         <div className="place-order-multi-fields">
//           <div className="place-order-input-group">
//             <input
//               required
//               name="city"
//               value={data.city}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="City"
//               className={`place-order-input ${errors.city ? "place-order-error" : ""}`}
//             />
//             {errors.city && <span className="place-order-error-message">{errors.city}</span>}
//           </div>
//           <div className="place-order-input-group">
//             <input
//               required
//               name="state"
//               value={data.state}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="State"
//               className={`place-order-input ${errors.state ? "place-order-error" : ""}`}
//             />
//             {errors.state && <span className="place-order-error-message">{errors.state}</span>}
//           </div>
//         </div>
//         <div className="place-order-multi-fields">
//           <div className="place-order-input-group">
//             <input
//               required
//               name="zipcode"
//               value={data.zipcode}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Zip Code"
//               className={`place-order-input ${errors.zipcode ? "place-order-error" : ""}`}
//             />
//             {errors.zipcode && <span className="place-order-error-message">{errors.zipcode}</span>}
//           </div>
//           <div className="place-order-input-group">
//             <input
//               required
//               name="country"
//               value={data.country}
//               onChange={onChangeHandler}
//               type="text"
//               placeholder="Country"
//               className={`place-order-input ${errors.country ? "place-order-error" : ""}`}
//             />
//             {errors.country && <span className="place-order-error-message">{errors.country}</span>}
//           </div>
//         </div>
//         <div className="place-order-input-group">
//           <input
//             required
//             name="phone"
//             value={data.phone}
//             onChange={onChangeHandler}
//             type="text"
//             placeholder="Phone"
//             className={`place-order-input ${errors.phone ? "place-order-error" : ""}`}
//           />
//           {errors.phone && <span className="place-order-error-message">{errors.phone}</span>}
//         </div>
//       </div>
//       <div className="place-order-place-order-right">
//         <div className="place-order-cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             {/* <div className="place-order-cart-total-details">
//               <p>Subtotal</p>
//               <p>${getTotalCartAmount()}</p>
//             </div> */}

//             <div className="place-order-cart-total-details">
//         <p>Subtotal</p>
//         <p>${Math.round(getTotalCartAmount())}</p>
//       </div>

//             <hr />
//             <div className="place-order-cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
//             </div>
//             <hr />
//             {/* <div className="place-order-cart-total-details">
//               <b>Total</b>
//               <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
//             </div> */}
//                <div className="place-order-cart-total-details">
//         <b>Total: </b>
//         <b>${getTotalCartAmount() === 0 ? 0 : Math.round(getTotalCartAmount()) + 2}</b>
//       </div>
//           </div>
//           <button type="submit" className="place-order-button">PROCEED TO PAYMENT</button>
//         </div>
//       </div>
//     </form>
//   );
// };

// export default PlaceOrder;




import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { StoreContext } from "../../context/StoreContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from 'react-router-dom';

const PlaceOrder = () => {
  const navigate = useNavigate();
  const { getTotalCartAmount, token, food_list, cartItems, url } = useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: "",
  });
  const [errors, setErrors] = useState({});

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!data.firstName.trim()) newErrors.firstName = "First name is required";
    if (!data.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!data.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(data.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!data.street.trim()) newErrors.street = "Street is required";
    if (!data.city.trim()) newErrors.city = "City is required";
    if (!data.state.trim()) newErrors.state = "State is required";
    if (!data.zipcode.trim()) {
      newErrors.zipcode = "Zip code is required";
    } else if (!/^\d{5}(-\d{4})?$/.test(data.zipcode)) {
      newErrors.zipcode = "Invalid zip code format";
    }
    if (!data.country.trim()) newErrors.country = "Country is required";
    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required";
    } else if (!/^\+?\d{10,15}$/.test(data.phone.replace(/\D/g, ""))) {
      newErrors.phone = "Invalid phone number";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const placeOrder = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      toast.error("Please fill out all required fields correctly");
      return;
    }

    let orderItems = [];
    food_list.forEach((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = { ...item, quantity: cartItems[item._id] };
        orderItems.push(itemInfo);
      }
    });

    if (orderItems.length === 0) {
      toast.error("Cart is empty");
      navigate("/cart");
      return;
    }

    let orderData = {
      address: data,
      items: orderItems,
      amount: Math.round(getTotalCartAmount()) + 2,
    };

    try {
      const response = await axios.post(
        `${url}/api/order/place`,
        orderData,
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );

      if (response.data.success) {
        toast.success("Order placed successfully! 📞");
        setTimeout(() => {
          alert("Thank you! You’ll receive a confirmation call shortly to verify your order.");
          navigate("/myorders");
        }, 300);
      } else {
        toast.error(response.data.message || "Error placing order");
      }
    } catch (error) {
      console.error("Place order error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error placing order");
    }
  };

  useEffect(() => {
    if (!token) {
      toast.error("Please login first");
      navigate("/cart");
    } else if (getTotalCartAmount() === 0) {
      toast.error("Please add items to cart");
      navigate("/cart");
    }
  }, [token, getTotalCartAmount, navigate]);

  return (
    <form className="place-order-place-order" onSubmit={placeOrder}>
         <div className="place-order-place-order-left">
     <p className="place-order-title">Delivery Information</p>
         <div className="place-order-multi-fields">
           <div className="place-order-input-group">
             <input
              required
              name="firstName"
              value={data.firstName}
              onChange={onChangeHandler}
              type="text"
              placeholder="First name"
              className={`place-order-input ${errors.firstName ? "place-order-error" : ""}`}
            />
            {errors.firstName && <span className="place-order-error-message">{errors.firstName}</span>}
          </div>
          <div className="place-order-input-group">
            <input
              required
              name="lastName"
              value={data.lastName}
              onChange={onChangeHandler}
              type="text"
              placeholder="Last name"
              className={`place-order-input ${errors.lastName ? "place-order-error" : ""}`}
            />
            {errors.lastName && <span className="place-order-error-message">{errors.lastName}</span>}
          </div>
        </div>
        <div className="place-order-input-group">
          <input
            required
            name="email"
            value={data.email}
            onChange={onChangeHandler}
            type="email"
            placeholder="Email Address"
            className={`place-order-input ${errors.email ? "place-order-error" : ""}`}
          />
          {errors.email && <span className="place-order-error-message">{errors.email}</span>}
        </div>
        <div className="place-order-input-group">
          <input
            required
            name="street"
            value={data.street}
            onChange={onChangeHandler}
            type="text"
            placeholder="Street"
            className={`place-order-input ${errors.street ? "place-order-error" : ""}`}
          />
          {errors.street && <span className="place-order-error-message">{errors.street}</span>}
        </div>
        <div className="place-order-multi-fields">
          <div className="place-order-input-group">
            <input
              required
              name="city"
              value={data.city}
              onChange={onChangeHandler}
              type="text"
              placeholder="City"
              className={`place-order-input ${errors.city ? "place-order-error" : ""}`}
            />
            {errors.city && <span className="place-order-error-message">{errors.city}</span>}
          </div>
          <div className="place-order-input-group">
            <input
              required
              name="state"
              value={data.state}
              onChange={onChangeHandler}
              type="text"
              placeholder="State"
              className={`place-order-input ${errors.state ? "place-order-error" : ""}`}
            />
            {errors.state && <span className="place-order-error-message">{errors.state}</span>}
          </div>
        </div>
        <div className="place-order-multi-fields">
          <div className="place-order-input-group">
            <input
              required
              name="zipcode"
              value={data.zipcode}
              onChange={onChangeHandler}
              type="text"
              placeholder="Zip Code"
              className={`place-order-input ${errors.zipcode ? "place-order-error" : ""}`}
            />
            {errors.zipcode && <span className="place-order-error-message">{errors.zipcode}</span>}
          </div>
          <div className="place-order-input-group">
            <input
              required
              name="country"
              value={data.country}
              onChange={onChangeHandler}
              type="text"
              placeholder="Country"
              className={`place-order-input ${errors.country ? "place-order-error" : ""}`}
            />
            {errors.country && <span className="place-order-error-message">{errors.country}</span>}
          </div>
        </div>
        <div className="place-order-input-group">
          <input
            required
            name="phone"
            value={data.phone}
            onChange={onChangeHandler}
            type="text"
            placeholder="Phone"
            className={`place-order-input ${errors.phone ? "place-order-error" : ""}`}
          />
          {errors.phone && <span className="place-order-error-message">{errors.phone}</span>}
        </div>
      </div>

      <div className="place-order-place-order-right">
        <div className="place-order-cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="place-order-cart-total-details">
              <p>Subtotal</p>
              <p>${Math.round(getTotalCartAmount())}</p>
            </div>
            <hr />
            <div className="place-order-cart-total-details">
              <p>Delivery Fee</p>
              <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="place-order-cart-total-details">
              <b>Total: </b>
              <b>${getTotalCartAmount() === 0 ? 0 : Math.round(getTotalCartAmount()) + 2}</b>
            </div>
          </div>
          <button type="submit" className="place-order-button">CONFIRM ORDER</button>
        </div>
      </div>
    </form>
  );
};

export default PlaceOrder;
