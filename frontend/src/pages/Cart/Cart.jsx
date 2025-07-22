// import React, { useContext } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url
//   } = useContext(StoreContext);

//   const navigate=useNavigate();

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <p>Items</p>
//           <p>Title</p>
//           <p>Price</p>
//           <p>Quantity</p>
//           <p>Total</p>
//           <p>Remove</p>
//         </div>
//         <br />
//         <hr />
//         {food_list.map((item, index) => {
//           if (cartItems[item._id] > 0) {
//             return (
//               <div>
//                 <div className="cart-items-title cart-items-item">
//                   <img src={url+"/images/"+item.image} alt="" />
//                   <p>{item.name}</p>
//                   <p>${item.price}</p>
//                   <p>{cartItems[item._id]}</p>
//                   <p>${item.price * cartItems[item._id]}</p>
//                   <p onClick={() => removeFromCart(item._id)} className="cross">
//                     x
//                   </p>
//                 </div>
//                 <hr />
//               </div>
//             );
//           }
//         })}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div>
//             <div className="cart-total-details">
//               <p>Subtotals</p>
//               <p>${getTotalCartAmount()}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <p>Delivery Fee</p>
//               <p>${getTotalCartAmount()===0?0:2}</p>
//             </div>
//             <hr />
//             <div className="cart-total-details">
//               <b>Total</b>
//               <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+2}</b>
//             </div>
//           </div>
//           <button onClick={()=>navigate('/order')}>PROCEED TO CHECKOUT</button>
//         </div>
//         <div className="cart-promocode">
//           <div>
//             <p>If you have a promocode, Enter it here</p>
//             <div className="cart-promocode-input">
//               <input type="text" placeholder="promo code" />
//               <button>Submit</button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;


// import React, { useContext } from "react";
// import "./Cart.css";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Cart = () => {
//   const {
//     food_list,
//     cartItems,
//     setCartItems,
//     addToCart,
//     removeFromCart,
//     getTotalCartAmount,
//     url,
//   } = useContext(StoreContext);
//   const navigate = useNavigate();

//   return (
//     <div className="cart">
//       <div className="cart-items">
//         <div className="cart-items-title">
//           <span>Image</span>
//           <span>Title</span>
//           <span>Price</span>
//           <span>Quantity</span>
//           <span>Total</span>
//           <span>Remove</span>
//         </div>
//         <hr className="divider" />
//         {food_list
//           .filter((item) => cartItems[item._id] > 0)
//           .map((item, index) => (
//             <div key={index}>
//               <div className="cart-item">
//                 <img
//                   src={`${url}/images/${item.image}`}
//                   alt={item.name}
//                   className="cart-item-image"
//                 />
//                 <span className="cart-item-name">{item.name}</span>
//                 <span className="cart-item-price">${item.price}</span>
//                 <div className="cart-item-quantity">
//                   <button
//                     onClick={() => removeFromCart(item._id)}
//                     className="quantity-btn minus"
//                   >
//                     -
//                   </button>
//                   <span>{cartItems[item._id]}</span>
//                   <button
//                     onClick={() => addToCart(item._id)}
//                     className="quantity-btn plus"
//                   >
//                     +
//                   </button>
//                 </div>
//                 <span className="cart-item-total">${item.price * cartItems[item._id]}</span>
//                 <span
//                   onClick={() => {
//                     setCartItems((prev) => {
//                       const newCart = { ...prev };
//                       delete newCart[item._id];
//                       return newCart;
//                     });
//                   }}
//                   className="cart-item-remove"
//                 >
//                   x
//                 </span>
//               </div>
//               <hr className="divider" />
//             </div>
//           ))}
//       </div>
//       <div className="cart-bottom">
//         <div className="cart-total">
//           <h2>Cart Totals</h2>
//           <div className="cart-total-details">
//             <span>Subtotal</span>
//             <span>${getTotalCartAmount()}</span>
//           </div>
//           <hr className="divider" />
//           <div className="cart-total-details">
//             <span>Delivery Fee</span>
//             <span>${getTotalCartAmount() === 0 ? 0 : 2}</span>
//           </div>
//           <hr className="divider" />
//           <div className="cart-total-details total">
//             <strong>Total</strong>
//             <strong>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</strong>
//           </div>
//           <button
//             onClick={() => navigate("/order")}
//             className="checkout-btn"
//           >
//             PROCEED TO CHECKOUT
//           </button>
//         </div>
//         <div className="cart-promocode">
//           <p>If you have a promo code, enter it here</p>
//           <div className="promocode-input">
//             <input type="text" placeholder="Promo code" />
//             <button className="promocode-btn">Submit</button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Cart;




















import React, { useContext } from "react";
import "./Cart.css";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {
    food_list,
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getTotalCartAmount,
    offers,
    url,
    isLoading,
  } = useContext(StoreContext);
  const navigate = useNavigate();

  // Function to get discounted price for an item
  const getItemPrice = (item) => {
    const validOffer = offers.find(
      (offer) =>
        (offer.targetProduct === item._id ||
         (item.category && offer.targetCategory === item.category)) &&
        (!offer.expiry || new Date(offer.expiry) >= new Date())
    );
    return validOffer
      ? (item.price * (1 - validOffer.discount / 100)).toFixed(2)
      : item.price.toFixed(2);
  };

  if (isLoading) {
    return <div className="text-center py-12">Loading cart...</div>;
  }

  if (!food_list.length || !Object.keys(cartItems).length) {
    return <div className="text-center py-12">Your cart is empty</div>;
  }

  return (
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title">
          <span>Image</span>
          <span>Title</span>
          <span>Price</span>
          <span>Quantity</span>
          <span>Total</span>
          <span>Remove</span>
        </div>
        <hr className="divider" />
        {food_list
          .filter((item) => cartItems[item._id] > 0)
          .map((item, index) => {
            const discountedPrice = getItemPrice(item);
            const originalPrice = item.price.toFixed(2);
            const isDiscounted = parseFloat(discountedPrice) < parseFloat(originalPrice);

            return (
              <div key={index}>
                <div className="cart-item">
                  <img
                    src={`${url}/images/${item.image}`}
                    alt={item.name}
                    className="cart-item-image"
                  />
                  <span className="cart-item-name">{item.name}</span>
                  <span className="cart-item-price">
                    {isDiscounted ? (
                      <>
                        <span
                          style={{ textDecoration: "line-through", color: "#888" }}
                        >
                          ${originalPrice}
                        </span>
                        <span
                          style={{ color: "#e74c3c", fontWeight: "bold", marginLeft: "8px" }}
                        >
                          ${discountedPrice}
                        </span>
                      </>
                    ) : (
                      <span>${originalPrice}</span>
                    )}
                  </span>
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => removeFromCart(item._id)}
                      className="quantity-btn minus"
                    >
                      -
                    </button>
                    <span>{cartItems[item._id]}</span>
                    <button
                      onClick={() => addToCart(item._id)}
                      className="quantity-btn plus"
                    >
                      +
                    </button>
                  </div>
                  <span className="cart-item-total">
                    ${(discountedPrice * cartItems[item._id]).toFixed(2)}
                  </span>
                  <span
                    onClick={() => {
                      setCartItems((prev) => {
                        const newCart = { ...prev };
                        delete newCart[item._id];
                        return newCart;
                      });
                    }}
                    className="cart-item-remove"
                  >
                    x
                  </span>
                </div>
                <hr className="divider" />
              </div>
            );
          })}
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <span>Subtotal</span>
            <span>${getTotalCartAmount()}</span>
          </div>
          <hr className="divider" />
          <div className="cart-total-details">
            <span>Delivery Fee</span>
            <span>${getTotalCartAmount() === 0 ? 0 : 2}</span>
          </div>
          <hr className="divider" />
          <div className="cart-total-details total">
            <strong>Total</strong>
            <strong>
              ${(parseFloat(getTotalCartAmount()) + (getTotalCartAmount() === 0 ? 0 : 2)).toFixed(2)}
            </strong>
          </div>
          <button
            onClick={() => navigate("/order")}
            className="checkout-btn"
          >
            PROCEED TO CHECKOUT
          </button>
        </div>
        <div className="cart-promocode">
          <p>If you have a promo code, enter it here</p>
          <div className="promocode-input">
            <input type="text" placeholder="Promo code" />
            <button className="promocode-btn">Submit</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;