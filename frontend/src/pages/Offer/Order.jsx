// import React, { useState } from 'react';
// import './Order.css';

// const OrderPage = () => {
//   const [activeTab, setActiveTab] = useState('current');
//   const [expandedOrder, setExpandedOrder] = useState(null);

//   // Sample order data
//   const orders = {
//     current: [
//       {
//         id: 1,
//         restaurant: 'Burger Palace',
//         status: 'Preparing',
//         items: [
//           { name: 'Classic Cheeseburger', quantity: 2, price: 8.99 },
//           { name: 'French Fries', quantity: 1, price: 3.49 }
//         ],
//         total: 21.47,
//         deliveryTime: '30-40 min',
//         orderTime: '12:30 PM',
//         address: '123 Main St, Apt 4B, New York, NY 10001'
//       }
//     ],
//     past: [
//       {
//         id: 2,
//         restaurant: 'Pizza Heaven',
//         status: 'Delivered',
//         items: [
//           { name: 'Margherita Pizza', quantity: 1, price: 12.99 },
//           { name: 'Garlic Bread', quantity: 1, price: 4.99 }
//         ],
//         total: 17.98,
//         orderTime: 'Jun 15, 2023 - 7:15 PM',
//         deliveryTime: '25 min'
//       },
//       {
//         id: 3,
//         restaurant: 'Sushi Express',
//         status: 'Delivered',
//         items: [
//           { name: 'California Roll', quantity: 2, price: 9.99 },
//           { name: 'Miso Soup', quantity: 1, price: 2.99 }
//         ],
//         total: 22.97,
//         orderTime: 'Jun 10, 2023 - 6:30 PM',
//         deliveryTime: '35 min'
//       }
//     ]
//   };

//   const toggleOrderExpand = (orderId) => {
//     setExpandedOrder(expandedOrder === orderId ? null : orderId);
//   };

//   const getStatusColor = (status) => {
//     switch (status.toLowerCase()) {
//       case 'preparing':
//         return '#FFA500'; // Orange
//       case 'delivered':
//         return '#4CAF50'; // Green
//       case 'cancelled':
//         return '#F44336'; // Red
//       default:
//         return '#2196F3'; // Blue
//     }
//   };

//   return (
//     <div className="foodie-order-page">
//       <header className="foodie-order-header">
//         <div className="foodie-header-content">
//           <div className="foodie-logo-container">
//             <div className="foodie-logo-icon">
//               <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
//                 <path
//                   d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
//                   fill="currentColor"
//                 ></path>
//               </svg>
//             </div>
//             <h2 className="foodie-logo-text">Foodie</h2>
//           </div>
          
//           <div className="foodie-header-actions">
//             <div className="foodie-search-container">
//               <div className="foodie-search-icon">
//                 <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
//                   <path
//                     d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
//                   ></path>
//                 </svg>
//               </div>
//               <input
//                 type="text"
//                 placeholder="Search orders..."
//                 className="foodie-search-input"
//               />
//             </div>
            
//             <button className="foodie-cart-button">
//               <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
//                 <path
//                   d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
//                 ></path>
//               </svg>
//             </button>
//           </div>
//         </div>
//       </header>

//       <main className="foodie-order-main">
//         <div className="foodie-order-container">
//           <div className="foodie-order-header-section">
//             <div className="foodie-order-title">
//               <h1 className="foodie-order-title-text">Your Orders</h1>
//               <p className="foodie-order-subtitle">Track and manage your food orders</p>
//             </div>
//           </div>

//           <div className="foodie-order-tabs">
//             <div className="foodie-tabs-container">
//               <button
//                 className={`foodie-tab-button ${activeTab === 'current' ? 'foodie-tab-active' : ''}`}
//                 onClick={() => setActiveTab('current')}
//               >
//                 Current Orders
//               </button>
//               <button
//                 className={`foodie-tab-button ${activeTab === 'past' ? 'foodie-tab-active' : ''}`}
//                 onClick={() => setActiveTab('past')}
//               >
//                 Past Orders
//               </button>
//             </div>
//           </div>

//           <div className="foodie-orders-list">
//             {orders[activeTab].length === 0 ? (
//               <div className="foodie-no-orders">
//                 <div className="foodie-empty-icon">
//                   <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#ccc" viewBox="0 0 256 256">
//                     <path d="M184,64H174.14L160.44,28.05A16,16,0,0,0,145.28,16H110.72a16,16,0,0,0-15.16,12.05L81.86,64H72a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V80h8a8,8,0,0,0,0-16ZM110.72,32h34.56l9.6,32H101.12ZM176,80v80H80V80Zm-16,80a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm-32,0a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Z"></path>
//                   </svg>
//                 </div>
//                 <h3>No {activeTab === 'current' ? 'current' : 'past'} orders</h3>
//                 <p>When you place an order, it will appear here</p>
//                 {activeTab === 'past' && (
//                   <button className="foodie-primary-button">Browse Restaurants</button>
//                 )}
//               </div>
//             ) : (
//               orders[activeTab].map(order => (
//                 <div 
//                   key={order.id} 
//                   className={`foodie-order-card ${expandedOrder === order.id ? 'foodie-order-expanded' : ''}`}
//                 >
//                   <div 
//                     className="foodie-order-summary"
//                     onClick={() => toggleOrderExpand(order.id)}
//                   >
//                     <div className="foodie-order-restaurant">
//                       <h3>{order.restaurant}</h3>
//                       <span 
//                         className="foodie-order-status"
//                         style={{ backgroundColor: getStatusColor(order.status) }}
//                       >
//                         {order.status}
//                       </span>
//                     </div>
//                     <div className="foodie-order-meta">
//                       <div className="foodie-order-time">
//                         <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 256 256">
//                           <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
//                         </svg>
//                         <span>{order.orderTime}</span>
//                       </div>
//                       <div className="foodie-order-total">
//                         <span>${order.total.toFixed(2)}</span>
//                         <svg 
//                           className={`foodie-order-arrow ${expandedOrder === order.id ? 'foodie-order-arrow-up' : ''}`}
//                           xmlns="http://www.w3.org/2000/svg" 
//                           width="16" 
//                           height="16" 
//                           fill="#666" 
//                           viewBox="0 0 256 256"
//                         >
//                           <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
//                         </svg>
//                       </div>
//                     </div>
//                   </div>

//                   {expandedOrder === order.id && (
//                     <div className="foodie-order-details">
//                       <div className="foodie-order-items">
//                         <h4>Order Items</h4>
//                         <ul>
//                           {order.items.map((item, index) => (
//                             <li key={index}>
//                               <span className="foodie-item-quantity">{item.quantity}x</span>
//                               <span className="foodie-item-name">{item.name}</span>
//                               <span className="foodie-item-price">${item.price.toFixed(2)}</span>
//                             </li>
//                           ))}
//                         </ul>
//                       </div>

//                       <div className="foodie-order-info">
//                         {order.deliveryTime && (
//                           <div className="foodie-info-row">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 256 256">
//                               <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H33.39a32,32,0,0,0,61.22,0h67.78a32,32,0,0,0,61.22,0H232a16,16,0,0,0,16-16V120A15.93,15.93,0,0,0,247.42,117ZM94.61,192a16,16,0,0,1-30.44,0H24V72H168v88H126.61A32,32,0,0,0,94.61,192Zm122.78,0a16,16,0,0,1-30.44,0H184V120h34.58l9.6,24ZM232,184H218.39a32,32,0,0,0-61.22,0H184V88h34.58L232,120.4Z"></path>
//                             </svg>
//                             <span>Estimated delivery: {order.deliveryTime}</span>
//                           </div>
//                         )}
//                         {order.address && (
//                           <div className="foodie-info-row">
//                             <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 256 256">
//                               <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,0,1,144,0C200,161.23,144.53,209,128,222Z"></path>
//                             </svg>
//                             <span>{order.address}</span>
//                           </div>
//                         )}
//                       </div>

//                       <div className="foodie-order-actions">
//                         {order.status === 'Preparing' && (
//                           <button className="foodie-secondary-button">Cancel Order</button>
//                         )}
//                         <button className="foodie-primary-button">Reorder</button>
//                       </div>
//                     </div>
//                   )}
//                 </div>
//               ))
//             )}
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default OrderPage;








import React, { useState, useEffect, useContext } from 'react';
import './Order.css';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';
import { toast } from 'react-toastify';

const OrderPage = () => {
  const { url, token, addToCart, food_list } = useContext(StoreContext);
  const [activeTab, setActiveTab] = useState('current');
  const [expandedOrder, setExpandedOrder] = useState(null);
  const [orders, setOrders] = useState({ current: [], past: [] });

  const fetchOrders = async () => {
    if (!token) {
      toast.error("Please login to view orders");
      return;
    }
    try {
      const response = await axios.post(
        `${url}/api/order/userorders`,
        {},
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );
      if (response.data.success) {
        const allOrders = response.data.data;
        const current = allOrders.filter(order => !['Delivered', 'Cancelled'].includes(order.status));
        const past = allOrders.filter(order => ['Delivered', 'Cancelled'].includes(order.status));
        setOrders({ current, past });
        console.log('Fetched orders:', { current, past });
      } else {
        toast.error(response.data.message || "Error fetching orders");
      }
    } catch (error) {
      console.error("Fetch orders error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching orders");
    }
  };

  const cancelOrder = async (orderId) => {
    try {
      const response = await axios.post(
        `${url}/api/order/cancel`,
        { orderId },
        { headers: { Authorization: `Bearer ${token}` }, withCredentials: true }
      );
      if (response.data.success) {
        toast.success("Order cancelled successfully");
        await fetchOrders(); // Refresh orders
      } else {
        toast.error(response.data.message || "Error cancelling order");
      }
    } catch (error) {
      console.error("Cancel order error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error cancelling order");
    }
  };

  const reorder = async (orderItems) => {
    try {
      for (const item of orderItems) {
        const foodItem = food_list.find(f => f.name === item.name && f.price === item.price);
        if (foodItem) {
          for (let i = 0; i < item.quantity; i++) {
            await addToCart(foodItem._id);
          }
        } else {
          toast.warn(`Item ${item.name} is no longer available`);
        }
      }
      toast.success("Items added to cart for reorder");
    } catch (error) {
      console.error("Reorder error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error reordering items");
    }
  };

  useEffect(() => {
    fetchOrders();
  }, [token]);

  const toggleOrderExpand = (orderId) => {
    setExpandedOrder(expandedOrder === orderId ? null : orderId);
  };

  const getStatusColor = (status) => {
    switch (status.toLowerCase()) {
      case 'food processing':
      case 'preparing':
        return '#FFA500'; // Orange
      case 'delivered':
        return '#4CAF50'; // Green
      case 'cancelled':
        return '#F44336'; // Red
      default:
        return '#2196F3'; // Blue
    }
  };

  const formatAddress = (address) => {
    if (!address) return 'N/A';
    const { firstName, lastName, street, city, state, zipcode, country } = address;
    return `${firstName} ${lastName}, ${street}, ${city}, ${state} ${zipcode}, ${country}`;
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true
    });
  };

  const estimateDeliveryTime = (status, date) => {
    if (['Delivered', 'Cancelled'].includes(status)) {
      return null; // No delivery time for past orders
    }
    return '30-40 min'; // Static estimate for current orders
  };

  return (
    <div className="foodie-order-page">
      {/* <header className="foodie-order-header">
        <div className="foodie-header-content">
          <div className="foodie-logo-container">
            <div className="foodie-logo-icon">
              <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M24 4C25.7818 14.2173 33.7827 22.2182 44 24C33.7827 25.7818 25.7818 33.7827 24 44C22.2182 33.7827 14.2173 25.7818 4 24C14.2173 22.2182 22.2182 14.2173 24 4Z"
                  fill="currentColor"
                ></path>
              </svg>
            </div>
            <h2 className="foodie-logo-text">Foodie</h2>
          </div>
          
          <div className="foodie-header-actions">
            <div className="foodie-search-container">
              <div className="foodie-search-icon">
                <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                  <path
                    d="M229.66,218.34l-50.07-50.06a88.11,88.11,0,1,0-11.31,11.31l50.06,50.07a8,8,0,0,0,11.32-11.32ZM40,112a72,72,0,1,1,72,72A72.08,72.08,0,0,1,40,112Z"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search orders..."
                className="foodie-search-input"
              />
            </div>
            
            <button className="foodie-cart-button">
              <svg xmlns="http://www.w3.org/2000/svg" width="20px" height="20px" fill="currentColor" viewBox="0 0 256 256">
                <path
                  d="M222.14,58.87A8,8,0,0,0,216,56H54.68L49.79,29.14A16,16,0,0,0,34.05,16H16a8,8,0,0,0,0,16h18L59.56,172.29a24,24,0,0,0,5.33,11.27,28,28,0,1,0,44.4,8.44h45.42A27.75,27.75,0,0,0,152,204a28,28,0,1,0,28-28H83.17a8,8,0,0,1-7.87-6.57L72.13,152h116a24,24,0,0,0,23.61-19.71l12.16-66.86A8,8,0,0,0,222.14,58.87ZM96,204a12,12,0,1,1-12-12A12,12,0,0,1,96,204Zm96,0a12,12,0,1,1-12-12A12,12,0,0,1,192,204Zm4-74.57A8,8,0,0,1,188.1,136H69.22L57.59,72H206.41Z"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </header> */}

      <main className="foodie-order-main">
        <div className="foodie-order-container">
          <div className="foodie-order-header-section">
            <div className="foodie-order-title">
              <h1 className="foodie-order-title-text">Your Orders</h1>
              <p className="foodie-order-subtitle">Track and manage your food orders</p>
            </div>
          </div>

          <div className="foodie-order-tabs">
            <div className="foodie-tabs-container">
              <button
                className={`foodie-tab-button ${activeTab === 'current' ? 'foodie-tab-active' : ''}`}
                onClick={() => setActiveTab('current')}
              >
                Current Orders
              </button>
              <button
                className={`foodie-tab-button ${activeTab === 'past' ? 'foodie-tab-active' : ''}`}
                onClick={() => setActiveTab('past')}
              >
                Past Orders
              </button>
            </div>
          </div>

          <div className="foodie-orders-list">
            {orders[activeTab].length === 0 ? (
              <div className="foodie-no-orders">
                <div className="foodie-empty-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" fill="#ccc" viewBox="0 0 256 256">
                    <path d="M184,64H174.14L160.44,28.05A16,16,0,0,0,145.28,16H110.72a16,16,0,0,0-15.16,12.05L81.86,64H72a8,8,0,0,0,0,16h8v80a16,16,0,0,0,16,16h64a16,16,0,0,0,16-16V80h8a8,8,0,0,0,0-16ZM110.72,32h34.56l9.6,32H101.12ZM176,80v80H80V80Zm-16,80a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm-32,0a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Z"></path>
                  </svg>
                </div>
                <h3>No {activeTab === 'current' ? 'current' : 'past'} orders</h3>
                <p>When you place an order, it will appear here</p>
                {activeTab === 'past' && (
                  <button className="foodie-primary-button" onClick={() => window.location.href = '/'}>
                    Browse Restaurants
                  </button>
                )}
              </div>
            ) : (
              orders[activeTab].map(order => (
                <div 
                  key={order._id} 
                  className={`foodie-order-card ${expandedOrder === order._id ? 'foodie-order-expanded' : ''}`}
                >
                  <div 
                    className="foodie-order-summary"
                    onClick={() => toggleOrderExpand(order._id)}
                  >
                    <div className="foodie-order-restaurant">
                      <h3>{order.items[0]?.name || 'Unknown Restaurant'}</h3>
                      <span 
                        className="foodie-order-status"
                        style={{ backgroundColor: getStatusColor(order.status) }}
                      >
                        {order.status}
                      </span>
                    </div>
                    <div className="foodie-order-meta">
                      <div className="foodie-order-time">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 256 256">
                          <path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216Zm64-88a8,8,0,0,1-8,8H128a8,8,0,0,1-8-8V72a8,8,0,0,1,16,0v48h48A8,8,0,0,1,192,128Z"></path>
                        </svg>
                        <span>{formatDate(order.date)}</span>
                      </div>
                      <div className="foodie-order-total">
                        <span>${order.amount.toFixed(2)}</span>
                        <svg 
                          className={`foodie-order-arrow ${expandedOrder === order._id ? 'foodie-order-arrow-up' : ''}`}
                          xmlns="http://www.w3.org/2000/svg" 
                          width="16" 
                          height="16" 
                          fill="#666" 
                          viewBox="0 0 256 256"
                        >
                          <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z"></path>
                        </svg>
                      </div>
                    </div>
                  </div>

                  {expandedOrder === order._id && (
                    <div className="foodie-order-details">
                      <div className="foodie-order-items">
                        <h4>Order Items</h4>
                        <ul>
                          {order.items.map((item, index) => (
                            <li key={index}>
                              <span className="foodie-item-quantity">{item.quantity}x</span>
                              <span className="foodie-item-name">{item.name}</span>
                              <span className="foodie-item-price">${item.price.toFixed(2)}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="foodie-order-info">
                        {estimateDeliveryTime(order.status, order.date) && (
                          <div className="foodie-info-row">
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 256 256">
                              <path d="M247.42,117l-14-35A15.93,15.93,0,0,0,218.58,72H184V64a8,8,0,0,0-8-8H24A16,16,0,0,0,8,72V184a16,16,0,0,0,16,16H33.39a32,32,0,0,0,61.22,0h67.78a32,32,0,0,0,61.22,0H232a16,16,0,0,0,16-16V120A15.93,15.93,0,0,0,247.42,117ZM94.61,192a16,16,0,0,1-30.44,0H24V72H168v88H126.61A32,32,0,0,0,94.61,192Zm122.78,0a16,16,0,0,1-30.44,0H184V120h34.58l9.6,24ZM232,184H218.39a32,32,0,0,0-61.22,0H184V88h34.58L232,120.4Z"></path>
                            </svg>
                            <span>Estimated delivery: {estimateDeliveryTime(order.status, order.date)}</span>
                          </div>
                        )}
                        <div className="foodie-info-row">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#666" viewBox="0 0 256 256">
                            <path d="M128,64a40,40,0,1,0,40,40A40,40,0,0,0,128,64Zm0,64a24,24,0,1,1,24-24A24,24,0,0,1,128,128Zm0-112a88.1,88.1,0,0,0-88,88c0,31.4,14.51,64.68,42,96.25a254.19,254.19,0,0,0,41.45,38.3,8,8,0,0,0,9.18,0A254.19,254.19,0,0,0,174,200.25c27.45-31.57,42-64.85,42-96.25A88.1,88.1,0,0,0,128,16Zm0,206c-16.53-13-72-60.75-72-118a72,72,0,1,1,144,0C200,161.23,144.53,209,128,222Z"></path>
                          </svg>
                          <span>{formatAddress(order.address)}</span>
                        </div>
                      </div>

                      <div className="foodie-order-actions">
                        {['Food Processing', 'Preparing'].includes(order.status) && (
                          <button
                            className="foodie-secondary-button"
                            onClick={() => cancelOrder(order._id)}
                          >
                            Cancel Order
                          </button>
                        )}
                        <button
                          className="foodie-primary-button"
                          onClick={() => reorder(order.items)}
                        >
                          Reorder
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrderPage;