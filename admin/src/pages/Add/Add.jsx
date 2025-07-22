// import React, { useState } from "react";
// import "./Add.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { useContext } from "react";
// import { StoreContext } from "../../context/StoreContext";
// import { useEffect } from "react";
// import {useNavigate } from "react-router-dom";

// const Add = ({url}) => {
//   const navigate=useNavigate();
//   const {token,admin} = useContext(StoreContext);
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("image", image);

//     const response = await axios.post(`${url}/api/food/add`, formData,{headers:{token}});
//     if (response.data.success) {
//       setData({
//         name: "",
//         description: "",
//         price: "",
//         category: "Salad",
//       });
//       setImage(false);
//       toast.success(response.data.message);
//     } else {
//       toast.error(response.data.message);
//     }
//   };
//   useEffect(()=>{
//     if(!admin && !token){
//       toast.error("Please Login First");
//        navigate("/");
//     }
//   },[])
//   return (
//     <div className="add">
//       <form onSubmit={onSubmitHandler} className="flex-col">
//         <div className="add-img-upload flex-col">
//           <p>Upload image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
//             hidden
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type="text"
//             name="name"
//             placeholder="Type here"
//             required
//           />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             rows="6"
//             placeholder="Write content here"
//             required
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>Product category</p>
//             <select
//               name="category"
//               required
//               onChange={onChangeHandler}
//               value={data.category}
//             >
//               <option value="Salad">Salad</option>
//               <option value="Rolls">Rolls</option>
//               <option value="Deserts">Deserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Cake">Cake</option>
//               <option value="Pure Veg">Pure Veg</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Noodles">Noodles</option>
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type="Number"
//               name="price"
//               placeholder="$20"
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="add-btn">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;



// import React, { useState, useContext, useEffect } from "react";
// import "./Add.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Add = () => {
//   const navigate = useNavigate();
//   const { url, token, admin } = useContext(StoreContext);
//   const [image, setImage] = useState(false);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "Salad",
//   });

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     console.log("Submitting food data:", data, "Image:", image);
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     if (image) formData.append("image", image);

//     try {
//       const response = await axios.post(`${url}/api/food/add`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });
//       console.log("Add food response:", response.data);
//       if (response.data.success) {
//         setData({
//           name: "",
//           description: "",
//           price: "",
//           category: "Salad",
//         });
//         setImage(false);
//         toast.success(response.data.message, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Failed to add food", {
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
//       console.error("Add food error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error adding food", {
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

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login First", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     }
//   }, [admin, token, navigate]);

//   return (
//     <div className="add">
//       <form onSubmit={onSubmitHandler} className="flex-col">
//         <div className="add-img-upload flex-col">
//           <p>Upload image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
//             hidden
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type="text"
//             name="name"
//             placeholder="Type here"
//             required
//           />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             rows="6"
//             placeholder="Write content here"
//             required
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>Product category</p>
//             <select
//               name="category"
//               required
//               onChange={onChangeHandler}
//               value={data.category}
//             >
//               <option value="Salad">Salad</option>
//               <option value="Rolls">Rolls</option>
//               <option value="Deserts">Deserts</option>
//               <option value="Sandwich">Sandwich</option>
//               <option value="Cake">Cake</option>
//               <option value="Pure Veg">Pure Veg</option>
//               <option value="Pasta">Pasta</option>
//               <option value="Noodles">Noodles</option>
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type="Number"
//               name="price"
//               placeholder="$20"
//               required
//             />
//           </div>
//         </div>
//         <button type="submit" className="add-btn">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;









// import React, { useState, useContext, useEffect } from "react";
// import "./Add.css";
// import { assets } from "../../assets/assets";
// import axios from "axios";
// import { toast } from "react-toastify";
// import { StoreContext } from "../../context/StoreContext";
// import { useNavigate } from "react-router-dom";

// const Add = () => {
//   const navigate = useNavigate();
//   const { url, token, admin } = useContext(StoreContext);
//   const [image, setImage] = useState(false);
//   const [categories, setCategories] = useState([]);
//   const [data, setData] = useState({
//     name: "",
//     description: "",
//     price: "",
//     category: "",
//     isFeatured: false,
//     isPopular: false,
//   });

//   const fetchCategories = async () => {
//     try {
//       console.log("Fetching categories with URL:", `${url}/api/food/categories`);
//       const response = await axios.get(`${url}/api/food/categories`, {
//         headers: { Authorization: `Bearer ${token}` },
//         withCredentials: true,
//       });
//       console.log("Categories response:", response.data);
//       if (response.data.success) {
//         setCategories(response.data.data);
//         if (response.data.data.length > 0) {
//           setData((prev) => ({ ...prev, category: response.data.data[0] }));
//         }
//       } else {
//         toast.error(response.data.message || "Error fetching categories");
//       }
//     } catch (error) {
//       console.error("Fetch categories error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error fetching categories");
//     }
//   };

//   const onChangeHandler = (event) => {
//     const name = event.target.name;
//     const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
//     setData((data) => ({ ...data, [name]: value }));
//   };

//   const onSubmitHandler = async (event) => {
//     event.preventDefault();
//     console.log("Submitting food data:", data, "Image:", image);
//     const formData = new FormData();
//     formData.append("name", data.name);
//     formData.append("description", data.description);
//     formData.append("price", Number(data.price));
//     formData.append("category", data.category);
//     formData.append("isFeatured", data.isFeatured);
//     formData.append("isPopular", data.isPopular);
//     if (image) formData.append("image", image);

//     try {
//       const response = await axios.post(`${url}/api/food/add`, formData, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           "Content-Type": "multipart/form-data",
//         },
//         withCredentials: true,
//       });
//       console.log("Add food response:", response.data);
//       if (response.data.success) {
//         setData({
//           name: "",
//           description: "",
//           price: "",
//           category: categories[0] || "",
//           isFeatured: false,
//           isPopular: false,
//         });
//         setImage(false);
//         toast.success(response.data.message, {
//           position: "top-right",
//           autoClose: 3000,
//           hideProgressBar: false,
//           closeOnClick: true,
//           pauseOnHover: true,
//           draggable: true,
//           className: "success-toast",
//           style: { background: "#39e079", color: "#fff" },
//         });
//       } else {
//         toast.error(response.data.message || "Failed to add food", {
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
//       console.error("Add food error:", error.response?.data || error.message);
//       toast.error(error.response?.data?.message || "Error adding food", {
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

//   useEffect(() => {
//     if (!admin || !token) {
//       console.log("No admin or token, redirecting to /");
//       toast.error("Please Login First", {
//         position: "top-right",
//         autoClose: 3000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         className: "error-toast",
//         style: { background: "#ff4d4d", color: "#fff" },
//       });
//       navigate("/");
//     } else {
//       fetchCategories();
//     }
//   }, [admin, token, navigate]);

//   return (
//     <div className="add">
//       <form onSubmit={onSubmitHandler} className="flex-col">
//         <div className="add-img-upload flex-col">
//           <p>Upload image</p>
//           <label htmlFor="image">
//             <img
//               src={image ? URL.createObjectURL(image) : assets.upload_area}
//               alt=""
//             />
//           </label>
//           <input
//             onChange={(e) => setImage(e.target.files[0])}
//             type="file"
//             id="image"
//             hidden
//             required
//           />
//         </div>
//         <div className="add-product-name flex-col">
//           <p>Product name</p>
//           <input
//             onChange={onChangeHandler}
//             value={data.name}
//             type="text"
//             name="name"
//             placeholder="Type here"
//             required
//           />
//         </div>
//         <div className="add-product-description flex-col">
//           <p>Product description</p>
//           <textarea
//             onChange={onChangeHandler}
//             value={data.description}
//             name="description"
//             rows="6"
//             placeholder="Write content here"
//             required
//           ></textarea>
//         </div>
//         <div className="add-category-price">
//           <div className="add-category flex-col">
//             <p>Product category</p>
//             <select
//               name="category"
//               required
//               onChange={onChangeHandler}
//               value={data.category}
//             >
//               {categories.length === 0 ? (
//                 <option value="">No categories available</option>
//               ) : (
//                 categories.map((category, index) => (
//                   <option key={index} value={category}>
//                     {category}
//                   </option>
//                 ))
//               )}
//             </select>
//           </div>
//           <div className="add-price flex-col">
//             <p>Product price</p>
//             <input
//               onChange={onChangeHandler}
//               value={data.price}
//               type="number"
//               name="price"
//               placeholder="$20"
//               required
//             />
//           </div>
//         </div>
//         <div className="add-features flex-col">
//           <label>
//             <input
//               type="checkbox"
//               name="isFeatured"
//               checked={data.isFeatured}
//               onChange={onChangeHandler}
//             />
//             Featured
//           </label>
//           <label>
//             <input
//               type="checkbox"
//               name="isPopular"
//               checked={data.isPopular}
//               onChange={onChangeHandler}
//             />
//             Popular
//           </label>
//         </div>
//         <button type="submit" className="add-btn">
//           ADD
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Add;
















import React, { useState, useContext, useEffect } from "react";
import "./Add.css";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const { url, token, admin } = useContext(StoreContext);
  const [image, setImage] = useState(false);
  const [categories, setCategories] = useState([]);
  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "",
    isFeatured: false,
    isPopular: false,
  });

  const fetchCategories = async () => {
    try {
      console.log("Fetching categories with URL:", `${url}/api/food/categories`);
      const response = await axios.get(`${url}/api/food/categories`, {
        headers: { Authorization: `Bearer ${token}` },
        withCredentials: true,
      });
      console.log("Categories response:", response.data);
      if (response.data.success) {
        setCategories(response.data.data);
        if (response.data.data.length > 0) {
          setData((prev) => ({ ...prev, category: response.data.data[0] }));
        }
      } else {
        toast.error(response.data.message || "Error fetching categories");
      }
    } catch (error) {
      console.error("Fetch categories error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error fetching categories");
    }
  };

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    console.log("Submitting food data:", data, "Image:", image);
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("isFeatured", data.isFeatured);
    formData.append("isPopular", data.isPopular);
    if (image) formData.append("image", image);

    try {
      const response = await axios.post(`${url}/api/food/add`, formData, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "multipart/form-data",
        },
        withCredentials: true,
      });
      console.log("Add food response:", response.data);
      if (response.data.success) {
        setData({
          name: "",
          description: "",
          price: "",
          category: categories[0] || "",
          isFeatured: false,
          isPopular: false,
        });
        setImage(false);
        toast.success(response.data.message, {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          className: "success-toast",
          style: { background: "#39e079", color: "#fff" },
        });
      } else {
        toast.error(response.data.message || "Failed to add food", {
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
      console.error("Add food error:", error.response?.data || error.message);
      toast.error(error.response?.data?.message || "Error adding food", {
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
    if (!admin || !token) {
      console.log("No admin or token, redirecting to /");
      toast.error("Please Login First", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        className: "error-toast",
        style: { background: "#ff4d4d", color: "#fff" },
      });
      navigate("/");
    } else {
      fetchCategories();
    }
  }, [admin, token, navigate]);

  return (
    <div className="add">
      <div className="add-header">
        <h1>Add New Product</h1>
        <p>Create a new food item for your menu</p>
      </div>
      
      <form onSubmit={onSubmitHandler} className="add-form">
        <div className="image-upload">
          <label>Product Image</label>
          <div className="image-upload-area">
            <label htmlFor="image">
              <img
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt="Upload"
              />
            </label>
            <input
              onChange={(e) => setImage(e.target.files[0])}
              type="file"
              id="image"
              hidden
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Product Name</label>
            <input
              onChange={onChangeHandler}
              value={data.name}
              type="text"
              name="name"
              placeholder="Enter product name"
              required
            />
          </div>
          <div className="form-group">
            <label>Category</label>
            <select
              name="category"
              required
              onChange={onChangeHandler}
              value={data.category}
            >
              {categories.length === 0 ? (
                <option value="">No categories available</option>
              ) : (
                categories.map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))
              )}
            </select>
          </div>
        </div>

        <div className="form-row full-width">
          <div className="form-group">
            <label>Product Description</label>
            <textarea
              onChange={onChangeHandler}
              value={data.description}
              name="description"
              placeholder="Write product description here"
              required
            />
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Price ($)</label>
            <input
              onChange={onChangeHandler}
              value={data.price}
              type="number"
              name="price"
              placeholder="20"
              required
            />
          </div>
          <div className="form-group">
            <label>Product Features</label>
            <div className="checkbox-group">
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="isFeatured"
                  checked={data.isFeatured}
                  onChange={onChangeHandler}
                />
                <label>Featured</label>
              </div>
              <div className="checkbox-item">
                <input
                  type="checkbox"
                  name="isPopular"
                  checked={data.isPopular}
                  onChange={onChangeHandler}
                />
                <label>Popular</label>
              </div>
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn">
          Add Product
        </button>
      </form>
    </div>
  );
};

export default Add;
