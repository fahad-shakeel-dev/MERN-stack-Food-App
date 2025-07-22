// import React from 'react'
// import './Sidebar.css'
// import { assets } from '../../assets/assets'
// import { NavLink } from 'react-router-dom'

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <div className="sidebar-options">
//         <NavLink to='add' className="sidebar-option">
//           <img src={assets.add_icon} alt="" />
//           <p>Add Items</p>
//         </NavLink>
//         <NavLink to='list' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>List Items</p>
//         </NavLink>
//         <NavLink to='orders' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Orders</p>
//         </NavLink>
//       </div>
//     </div>
//   )
// }

// export default Sidebar



// import React from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <div className="sidebar-options">
//         <NavLink to='add' className="sidebar-option">
//           <img src={assets.add_icon} alt="" />
//           <p>Add Items</p>
//         </NavLink>
//         <NavLink to='list' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>List Items</p>
//         </NavLink>
//         <NavLink to='categories' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Categories</p>
//         </NavLink>
//         <NavLink to='orders' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Orders</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





// import React from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <div className="sidebar-options">
//         <NavLink to='add' className="sidebar-option">
//           <img src={assets.add_icon} alt="" />
//           <p>Add Items</p>
//         </NavLink>
//         <NavLink to='list' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>List Items</p>
//         </NavLink>
//         <NavLink to='categories' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Categories</p>
//         </NavLink>
//         <NavLink to='orders' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Orders</p>
//         </NavLink>
//         <NavLink to='offers' className="sidebar-option">
//           <img src={assets.offer_icon} alt="" /> {/* Assume offer_icon exists in assets */}
//           <p>Offers</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;







// import React from 'react';
// import './Sidebar.css';
// import { assets } from '../../assets/assets';
// import { NavLink } from 'react-router-dom';

// const Sidebar = () => {
//   return (
//     <div className='sidebar'>
//       <div className="sidebar-options">
//         <NavLink to='add' className="sidebar-option">
//           <img src={assets.add_icon} alt="" />
//           <p>Add Items</p>
//         </NavLink>
//         <NavLink to='list' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>List Items</p>
//         </NavLink>
//         <NavLink to='categories' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Categories</p>
//         </NavLink>
//         <NavLink to='orders' className="sidebar-option">
//           <img src={assets.order_icon} alt="" />
//           <p>Orders</p>
//         </NavLink>
//         <NavLink to='offers' className="sidebar-option">
//           <img src={assets.offer_icon} alt="" />
//           <p>Offers</p>
//         </NavLink>
//         <NavLink to='contacts' className="sidebar-option">
//           <img src={assets.contact_icon} alt="" />
//           <p>Contact Queries</p>
//         </NavLink>
//       </div>
//     </div>
//   );
// };

// export default Sidebar;





// import "./Sidebar.css"
// import { assets } from "../../assets/assets"
// import { NavLink } from "react-router-dom"

// const Sidebar = () => {
//   return (
//     <div className="sidebar">
//       <div className="sidebar-header">
//         <h2>Admin Panel</h2>
//       </div>
//       <div className="sidebar-options">
//         <NavLink to="add" className="sidebar-option">
//           <img src={assets.add_icon || "/placeholder.svg"} alt="" />
//           <p>Add Items</p>
//         </NavLink>
//         <NavLink to="list" className="sidebar-option">
//           <img src={assets.order_icon || "/placeholder.svg"} alt="" />
//           <p>Products</p>
//         </NavLink>
//         <NavLink to="categories" className="sidebar-option">
//           <img src={assets.order_icon || "/placeholder.svg"} alt="" />
//           <p>Categories</p>
//         </NavLink>
//         <NavLink to="orders" className="sidebar-option">
//           <img src={assets.order_icon || "/placeholder.svg"} alt="" />
//           <p>Orders</p>
//         </NavLink>
//         <NavLink to="offers" className="sidebar-option">
//           <img src={assets.offer_icon || "/placeholder.svg"} alt="" />
//           <p>Offers</p>
//         </NavLink>
//         <NavLink to="contacts" className="sidebar-option">
//           <img src={assets.contact_icon || "/placeholder.svg"} alt="" />
//           <p>Contact Queries</p>
//         </NavLink>
//       </div>
//     </div>
//   )
// }

// export default Sidebar













// import { useState } from "react";
// import "./Sidebar.css";
// import { assets } from "../../assets/assets";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button
//         className="sidebar-toggle"
//         onClick={toggleSidebar}
//         aria-label="Toggle Sidebar"
//       >
//         <svg
//           className="hamburger-icon"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </button>
//       <div className={`sidebar ${isOpen ? "mobile-open" : ""}`}>
//         <div className="sidebar-header">
//           <h2>Admin Panel</h2>
//         </div>
//         <div className="sidebar-options">
//           <NavLink
//             to="add"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.add_icon || "/placeholder.svg"} alt="Add Items" />
//             <p>Add Items</p>
//           </NavLink>
//           <NavLink
//             to="list"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.order_icon || "/placeholder.svg"} alt="Products" />
//             <p>Products</p>
//           </NavLink>
//           <NavLink
//             to="categories"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img
//               src={assets.order_icon || "/placeholder.svg"}
//               alt="Categories"
//             />
//             <p>Categories</p>
//           </NavLink>
//           <NavLink
//             to="orders"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.order_icon || "/placeholder.svg"} alt="Orders" />
//             <p>Orders</p>
//           </NavLink>
//           <NavLink
//             to="offers"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.offer_icon || "/placeholder.svg"} alt="Offers" />
//             <p>Offers</p>
//           </NavLink>
//           <NavLink
//             to="contacts"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img
//               src={assets.contact_icon || "/placeholder.svg"}
//               alt="Contact Queries"
//             />
//             <p>Contact Queries</p>
//           </NavLink>
//         </div>
//       </div>
//       {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
//     </>
//   );
// };

// export default Sidebar;














// import { useState } from "react";
// import "./Sidebar.css";
// import { assets } from "../../assets/assets";
// import { NavLink } from "react-router-dom";

// const Sidebar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const toggleSidebar = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button
//         className="sidebar-toggle"
//         onClick={toggleSidebar}
//         aria-label="Toggle Sidebar"
//       >
//         <svg
//           className="hamburger-icon"
//           fill="none"
//           stroke="currentColor"
//           viewBox="0 0 24 24"
//           xmlns="http://www.w3.org/2000/svg"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M4 6h16M4 12h16m-7 6h7"
//           ></path>
//         </svg>
//       </button>
//       <div className={`sidebar ${isOpen ? "mobile-open" : ""}`}>
//         <div className="sidebar-header">
//           <h2>Admin Panel</h2>
//         </div>
//         <div className="sidebar-options">
//           <NavLink
//             to="add"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.add_icon || "/placeholder.svg"} alt="Add Items" />
//             <p>Add Items</p>
//           </NavLink>
//           <NavLink
//             to="list"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.order_icon || "/placeholder.svg"} alt="Products" />
//             <p>Products</p>
//           </NavLink>
//           <NavLink
//             to="categories"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img
//               src={assets.order_icon || "/placeholder.svg"}
//               alt="Categories"
//             />
//             <p>Categories</p>
//           </NavLink>
//           <NavLink
//             to="orders"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.order_icon || "/placeholder.svg"} alt="Orders" />
//             <p>Orders</p>
//           </NavLink>
//           <NavLink
//             to="offers"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img src={assets.offer_icon || "/placeholder.svg"} alt="Offers" />
//             <p>Offers</p>
//           </NavLink>
//           <NavLink
//             to="contacts"
//             className="sidebar-option"
//             onClick={() => setIsOpen(false)}
//           >
//             <img
//               src={assets.contact_icon || "/placeholder.svg"}
//               alt="Contact Queries"
//             />
//             <p>Contact Queries</p>
//           </NavLink>
//         </div>
//       </div>
//       {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
//     </>
//   );
// };

// export default Sidebar;











import { useState } from "react";
import "./Sidebar.css";
import { NavLink } from "react-router-dom";
import { FaPlusCircle, FaListAlt, FaTag, FaShoppingBag, FaGift, FaEnvelope, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <button
        className="sidebar-toggle"
        onClick={toggleSidebar}
        aria-label="Toggle Sidebar"
      >
        {isOpen ? (
          <FaTimes className="sidebar-toggle-icon" size={24} />
        ) : (
          <FaBars className="sidebar-toggle-icon"  size={24} />
        )}
      </button>
      <div className={`sidebar ${isOpen ? "mobile-open" : ""}`}>
        <div className="sidebar-header">
          <h2>Admin Panel</h2>
        </div>
        <div className="sidebar-options">
          <NavLink
            to="add"
            className="sidebar-option"
            onClick={() => setIsOpen(false)}
          >
            <FaPlusCircle className="sidebar-option-icon" size={20} />
            <p>Add Items</p>
          </NavLink>
          <NavLink
            to="list"
            className="sidebar-option"
            onClick={() => setIsOpen(false)}
          >
            <FaListAlt className="sidebar-option-icon" size={20} />
            <p>Products</p>
          </NavLink>
          <NavLink
            to="categories"
            className="sidebar-option"
            onClick={() => setIsOpen(false)}
          >
            <FaTag className="sidebar-option-icon" size={20} />
            <p>Categories</p>
          </NavLink>
          <NavLink
            to="orders"
            className="sidebar-option"
            onClick={() => setIsOpen(false)}
          >
            <FaShoppingBag className="sidebar-option-icon" size={20} />
            <p>Orders</p>
          </NavLink>
          <NavLink
            to="offers"
            className="sidebar-option"
            onClick={() => setIsOpen(false)}
          >
            <FaGift className="sidebar-option-icon" size={20} />
            <p>Offers</p>
          </NavLink>
          <NavLink
            to="contacts"
            className="sidebar-option"
            onClick={() => setIsOpen(false)}
          >
            <FaEnvelope className="sidebar-option-icon" size={20} />
            <p>Contact Queries</p>
          </NavLink>
        </div>
      </div>
      {isOpen && <div className="sidebar-backdrop" onClick={toggleSidebar}></div>}
    </>
  );
};

export default Sidebar;